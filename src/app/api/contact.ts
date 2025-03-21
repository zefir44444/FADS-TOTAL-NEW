import { NextApiRequest, NextApiResponse } from 'next';

type ContactFormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
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

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    try {
        const { 
            firstName, 
            lastName, 
            email, 
            phone, 
            subject, 
            message, 
            source = 'website',
            recaptchaToken 
        } = req.body as ContactFormData;

        // Проверяем наличие обязательных полей
        if (!firstName || !lastName || !email || !subject || !message) {
            return res.status(400).json({ success: false, error: 'Missing required fields' });
        }

        // Проверяем reCAPTCHA, если токен предоставлен
        if (!recaptchaToken) {
            return res.status(400).json({ success: false, error: 'reCAPTCHA verification failed', recaptchaFailed: true });
        }

        const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
        
        if (!isValidRecaptcha) {
            return res.status(400).json({ success: false, error: 'reCAPTCHA verification failed', recaptchaFailed: true });
        }

        // Получаем API-ключ HubSpot из переменных окружения
        const hubspotKey = process.env.HUBSPOT_ACCESS_TOKEN;
        const portalId = process.env.NEXT_HUBSPOT_PORTAL_ID;
        const formId = process.env.NEXT_HUBSPOT_CONTACT_FORM_ID;

        if (!hubspotKey || !portalId || !formId) {
            return res.status(500).json({ success: false, error: 'Missing HubSpot configuration' });
        }

        // Формируем данные для отправки в HubSpot
        const formData = {
            fields: [
                { name: 'firstname', value: firstName },
                { name: 'lastname', value: lastName },
                { name: 'email', value: email },
                { name: 'subject', value: subject },
                { name: 'message', value: message }
            ],
            context: {
                hutk: req.cookies?.hubspotutk || undefined,
                pageUri: req.headers.referer || 'unknown',
                pageName: source !== 'website' ? source : 'Contact Form'
            }
        };

        // Добавляем телефон, если он предоставлен
        if (phone) {
            formData.fields.push({ name: 'phone', value: phone });
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
                return res.status(409).json({ success: false, error: responseData.message || 'Contact already exists' });
            }
            
            return res.status(response.status).json({ success: false, error: responseData.message || 'Failed to send contact form' });
        }

        return res.status(200).json({ success: true });
    } catch (error: any) {
        console.error("API Error:", error.message);
        return res.status(500).json({ success: false, error: error.message || 'Server error' });
    }
}
