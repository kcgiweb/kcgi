
import React from 'react';
import { AcademicsLayout } from '../../components/AcademicsLayout';
import { Layers, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DiplomaPU: React.FC = () => (
  <AcademicsLayout 
    title="Diploma & PU Programs" 
    subtitle="The foundational pathway to professional higher education." 
    icon={Layers}
  >
    <div className="space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-3xl font-serif font-bold text-primary">Pre-University Education</h2>
          <p className="text-customText leading-relaxed font-medium">Our PU college provides a high-discipline environment for students to excel in their 10+2 board examinations while receiving integrated coaching for national entrance exams like NEET and JEE.</p>
          <div className="space-y-4">
             {['Science Stream (PCMB, PCMC)', 'Commerce Stream (CEBA, HEBA)', 'Integrated Entrance Coaching', 'Digital Classroom Learning'].map(item => (
               <div key={item} className="flex gap-4 items-center">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-bold text-primary/70">{item}</span>
               </div>
             ))}
          </div>
          <Link to="/institution/pre-university" className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-secondary transition-all shadow-lg">Explore PU College</Link>
        </div>
        <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50">
           <img src="https://images.unsplash.com/photo-1523050335102-c325091422f9?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="PU Students" />
        </div>
      </div>

      <div className="pt-16 border-t border-gray-100">
        <h2 className="text-3xl font-serif font-bold text-primary mb-12">Professional Diploma Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
            <h4 className="text-xl font-bold text-primary mb-2">GNM (Nursing)</h4>
            <p className="text-[10px] font-black text-secondary uppercase tracking-widest mb-6">Karnataka School of Nursing</p>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">A 3-year diploma focusing on general nursing skills and bedside manners for clinical settings.</p>
            <Link to="/institution/nursing-school" className="text-primary font-bold underline text-xs">Unit Details</Link>
          </div>
          <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
            <h4 className="text-xl font-bold text-primary mb-2">D.Pharm (Pharmacy)</h4>
            <p className="text-[10px] font-black text-secondary uppercase tracking-widest mb-6">Karnataka College of Pharmacy</p>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">A 2-year foundational course in pharmaceutical practice and hospital drug store management.</p>
            <Link to="/institution/pharmacy" className="text-primary font-bold underline text-xs">Unit Details</Link>
          </div>
        </div>
      </div>
    </div>
  </AcademicsLayout>
);
