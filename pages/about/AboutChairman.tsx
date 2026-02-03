
import React from 'react';
import { AboutLayout } from '../../components/AboutLayout';
import { UserCheck } from 'lucide-react';

export const AboutChairman: React.FC = () => (
  <AboutLayout title="Chairman's Message" subtitle="A word from our visionary leader, Prof. Basavaraj Ramanal." icon={UserCheck}>
    <div className="bg-white py-12 md:py-20">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        {/* Professional Portrait */}
        <div className="w-full lg:w-[40%] shrink-0">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gray-50 rounded-[2.5rem] -rotate-3 transition-transform group-hover:rotate-0 duration-700" />
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-8 border-white">
              <img 
                src="https://res.cloudinary.com/dejcpd56d/image/upload/v1767687458/download_1_hopo91.png" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" 
                alt="Chairman Prof. Basavaraj Ramanal" 
              />
            </div>
          </div>
        </div>

        {/* Quote Content */}
        <div className="w-full lg:w-[60%] space-y-8 pt-4">
          <div className="relative">
            <QuoteIcon className="w-20 h-20 text-primary/5 absolute -top-10 -left-6" />
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary relative z-10 leading-tight">
              Empowering Minds, Shaping Futures
            </h3>
          </div>
          
          <div className="space-y-6 text-black font-medium text-lg leading-relaxed italic">
            <p>
              "Education is not just about earning degrees; it is about character building and preparing for the challenges of life. At Karnataka College Group, we provide an environment where students are encouraged to think independently and innovate."
            </p>
            <p>
              "Our legacy of 30 years is a testament to the trust of thousands of parents. We remain committed to providing world-class infrastructure and pedagogical support to our students."
            </p>
          </div>

          <div className="pt-10 border-t border-gray-100">
            <h4 className="text-2xl font-bold text-primary">Prof. Basavaraj Ramanal</h4>
            <p className="text-xs font-black uppercase text-secondary tracking-[0.3em] mt-2">Chairman & Managing Trustee</p>
          </div>
        </div>
      </div>
    </div>
  </AboutLayout>
);

function QuoteIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6738 6 22.017 7.34315 22.017 9V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91244 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12C3.017 12.5523 2.56928 13 2.017 13H0.017C-0.535279 13 -1.017 12.5523 -1.017 12V9C-1.017 7.34315 0.326142 6 2.017 6H8.017C9.67386 6 11.017 7.34315 11.017 9V15C11.017 18.3137 8.33071 21 5.017 21H3.017Z"/>
    </svg>
  );
}
