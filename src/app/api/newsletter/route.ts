import { NextRequest, NextResponse } from "next/server";

type NewsletterFormData = {
    firstName?: string;
    lastName?: string;
    email: string;
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
        const { firstName, lastName, email, recaptchaToken } = body as NewsletterFormData;

        // Проверяем наличие обязательных полей
        if (!email) {
            return NextResponse.json({ success: false, error: 'Email is required' }, { status: 400 });
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

        // Получаем API-ключ HubSpot из переменных окружения
        const hubspotKey = process.env.HUBSPOT_ACCESS_TOKEN;
        const portalId = process.env.NEXT_HUBSPOT_PORTAL_ID;
        const formId = process.env.NEXT_HUBSPOT_NEWSLETTER_FORM_ID;

        if (!hubspotKey || !portalId || !formId) {
            return NextResponse.json(
                { success: false, error: 'Missing HubSpot configuration' },
                { status: 500 }
            );
        }

        // Формируем данные для отправки в HubSpot
        const formData = {
            fields: [
                { name: 'email', value: email },
            ],
            context: {
                hutk: req.cookies.get('hubspotutk')?.value || undefined,
                pageUri: req.headers.get('referer') || 'unknown',
                pageName: 'Newsletter Subscription'
            }
        };

        // Добавляем имя и фамилию, если они предоставлены
        if (firstName) {
            formData.fields.push({ name: 'firstname', value: firstName });
        }

        if (lastName) {
            formData.fields.push({ name: 'lastname', value: lastName });
        }

        console.log("Sending data to HubSpot:", JSON.stringify(formData));

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
        console.log("HubSpot response:", response.status, response.statusText);

        // Проверяем успешность ответа
        if (!response.ok) {
            // Возвращаем 409, если контакт уже существует, для последующей обработки на стороне клиента
            if (response.status === 409) {
                return NextResponse.json(
                    { success: false, error: responseData.message || 'Contact already exists' },
                    { status: 409 }
                );
            }
            
            return NextResponse.json(
                { success: false, error: responseData.message || 'Failed to subscribe' },
                { status: response.status }
            );
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error: unknown) {
        console.error("API Error:", error instanceof Error ? error.message : 'Unknown error');
        return NextResponse.json(
            { success: false, error: error instanceof Error ? error.message : 'Server error' },
            { status: 500 }
        );
    }
} 