import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface LegalSection {
  heading: string;
  body: React.ReactNode;
}

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  intro: React.ReactNode;
  sections: LegalSection[];
}

export const LegalPage: React.FC<LegalPageProps> = ({ title, lastUpdated, intro, sections }) => (
  <div className="pt-24 min-h-screen bg-white">
    <div className="bg-primary">
      <div className="container mx-auto px-6 py-16">
        <nav className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest mb-4" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-white">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span>Legal</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">{title}</h1>
        <p className="text-white/70 text-sm mt-4">Last updated: {lastUpdated}</p>
      </div>
    </div>

    <div className="container mx-auto px-6 py-16">
      <article className="max-w-3xl mx-auto text-black leading-relaxed">
        <div className="text-lg mb-12 space-y-4">{intro}</div>
        {sections.map((s, i) => (
          <section key={s.heading} className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              {i + 1}. {s.heading}
            </h2>
            <div className="space-y-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-primary [&_a]:underline">
              {s.body}
            </div>
          </section>
        ))}
      </article>
    </div>
  </div>
);
