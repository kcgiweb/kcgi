import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ClipboardCheck, 
  ShieldCheck, 
  FileText, 
  Send, 
  BookOpen,
  ChevronRight,
  ArrowRight,
  Globe,
  Award
} from 'lucide-react';

export const Admissions: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    {
      title: 'Guidelines',
      items: [
        { label: 'Admission Process', path: '/admissions/process', icon: ClipboardCheck, desc: 'Detailed step-by-step guidance for applicants.' },
        { label: 'Eligibility Criteria', path: '/admissions/eligibility', icon: ShieldCheck, desc: 'Academic requirements for all group institutions.' },
        { label: 'Required Documents', path: '/admissions/documents', icon: FileText, desc: 'A checklist for a valid and complete enrollment.' },
      ]
    },
    {
      title: 'Enrollment',
      items: [
        { label: 'Enquiry', path: '/admissions/enquiry', icon: Send, desc: 'Start your professional journey with our counselors.' },
        { label: 'Prospectus', path: '/admissions/prospectus', icon: BookOpen, desc: 'Download our comprehensive 2026-27 digital guides.' },
        { label: 'International', path: '/admissions/international', icon: Globe, desc: 'Dedicated support for global academic applicants.' },
      ]
    },
    {
      title: 'Opportunities',
      items: [
        { label: 'Scholarships', path: '/admissions/scholarships', icon: Award, desc: 'Merit and need-based financial assistance programs.' },
      ]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Banner */}
      <div className="relative h-[45vh] min-h-[350px] bg-primary overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover opacity-20" 
            alt="Campus Admission" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-secondary">Admissions</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 leading-tight">Elevate Your Future <br/>Admissions 2026</h1>
          <p className="text-xl text-white/80 max-w-2xl font-light leading-relaxed">
            Choose from over 45+ premier programs across healthcare, law, and management. Your journey to professional excellence starts here.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="space-y-24">
          {categories.map((cat, i) => (
            <div key={i} className="space-y-10">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-1 bg-secondary rounded-full" />
                 <h2 className="text-3xl font-serif font-bold text-primary">{cat.title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.items.map((item, j) => (
                  <Link 
                    key={j} 
                    to={item.path}
                    className="group p-10 bg-gray-50 rounded-[3rem] border border-gray-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
                  >
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all mb-8">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{item.label}</h3>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed flex-grow">{item.desc}</p>
                    <div className="mt-8 flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                       Explore Section <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};