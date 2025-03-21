"use client";

import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import Script from "next/script";

// Определяем тип для контекста
type ReCaptchaContextType = {
  executeReCaptcha: (action: string) => Promise<string | null>;
};

// Создаем контекст с начальным значением
const ReCaptchaContext = createContext<ReCaptchaContextType>({
  executeReCaptcha: async () => null,
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
export const ReCaptchaProvider = ({ children, reCaptchaKey }: ReCaptchaProviderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScriptAdded, setIsScriptAdded] = useState(false);

  // Функция для выполнения reCAPTCHA с указанным действием
  const executeReCaptcha = async (action: string): Promise<string | null> => {
    if (!reCaptchaKey) {
      console.warn('reCAPTCHA Site Key не указан. Защита от спама не активна.');
      return null;
    }

    if (!isLoaded) {
      console.error('reCAPTCHA не загружена. Пожалуйста, проверьте подключение к интернету.');
      return null;
    }

    try {
      return await window.grecaptcha.execute(reCaptchaKey, { action });
    } catch (error) {
      console.error('Ошибка при выполнении reCAPTCHA:', error);
      return null;
    }
  };

  // Эффект для обработки загрузки скрипта reCAPTCHA
  useEffect(() => {
    if (!reCaptchaKey || isScriptAdded) return;
    
    setIsScriptAdded(true);
  }, [reCaptchaKey, isScriptAdded]);

  // Если ключ не указан, выводим предупреждение
  if (!reCaptchaKey) {
    return <>{children}</>;
  }

  return (
    <ReCaptchaContext.Provider value={{ executeReCaptcha }}>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${reCaptchaKey}`}
        onLoad={() => {
          window.grecaptcha.ready(() => {
            setIsLoaded(true);
            console.log('reCAPTCHA готова к использованию');
          });
        }}
        onError={() => {
          console.error('Ошибка загрузки скрипта reCAPTCHA');
        }}
      />
      {children}
    </ReCaptchaContext.Provider>
  );
}; 