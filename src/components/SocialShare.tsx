"use client";

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  EmailShareButton
} from 'next-share';
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
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [shareData, setShareData] = useState({
    url: '',
    title: '',
    text: ''
  });
  const [copied, setCopied] = useState(false);
  
  // Установка mounted после рендеринга на клиенте
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Установка данных после рендеринга на клиенте
  useEffect(() => {
    if (mounted) {
      const baseUrl = window.location.origin;
      const currentPath = url || window.location.pathname || '';
      const fullUrl = `${baseUrl}${currentPath}`;
      const pageTitle = title || document.title || '';
      const pageText = text || pageTitle;
      
      setShareData({
        url: fullUrl,
        title: pageTitle,
        text: pageText
      });
    }
  }, [pathname, url, title, text, mounted]);

  // Копирование без alert
  const copyToClipboard = () => {
    if (mounted && navigator.clipboard && shareData.url) {
      navigator.clipboard.writeText(shareData.url)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(() => {});
    }
  };

  // Рендерим компонент только на клиенте
  if (!mounted) {
    return null;
  }

  // Рендерим кнопки только если у нас есть URL для шаринга
  if (!shareData.url) {
    return null;
  }

  return (
    <div className="relative flex items-center gap-2">
      <FacebookShareButton 
        url={shareData.url}
        blankTarget={true}
      >
        <div className="text-gray-500 hover:text-[#840032] transition-colors p-2 hover:bg-gray-100 rounded-full">
          <FaFacebook size={20} />
        </div>
      </FacebookShareButton>

      <TwitterShareButton 
        url={shareData.url}
        title={shareData.title}
        blankTarget={true}
      >
        <div className="text-gray-500 hover:text-[#840032] transition-colors p-2 hover:bg-gray-100 rounded-full">
          <FaTwitter size={20} />
        </div>
      </TwitterShareButton>

      <LinkedinShareButton 
        url={shareData.url}
        blankTarget={true}
      >
        <div className="text-gray-500 hover:text-[#840032] transition-colors p-2 hover:bg-gray-100 rounded-full">
          <FaLinkedin size={20} />
        </div>
      </LinkedinShareButton>

      <TelegramShareButton 
        url={shareData.url}
        title={shareData.title}
        blankTarget={true}
      >
        <div className="text-gray-500 hover:text-[#840032] transition-colors p-2 hover:bg-gray-100 rounded-full">
          <FaTelegram size={20} />
        </div>
      </TelegramShareButton>

      <WhatsappShareButton 
        url={shareData.url}
        title={shareData.title}
        separator=" — "
        blankTarget={true}
      >
        <div className="text-gray-500 hover:text-[#840032] transition-colors p-2 hover:bg-gray-100 rounded-full">
          <FaWhatsapp size={20} />
        </div>
      </WhatsappShareButton>
      
      <EmailShareButton
        url={shareData.url}
        subject={shareData.title}
        body={`${shareData.text}\n\n${shareData.url}`}
        blankTarget={true}
      >
        <div className="text-gray-500 hover:text-[#840032] transition-colors p-2 hover:bg-gray-100 rounded-full">
          <FaEnvelope size={20} />
        </div>
      </EmailShareButton>
      
      <button 
        onClick={copyToClipboard} 
        className="text-gray-500 hover:text-[#840032] transition-colors p-2 hover:bg-gray-100 rounded-full focus:outline-none"
        aria-label="Copy link"
      >
        <FaShareAlt size={20} />
      </button>
      
      {copied && (
        <div className="absolute -top-8 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded">
          Link copied!
        </div>
      )}
    </div>
  );
} 