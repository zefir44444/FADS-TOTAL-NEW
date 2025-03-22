import type { Metadata } from 'next';
import BriefForm from '../../components/BriefForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Бриф на разработку сайта | FADS',
  description: 'Заполните бриф на разработку сайта и получите профессиональную оценку вашего проекта от наших специалистов',
  alternates: {
    canonical: 'https://fads.fi/brief',
  },
};

export default function BriefPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        {/* Декоративные элементы фона */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-[#840032]/10 to-[#e59500]/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Анкета на разработку сайта
            </h1>
            <p className="text-lg max-w-3xl mx-auto text-black">
              Если Вам необходима помощь в заполнении брифа, свяжитесь с нами, и мы с радостью поможем.
            </p>
            <p className="text-lg max-w-3xl mx-auto text-black mt-2">
              Вы также можете оставить свои контактные данные через{" "}
              <Link href="/contact" className="text-[#e59500] hover:text-[#840032] font-medium transition-colors">
                форму обратной связи
              </Link>{" "}
              на нашем сайте или написать нам на почту:{" "}
              <a 
                href="mailto:info@fads.fi" 
                className="text-[#e59500] hover:text-[#840032] font-medium transition-colors"
              >
                info@fads.fi
              </a>
              <p className="text-lg max-w-3xl mx-auto text-black mt-2">Не обязательно заполнять все поля, если у вас нет информации или вы не знаете, что именно вам нужно. Мы свяжемся с вами в течение 24 часов после отправки брифа по указанным вами контактам.</p>
            </p>
          </div>
        </div>
      </section>

      {/* Brief Form Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
            <BriefForm />
          </div>
        </div>
      </section>
    </div>
  );
} 