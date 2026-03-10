
import React, { useState, useEffect } from 'react';
import { X, Send, Phone, User, Mail, Sparkles, CheckCircle2 } from 'lucide-react';

export const AdmissionPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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
    setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/xaqbkbrl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
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
            src="https://res.cloudinary.com/dwoh8qevy/image/upload/v1769756914/kcmss_nh06dd.png" 
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
        <div className="flex-1 p-8 md:p-12">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10 fade-in-up">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6 border-4 border-green-100">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">Thank You!</h3>
              <p className="text-gray-500 font-medium mb-8">Your admission enquiry has been received. Our counselor will contact you shortly on your provided phone number.</p>
              <button 
                onClick={closePopup}
                className="bg-primary text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-secondary transition-all"
              >
                Close Window
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-bold text-primary">Admission Enquiry</h3>
                <p className="text-gray-500 text-sm mt-1 font-medium">Quick enrollment support for 2026 session.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-primary/40 ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                    <input name="name" type="text" placeholder="John Doe" required className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-semibold" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-primary/40 ml-1">Mobile Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                      <input name="phone" type="tel" placeholder="+91 00000 00000" required className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-semibold" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-primary/40 ml-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                      <input name="email" type="email" placeholder="john@example.com" required className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-semibold" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-primary/40 ml-1">Institution of Interest</label>
                  <select name="institution" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary outline-none transition-all text-sm font-semibold appearance-none">
                    <option value="" disabled selected>Select an Institution</option>
                    <option value="Pharmacy">Pharmacy</option>
                    <option value="Management & Science">Management & Science</option>
                    <option value="Management (MBA)">Management (MBA)</option>
                    <option value="College of Law">College of Law</option>
                    <option value="Education">Education</option>
                    <option value="Nursing">Nursing</option>
                    <option value="Physiotherapy">Physiotherapy</option>
                    <option value="Allied Health">Allied Health</option>
                    <option value="Paramedical">Paramedical</option>
                    <option value="Composite PU">Composite PU</option>
                    <option value="Public School">Public School</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest shadow-xl hover:bg-secondary transition-all flex items-center justify-center gap-2 group mt-4 disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Processing...' : 'Submit Enrollment'} <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                {status === 'error' && (
                  <p className="text-[10px] text-center text-red-500 font-bold mt-2 uppercase tracking-widest">Failed to send. Please try again.</p>
                )}
                <p className="text-[10px] text-center text-gray-400 font-bold uppercase tracking-widest mt-2">Submission will be sent to Admissions Office</p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
