"use client";

import React, { useState, useEffect } from 'react';
import { 
  EmailShareButton, 
  FacebookShareButton, 
  TwitterShareButton, 
  LinkedinShareButton, 
  TelegramShareButton, 
  WhatsappShareButton
} from 'react-share';
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaTelegram, 
  FaWhatsapp,
  FaShareAlt,
  FaEnvelope
} from 'react-icons/fa';

interface SocialShareProps {
  url?: string;
  title?: string;
  text?: string;
}

export default function SocialShare({ url, title, text }: SocialShareProps) {
  const [shareUrl, setShareUrl] = useState<string>('');
  const [shareTitle, setShareTitle] = useState<string>('');
  const [shareText, setShareText] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Установка URL
      const pageUrl = url || window.location.href;
      setShareUrl(pageUrl);
      
      // Установка заголовка
      const pageTitle = title || document.title;
      setShareTitle(pageTitle);
      
      // Установка описания
      const metaDescription = document.querySelector('meta[name="description"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      const description = text || 
        (ogDescription ? ogDescription.getAttribute('content') : null) || 
        (metaDescription ? metaDescription.getAttribute('content') : null) || 
        pageTitle;
      
      setShareText(description);
    }
  }, [url, title, text]);

  // Копирование ссылки в буфер обмена
  const copyToClipboard = () => {
    if (navigator.clipboard && shareUrl) {
      navigator.clipboard.writeText(shareUrl)
        .then(() => alert('Ссылка скопирована в буфер обмена'))
        .catch(err => console.error('Ошибка при копировании: ', err));
    } else {
      alert('Пожалуйста, скопируйте эту ссылку вручную: ' + shareUrl);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <FacebookShareButton 
        url={shareUrl}
        hashtag="#fads"
        className="focus:outline-none"
      >
        <div className="text-gray-500 hover:text-[#e59500] transition-colors p-2 hover:bg-gray-100 rounded-full">
          <FaFacebook size={20} />
        </div>
      </FacebookShareButton>

      <TwitterShareButton 
        url={shareUrl}
        title={shareText}
        className="focus:outline-none"
      >
        <div className="text-gray-500 hover:text-[#e59500] transition-colors p-2 hover:bg-gray-100 rounded-full">
          <FaTwitter size={20} />
        </div>
      </TwitterShareButton>

      <LinkedinShareButton 
        url={shareUrl}
        title={shareTitle}
        className="focus:outline-none"
      >
        <div className="text-gray-500 hover:text-[#e59500] transition-colors p-2 hover:bg-gray-100 rounded-full">
          <FaLinkedin size={20} />
        </div>
      </LinkedinShareButton>

      <TelegramShareButton 
        url={shareUrl}
        title={shareText}
        className="focus:outline-none"
      >
        <div className="text-gray-500 hover:text-[#e59500] transition-colors p-2 hover:bg-gray-100 rounded-full">
          <FaTelegram size={20} />
        </div>
      </TelegramShareButton>

      <WhatsappShareButton 
        url={shareUrl}
        title={shareText}
        separator=" — "
        className="focus:outline-none"
      >
        <div className="text-gray-500 hover:text-[#e59500] transition-colors p-2 hover:bg-gray-100 rounded-full">
          <FaWhatsapp size={20} />
        </div>
      </WhatsappShareButton>
      
      <EmailShareButton
        url={shareUrl}
        subject={shareTitle}
        body={shareText}
        className="focus:outline-none"
      >
        <div className="text-gray-500 hover:text-[#e59500] transition-colors p-2 hover:bg-gray-100 rounded-full">
          <FaEnvelope size={20} />
        </div>
      </EmailShareButton>
      
      <button 
        onClick={copyToClipboard} 
        className="text-gray-500 hover:text-[#e59500] transition-colors p-2 hover:bg-gray-100 rounded-full focus:outline-none"
        aria-label="Копировать ссылку"
      >
        <FaShareAlt size={20} />
      </button>
    </div>
  );
} 