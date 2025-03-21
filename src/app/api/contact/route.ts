import { NextRequest, NextResponse } from "next/server";
import { saveFormToHubSpot } from "@/lib/hubspot";

// Функция для проверки reCAPTCHA
async function verifyRecaptcha(token: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  
  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
      { method: "POST" }
    );
    
    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    // Парсим JSON из тела запроса
    const reqBody = await req.json();
    
    // Деструктурируем данные из запроса
    const { 
      firstName, 
      lastName, 
      email, 
      phone = '', 
      subject = '', 
      message = '', 
      privacyAccepted = false, 
      recaptchaToken 
    } = reqBody;

    console.log("Contact form data:", { firstName, lastName, email, phone, subject, message, privacyAccepted });
    
    // Проверяем обязательные поля
    if (!firstName || !lastName || !email || !message) {
      console.warn("Required fields missing in contact form submission");
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }
    
    // Проверяем согласие на обработку данных
    if (!privacyAccepted) {
      console.warn("Privacy policy not accepted in contact form submission");
      return NextResponse.json(
        { error: "You must accept the privacy policy" },
        { status: 400 }
      );
    }
    
    // Проверка reCAPTCHA
    if (!recaptchaToken) {
      console.warn("Missing reCAPTCHA token in contact form submission");
      return NextResponse.json(
        { error: "reCAPTCHA verification is required" },
        { status: 400 }
      );
    }

    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
    if (!isRecaptchaValid) {
      console.warn("reCAPTCHA verification failed for contact form");
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }
    
    // Логика сохранения формы в HubSpot
    try {
      console.log("Sending contact data to HubSpot");
      
      const result = await saveFormToHubSpot('contact', {
        email,
        firstName,
        lastName,
        phone,
        message,
        subject,
        source: "contact_form"
      });
      
      console.log("HubSpot result:", result);
      
      return NextResponse.json({
        success: true,
        message: "Form submitted successfully!"
      });
    } catch (error: Error | unknown) {
      console.error("Error saving to HubSpot:", error instanceof Error ? error.message : String(error));
      
      if (error instanceof Error && error.message.includes("409")) {
        // Если контакт уже существует, это не ошибка для нас
        return NextResponse.json(
          { success: true, message: "Contact already exists, but form was processed successfully" },
          { status: 200 }
        );
      }
      
      // Для остальных ошибок HubSpot
      return NextResponse.json(
        { error: "Failed to process form submission" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}