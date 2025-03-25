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
  const [shareUrl, setShareUrl] = useState<string>('');
  const [shareTitle, setShareTitle] = useState<string>('');
  const [shareText, setShareText] = useState<string>('');
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Building the complete URL from host and current path
      const baseUrl = window.location.origin;
      const currentPath = url || pathname || window.location.pathname;
      const fullUrl = `${baseUrl}${currentPath}`;
      
      console.log('Current path (pathname):', pathname);
      console.log('Full URL for sharing:', fullUrl);
      
      setShareUrl(fullUrl);
      
      // Page title
      const pageTitle = title || document.title;
      setShareTitle(pageTitle);
      
      // Page description
      const metaDescription = document.querySelector('meta[name="description"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      const description = text || 
        (ogDescription ? ogDescription.getAttribute('content') : null) || 
        (metaDescription ? metaDescription.getAttribute('content') : null) || 
        pageTitle;
      
      setShareText(description);
    }
  }, [pathname, url, title, text]);

  // Copy to clipboard function
  const copyToClipboard = () => {
    if (navigator.clipboard && shareUrl) {
      navigator.clipboard.writeText(shareUrl)
        .then(() => {
          console.log('URL copied:', shareUrl);
          alert('Link copied: ' + shareUrl);
        })
        .catch(err => console.error('Error copying:', err));
    } else {
      alert('Please copy this link manually: ' + shareUrl);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <FacebookShareButton 
        url={shareUrl}
        blankTarget={true}
      >
        <div className="text-gray-500 hover:text-[#e59500] transition-colors p-2 hover:bg-gray-100 rounded-full">
          <FaFacebook size={20} />
        </div>
      </FacebookShareButton>

      <TwitterShareButton 
        url={shareUrl}
        title={shareTitle}
        blankTarget={true}
      >
        <div className="text-gray-500 hover:text-[#e59500] transition-colors p-2 hover:bg-gray-100 rounded-full">
          <FaTwitter size={20} />
        </div>
      </TwitterShareButton>

      <LinkedinShareButton 
        url={shareUrl}
        blankTarget={true}
      >
        <div className="text-gray-500 hover:text-[#e59500] transition-colors p-2 hover:bg-gray-100 rounded-full">
          <FaLinkedin size={20} />
        </div>
      </LinkedinShareButton>

      <TelegramShareButton 
        url={shareUrl}
        title={shareTitle}
        blankTarget={true}
      >
        <div className="text-gray-500 hover:text-[#e59500] transition-colors p-2 hover:bg-gray-100 rounded-full">
          <FaTelegram size={20} />
        </div>
      </TelegramShareButton>

      <WhatsappShareButton 
        url={shareUrl}
        title={shareTitle}
        separator=" — "
        blankTarget={true}
      >
        <div className="text-gray-500 hover:text-[#e59500] transition-colors p-2 hover:bg-gray-100 rounded-full">
          <FaWhatsapp size={20} />
        </div>
      </WhatsappShareButton>
      
      <EmailShareButton
        url={shareUrl}
        subject={shareTitle}
        body={`${shareText}\n\n${shareUrl}`}
        blankTarget={true}
      >
        <div className="text-gray-500 hover:text-[#e59500] transition-colors p-2 hover:bg-gray-100 rounded-full">
          <FaEnvelope size={20} />
        </div>
      </EmailShareButton>
      
      <button 
        onClick={copyToClipboard} 
        className="text-gray-500 hover:text-[#e59500] transition-colors p-2 hover:bg-gray-100 rounded-full focus:outline-none"
        aria-label="Copy link"
      >
        <FaShareAlt size={20} />
      </button>
    </div>
  );
} 