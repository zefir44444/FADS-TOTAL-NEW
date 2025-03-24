import Link from 'next/link';

import BriefForm from '../../../components/BriefFormEn';

export default function BriefPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-[#840032]/10 to-[#e59500]/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Website Development Brief
            </h1>
            <p className="text-left text-lg max-w-3xl mx-auto text-black">
              If you need assistance filling out this brief, please contact us, and we&apos;ll be happy to help.
            </p>
            <p className="text-left text-lg max-w-3xl mx-auto text-black mt-2">
              You don&apos;t need to fill in all the fields if you don&apos;t have the information or aren&apos;t sure what you need. We&apos;ll contact you within 24 hours after you submit the brief using the contact details you provide.
            </p>

            <p className="text-left text-lg max-w-3xl mx-auto text-black mt-2">
              You can also provide your contact information through our{" "}
              <Link href="/en/contact" className="text-[#e59500] hover:text-[#840032] font-medium transition-colors">
                contact form
              </Link>{" "}
              or email us at:{" "}
              <a 
                href="mailto:info@fads.fi" 
                className="text-[#e59500] hover:text-[#840032] font-medium transition-colors"
              >
                info@fads.fi
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Brief Form Section */}
      <section className="py-0">
          <div className="mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
            <BriefForm />
          </div>
      </section>
    </div>
  );
} 