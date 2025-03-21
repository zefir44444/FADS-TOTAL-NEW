import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    console.log("HubSpot direct API request received");
    
    // Получаем данные из запроса
    const formData = await req.json();
    
    // Проверяем обязательные поля
    if (!formData.email) {
      console.warn("Missing email in HubSpot direct request");
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }
    
    console.log("Creating contact directly in HubSpot:", formData);
    
    // Получаем токен доступа из переменных окружения
    const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;
    
    if (!accessToken) {
      console.warn("HUBSPOT_ACCESS_TOKEN is not configured");
      return NextResponse.json(
        { error: "HubSpot integration is not configured" },
        { status: 500 }
      );
    }
    
    // Подготавливаем свойства для HubSpot
    const properties: Record<string, string> = {};
    
    // Маппинг полей формы на свойства HubSpot
    if (formData.email) properties.email = formData.email;
    if (formData.firstName) properties.firstname = formData.firstName;
    if (formData.lastName) properties.lastname = formData.lastName;
    if (formData.phone) properties.phone = formData.phone;
    if (formData.message) properties.message = formData.message;
    if (formData.subject) properties.subject = formData.subject;
    if (formData.source) properties.source = formData.source;
    
    // Добавляем уникальный идентификатор для предотвращения конфликтов
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 10000);
    
    // Создаем уникальный email для предотвращения конфликтов
    const originalEmail = properties.email;
    const uniqueEmail = `${originalEmail.split('@')[0]}+${timestamp}.${random}@${originalEmail.split('@')[1]}`;
    properties.email = uniqueEmail;
    
    // Сохраняем оригинальный email в дополнительном поле
    properties.hs_additional_emails = originalEmail;
    
    // Отправляем запрос в HubSpot
    const response = await fetch(
      'https://api.hubapi.com/crm/v3/objects/contacts',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({ 
          properties: properties,
          createNewContactForNewEmail: true
        })
      }
    );
    
    // Получаем ответ
    let responseData;
    let responseText;
    
    try {
      // Сначала получаем текст ответа
      responseText = await response.text();
      console.log("HubSpot raw response:", responseText);
      
      // Затем пытаемся преобразовать его в JSON
      try {
        responseData = JSON.parse(responseText);
      } catch (jsonError) {
        console.error("Error parsing HubSpot response as JSON:", jsonError);
        responseData = { rawResponse: responseText };
      }
    } catch (error) {
      console.error("Error getting HubSpot response:", error);
      return NextResponse.json(
        { error: "Failed to get HubSpot response", details: String(error) },
        { status: 500 }
      );
    }
    
    // Проверяем успешность запроса
    if (!response.ok) {
      console.error("HubSpot API error:", responseData, "Status:", response.status, response.statusText);
      return NextResponse.json(
        { 
          error: `HubSpot API error: ${responseData.message || response.statusText}`, 
          status: response.status,
          details: responseData
        },
        { status: response.status }
      );
    }
    
    console.log("Contact successfully created in HubSpot:", responseData);
    
    return NextResponse.json({
      success: true,
      message: "Contact successfully created in HubSpot",
      data: responseData
    });
  } catch (error) {
    console.error("Error processing HubSpot direct request:", error);
    return NextResponse.json(
      { error: "Failed to process your request" },
      { status: 500 }
    );
  }
} 