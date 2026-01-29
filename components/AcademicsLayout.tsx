import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface AcademicsLayoutProps {
  title: string;
  subtitle: string;
  icon: any;
  children: React.ReactNode;
}

export const AcademicsLayout: React.FC<AcademicsLayoutProps> = ({ title, subtitle, icon: Icon, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${title} | Academics | Karnataka College Group`;
  }, [title]);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Dynamic Banner */}
      <div className="bg-primary py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-white">
          <nav className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/academics" className="hover:text-white transition-colors">Academics</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-secondary">{title}</span>
          </nav>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-3xl flex items-center justify-center text-secondary border border-white/20">
              <Icon className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight">{title}</h1>
              <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl">{subtitle}</p>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-secondary/10 -skew-x-12 translate-x-20" />
      </div>

      {/* Centered Content Section without Sidebar */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="fade-in-up">
            {children}
          </div>
          
          <div className="mt-20 pt-10 border-t border-gray-100 text-center">
            <Link 
              to="/academics" 
              className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:text-secondary transition-colors"
            >
              <ChevronRight className="w-4 h-4 rotate-180" /> Back to Academics Overview
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};