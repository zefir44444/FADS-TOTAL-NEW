import { NextRequest, NextResponse } from "next/server";
import { saveFormToHubSpot } from "@/lib/hubspot";

export async function POST(req: NextRequest) {
  try {
    console.log("Newsletter subscription request received");
    
    // Получаем данные из запроса
    const { email, firstName = '', lastName = '' } = await req.json();

    // Проверяем обязательные поля
    if (!email) {
      console.warn("Missing email in newsletter subscription");
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Проверяем формат email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.warn(`Invalid email format in newsletter subscription: ${email}`);
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    console.log(`Processing newsletter subscription for: ${email}`);

    // Логируем полученные данные
    console.log("Form data received:", { 
      email, 
      firstName: firstName || '(not provided)', 
      lastName: lastName || '(not provided)'
    });

    // Сохраняем данные в HubSpot
    const hubspotResult = await saveFormToHubSpot('newsletter', {
      email,
      firstName,
      lastName
    });

    console.log(`HubSpot result for ${email}:`, hubspotResult);

    // Возвращаем успешный ответ
    console.log(`Subscription processed successfully for: ${email}`);
    return NextResponse.json({
      success: true,
      message: "Thank you for subscribing to our newsletter!",
      hubspot: hubspotResult.success
    });
  } catch (error) {
    console.error("Error processing newsletter subscription:", error);
    return NextResponse.json(
      { error: "Failed to process your subscription" },
      { status: 500 }
    );
  }
} 