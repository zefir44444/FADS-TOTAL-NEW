import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Growth Engine | FADS',
  description: 'Our growth engine combines website development, SEO, paid advertising, and AI optimization to deliver consistent, measurable results.',
};

export default function GrowthEngineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
} 