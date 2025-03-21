import { NextRequest, NextResponse } from "next/server";

/**
 * API-маршрут для отправки сообщений в Telegram через Bot API
 */
export async function POST(req: NextRequest) {
  try {
    // Получаем данные из запроса
    const data = await req.json();
    
    // Проверяем наличие обязательных полей
    if (!data.message) {
      return NextResponse.json(
        { error: "Message content is required" },
        { status: 400 }
      );
    }
    
    // Получаем токен и ID чата из переменных окружения
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    
    if (!botToken || !chatId) {
      console.error("Telegram credentials are not configured");
      return NextResponse.json(
        { error: "Telegram integration is not configured" },
        { status: 500 }
      );
    }
    
    // Формируем текст сообщения
    let messageText = "";
    
    // Определяем тип формы
    const formType = data.formType || "Unknown Form";
    
    // Заголовок сообщения
    messageText += `🔔 *New ${formType} Submission*\n\n`;
    
    // Добавляем информацию о пользователе
    if (data.firstName) messageText += `*First Name:* ${data.firstName}\n`;
    if (data.lastName) messageText += `*Last Name:* ${data.lastName}\n`;
    if (data.email) messageText += `*Email:* ${data.email}\n`;
    if (data.phone) messageText += `*Phone:* ${data.phone}\n`;
    
    // Добавляем дополнительные поля для контактной формы
    if (data.subject) messageText += `*Subject:* ${data.subject}\n`;
    if (data.message) messageText += `\n*Message:*\n${data.message}\n`;
    
    // Добавляем информацию об источнике
    if (data.source) messageText += `\n*Source:* ${data.source}\n`;
    
    // Добавляем время отправки
    messageText += `\n*Sent:* ${new Date().toLocaleString('ru-RU')}\n`;
    
    console.log("Sending Telegram message:", messageText);
    
    // Отправляем сообщение через Telegram Bot API
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const response = await fetch(telegramApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageText,
        parse_mode: "Markdown",
      }),
    });
    
    // Получаем и проверяем ответ от Telegram API
    const responseData = await response.json();
    
    if (!response.ok || !responseData.ok) {
      throw new Error(`Telegram API Error: ${JSON.stringify(responseData)}`);
    }
    
    console.log("Message successfully sent to Telegram:", responseData);
    
    return NextResponse.json({
      success: true,
      message: "Message successfully sent to Telegram",
    });
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    return NextResponse.json(
      { 
        error: "Failed to send message to Telegram", 
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
} 