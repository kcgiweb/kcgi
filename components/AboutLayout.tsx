import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface AboutLayoutProps {
  title: string;
  subtitle: string;
  icon: any;
  children: React.ReactNode;
}

export const AboutLayout: React.FC<AboutLayoutProps> = ({ title, subtitle, icon: Icon, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${title} | Karnataka College Group`;
  }, [title]);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header Banner */}
      <div className="bg-primary py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-white">
          <nav className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-secondary">About Us</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">{title}</span>
          </nav>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="w-20 h-20 bg-white/10 rounded-[1.5rem] flex items-center justify-center text-secondary border border-white/20">
              <Icon className="w-10 h-10" />
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">{title}</h1>
              <p className="text-xl text-white/60 font-light max-w-2xl">{subtitle}</p>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-accent1/10 -skew-x-12 translate-x-20" />
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Page Content - Center Aligned and Immersive */}
          <div className="fade-in-up">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};