import React, { useState, useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { NoPaperFormsWidget } from './NoPaperFormsWidget';

export const AdmissionPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // 5 seconds

    // Global listener for apply-trigger clicks
    const handleGlobalTrigger = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest('.apply-trigger')) {
        e.preventDefault();
        setIsVisible(true);
      }
    };

    document.addEventListener('click', handleGlobalTrigger);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleGlobalTrigger);
    };
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 fade-in-simple">
      <div className="bg-white max-w-4xl w-full rounded-3xl shadow-2xl overflow-hidden relative flex flex-col md:flex-row border-4 border-primary/10">
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 p-2 text-primary hover:bg-gray-100 rounded-full transition-colors z-20"
        >
          <X className="w-6 h-6" />
        </button>
        
        {/* Left Side: Visual/Branding */}
        <div className="hidden md:block w-5/12 bg-primary relative overflow-hidden">
          <img 
            src="/assets/images/homeabout.jpg" 
            alt="Admissions Open" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
            <Sparkles className="w-12 h-12 text-secondary mb-6" />
            <h2 className="text-3xl font-serif font-bold leading-tight">Admissions Open 2026-27</h2>
            <p className="mt-4 text-white/70 font-sans font-light">Join a legacy of excellence in professional education.</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 p-8 md:p-12 overflow-y-auto max-h-[90vh]">
          <div className="mb-8">
            <h3 className="text-2xl font-serif font-bold text-primary">Admission Enquiry</h3>
            <p className="text-gray-500 text-sm mt-1 font-medium">Quick enrollment support for 2026 session.</p>
          </div>

          <NoPaperFormsWidget />
        </div>
      </div>
    </div>
  );
};
