import React from 'react';
import { AcademicsLayout } from '../../components/AcademicsLayout';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PGPrograms: React.FC = () => (
  <AcademicsLayout 
    title="Postgraduate Programs" 
    subtitle="Advanced specializations and research-focused masters programs." 
    icon={BookOpen}
  >
    <div className="space-y-12">
      <div className="prose prose-lg max-w-none text-customText font-medium">
        <p>Our PG programs are designed for professionals who wish to specialize and lead in their respective fields. We emphasize high-level academic research, clinical expertise, and strategic management frameworks.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { 
            title: 'MBA (Master of Business Admin)', 
            inst: 'Karnataka College of Management',
            desc: 'Dual specializations in Finance, Marketing, HR, and Business Analytics.',
            path: '/institution/management'
          },
          { 
            title: 'M.Pharm (Pharmaceutics)', 
            inst: 'Karnataka College of Pharmacy',
            desc: 'Advanced research in drug formulation, delivery, and clinical studies.',
            path: '/institution/pharmacy'
          },
          { 
            title: 'M.Sc Nursing', 
            inst: 'Karnataka College of Nursing',
            desc: 'Advanced nursing practice specializations in critical care and oncology.',
            path: '/institution/nursing-college'
          },
          { 
            title: 'Master of Physiotherapy (MPT)', 
            inst: 'Karnataka College of Physiotherapy',
            desc: 'Specializations in Sports medicine, Neurology, and Musculoskeletal rehab.',
            path: '/institution/physiotherapy'
          }
        ].map((prog, i) => (
          <div key={i} className="group p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
            <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-all">
              <BookOpen className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-2">{prog.title}</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">{prog.inst}</p>
            <p className="text-sm text-gray-500 leading-relaxed mb-8">{prog.desc}</p>
            <Link to={prog.path} className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all">
              Program Details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </AcademicsLayout>
);