'use client';

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Define page structure
interface Page {
  path: string;
  title: string;
}

// List of all available pages
const ALL_PAGES: Page[] = [
  { path: '/', title: 'Home' },
  { path: '/portfolio', title: 'Portfolio' },
  { path: '/services', title: 'Services' },
  { path: '/services/website-audits', title: 'Website Audits' },
  { path: '/services/maintenance', title: 'Website Maintenance' },
  { path: '/knowledge-base', title: 'Knowledge Base' },
  { path: '/knowledge-base/what-is-seo', title: 'What is SEO' },
  { path: '/knowledge-base/google-search-ads-guide', title: 'Google Search Ads Guide' },
  { path: '/knowledge-base/web-accessibility', title: 'Web Accessibility' },
  { path: '/knowledge-base/website-performance-checklist', title: 'Website Performance Checklist' },
  { path: '/news', title: 'News' },
  { path: '/websites', title: 'Websites' },
  { path: '/websites/personal', title: 'Personal Websites' },
  { path: '/websites/business', title: 'Business Websites' },
  { path: '/websites/ecommerce', title: 'E-commerce Websites' },
  { path: '/websites/landing', title: 'Landing Pages' },
  { path: '/websites/blogs', title: 'Blog Websites' },
  { path: '/websites/custom', title: 'Custom Websites' },
  { path: '/websites/showcases', title: 'Website Showcases' },
  { path: '/promotion', title: 'Promotion' },
  { path: '/promotion/seo', title: 'SEO Services' },
  { path: '/promotion/google-ads', title: 'Google Ads' },
  { path: '/promotion/youtube', title: 'YouTube Promotion' },
  { path: '/promotion/growth-engine', title: 'Growth Engine' },
];

// Предварительно вычисленные описания для быстрого доступа
const PAGE_DESCRIPTIONS: Record<string, string> = {
  portfolio: 'Discover our portfolio featuring real examples of our projects and solutions.',
  services: 'Explore our services that will help your business grow in the digital environment.',
  'knowledge-base': 'Useful articles, guides, and expert advice on web development and marketing.',
  websites: 'Explore different types of websites we develop for our clients.',
  promotion: 'Strategies and methods to improve your website visibility online.',
  news: 'Latest news and updates in the world of web development and internet marketing.',
  contact: 'Get in touch with us to discuss your project or get a specialist consultation.',
  default: 'Explore this section to discover more about our services and solutions.'
};

