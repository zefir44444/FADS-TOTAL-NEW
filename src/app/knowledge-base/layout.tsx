import type { Metadata } from 'next';
import SocialShare from '@/components/SocialShare';

export const metadata: Metadata = {
  title: 'Knowledge Base | FADS Digital Agency',
  description: 'Comprehensive guides, checklists, and resources to help you improve your website performance, SEO, and online presence.',
  openGraph: {
    title: 'Knowledge Base | FADS Digital Agency',
    description: 'Comprehensive guides, checklists, and resources to help you improve your website performance, SEO, and online presence.',
    type: 'website',
  },
};

export default function KnowledgeBaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
      <div className="mt-6 sm:mt-8 md:mt-10 pt-6 sm:pt-8 border-t border-gray-100">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
                  <div className="flex items-center">
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="gradient-text text-gray-600">Share:</span>
                    <SocialShare />
                  </div>
                </div>
              </div>
    </div>
  );
} 