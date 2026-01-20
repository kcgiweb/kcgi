import React from 'react';
import { AdmissionsLayout } from '../../components/AdmissionsLayout';
import { Award, Star, Trophy } from 'lucide-react';

export const Scholarships: React.FC = () => (
  <AdmissionsLayout 
    title="Scholarships" 
    subtitle="Recognizing merit and supporting ambition through financial grants." 
    icon={Award}
  >
    <div className="space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {[
          { 
            icon: Star, 
            title: 'Merit Scholarship', 
            desc: 'Up to 50% fee waiver for students scoring above 90% in board examinations.',
            iconBg: 'bg-[#F1EBED]',
            iconColor: 'text-primary'
          },
          { 
            icon: Trophy, 
            title: 'Sports Excellence', 
            desc: 'Dedicated grants and flexible schedules for State and National level athletes.',
            iconBg: 'bg-[#F1EBED]',
            iconColor: 'text-primary'
          }
        ].map((s, i) => (
          <div key={i} className="p-12 bg-white border border-gray-50 rounded-[3.5rem] shadow-sm text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
            <div className={`w-16 h-16 ${s.iconBg} rounded-2xl flex items-center justify-center ${s.iconColor} mx-auto mb-8`}>
              <s.icon className="w-8 h-8 opacity-80" />
            </div>
            <h4 className="text-2xl font-serif font-bold text-primary mb-5">{s.title}</h4>
            <p className="text-sm text-gray-500 font-medium leading-relaxed px-4">{s.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 text-center max-w-2xl mx-auto">
        <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-4">How to Apply</p>
        <p className="text-base text-customText leading-relaxed mb-8">Scholarship applications are reviewed during the admission process. Please submit your relevant certificates and marksheets to the scholarship cell.</p>
        <button className="bg-primary text-white px-10 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-secondary transition-all">Download Scholarship Form</button>
      </div>
    </div>
  </AdmissionsLayout>
);