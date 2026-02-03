import React from 'react';
import { AcademicsLayout } from '../../components/AcademicsLayout';
import { GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const UGPrograms: React.FC = () => (
  <AcademicsLayout 
    title="Undergraduate Programs" 
    subtitle="Premier degree courses designed for professional excellence and global careers." 
    icon={GraduationCap}
  >
    <div className="space-y-16">
      <div className="prose prose-lg max-w-none text-customText font-medium text-center max-w-3xl mx-auto">
        <p className="opacity-80">Our undergraduate programs are the cornerstone of the Karnataka College Group legacy. Each course is affiliated with premier universities and recognized by national governing bodies.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {[
          { 
            title: 'Pharmacy (B.Pharm)', 
            inst: 'KARNATAKA COLLEGE OF PHARMACY',
            desc: 'A comprehensive study of medicine, drug chemistry, and pharmaceutical care.',
            duration: '4 Years',
            path: '/institution/pharmacy'
          },
          { 
            title: 'Nursing (B.Sc Nursing)', 
            inst: 'KARNATAKA COLLEGE OF NURSING',
            desc: 'Focusing on clinical excellence and compassionate patient care methodologies.',
            duration: '4 Years',
            path: '/institution/nursing-college'
          },
          { 
            title: 'Management (BBA/B.Com)', 
            inst: 'COLLEGE OF MANAGEMENT & SCIENCE',
            desc: 'Nurturing future business leaders with a focus on analytics and digital trends.',
            duration: '3 Years',
            path: '/institution/management-science'
          },
          { 
            title: 'Law (LLB / Integrated)', 
            inst: 'KARUNADU COLLEGE OF LAW',
            desc: 'Developing advocacy skills and deep understanding of the Indian legal system.',
            duration: '3/5 Years',
            path: '/institution/law'
          },
          { 
            title: 'Physiotherapy (BPT)', 
            inst: 'MANJUNATHA COLLEGE OF PHYSIOTHERAPY',
            desc: 'Specialized training in physical rehabilitation and clinical diagnostics.',
            duration: '4.5 Years',
            path: '/institution/physiotherapy'
          },
          { 
            title: 'Allied Health Sciences', 
            inst: 'KARUNADU COLLEGE OF ALLIED HEALTH',
            desc: 'Training experts in modern medical diagnostics and therapy tech.',
            duration: '3.5 Years',
            path: '/institution/allied-health'
          }
        ].map((prog, i) => (
          <div key={i} className="group relative bg-[#FCFCFD] rounded-[2.5rem] border border-gray-100 p-10 md:p-12 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col min-h-[320px]">
            {/* Decorative Corner Shape from Image */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#F1EBED] rounded-bl-[5rem] transition-transform duration-700 group-hover:scale-110 opacity-60" />
            
            <div className="relative z-10 flex-grow">
              <h3 className="text-3xl font-serif font-bold text-primary mb-2 leading-tight">
                {prog.title}
              </h3>
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary mb-10">
                {prog.inst}
              </p>
              
              <p className="text-base text-gray-500 leading-relaxed font-medium mb-8 max-w-[90%]">
                {prog.desc}
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between pt-8 border-t border-gray-100">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Duration: {prog.duration}
              </span>
              <Link 
                to={prog.path} 
                className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-[0.2em] hover:text-secondary transition-colors"
              >
                VIEW UNIT <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AcademicsLayout>
);