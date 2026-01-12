import React from 'react';
import { AcademicsLayout } from '../../components/AcademicsLayout';
import { GraduationCap, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const UGPrograms: React.FC = () => (
  <AcademicsLayout 
    title="Undergraduate Programs" 
    subtitle="Premier degree courses designed for professional excellence and global careers." 
    icon={GraduationCap}
  >
    <div className="space-y-12">
      <div className="prose prose-lg max-w-none text-customText font-medium">
        <p>Our undergraduate programs are the cornerstone of the Karnataka College Group legacy. We offer a diverse range of degrees across Healthcare, Law, and Management, each affiliated with premier universities and recognized by national governing bodies.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { 
            title: 'Pharmacy (B.Pharm)', 
            inst: 'Karnataka College of Pharmacy',
            desc: 'A comprehensive study of medicine, drug chemistry, and pharmaceutical care.',
            duration: '4 Years',
            path: '/institution/pharmacy'
          },
          { 
            title: 'Nursing (B.Sc Nursing)', 
            inst: 'Karnataka College of Nursing',
            desc: 'Focusing on clinical excellence and compassionate patient care methodologies.',
            duration: '4 Years',
            path: '/institution/nursing-college'
          },
          { 
            title: 'Management (BBA/B.Com)', 
            inst: 'College of Management & Science',
            desc: 'Nurturing future business leaders with a focus on analytics and digital trends.',
            duration: '3 Years',
            path: '/institution/management'
          },
          { 
            title: 'Law (LLB / Integrated)', 
            inst: 'Karnataka College of Law',
            desc: 'Developing advocacy skills and deep understanding of the Indian legal system.',
            duration: '3/5 Years',
            path: '/institution/law'
          },
          { 
            title: 'Physiotherapy (BPT)', 
            inst: 'Karnataka College of Physiotherapy',
            desc: 'Specialized training in physical rehabilitation and clinical diagnostics.',
            duration: '4.5 Years',
            path: '/institution/physiotherapy'
          },
          { 
            title: 'Allied Health Sciences', 
            inst: 'College of Allied Health',
            desc: 'Training experts in modern medical diagnostics and therapy tech.',
            duration: '3.5 Years',
            path: '/institution/allied-health'
          }
        ].map((prog, i) => (
          <div key={i} className="group p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700" />
            <h3 className="text-2xl font-serif font-bold text-primary mb-2">{prog.title}</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-secondary mb-6">{prog.inst}</p>
            <p className="text-sm text-gray-500 leading-relaxed mb-8">{prog.desc}</p>
            <div className="flex items-center justify-between pt-6 border-t border-gray-100">
              <span className="text-xs font-bold text-gray-400">Duration: {prog.duration}</span>
              <Link to={prog.path} className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:text-secondary transition-colors">
                View Unit <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AcademicsLayout>
);