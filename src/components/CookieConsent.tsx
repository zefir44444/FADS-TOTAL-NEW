"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { GoogleTagManager } from '@next/third-parties/google';

// Объявление типа для Google Tag Manager
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    _hsq?: Array<unknown>;
    dataLayer?: Object[] | undefined;
  }
}

// Constant for Google Tag Manager ID
const GTM_ID = "GTM-K48CG77";

// Типы cookie для управления согласием
type CookieTypes = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

// Тип для хранения состояния согласия
type ConsentState = {
  accepted: boolean;
  declined: boolean;
  preferences: CookieTypes;
  timestamp: number;
};

// Глобальное состояние согласия для доступа из других компонентов
export let analyticsConsentState: string = 'denied';
export let marketingConsentState: string = 'denied';
export let preferencesConsentState: string = 'denied';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);
  const [showMinimized, setShowMinimized] = useState(false);
  const [essentialAnimation, setEssentialAnimation] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [cookieState, setCookieState] = useState<'waiting' | 'accepted' | 'declined'>('waiting');
  
  // Предотвращаем гидратацию
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Дополнительная проверка для гарантии отображения мини-иконки
  useEffect(() => {
    if (!mounted) return;
    
    // Если согласие дано, но мини-иконка не отображается и баннер скрыт,
    // то показываем мини-иконку
    if (consentGiven && !showMinimized && !isVisible) {
      const timer = setTimeout(() => {
        setShowMinimized(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [consentGiven, showMinimized, isVisible, mounted]);
  
  // Состояние для различных типов cookie
  const [cookiePreferences, setCookiePreferences] = useState<CookieTypes>({
    essential: true, // Всегда включены
    analytics: true,
    marketing: true,
    preferences: true
  });
  
  useEffect(() => {
    // Проверяем, было ли уже получено согласие на использование cookie
    if (!mounted) return;
    
    const cookieConsent = localStorage.getItem('cookie-consent-v2');
    
    if (cookieConsent) {
      // Если согласие уже было дано, парсим сохраненные настройки
      try {
        const consentData: ConsentState = JSON.parse(cookieConsent);
        setCookiePreferences(consentData.preferences);
        setConsentGiven(true);
        setCookieState(consentData.accepted ? 'accepted' : 'declined');
        
        // Применяем сохраненные настройки при загрузке
        applyConsentSettings(consentData.preferences);
        
        // Если согласие было дано более 30 дней назад, показываем баннер снова
        const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;
        if (Date.now() - consentData.timestamp > thirtyDaysInMs) {
          setIsVisible(true);
          setShowMinimized(false); // Убедимся, что мини-иконка не показывается, когда отображается баннер
        } else {
          setIsVisible(false); // Убедимся, что баннер не показывается
          // Добавляем небольшую задержку для лучшего UX
          setTimeout(() => {
            setShowMinimized(true); // Показываем мини-иконку
          }, 1000);
        }
      } catch (error) {
        // Если произошла ошибка при парсинге, показываем баннер
        console.error('Error parsing cookie consent:', error);
        setIsVisible(true);
        setShowMinimized(false);
      }
    } else {
      // Если согласие еще не было дано, показываем баннер
      setIsVisible(true);
      setShowMinimized(false);
      
      // По умолчанию отключаем все аналитические и маркетинговые cookie
      // пока пользователь не даст согласие
      disableAllNonEssentialCookies();
    }
  }, [mounted]);
  
  // Функция для отключения всех неосновных cookie
  const disableAllNonEssentialCookies = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        'event': 'cookie_consent_update',
        'cookieConsent.analytics': 'denied',
        'cookieConsent.marketing': 'denied',
        'cookieConsent.preferences': 'denied',
        'cookieConsent.essential': 'granted'
      });
    }
    
    // Обновляем глобальные состояния
    analyticsConsentState = 'denied';
    marketingConsentState = 'denied';
    preferencesConsentState = 'denied';
  };
  
  // Функция для применения настроек согласия
  const applyConsentSettings = (preferences: CookieTypes) => {
    // Подготавливаем объект состояния согласия для Google Tag Manager
    if (typeof window !== 'undefined' && window.dataLayer) {
      // Отправляем детальную информацию о согласии в GTM
      const analyticsValue = preferences.analytics ? 'granted' : 'denied';
      const marketingValue = preferences.marketing ? 'granted' : 'denied';
      const preferencesValue = preferences.preferences ? 'granted' : 'denied';
      
      window.dataLayer.push({
        'event': 'cookie_consent_update',
        'cookieConsent.analytics': analyticsValue,
        'cookieConsent.marketing': marketingValue,
        'cookieConsent.preferences': preferencesValue,
        'cookieConsent.essential': 'granted' // Всегда включены
      });
      
      // Обновляем глобальные состояния
      analyticsConsentState = analyticsValue;
      marketingConsentState = marketingValue;
      preferencesConsentState = preferencesValue;
      
      // Дополнительно отправляем событие для обновления согласия Google Analytics 4
      if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
          'analytics_storage': analyticsValue,
          'ad_storage': marketingValue,
          'functionality_storage': preferencesValue,
          'security_storage': 'granted' // Для основных функций безопасности
        });
      }
    }
    
    // Google Analytics
    if (preferences.analytics) {
      // Включаем Google Analytics
      console.log('Google Analytics enabled');
      
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('consent', 'update', { 'analytics_storage': 'granted' });
        window.gtag('set', 'ads_data_redaction', false);
      }
    } else {
      // Отключаем Google Analytics
      console.log('Google Analytics disabled');
      
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('consent', 'update', { 'analytics_storage': 'denied' });
        window.gtag('set', 'ads_data_redaction', true);
      }
    }
    
    // Google Tag Manager
    if (preferences.analytics) {
      console.log('Google Tag Manager enabled');
      // GTM управляется через dataLayer выше
    } else {
      console.log('Google Tag Manager disabled');
      // GTM управляется через dataLayer выше
    }
    
    // HubSpot
    if (preferences.marketing) {
      console.log('HubSpot tracking enabled');
      // Включаем HubSpot трекинг
      if (typeof window !== 'undefined' && '_hsq' in window) {
        // @ts-expect-error - глобальный _hsq может быть не определен в TypeScript
        window._hsq.push(['setPrivacyConsent', true]);
      }
    } else {
      console.log('HubSpot tracking disabled');
      // Отключаем HubSpot трекинг
      if (typeof window !== 'undefined' && '_hsq' in window) {
        // @ts-expect-error - глобальный _hsq может быть не определен в TypeScript
        window._hsq.push(['setPrivacyConsent', false]);
      }
    }
    
    // Stripe (обычно относится к essential cookies, так как необходим для обработки платежей)
    console.log('Stripe cookies are essential and always enabled');
    
    // Другие маркетинговые cookie
    if (preferences.marketing) {
      console.log('Marketing cookies enabled');
      // Включаем маркетинговые cookie
    } else {
      console.log('Marketing cookies disabled');
      // Отключаем маркетинговые cookie
    }
  };
  
  // Сохраняем настройки согласия
  const saveConsent = (accepted: boolean, preferences: CookieTypes) => {
    // Сохраняем состояние согласия в localStorage
    const consentState: ConsentState = {
      accepted,
      declined: !accepted,
      preferences,
      // Используем текущее время только на клиенте после монтирования
      timestamp: mounted ? Date.now() : new Date().getTime()
    };
    
    localStorage.setItem('cookie-consent-v2', JSON.stringify(consentState));
    
    // Обновляем состояние компонента
    setConsentGiven(true);
    setIsVisible(false);
    setCookieState(accepted ? 'accepted' : 'declined');
    
    // Добавляем небольшую задержку перед показом мини-иконки для лучшего UX
    setTimeout(() => {
      setShowMinimized(true);
    }, 500);
    
    // Применяем настройки согласия
    applyConsentSettings(preferences);
    
    // Отправляем событие в GTM о решении пользователя
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        'event': accepted ? 'cookie_consent_accepted' : 'cookie_consent_declined',
        'cookie_consent_method': showPreferences ? 'preferences' : (accepted ? 'accept_all' : 'decline_all'),
        'cookieConsent.analytics': preferences.analytics ? 'granted' : 'denied',
        'cookieConsent.marketing': preferences.marketing ? 'granted' : 'denied',
        'cookieConsent.preferences': preferences.preferences ? 'granted' : 'denied'
      });
    }
  };
  
  const acceptAllCookies = () => {
    const allEnabled: CookieTypes = {
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    
    setCookiePreferences(allEnabled);
    saveConsent(true, allEnabled);
  };
  
  const acceptSelectedCookies = () => {
    saveConsent(true, cookiePreferences);
  };
  
  const declineCookies = () => {
    const essentialOnly: CookieTypes = {
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false
    };
    
    setCookiePreferences(essentialOnly);
    saveConsent(false, essentialOnly);
  };
  
  const handlePreferenceChange = (type: keyof CookieTypes) => {
    if (type === 'essential') return; // Нельзя отключить необходимые cookie
    
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };
  
  const openCookieSettings = () => {
    setShowMinimized(false);
    setIsVisible(true);
    setShowPreferences(true);
    
    // Отправляем событие в GTM
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        'event': 'cookie_settings_opened'
      });
    }
  };
  
  // Функция для анимации тумблера Essential Cookies
  const animateEssentialToggle = () => {
    // Сначала сбрасываем анимацию, если она уже запущена
    setEssentialAnimation(false);
    
    // Затем запускаем анимацию в следующем цикле рендеринга
    setTimeout(() => {
      setEssentialAnimation(true);
      
      // Сбрасываем анимацию после ее завершения
      setTimeout(() => {
        setEssentialAnimation(false);
      }, 800); // Длительность анимации в globals.css
    }, 10);
  };
  
  if (!mounted) return null;

  // Условный рендеринг GoogleTagManager
  const renderGTM = () => {
    if (cookieState === 'accepted' || (analyticsConsentState === 'granted' && cookiePreferences.analytics)) {
      return <GoogleTagManager gtmId={GTM_ID} />;
    }
    return null;
  };

  return (
    <>
      {/* Условный рендеринг GoogleTagManager */}
      {renderGTM()}
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 text-black animate-slideUp"
          >
            <div className="container mx-auto max-w-screen-xl">
              <div 
                className="relative overflow-hidden bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 p-6"
                style={{
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)"
                }}
              >
                {/* Декоративные элементы фона */}
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                  <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-r from-[#e59500]/30 to-[#840032]/30 blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-[#840032]/30 to-[#e59500]/30 blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
                  
                  {/* Плавающие геометрические фигуры */}
                  <div className="absolute top-1/4 right-1/4 w-8 h-8 border-2 border-[#e59500] rounded-lg opacity-30 animate-float-slow"></div>
                  <div className="absolute bottom-1/3 left-1/4 w-6 h-6 border-2 border-[#840032] rounded-full opacity-30 animate-float-medium"></div>
                </div>
                
                {!showPreferences ? (
                  // Основное уведомление
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
                    <div className="flex-1">
                      <p className="text-sm md:text-base mb-2">
                        We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content.
                        We use different services that may set cookies on your device.
                        <br />
                        By clicking &quot;Accept All&quot;, you consent to our use of cookies.
                      </p>
                      <p className="text-xs opacity-80">
                        Read our <Link href="/cookies" className="text-[#e59500] hover:underline font-medium">Cookie Policy</Link> and <Link href="/privacy" className="text-[#e59500] hover:underline font-medium">Privacy Policy</Link> to learn more.
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full md:w-auto">
                      <button
                        onClick={declineCookies}
                        className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 bg-transparent border border-gray-300 hover:bg-gray-100 hover:shadow-md"
                      >
                        Decline All
                      </button>
                      
                      <button
                        onClick={() => setShowPreferences(true)}
                        className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 bg-transparent border border-gray-300 hover:bg-gray-100 hover:shadow-md"
                      >
                        Preferences
                      </button>
                      
                      <button
                        onClick={acceptAllCookies}
                        className="px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 bg-gradient-to-r from-[#e59500] to-[#d48700] text-white hover:shadow-lg transform hover:scale-105 active:scale-95 border border-black"
                      >
                        Accept All
                      </button>
                    </div>
                  </div>
                ) : (
                  // Детальные настройки cookie
                  <div className="flex flex-col gap-4 relative z-10">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-bold gradient-text">Cookie Preferences</h3>
                      <button 
                        onClick={() => setShowPreferences(false)}
                        className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
                        aria-label="Close preferences"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-medium">Essential Cookies</h4>
                            <p className="text-xs opacity-80">Required for the website to function and secure payments via Stripe</p>
                          </div>
                          <label 
                            className="relative inline-block w-12 h-6 cursor-pointer" 
                            onClick={animateEssentialToggle}
                            title="Essential cookies cannot be disabled"
                          >
                            <input 
                              type="checkbox" 
                              checked={cookiePreferences.essential} 
                              disabled={true}
                              className="sr-only"
                            />
                            <div className="w-12 h-6 rounded-full bg-[#840032] transition-colors"></div>
                            <span 
                              className={`absolute top-1 right-1 w-4 h-4 rounded-full bg-white shadow-md ${
                                essentialAnimation ? 'toggle-bounce' : ''
                              }`}
                            ></span>
                          </label>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-medium">Analytics Cookies</h4>
                            <p className="text-xs opacity-80">Google Analytics and Google Tag Manager to improve our website</p>
                          </div>
                          <label className="relative inline-block w-12 h-6 cursor-pointer">
                            <input 
                              type="checkbox" 
                              checked={cookiePreferences.analytics} 
                              onChange={() => handlePreferenceChange('analytics')}
                              className="sr-only"
                            />
                            <div className={`w-12 h-6 rounded-full ${cookiePreferences.analytics ? 'bg-[#e59500]' : 'bg-gray-300'} transition-colors`}></div>
                            <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-md transition-transform ${cookiePreferences.analytics ? 'translate-x-6' : 'translate-x-0'}`}></div>
                          </label>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-medium">Marketing Cookies</h4>
                            <p className="text-xs opacity-80">HubSpot and other services for personalized marketing</p>
                          </div>
                          <label className="relative inline-block w-12 h-6 cursor-pointer">
                            <input 
                              type="checkbox" 
                              checked={cookiePreferences.marketing} 
                              onChange={() => handlePreferenceChange('marketing')}
                              className="sr-only"
                            />
                            <div className={`w-12 h-6 rounded-full ${cookiePreferences.marketing ? 'bg-[#e59500]' : 'bg-gray-300'} transition-colors`}></div>
                            <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-md transition-transform ${cookiePreferences.marketing ? 'translate-x-6' : 'translate-x-0'}`}></div>
                          </label>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-medium">Preference Cookies</h4>
                            <p className="text-xs opacity-80">Remember your settings</p>
                          </div>
                          <label className="relative inline-block w-12 h-6 cursor-pointer">
                            <input 
                              type="checkbox" 
                              checked={cookiePreferences.preferences} 
                              onChange={() => handlePreferenceChange('preferences')}
                              className="sr-only"
                            />
                            <div className={`w-12 h-6 rounded-full ${cookiePreferences.preferences ? 'bg-[#e59500]' : 'bg-gray-300'} transition-colors`}></div>
                            <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-md transition-transform ${cookiePreferences.preferences ? 'translate-x-6' : 'translate-x-0'}`}></div>
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end gap-3 mt-4">
                      <button
                        onClick={declineCookies}
                        className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 bg-transparent border border-gray-300 hover:bg-gray-100 hover:shadow-md"
                      >
                        Decline All
                      </button>
                      
                      <button
                        onClick={acceptSelectedCookies}
                        className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 bg-transparent border border-gray-300 hover:bg-gray-100 hover:shadow-md"
                      >
                        Save Preferences
                      </button>
                      
                      <button
                        onClick={acceptAllCookies}
                        className="px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 bg-gradient-to-r from-[#e59500] to-[#d48700] text-white hover:shadow-lg transform hover:scale-105 active:scale-95 border border-black"
                      >
                        Accept All
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Мини-кнопка для вызова настроек cookie */}
        {(showMinimized && !isVisible && consentGiven) && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 right-4 z-50"
          >
            <button
              onClick={openCookieSettings}
              className="p-3 rounded-full shadow-lg transition-all duration-300 ease-out transform hover:scale-110 hover:rotate-12 bg-white/90 backdrop-blur-xl text-gray-800 hover:bg-gradient-to-r hover:from-white hover:to-[#fff8e6] border border-white/20 hover:border-[#e59500]/30 hover:shadow-xl group relative overflow-hidden"
              style={{
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              }}
              aria-label="Cookie settings"
              title="Cookie settings"
            >
              {/* Эффект свечения при наведении */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#e59500]/0 via-[#e59500]/10 to-[#e59500]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></span>
              
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="#e59500" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="transition-all duration-300 group-hover:fill-[#d48700] relative z-10 cookie-glow group-hover:cookie-rotate"
              >
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                <path d="M8.5 8.5v.01" />
                <path d="M16 15.5v.01" />
                <path d="M12 12v.01" />
                <path d="M11 17v.01" />
                <path d="M7 14v.01" />
              </svg>
              
              {/* Индикатор уведомления */}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#e59500] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></span>
              
              {/* Дополнительный эффект при наведении */}
              <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300"></span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieConsent; 