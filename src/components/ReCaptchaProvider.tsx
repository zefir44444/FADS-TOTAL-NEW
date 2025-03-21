"use client";

import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import Script from "next/script";

// Определяем тип для контекста
type ReCaptchaContextType = {
  executeReCaptcha: (action: string) => Promise<string | null>;
  loaded: boolean; // Добавляем статус загрузки в контекст
};

// Создаем контекст с начальным значением
const ReCaptchaContext = createContext<ReCaptchaContextType>({
  executeReCaptcha: async () => null,
  loaded: false,
});

// Хук для доступа к контексту reCAPTCHA
export const useReCaptcha = () => useContext(ReCaptchaContext);

// Типы свойств для компонента ReCaptchaProvider
type ReCaptchaProviderProps = {
  children: ReactNode;
  reCaptchaKey?: string;
};

// Глобальная декларация для grecaptcha
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

// Компонент-провайдер для reCAPTCHA
export const ReCaptchaProvider = ({ 
  children, 
  reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY 
}: ReCaptchaProviderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Функция для выполнения reCAPTCHA с указанным действием
  const executeReCaptcha = async (action: string): Promise<string | null> => {
    if (!reCaptchaKey) {
      console.warn('reCAPTCHA Site Key not provided. Spam protection is inactive.');
      return null;
    }

    if (!isLoaded) {
      console.error('reCAPTCHA is not loaded. Please check your internet connection.');
      return null;
    }

    try {
      return await window.grecaptcha.execute(reCaptchaKey, { action });
    } catch (error) {
      console.error('Error executing reCAPTCHA:', error);
      return null;
    }
  };

  // Если ключ не указан, просто рендерим детей
  if (!reCaptchaKey) {
    console.warn('reCAPTCHA key not provided. Spam protection will not work.');
    return <>{children}</>;
  }

  // Для локальной разработки добавляем localhost в домен
  const scriptSrc = `https://www.google.com/recaptcha/api.js?render=${reCaptchaKey}`;

  return (
    <ReCaptchaContext.Provider value={{ executeReCaptcha, loaded: isLoaded }}>
      <Script
        src={scriptSrc}
        strategy="afterInteractive"
        onLoad={() => {
          // Используем setTimeout, чтобы дать скрипту время на инициализацию
          setTimeout(() => {
            if (window.grecaptcha) {
              window.grecaptcha.ready(() => {
                setIsLoaded(true);
                console.log('reCAPTCHA is ready to use');
              });
            } else {
              console.error('grecaptcha object not found');
            }
          }, 500);
        }}
        onError={(e) => {
          console.error('Error loading reCAPTCHA script', e);
        }}
      />
      {children}
    </ReCaptchaContext.Provider>
  );
}; 