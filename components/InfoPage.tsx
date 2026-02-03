
import React from 'react';
import { ChevronRight, FileText, CheckCircle } from 'lucide-react';

interface InfoPageProps {
  title: string;
  category: string;
  content: React.ReactNode;
  bannerImage?: string;
}

export const InfoPage: React.FC<InfoPageProps> = ({ title, category, content, bannerImage }) => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="relative h-64 bg-primary overflow-hidden">
        {bannerImage && <img src={bannerImage} className="w-full h-full object-cover opacity-30" alt={title} />}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest mb-4">
              <span>Home</span>
              <ChevronRight className="w-3 h-3" />
              <span>{category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">{title}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-primary max-w-none text-customText leading-relaxed">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};
