import { NextRequest, NextResponse } from "next/server";

/**
 * Обработчик вебхуков от HubSpot
 */
export async function POST(req: NextRequest) {
  try {
    // Получаем данные из запроса
    const data = await req.json();
    console.log("Processing HubSpot webhook:", JSON.stringify(data));

    // Проверяем, что данные имеют правильный формат
    if (!Array.isArray(data)) {
      console.error("Invalid webhook data format, expected array");
      return NextResponse.json({ error: "Invalid data format" }, { status: 400 });
    }

    // Обрабатываем каждое событие в вебхуке
    for (const event of data) {
      // Логируем информацию о событии
      console.log(`Processing event: ${event.subscriptionType}, ID: ${event.eventId}, Object ID: ${event.objectId}`);
      
      // Здесь можно добавить специфическую обработку для разных типов событий
      switch (event.subscriptionType) {
        case 'contact.creation':
          console.log(`New contact created: ${event.objectId}, Source: ${event.changeSource}`);
          break;
        case 'contact.propertyChange':
          console.log(`Contact property changed: ${event.objectId}, Source: ${event.changeSource}`);
          break;
        case 'product.creation':
          console.log(`New product created: ${event.objectId}, Source: ${event.changeSource}`);
          break;
        default:
          console.log(`Unhandled event type: ${event.subscriptionType}, Object ID: ${event.objectId}`);
      }
    }

    // Возвращаем успешный ответ
    return NextResponse.json({ success: true, message: "Webhook processed successfully" });
  } catch (error) {
    console.error("Error processing HubSpot webhook:", error);
    return NextResponse.json(
      { error: "Failed to process webhook" },
      { status: 500 }
    );
  }
} 