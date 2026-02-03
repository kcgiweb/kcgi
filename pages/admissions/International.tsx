
import React from 'react';
import { AdmissionsLayout } from '../../components/AdmissionsLayout';
import { Globe, Plane, ShieldCheck, MessageSquare } from 'lucide-react';

export const InternationalAdmissions: React.FC = () => (
  <AdmissionsLayout 
    title="International Admissions" 
    subtitle="A home away from home for students from over 20+ countries." 
    icon={Globe}
  >
    <div className="space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-3xl font-serif font-bold text-primary">Global Student Support</h2>
          <p className="text-customText leading-relaxed font-medium">Karnataka College Group has a dedicated International Student Cell (ISC) to assist global applicants with everything from admission to cultural integration in Bengaluru.</p>
          <div className="space-y-6">
            {[
              { icon: Plane, title: 'Visa Assistance', desc: 'Step-by-step guidance for student visa applications and FRRO registration.' },
              { icon: ShieldCheck, title: 'FRRO Compliance', desc: 'Our team handles local police verification and documentation for foreign nationals.' },
              { icon: MessageSquare, title: 'English Bridge Courses', desc: 'Special language classes for students from non-English speaking backgrounds.' }
            ].map((v, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0"><v.icon className="w-5 h-5" /></div>
                <div><h4 className="font-bold text-primary text-sm">{v.title}</h4><p className="text-xs text-gray-400 font-medium">{v.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="aspect-square bg-gray-100 rounded-[4rem] overflow-hidden shadow-2xl relative">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="International Students" />
          <div className="absolute inset-0 bg-primary/20" />
        </div>
      </div>
    </div>
  </AdmissionsLayout>
);
