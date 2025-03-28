'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Определение структуры страницы
interface Page {
  path: string;
  title: string;
  description: string;
}

// Все страницы сайта с предустановленными описаниями
const ALL_PAGES: Page[] = [
  // Главная страница
  { 
    path: '/', 
    title: 'Home', 
    description: 'Discover our digital agency and how we can help your business succeed online.'
  },
  { 
    path: '/portfolio', 
    title: 'Portfolio', 
    description: 'Discover our portfolio featuring real examples of our projects and solutions.'
  },
  { 
    path: '/services', 
    title: 'Services', 
    description: 'Explore our services that will help your business grow in the digital environment.'
  },
  { 
    path: '/services/website-audits', 
    title: 'Website Audits', 
    description: 'Professional analysis of your website to identify issues and improvement opportunities.'
  },
  { 
    path: '/services/maintenance', 
    title: 'Website Maintenance', 
    description: 'Keep your website running smoothly with our maintenance and support services.'
  },
  { 
    path: '/knowledge-base', 
    title: 'Knowledge Base', 
    description: 'Useful articles, guides, and expert advice on web development and marketing.'
  },
  { 
    path: '/knowledge-base/what-is-seo', 
    title: 'What is SEO', 
    description: 'Learn the basics of search engine optimization and why it matters.'
  },
  { 
    path: '/knowledge-base/google-search-ads-guide', 
    title: 'Google Search Ads Guide', 
    description: 'Comprehensive guide to creating effective Google Search Ads campaigns.'
  },
  { 
    path: '/knowledge-base/web-accessibility', 
    title: 'Web Accessibility', 
    description: 'Learn how to make your website accessible for all users and comply with standards.'
  },
  { 
    path: '/knowledge-base/website-performance-checklist', 
    title: 'Website Performance Checklist', 
    description: 'Essential tips and techniques to improve your website\'s speed and performance.'
  },
  { 
    path: '/news', 
    title: 'News', 
    description: 'Latest news and updates in the world of web development and internet marketing.'
  },
  { 
    path: '/websites', 
    title: 'Websites', 
    description: 'Explore different types of websites we develop for our clients.'
  },
  { 
    path: '/websites/personal', 
    title: 'Personal Websites', 
    description: 'Custom websites for individuals, personal brands, and professionals.'
  },
  { 
    path: '/websites/business', 
    title: 'Business Websites', 
    description: 'Corporate websites to strengthen your company\'s online presence.'
  },
  { 
    path: '/websites/ecommerce', 
    title: 'E-commerce', 
    description: 'Online stores with advanced features for selling products.'
  },
  { 
    path: '/websites/landing', 
    title: 'Landing Pages', 
    description: 'High-converting landing pages designed to turn visitors into customers.'
  },
  { 
    path: '/websites/blogs', 
    title: 'Blog Websites', 
    description: 'Content-focused websites to share your expertise and attract readers.'
  },
  { 
    path: '/websites/custom', 
    title: 'Custom Websites', 
    description: 'Tailored website solutions designed for your unique business needs.'
  },
  { 
    path: '/websites/showcases', 
    title: 'Website Showcases', 
    description: 'Examples of our best website projects with detailed case studies.'
  },
  { 
    path: '/promotion', 
    title: 'Promotion', 
    description: 'Strategies and methods to improve your website visibility online.'
  },
  { 
    path: '/promotion/seo', 
    title: 'SEO Services', 
    description: 'Improve your website\'s visibility in search engine results.'
  },
  { 
    path: '/promotion/google-ads', 
    title: 'Google Ads', 
    description: 'Targeted advertising campaigns on Google platforms for maximum ROI.'
  },
  { 
    path: '/promotion/youtube', 
    title: 'YouTube Promotion', 
    description: 'Video marketing and promotion strategies to grow your YouTube audience.'
  },
  { 
    path: '/promotion/growth-engine', 
    title: 'Growth Engine', 
    description: 'Comprehensive growth strategies to scale your online business.'
  },
];

const UnviewedPages: React.FC = () => {
  const pathname = usePathname();
  const [recommendedPages, setRecommendedPages] = useState<Page[]>([]);
  const [isClient, setIsClient] = useState(false);
  
  // Эффект, который выполняется только один раз при монтировании компонента
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Эффект, который зависит от pathname и isClient
  useEffect(() => {
    if (isClient) {
      // Выбираем рекомендации только на клиенте
      const availablePages = ALL_PAGES.filter(page => page.path !== pathname);
      const randomThree = getRandomItems(availablePages, 3);
      setRecommendedPages(randomThree);
    } else {
      // При серверном рендеринге используем детерминированный выбор
      // (первые 3 страницы, которые не совпадают с текущим путем)
      const availablePages = ALL_PAGES.filter(page => page.path !== pathname);
      setRecommendedPages(availablePages.slice(0, 3));
    }
  }, [pathname, isClient]);
  
  // Если нет рекомендаций, ничего не показываем
  if (recommendedPages.length === 0) {
    return null;
  }
  
  return (
    <div className="mt-12 mb-8">
      <div className="w-full bg-white rounded-xl shadow-md border border-gray-100">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <svg 
              className="w-5 h-5 mr-2 text-[#e59500]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <h3 className="text-lg font-semibold text-[#840032]">
              You might also be interested in:
            </h3>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recommendedPages.map((page) => (
              <li key={page.path}>
                <Link
                  href={page.path}
                  prefetch={true}
                  className="p-3 rounded border border-gray-100 hover:border-[#840032] hover:shadow-sm block"
                >
                  <h4 className="font-medium text-base text-black mb-1">{page.title}</h4>
                  <p className="text-sm text-gray-600">{page.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Вспомогательная функция для получения случайных элементов из массива
function getRandomItems<T>(array: T[], count: number): T[] {
  if (!array || array.length === 0) return [];
  if (array.length <= count) return [...array];
  
  const result: T[] = [];
  const copyArray = [...array];
  
  for (let i = 0; i < count; i++) {
    if (copyArray.length === 0) break;
    const randomIndex = Math.floor(Math.random() * copyArray.length);
    result.push(copyArray[randomIndex]);
    copyArray.splice(randomIndex, 1); // Удаляем выбранный элемент
  }
  
  return result;
}

export default UnviewedPages; 