const UnviewedPages: React.FC = () => {
  const pathname = usePathname();
  const [unviewedPages, setUnviewedPages] = useState<Page[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  
  // Функция для получения описания страницы на основе её пути (оптимизированная)
  const getPageDescription = useCallback((path: string): string => {
    if (!path) return PAGE_DESCRIPTIONS.default;
    
    for (const [key, description] of Object.entries(PAGE_DESCRIPTIONS)) {
      if (path.includes(`/${key}`)) return description;
    }
    
    return PAGE_DESCRIPTIONS.default;
  }, []);

  // Функция для перемешивания массива (мемоизированная)
  const shuffleArray = useCallback((array: Page[]): Page[] => {
    if (!array || !Array.isArray(array) || array.length === 0) return [];
    
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  // Функция для выбора случайных страниц (мемоизированная)
  const getRandomPages = useCallback((pages: Page[], count: number): Page[] => {
    if (!pages || !Array.isArray(pages) || pages.length === 0) return [];
    if (pages.length <= count) return [...pages];
    
    // Берем случайные страницы
    return shuffleArray(pages).slice(0, count);
  }, [shuffleArray]);

  // Сброс просмотренных страниц
  const resetViewedPages = useCallback(() => {
    try {
      // Сохраняем только текущую страницу как просмотренную
      const initialViewedPages = pathname ? [pathname] : [];
      localStorage.setItem('viewedPages', JSON.stringify(initialViewedPages));
      
      // Получаем все страницы, кроме текущей
      const notViewed = ALL_PAGES.filter(page => page?.path !== pathname);
      // Выбираем случайные страницы
      const randomPages = getRandomPages(notViewed, 3);
      setUnviewedPages(randomPages);
      
      return randomPages;
    } catch (error) {
      console.error('Error in resetViewedPages:', error);
      return [];
    }
  }, [pathname, getRandomPages]);

  // Загрузка данных при изменении пути
  useEffect(() => {
    try {
      // Загружаем просмотренные страницы из localStorage
      const viewedPagesJson = localStorage.getItem('viewedPages');
      let viewedPages: string[] = [];
      
      try {
        const parsed = viewedPagesJson ? JSON.parse(viewedPagesJson) : [];
        viewedPages = Array.isArray(parsed) ? parsed : [];
      } catch {
        viewedPages = [];
        localStorage.setItem('viewedPages', JSON.stringify([]));
      }
      
      // Если все страницы просмотрены, сбрасываем счетчик
      const allPagesViewed = ALL_PAGES.every(page => 
        page?.path && viewedPages.includes(page.path)
      );

      if (allPagesViewed) {
        const randomPages = resetViewedPages();
        if (randomPages.length > 0) {
          setIsVisible(true);
        }
        return;
      }

      // Обновляем список просмотренных страниц
      if (pathname && !viewedPages.includes(pathname)) {
        const updatedViewedPages = [...viewedPages, pathname];
        localStorage.setItem('viewedPages', JSON.stringify(updatedViewedPages));
      }

      // Фильтруем и показываем непросмотренные страницы
      const notViewed = ALL_PAGES.filter(page => page?.path && !viewedPages.includes(page.path));
      
      if (notViewed.length > 0) {
        // Явно указываем, что нужно выбрать 3 страницы для отображения
        const pagesToShow = Math.min(3, notViewed.length);
        const randomPages = getRandomPages(notViewed, pagesToShow);
        console.log('Selected pages to show:', randomPages);
        console.log('Number of selected pages:', randomPages.length);
        setUnviewedPages(randomPages);
        setIsVisible(true);
      }
    } catch (error) {
      console.error('Error in useEffect:', error);
      // Показываем случайные страницы при ошибке
      const randomPages = getRandomPages(ALL_PAGES, 3);
      console.log('Fallback pages selected:', randomPages.length);
      setUnviewedPages(randomPages);
      setIsVisible(true);
    }
  }, [pathname, resetViewedPages, getRandomPages]);

  // Отключение компонента если нет страниц для показа
  if (!isVisible || !unviewedPages || unviewedPages.length === 0) {
    return null;
  }

  console.log('Rendering component with pages:', unviewedPages.length);
  
  // Рендеринг компонента
  return (
    <div className="mt-12 mb-8">
      <div className="w-full bg-white rounded-xl shadow-md border border-gray-100">
        <div className="p-8">
          <div className="flex items-center mb-6">
            <svg 
              className="w-6 h-6 mr-3 text-[#e59500]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-[#840032]">
              You might also be interested in:
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Выводим все страницы из массива unviewedPages без ограничения slice */}
            {unviewedPages.map((page, index) => (
              page ? (
                <div key={page.path || index}>
                  <Link
                    href={page.path || '#'}
                    prefetch={true}
                    className="group flex flex-col p-4 rounded-lg hover:bg-gray-50 block h-full border border-gray-100 hover:border-[#e59500] hover:shadow-md"
                  >
                    <div className="flex items-center mb-2">
                      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#e59500] bg-opacity-10 mr-3">
                        <svg
                          className="w-4 h-4 text-[#e59500]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </span>
                      <span className="text-lg font-medium text-black group-hover:text-[#840032]">
                        {page.title || 'Explore More'}
                      </span>
                    </div>
                    <p className="text-black group-hover:text-gray-700 ml-11">
                      {page.path ? getPageDescription(page.path) : 'Discover more content on our website.'}
                    </p>
                  </Link>
                </div>
              ) : null
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnviewedPages; 