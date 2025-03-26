"use client";

import { useEffect, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsShowing(true);
    } else {
      const timer = setTimeout(() => {
        setIsShowing(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isShowing) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
        isOpen 
          ? 'opacity-100 transition-opacity duration-300' 
          : 'opacity-0 transition-opacity duration-300'
      }`}
    >
      <div 
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm ${
          isOpen 
            ? 'opacity-100 transition-opacity duration-300' 
            : 'opacity-0 transition-opacity duration-300'
        }`} 
        onClick={onClose}
      />
      
      <div 
        className={`bg-white rounded-lg w-[500px] relative z-10 ${
          isOpen 
            ? 'opacity-100 translate-y-0 transition-all duration-300' 
            : 'opacity-0 translate-y-4 transition-all duration-300'
        }`}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal; 