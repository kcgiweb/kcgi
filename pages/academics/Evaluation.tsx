
import React from 'react';
import { AcademicsLayout } from '../../components/AcademicsLayout';
import { FileCheck, ShieldCheck, ClipboardCheck, BarChart3 } from 'lucide-react';

export const Evaluation: React.FC = () => (
  <AcademicsLayout 
    title="Evaluation System" 
    subtitle="Transparent, continuous, and merit-based assessment protocols." 
    icon={FileCheck}
  >
    <div className="space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h2 className="text-3xl font-serif font-bold text-primary">Assessment Philosophy</h2>
          <p className="text-customText leading-relaxed font-medium">We follow a Continuous Internal Evaluation (CIE) system that monitors student progress throughout the semester, ensuring consistent engagement rather than relying solely on year-end exams.</p>
          
          <div className="space-y-6">
            {[
              { icon: ClipboardCheck, title: 'Formative Assessment', desc: 'Quizzes, surprise tests, and laboratory journals.' },
              { icon: BarChart3, title: 'Summative Assessment', desc: 'Semester-end examinations and final university board tests.' },
              { icon: ShieldCheck, title: 'Integrity Check', desc: 'Standardized protocols for invigilation and digital valuation.' }
            ].map((v, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary flex-shrink-0"><v.icon className="w-5 h-5" /></div>
                <div>
                   <h4 className="font-bold text-primary">{v.title}</h4>
                   <p className="text-xs text-gray-400 mt-1">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-primary p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
           <h3 className="text-2xl font-serif font-bold text-secondary mb-8">Grading Metrics</h3>
           <div className="space-y-6">
              {[
                { grade: 'A+ (Exemplary)', range: '90% - 100%' },
                { grade: 'A (Excellent)', range: '80% - 89%' },
                { grade: 'B (Good)', range: '70% - 79%' },
                { grade: 'C (Average)', range: '60% - 69%' },
                { grade: 'P (Pass)', range: 'Min 50% Required' }
              ].map((row, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
                  <span className="font-bold text-sm">{row.grade}</span>
                  <span className="text-xs opacity-60 font-medium">{row.range}</span>
                </div>
              ))}
           </div>
           <p className="mt-10 text-[10px] uppercase font-bold tracking-widest text-secondary/60">* Specific to Higher Education Professional Courses</p>
        </div>
      </div>

      <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100">
         <h3 className="text-2xl font-serif font-bold text-primary mb-6">Examination Grievance Redressal</h3>
         <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8">Any discrepancies in valuation or internal marking can be formally addressed through the Academic Controller's office within 7 days of result declaration.</p>
         <div className="flex flex-wrap gap-4">
            <button className="bg-white border-2 border-primary/10 text-primary px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:border-primary transition-all">Revaluation Policy</button>
            <button className="bg-white border-2 border-primary/10 text-primary px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:border-primary transition-all">Mark Sheet Correction</button>
         </div>
      </div>
    </div>
  </AcademicsLayout>
);
