import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface AdmissionsLayoutProps {
  title: string;
  subtitle: string;
  icon: any;
  children: React.ReactNode;
}

export const AdmissionsLayout: React.FC<AdmissionsLayoutProps> = ({ title, subtitle, icon: Icon, children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${title} | Admissions | Karnataka College Group`;
  }, [title]);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Dynamic Admission Banner */}
      <div className="bg-primary py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-white">
          <nav className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/admissions" className="hover:text-white transition-colors">Admissions</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-secondary">{title}</span>
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
        <div className="absolute right-0 top-0 h-full w-1/3 bg-secondary/10 -skew-x-12 translate-x-20" />
      </div>

      {/* Centered Content Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
            {children}
          </div>
          
          <div className="mt-24 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <Link 
              to="/admissions" 
              className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:text-secondary transition-colors"
            >
              <ChevronRight className="w-4 h-4 rotate-180" /> Admission Overview
            </Link>
            <Link 
              to="/admissions/enquiry" 
              className="bg-primary text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-secondary transition-all shadow-lg"
            >
              Start Your Application
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};