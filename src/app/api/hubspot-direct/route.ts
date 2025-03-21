import { NextRequest, NextResponse } from "next/server";

type HubspotDirectFormData = {
    firstName?: string;
    lastName?: string;
    email: string;
    phone?: string;
    subject?: string;
    message?: string;
    formType: string;
    source?: string;
    recaptchaToken?: string;
};

// Функция для проверки reCAPTCHA
async function verifyRecaptcha(token: string): Promise<boolean> {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    
    if (!secretKey) {
        console.error("RECAPTCHA_SECRET_KEY is not defined");
        return false;
    }

    try {
        const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `secret=${secretKey}&response=${token}`,
        });

        const data = await response.json();
        return data.success;
    } catch (error) {
        console.error('reCAPTCHA verification error:', error);
        return false;
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { 
            firstName, 
            lastName, 
            email, 
            phone, 
            subject, 
            message, 
            formType, 
            source = 'website',
            recaptchaToken 
        } = body as HubspotDirectFormData;
        
        // Проверяем обязательные поля
        if (!email || !formType) {
            return NextResponse.json(
                { success: false, error: 'Email and form type are required' },
                { status: 400 }
            );
        }

        // Проверяем reCAPTCHA, если токен предоставлен
        if (!recaptchaToken) {
            return NextResponse.json({ 
                success: false, 
                error: 'reCAPTCHA verification failed', 
                recaptchaFailed: true 
            }, { status: 400 });
        }

        const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
        
        if (!isValidRecaptcha) {
            return NextResponse.json({ 
                success: false, 
                error: 'reCAPTCHA verification failed', 
                recaptchaFailed: true 
            }, { status: 400 });
        }

        // Получаем ID портала и форм из переменных окружения
        const hubspotKey = process.env.HUBSPOT_ACCESS_TOKEN;
        const portalId = process.env.NEXT_HUBSPOT_PORTAL_ID;
        let formId;

        if (formType === 'newsletter') {
            formId = process.env.NEXT_HUBSPOT_NEWSLETTER_FORM_ID;
        } else if (formType === 'contact') {
            formId = process.env.NEXT_HUBSPOT_CONTACT_FORM_ID;
        } else {
            return NextResponse.json(
                { success: false, error: 'Invalid form type' },
                { status: 400 }
            );
        }

        if (!hubspotKey || !portalId || !formId) {
            return NextResponse.json(
                { success: false, error: 'Missing HubSpot configuration' },
                { status: 500 }
            );
        }

        // Формируем базовые данные для отправки в HubSpot
        const fields = [{ name: 'email', value: email }];

        // Добавляем дополнительные поля в зависимости от типа формы
        if (firstName) fields.push({ name: 'firstname', value: firstName });
        if (lastName) fields.push({ name: 'lastname', value: lastName });
        if (phone) fields.push({ name: 'phone', value: phone });
        if (subject) fields.push({ name: 'subject', value: subject });
        if (message) fields.push({ name: 'message', value: message });

        // Формируем полные данные для отправки
        const formData = {
            fields,
            context: {
                hutk: req.cookies.get('hubspotutk')?.value || undefined,
                pageUri: req.headers.get('referer') || 'unknown',
                pageName: formType === 'contact' ? (source !== 'website' ? source : 'Contact Form') : 'Newsletter Subscription'
            }
        };

        console.log(`Direct API: Sending ${formType} form data to HubSpot:`, JSON.stringify(formData));

        // Отправляем данные в HubSpot
        const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${hubspotKey}`
            },
            body: JSON.stringify(formData)
        });

        const responseData = await response.json();
        console.log(`Direct API: HubSpot ${formType} response:`, response.status, response.statusText);

        // Проверяем успешность ответа
        if (!response.ok) {
            // Возвращаем 409, если контакт уже существует, для последующей обработки на стороне клиента
            if (response.status === 409) {
                // Для 409 мы всё равно считаем операцию успешной, так как контакт уже существует
                return NextResponse.json({ success: true, warning: 'Contact already exists' });
            }
            
            return NextResponse.json(
                { success: false, error: responseData.message || `Failed to submit ${formType} form` },
                { status: response.status }
            );
        }

        // Возвращаем успешный ответ
        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("Direct API Error:", error.message);
        return NextResponse.json(
            { success: false, error: error.message || 'Server error' },
            { status: 500 }
        );
    }
} 