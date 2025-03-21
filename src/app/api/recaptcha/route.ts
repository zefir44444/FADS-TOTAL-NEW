import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Получаем данные из запроса
    const { token, action } = await req.json();
    
    if (!token) {
      return NextResponse.json(
        { success: false, error: "reCAPTCHA token is required" },
        { status: 400 }
      );
    }
    
    // Получаем секретный ключ из переменных окружения
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    
    if (!secretKey) {
      console.error("RECAPTCHA_SECRET_KEY is not configured");
      return NextResponse.json(
        { success: false, error: "reCAPTCHA verification is not configured" },
        { status: 500 }
      );
    }
    
    // Отправляем запрос к API Google для проверки токена
    const verificationURL = "https://www.google.com/recaptcha/api/siteverify";
    const response = await fetch(verificationURL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secretKey}&response=${token}`,
    });
    
    const recaptchaResponse = await response.json();
    
    // Логируем ответ от Google для диагностики
    console.log("reCAPTCHA verification response:", recaptchaResponse);
    
    // Проверяем результат
    if (!recaptchaResponse.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: "reCAPTCHA verification failed",
          details: recaptchaResponse["error-codes"] || []
        },
        { status: 400 }
      );
    }
    
    // Проверяем, что действие соответствует ожидаемому
    if (action && recaptchaResponse.action !== action) {
      return NextResponse.json(
        { 
          success: false, 
          error: "reCAPTCHA action mismatch",
          expected: action,
          received: recaptchaResponse.action
        },
        { status: 400 }
      );
    }
    
    // Проверяем score (значение от 0.0 до 1.0)
    // Чем выше score, тем больше вероятность, что пользователь человек
    const score = recaptchaResponse.score;
    
    // Если score ниже 0.5, считаем, что это бот
    // Вы можете настроить этот порог в соответствии с вашими требованиями
    if (score < 0.5) {
      return NextResponse.json(
        { 
          success: false, 
          error: "reCAPTCHA score too low - potential bot detected",
          score
        },
        { status: 400 }
      );
    }
    
    // Всё в порядке, проверка прошла успешно
    return NextResponse.json({
      success: true,
      score,
      hostname: recaptchaResponse.hostname,
      action: recaptchaResponse.action,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: "Failed to verify reCAPTCHA",
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
} 