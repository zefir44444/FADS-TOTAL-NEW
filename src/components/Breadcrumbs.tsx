"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Breadcrumbs = () => {
  const [mounted] = useState(false);
  const pathname = usePathname();
  
  // Если мы на главной странице, не показываем хлебные крошки
  if (pathname === '/') {
    return null;
  }
  
  // Разбиваем путь на сегменты
  const segments = pathname.split('/').filter(segment => segment);
  
  // Создаем массив хлебных крошек
  const breadcrumbs = [
    { name: 'Homepage', path: '/' },
    ...segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join('/')}`;
      // Преобразуем сегмент пути в читаемое название (например, "privacy" -> "Privacy")
      const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      return { name, path };
    })
  ];

  if (!mounted) return null;
  
  return (
    <nav className="text-sm pt-6 px-4 md:px-6 lg:px-8" aria-label="Breadcrumb">
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
                className="text-gray-500"
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

export default Breadcrumbs; 