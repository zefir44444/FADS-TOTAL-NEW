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
              Оптимизируйте ваш контент для AI-поиска и AI-агентов. Наша специализированная оптимизация обеспечивает, что ваш контент будет обнаружен, понят и использован системами искусственного интеллекта.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#e59500]">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Search Optimization</h3>
              <p className="text-gray-600">Оптимизация структуры и семантики контента для AI-поисковых систем и больших языковых моделей.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#e59500]">
                  <path d="M12 2v20M2 12h20"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Agent Compatibility</h3>
              <p className="text-gray-600">Структурирование контента для оптимальной обработки AI-агентами и автоматизированными системами.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#e59500]">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Semantic Enhancement</h3>
              <p className="text-gray-600">Улучшение семантики контента для лучшего понимания и обработки AI-системами.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Услуги AI-оптимизации</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Оптимизация структуры контента</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Форматирование контента для AI</li>
                <li>• Семантическая HTML-структура</li>
                <li>• Оптимизация Schema-разметки</li>
                <li>• Оптимизация обработки естественного языка</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Оптимизация для AI-агентов</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Структура контента для агентов</li>
                <li>• Оптимизация API и форматов данных</li>
                <li>• Совместимость с автоматизированными системами</li>
                <li>• Оптимизация взаимодействия с AI-агентами</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Процесс AI-оптимизации</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#e59500]">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Анализ</h3>
              <p className="text-gray-600">Оценка контента на совместимость с AI и возможности оптимизации</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#e59500]">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Стратегия</h3>
              <p className="text-gray-600">Разработка стратегии AI-оптимизации и плана внедрения</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#e59500]">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Внедрение</h3>
              <p className="text-gray-600">Оптимизация структуры и формата контента для AI-систем</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#e59500]">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Тестирование</h3>
              <p className="text-gray-600">Проверка совместимости с AI и эффективности оптимизации</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Преимущества AI-оптимизации</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Видимость в AI-поиске</h3>
              <p className="text-gray-600">Улучшенная видимость в результатах AI-поиска и запросах агентов</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Интеграция с агентами</h3>
              <p className="text-gray-600">Лучшая совместимость с AI-агентами и автоматизированными системами</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Готовность к будущему</h3>
              <p className="text-gray-600">Контент, оптимизированный под новые AI-технологии и стандарты</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Улучшенная обработка</h3>
              <p className="text-gray-600">Улучшенное понимание и обработка вашего контента AI-системами</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Автоматизированные системы</h3>
              <p className="text-gray-600">Лучшая интеграция с AI-инструментами автоматизации</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Конкурентное преимущество</h3>
              <p className="text-gray-600">Опережение конкурентов в AI-ориентированном цифровом ландшафте</p>
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
              Давайте оптимизируем ваш контент для AI-поиска и AI-агентов, чтобы обеспечить максимальную видимость и использование.
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