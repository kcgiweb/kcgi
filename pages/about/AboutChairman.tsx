import React from 'react';
import { AboutLayout } from '../../components/AboutLayout';
import { UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutChairman: React.FC = () => (
  <AboutLayout
    title="Chairman’s Message"
    subtitle="A word from our visionary leader, Prof. Basavaraj Ramanal"
    icon={UserCheck}
  >
    <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-8">
              
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight"> Empowering Minds, Shaping Futures</h2>
              <div className="prose prose-lg text-black font-bold leading-relaxed space-y-6">
                <p>
                  "Education is not just about earning degrees; it is about character building and preparing for the challenges of life. At Karnataka College Group, we provide an environment where students are encouraged to think independently and innovate."
                </p>
                <p>
                  "Our legacy of 30 years is a testament to the trust of thousands of parents. We remain committed to providing world-class infrastructure and pedagogical support to our students."
                </p>
              </div>
              <div className="pt-8 border-t border-gray-100">
                <h4 className="text-2xl font-bold text-primary">Prof. Basavaraj Ramanal</h4>
                <p className="text-xs font-black uppercase text-secondary tracking-[0.3em] mt-2">Chairman of KCGI</p>
                
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                 <img src="https://res.cloudinary.com/dejcpd56d/image/upload/v1767687458/download_1_hopo91.png" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000" alt="Institutional Campus" />
               </div>
               <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl z-0" />
               <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-0" />
            </div>
          </div>
        </div>
      </section>
  </AboutLayout>
);
