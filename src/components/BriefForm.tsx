"use client";

import React, { useState, FormEvent, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Типы для полей формы
interface FormField {
  label: string;
  name: string;
  type: string;
  description?: string;
  options?: string[];
  subfields?: FormField[];
}

interface BriefSection {
  title: string;
  description?: string;
  fields: FormField[];
}

export default function BriefForm() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  // Предотвращаем гидратацию
  useEffect(() => {
    setMounted(true);
  }, []);

  // Обработчик изменения полей формы
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Обработчик изменения чекбокса
  const handlePrivacyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrivacyAccepted(e.target.checked);
  };

  // Получаем полное сообщение для отправки
  const getFormattedMessage = (): string => {
    let message = "Бриф на разработку сайта\n\n";
    
    briefSections.forEach((section: BriefSection) => {
      message += `${section.title}\n`;
      message += "-------------------\n";
      
      section.fields.forEach((field: FormField) => {
        if (field.type === 'group' && field.subfields) {
          message += `${field.label}:\n`;
          field.subfields.forEach((subfield: FormField) => {
            const value = formData[subfield.name] || '';
            if (value) {
              message += `  - ${subfield.label}: ${value}\n`;
            }
          });
        } else {
          const value = formData[field.name] || '';
          if (value) {
            message += `${field.label}: ${value}\n`;
          }
        }
      });
      
      message += "\n";
    });

    return message;
  };

  // Отправка формы
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!privacyAccepted) {
      setError("Пожалуйста, подтвердите согласие с политикой конфиденциальности");
      return;
    }
    
    setIsSubmitting(true);
    setSuccess(false);
    setError("");
    
    try {
      // Получаем полное сообщение
      const message = getFormattedMessage();
      
      // Отправляем в Telegram
      const telegramRes = await fetch("/api/telegram", {
        method: "POST",
        body: JSON.stringify({
          firstName: formData.companyName || "",
          email: formData.contactEmail || "",
          phone: formData.contactPhone || "",
          formType: "Website Brief",
          message: message,
          source: "brief"
        }),
        headers: { "Content-Type": "application/json" },
      });
      
      if (!telegramRes.ok) {
        const errorData = await telegramRes.json();
        throw new Error(errorData.error || "Ошибка при отправке формы");
      }
      
      setSuccess(true);
      // Очищаем форму после успешной отправки
      setFormData({});
      setPrivacyAccepted(false);
      
    } catch (err) {
      console.error("Ошибка отправки формы:", err);
      setError(err instanceof Error ? err.message : "Произошла ошибка при отправке формы");
    } finally {
      setIsSubmitting(false);
    }
  };

  const briefSections: BriefSection[] = [
    {
      title: "1. Общие вопросы",
      fields: [
        { label: "Название компании", name: "companyName", type: "text" },
        { label: "Контактное лицо", name: "contactName", type: "text" },
        { label: "Адрес, телефоны, почта", name: "contactInfo", type: "text" },
        { label: "Краткое описание компании, основных товаров/услуг", name: "companyDescription", type: "textarea" },
        { label: "География реализации товаров, услуг", name: "geography", type: "text" },
        { label: "Кто является основным потребителем товаров, услуг", name: "targetAudience", type: "text" },
        { label: "Адрес существующего сайта", name: "existingWebsite", type: "text" },
        { label: "Конкуренты, их веб-ресурсы", name: "competitors", type: "textarea" },
        { label: "Задача, которую должен решать сайт", name: "websiteGoal", type: "textarea" },
        { label: "Желательный срок запуска сайта", name: "launchDeadline", type: "text" },
        { label: "Планируемый бюджет", name: "budget", type: "text" }
      ]
    },
    {
      title: "2. Рекомендации по дизайну сайта",
      fields: [
        { 
          label: "Тональность сайта", 
          name: "websiteTone", 
          type: "select",
          options: ["Светлая", "Темная"],
          description: "Светлая или темная (темная используется значительно реже)"
        },
        { 
          label: "Яркость, контрастность", 
          name: "brightness", 
          type: "select",
          options: ["Яркий и контрастный", "Умеренный и спокойный"],
          description: "Сайт должен быть ярким c контрастными элементами или умеренным и спокойным?"
        },
        { 
          label: "Основные цвета на сайте (набор из 2-3 цветов)", 
          name: "colors", 
          type: "text",
          description: "Если есть логотип, то цвета диктует он."
        },
        { 
          label: "Настроение и ассоциации, которые должен вызывать сайт", 
          name: "mood", 
          type: "select",
          options: [
            "Строгий корпоративный дизайн", 
            "Яркий и выразительный дизайн", 
            "Дизайн, насыщенный иллюстрациями / фотографиями", 
            "Минималистичный дизайн с упором на функциональность", 
            "Ретро стиль",
            "Другое (укажите в комментариях)"
          ]
        }
      ]
    },
    {
      title: "3. Примеры сайтов с качественным дизайном",
      description: "Своими словами опишите, чем вас привлекает тот или иной сайт. Например: сочетание цветов, качественное изображение в шапке, хорошо подобранные шрифты и т.д. Просим избегать малоинформативных формулировок формата: «хорошая шапка сайта, современный дизайн, информативный сайт».",
      fields: [
        { 
          label: "Пример 1", 
          name: "example1", 
          type: "group", 
          subfields: [
            { label: "Ссылка", name: "url1", type: "text" },
            { label: "Что нравится в сайте (своими словами)", name: "description1", type: "textarea" }
          ]
        },
        { 
          label: "Пример 2", 
          name: "example2", 
          type: "group", 
          subfields: [
            { label: "Ссылка", name: "url2", type: "text" },
            { label: "Что нравится в сайте (своими словами)", name: "description2", type: "textarea" }
          ]
        },
        { 
          label: "Пример 3", 
          name: "example3", 
          type: "group", 
          subfields: [
            { label: "Ссылка", name: "url3", type: "text" },
            { label: "Что нравится в сайте (своими словами)", name: "description3", type: "textarea" }
          ]
        }
      ]
    },
    {
      title: "4. Дополнительно",
      fields: [
        { 
          label: "Есть ли у Вас элементы дизайна, которые могут быть использованы при создании дизайна сайта?", 
          name: "designElements", 
          type: "text",
          description: "Логотип, фирменный стиль, цвета, шрифты, полиграфия, и т.д."
        },
        { 
          label: "Есть ли у Вас контент для сайта?", 
          name: "existingContent", 
          type: "text",
          description: "тексты, переводы, фотографии, прочее?"
        }
      ]
    },
    {
      title: "5. Домен/хостинг сайта",
      fields: [
        { label: "Какое доменное имя вам хотелось бы получить для сайта?", name: "domainName", type: "text" },
        { 
          label: "Хостинг свой или наш?", 
          name: "hosting", 
          type: "select",
          options: ["Ваш хостинг", "Наш хостинг", "Еще не определились"]
        }
      ]
    },
    {
      title: "6. Контакты для размещения на сайте",
      fields: [
        { label: "Телефон", name: "contactPhone", type: "text" },
        { label: "Адрес", name: "contactAddress", type: "text" },
        { label: "E-mail", name: "contactEmail", type: "email" },
        { label: "Другие", name: "otherContacts", type: "text" }
      ]
    },
    {
      title: "7. Разделы меню сайта",
      description: "Пример: Главная, О компании (История / Наша команда / Контакты), Каталог, Услуги, Оплата (Цены), Доставка, Наши работы, Контакты",
      fields: [
        { label: "Разделы меню", name: "menuItems", type: "textarea" }
      ]
    },
    {
      title: "8. Функционал сайта",
      description: "Выберите модули, дайте их описание и ссылку на пример",
      fields: [
        { label: "Новостная лента", name: "newsModule", type: "textarea", description: "оперативное добавление и изменение новостей" },
        { label: "Вопрос-ответ", name: "faqModule", type: "textarea", description: "обработка ответов на вопросы посетителей" },
        { label: "Статьи", name: "articlesModule", type: "textarea", description: "работа с любой текстовой информацией на вашем сайте" },
        { label: "Онлайн-заказ", name: "orderModule", type: "textarea", description: "заказ продукции или услуг на сайте" },
        { label: "Каталог продукции", name: "catalogModule", type: "textarea", description: "работа со структурированной информацией о продуктах или услугах" },
        { label: "Интернет-магазин", name: "ecommerceModule", type: "textarea", description: "осуществление продаж через интернет и обработка заказов" },
        { label: "Интеграция магазина с банковской системой оплаты", name: "paymentIntegration", type: "textarea" },
        { label: "Рассылка", name: "newsletterModule", type: "textarea", description: "рассылка пресс-релизов и новостей клиентам" },
        { label: "Баннерная система", name: "bannerModule", type: "textarea", description: "размещение рекламы на страницах сайта" },
        { label: "Поисковая система", name: "searchModule", type: "textarea", description: "поиск по сайту, поиск по каталогу, по базе" },
        { label: "Фотогалерея", name: "galleryModule", type: "textarea", description: "просмотр галереи изображений" },
        { label: "Выгрузка товаров", name: "productExport", type: "textarea", description: "интеграция товаров на сайте и т.д." },
        { label: "Онлайн консультант", name: "chatModule", type: "textarea", description: "возможность отвечать на вопросы посетителей онлайн" },
        { label: "Голосование", name: "pollModule", type: "textarea", description: "проведение опросов и просмотр результатов" },
        { label: "Отзывы", name: "reviewsModule", type: "textarea", description: "сбор и публикация отзывов" },
        { label: "Языковые версии сайта", name: "multilingual", type: "textarea", description: "сколько языков" },
        { label: "Личный кабинет", name: "personalAccount", type: "textarea", description: "и функции, какие должны быть" },
        { label: "Фильтры, сортировки товаров", name: "filters", type: "textarea" },
        { label: "Дополнительный вид карточек товаров", name: "productCards", type: "textarea" },
        { label: "Товарные предложения", name: "productOffers", type: "textarea" },
        { label: "Отзывы", name: "reviews", type: "textarea", description: "по сайту или по товарам" },
        { label: "Модуль доставки", name: "deliveryModule", type: "textarea", description: "расчет доставки онлайн" },
        { label: "Другие модули", name: "otherModules", type: "textarea", description: "перечислить что еще необходимо, можно с примерами сайтов" }
      ]
    },
    {
      title: "9. Дополнительные пожелания",
      fields: [
        { 
          label: "Дополнительные (и ценные для вас) пожелания по разработке", 
          name: "additionalWishes", 
          type: "textarea" 
        }
      ]
    }
  ];

  const renderField = (field: FormField) => {
    switch (field.type) {
      case 'text':
        return (
          <div className="mb-4" key={field.name}>
            <label className="block text-sm font-medium mb-1 text-black" htmlFor={field.name}>
              {field.label} {field.description && <span className="text-black text-xs">({field.description})</span>}
            </label>
            <input
              type="text"
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e59500] bg-white text-black"
            />
          </div>
        );
      case 'email':
        return (
          <div className="mb-4" key={field.name}>
            <label className="block text-sm font-medium mb-1 text-black" htmlFor={field.name}>
              {field.label} {field.description && <span className="text-black text-xs">({field.description})</span>}
            </label>
            <input
              type="email"
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e59500] bg-white text-black"
            />
          </div>
        );
      case 'textarea':
        return (
          <div className="mb-4" key={field.name}>
            <label className="block text-sm font-medium mb-1 text-black" htmlFor={field.name}>
              {field.label} {field.description && <span className="text-black text-xs">({field.description})</span>}
            </label>
            <textarea
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e59500] bg-white text-black"
            ></textarea>
          </div>
        );
      case 'select':
        return (
          <div className="mb-4" key={field.name}>
            <label className="block text-sm font-medium mb-1 text-black" htmlFor={field.name}>
              {field.label} {field.description && <span className="text-black text-xs">({field.description})</span>}
            </label>
            <select
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e59500] bg-white text-black"
            >
              <option value="">Выберите...</option>
              {field.options?.map((option: string) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        );
      case 'group':
        return (
          <div className="mb-4 p-4 border border-gray-200 rounded-md bg-white" key={field.name}>
            <h4 className="font-medium mb-3 text-black">{field.label}</h4>
            {field.subfields?.map((subfield: FormField) => renderField(subfield))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="w-full text-black bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {!mounted ? null : success ? (
        <div className="p-6 md:p-8 text-center">
          <div className="mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2 text-black">Бриф успешно отправлен!</h3>
          <p className="text-black mb-6">Спасибо за заполнение брифа. Мы свяжемся с вами в ближайшее время для обсуждения деталей проекта.</p>
          <button
            type="button"
            onClick={() => setSuccess(false)}
            className="gradient-button text-center px-8 py-3 text-lg min-w-[180px] inline-flex justify-center items-center hover:scale-105 transition-transform duration-300"
          >
            Заполнить снова
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 md:p-8 bg-white">
          {briefSections.map((section, index) => (
            <div 
              key={index}
              className="mb-8 border border-gray-200 rounded-lg overflow-hidden shadow-md"
            >
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-black">{section.title}</h3>
                {section.description && (
                  <div className="mt-2 mb-4 text-sm text-black bg-white p-3 rounded border border-gray-100">
                    {section.description}
                  </div>
                )}
                <div className="space-y-4 mt-4">
                  {section.fields.map(field => renderField(field))}
                </div>
              </div>
            </div>
          ))}

          {error && (
            <div className="p-3 mb-4 bg-red-100 text-red-700 border border-red-200 rounded-md">
              {error}
            </div>
          )}

          <div className="mt-8 flex items-start gap-2">
            <input
              type="checkbox"
              id="privacy"
              checked={privacyAccepted}
              onChange={handlePrivacyChange}
              className="mt-1 h-4 w-4 cursor-pointer transition-all duration-300 ease-out accent-black"
            />
            <label htmlFor="privacy" className="text-sm cursor-pointer text-black">
              Я согласен на обработку моих персональных данных в соответствии с{" "}
              <Link 
                href="/privacy" 
                className="font-semibold relative text-[#840032] hover:text-[#e59500] transition-colors duration-300 no-underline"
                target="_blank"
              >
                Политикой конфиденциальности
              </Link>
            </label>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`gradient-button text-center px-8 py-3 text-lg min-w-[180px] inline-flex justify-center items-center transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Отправка...
                </>
              ) : "Отправить бриф"}
            </button>
          </div>
        </form>
      )}
    </motion.div>
  );
} 