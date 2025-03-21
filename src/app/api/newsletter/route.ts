import { NextRequest, NextResponse } from "next/server";
import { saveFormToHubSpot } from "@/lib/hubspot";

export async function POST(req: NextRequest) {
  try {
    console.log("Newsletter subscription request received");
    
    let reqBody;
    try {
      // Получаем данные из запроса
      reqBody = await req.json();
      console.log("Newsletter raw request body:", reqBody);
    } catch (parseError) {
      console.error("Error parsing request body:", parseError);
      return NextResponse.json(
        { error: "Invalid request body format", details: String(parseError) },
        { status: 400 }
      );
    }
    
    // Деструктурируем данные из запроса
    const { email, firstName = '', lastName = '' } = reqBody;
    console.log("Newsletter request data:", { email, firstName, lastName });

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
    console.log("Form data to be sent to HubSpot:", { 
      email, 
      firstName: firstName || '(not provided)', 
      lastName: lastName || '(not provided)'
    });

    // Сохраняем данные в HubSpot
    let hubspotResult;
    try {
      hubspotResult = await saveFormToHubSpot('newsletter', {
        email,
        firstName,
        lastName
      });
      
      console.log(`HubSpot result for ${email}:`, hubspotResult);
    } catch (hubspotError) {
      console.error("Error during HubSpot API call:", hubspotError);
      return NextResponse.json(
        { 
          error: "Failed to save subscription to HubSpot", 
          details: hubspotError instanceof Error ? hubspotError.message : String(hubspotError)
        },
        { status: 500 }
      );
    }
    
    // Проверяем результат сохранения в HubSpot
    if (!hubspotResult.success) {
      console.warn(`HubSpot subscription failed for ${email}:`, hubspotResult.message);
      
      // Если это ошибка конфликта, возвращаем статус 409
      if (hubspotResult.message && hubspotResult.message.includes("conflict")) {
        return NextResponse.json(
          { 
            error: "Conflict with existing contact", 
            message: hubspotResult.message,
            data: hubspotResult.data
          },
          { status: 409 }
        );
      }
      
      return NextResponse.json(
        { 
          error: "Failed to save subscription to HubSpot", 
          message: hubspotResult.message,
          data: hubspotResult.data
        },
        { status: 500 }
      );
    }

    // Возвращаем успешный ответ
    console.log(`Subscription processed successfully for: ${email}`);
    return NextResponse.json({
      success: true,
      message: "Thank you for subscribing to our newsletter!",
      hubspot: hubspotResult.success,
      data: hubspotResult.data
    });
  } catch (error) {
    console.error("Error processing newsletter subscription:", error);
    return NextResponse.json(
      { 
        error: "Failed to process your subscription", 
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
} 