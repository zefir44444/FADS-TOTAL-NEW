"use client";

import React, { useState, useEffect } from 'react';

interface SocialShareProps {
  url?: string;
  title?: string;
  text?: string;
}

export default function SocialShare({ url, title, text }: SocialShareProps) {
  const [currentUrl, setCurrentUrl] = useState<string>(url || "");
  const [currentTitle, setCurrentTitle] = useState<string>(title || "");
  const [currentText, setCurrentText] = useState<string>(text || "");

  useEffect(() => {
    // Устанавливаем значения только на стороне клиента
    if (typeof window !== "undefined") {
      if (!url) {
        setCurrentUrl(window.location.href);
      }
      if (!title) {
        setCurrentTitle(document.title);
      }
      if (!text) {
        // Используем мета-описание или заголовок страницы, если текст не указан
        const metaDescription = document.querySelector('meta[name="description"]');
        setCurrentText(metaDescription ? metaDescription.getAttribute('content') || document.title : document.title);
      }
    }
  }, [url, title, text]);

  return (
    <div className="flex items-center gap-4">
      <a 
        href={`https://twitter.com/share?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(currentText)}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-[#e59500] transition-colors p-2 hover:bg-gray-100 rounded-full"
        aria-label="Share on X (Twitter)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>
      <a 
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-[#e59500] transition-colors p-2 hover:bg-gray-100 rounded-full"
        aria-label="Share on Facebook"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
        </svg>
      </a>
      <a 
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(currentTitle)}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-[#e59500] transition-colors p-2 hover:bg-gray-100 rounded-full"
        aria-label="Share on LinkedIn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </a>
      <a 
        href={`https://wa.me/?text=${encodeURIComponent(currentText)} ${encodeURIComponent(currentUrl)}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-[#e59500] transition-colors p-2 hover:bg-gray-100 rounded-full"
        aria-label="Share on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.336-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
        </svg>
      </a>
      <a 
        href={`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(currentText)}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-[#e59500] transition-colors p-2 hover:bg-gray-100 rounded-full"
        aria-label="Share on Telegram"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.535.223l.19-2.712 4.94-4.465c.215-.19-.047-.297-.332-.106l-6.055 3.805-2.612-.852c-.567-.176-.578-.567.12-.838l10.189-3.924c.475-.176.894.107.707.838z"/>
        </svg>
      </a>
    </div>
  );
} 