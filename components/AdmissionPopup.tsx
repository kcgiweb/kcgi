
import React, { useState, useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

export const AdmissionPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenAdmissionPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 20000); // 20 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    sessionStorage.setItem('hasSeenAdmissionPopup', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 fade-in-simple">
      <div className="bg-white max-w-lg w-full rounded-2xl shadow-2xl overflow-hidden relative border-4 border-primary/10">
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 p-2 text-customText hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="relative h-48 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800" 
            alt="Admissions Open" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
            <h2 className="text-3xl font-serif text-white font-bold">Admissions 2026-27</h2>
          </div>
        </div>

        <div className="p-8 space-y-4">
          <p className="text-customText text-lg leading-relaxed">
            Take the first step towards a bright future. Join the Karnataka College Group of Institutions and excel in your chosen field.
          </p>
          <div className="bg-secondary/10 p-4 rounded-lg border-l-4 border-secondary">
            <p className="text-primary font-semibold">Scholarships available for meritorious students!</p>
          </div>
          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button 
              onClick={closePopup}
              className="flex-1 bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-accent1 transition-colors flex items-center justify-center gap-2"
            >
              Enquire Now <ExternalLink className="w-4 h-4" />
            </button>
            <button 
              onClick={closePopup}
              className="flex-1 border-2 border-primary text-primary py-3 px-6 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};