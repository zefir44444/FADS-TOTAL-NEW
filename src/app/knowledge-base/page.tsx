import Link from 'next/link';

export default function KnowledgeBase() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Knowledge Base</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Guides, checklists, and resources to help you improve your website performance, SEO, and online presence
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Performance Checklist Card */}
        <Link 
          href="/knowledge-base/website-performance-checklist" 
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="h-3 bg-[#e59500]"></div>
          <div className="p-6">
            <div className="text-sm font-medium text-[#e59500] mb-2">Website Performance</div>
            <h2 className="text-xl font-bold mb-3">Website Performance Checklist</h2>
            <p className="text-gray-600 mb-4">
              A guide to optimize your website&apos;s speed, improve user experience, and boost SEO rankings
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span>10 min read</span>
            </div>
          </div>
        </Link>

        {/* What is SEO Card */}
        <Link 
          href="/knowledge-base/what-is-seo" 
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="h-3 bg-[#e59500]"></div>
          <div className="p-6">
            <div className="text-sm font-medium text-[#e59500] mb-2">SEO</div>
            <h2 className="text-xl font-bold mb-3">What is SEO and Why It Matters</h2>
            <p className="text-gray-600 mb-4">
              Learn how SEO can help your business grow through improved search visibility and higher traffic
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span>8 min read</span>
            </div>
          </div>
        </Link>

        {/* Google Search Ads Guide Card */}
        <Link 
          href="/knowledge-base/google-search-ads-guide" 
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="h-3 bg-[#e59500]"></div>
          <div className="p-6">
            <div className="text-sm font-medium text-[#e59500] mb-2">PPC</div>
            <h2 className="text-xl font-bold mb-3">Google Search Ads Guide</h2>
            <p className="text-gray-600 mb-4">
              Comprehensive guide to Google Search Ads, best practices, and pricing strategies
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span>12 min read</span>
            </div>
          </div>
        </Link>

        {/* Web Accessibility Card */}
        <Link 
          href="/knowledge-base/web-accessibility" 
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="h-3 bg-[#e59500]"></div>
          <div className="p-6">
            <div className="text-sm font-medium text-[#e59500] mb-2">Accessibility</div>
            <h2 className="text-xl font-bold mb-3">Web Accessibility Guide</h2>
            <p className="text-gray-600 mb-4">
              Learn about web accessibility essentials, requirements, and practical implementation steps
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span>9 min read</span>
            </div>
          </div>
        </Link>

        {/* Empty Card with "Coming Soon" State */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden opacity-70">
          <div className="h-3 bg-gray-300"></div>
          <div className="p-6">
            <div className="text-sm font-medium text-gray-400 mb-2">Coming Soon</div>
            <h2 className="text-xl font-bold mb-3">Content Marketing Toolkit</h2>
            <p className="text-gray-400 mb-4">
              Resources and tools to help you create engaging content that converts
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span>Coming soon</span>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 bg-white rounded-xl shadow-md p-8 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Need Personalized Help?</h2>
        <p className="text-gray-600 mb-6">
          Our team of experts can help you implement these strategies and provide customized solutions for your specific business needs.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#e59500] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#d18700] transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
} 