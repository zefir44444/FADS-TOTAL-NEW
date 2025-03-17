"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [is404, setIs404] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    // Проверяем 404 страницу на клиенте
    try {
      // Проверка на 404 по нескольким признакам
      const is404Page = 
        pathname === '/not-found' || 
        document.title.includes('404') || 
        (typeof window !== 'undefined' && window.location.pathname !== pathname);
      
      setIs404(is404Page);
      
      // Дополнительная проверка - если страница не найдена, попробуем сделать запрос к ней
      if (!is404Page && pathname !== '/') {
        fetch(pathname)
          .then(response => {
            if (response.status === 404) {
              setIs404(true);
            }
          })
          .catch(() => {
            // В случае ошибки сети, считаем что это может быть 404
            setIs404(true);
          });
      }
    } catch (error) {
      console.error('Error checking for 404:', error);
    }
  }, [pathname]);
  
  // Если мы на главной странице или страница еще не смонтирована, не показываем хлебные крошки
  if (!mounted || pathname === '/' || pathname === null) {
    return null;
  }
  
  // Если это страница 404, показываем специальные хлебные крошки с "404"
  if (is404) {
    return (
      <nav className="text-sm pt-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link 
              href="/"
              className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
            >
              Digital Hub
            </Link>
          </li>
          <li className="inline-flex items-center">
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700 font-medium">
              404
            </span>
          </li>
        </ol>
      </nav>
    );
  }
  
  // Разбиваем путь на сегменты
  const segments = pathname.split('/').filter(segment => segment);
  
  // Создаем массив хлебных крошек
  const breadcrumbs = [
    { name: 'Digital Hub', path: '/' },
    ...segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join('/')}`;
      // Преобразуем сегмент пути в читаемое название (например, "privacy" -> "Privacy")
      const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      return { name, path };
    })
  ];
  
  return (
    <nav className="text-sm pt-6" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.path} className="inline-flex items-center">
            {index > 0 && (
              <span className="mx-2 text-gray-500">/</span>
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-gray-700 font-medium">
                {breadcrumb.name}
              </span>
            ) : (
              <Link 
                href={breadcrumb.path}
                className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
              >
                {breadcrumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
} 