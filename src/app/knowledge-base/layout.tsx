import type { Metadata } from 'next';

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
    </div>
  );
} 