"use client";

import Link from "next/link";

export default function AIOptimizationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Декоративные элементы фона */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-[#840032]/10 to-[#e59500]/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI Search & Agent Optimization
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Больше видимости, меньше усилий. Устали от устаревших методов оптимизации? Мы создаем контент, который не просто выглядит хорошо, но и эффективно работает с AI-системами. Наша оптимизация обеспечивает максимальную видимость вашего контента в AI-поиске и AI-агентах.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#e59500]">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Контент, который работает с AI</h3>
              <p className="text-gray-600">Мы не просто оптимизируем контент—мы создаем структуру, которую AI-системы легко понимают и используют.</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Интуитивная структура для AI-агентов</li>
                <li>• Чистый, семантически богатый контент</li>
                <li>• Оптимизация под различные AI-платформы</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#e59500]">
                  <path d="M12 2v20M2 12h20"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Правильная платформа для ваших нужд</h3>
              <p className="text-gray-600">Выбираем оптимальное решение для вашего бизнеса:</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Headless CMS с AI-оптимизацией</li>
                <li>• Интеграция с AI-поисковыми системами</li>
                <li>• Совместимость с AI-агентами</li>
                <li>• Масштабируемые AI-решения</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#e59500]">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Скорость и производительность</h3>
              <p className="text-gray-600">Оптимизированная структура для AI-систем:</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Быстрая обработка AI-агентами</li>
                <li>• Оптимизация для всех платформ</li>
                <li>• Чистый код и современный стек технологий</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">AI-оптимизация и маркетинг</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Оптимизация под AI-поиск с первого дня</li>
                <li>• Страницы, оптимизированные для AI-видимости</li>
                <li>• Интеграция с AI-аналитикой</li>
                <li>• Отслеживание AI-метрик</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Управление контентом</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Удобная панель управления</li>
                <li>• Автоматическая AI-оптимизация</li>
                <li>• Аналитика в реальном времени</li>
                <li>• AI-рекомендации по улучшению</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Автоматизация и рост</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Интеграция с AI-CRM системами</li>
                <li>• Автоматические AI-уведомления</li>
                <li>• Продвинутая AI-аналитика</li>
                <li>• AI-оптимизация принятия решений</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Для кого это решение?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-semibold mb-4">Малый бизнес</h3>
              <p className="text-gray-600">Быстрый старт с AI-оптимизацией</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-semibold mb-4">Растущие бренды</h3>
              <p className="text-gray-600">Масштабируемые AI-решения</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-semibold mb-4">B2B & B2C компании</h3>
              <p className="text-gray-600">Интеграция с AI-системами</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-semibold mb-4">Стартапы</h3>
              <p className="text-gray-600">AI-оптимизированные MVP</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Как это работает</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#e59500]">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Слушаем</h3>
              <p className="text-gray-600">Изучаем ваш бизнес и цели</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#e59500]">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Планируем</h3>
              <p className="text-gray-600">Создаем AI-стратегию</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#e59500]">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Разрабатываем</h3>
              <p className="text-gray-600">Оптимизируем под AI</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#e59500]">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Тестируем</h3>
              <p className="text-gray-600">Проверяем AI-совместимость</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#e59500]">5</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Запускаем</h3>
              <p className="text-gray-600">Поддержка и оптимизация</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-[#e59500] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Готовы оптимизировать для AI?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Давайте создадим контент, который будет эффективно работать с AI-системами и привлекать вашу целевую аудиторию.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[#e59500] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Начать
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 