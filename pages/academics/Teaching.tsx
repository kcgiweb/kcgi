
import React from 'react';
import { AcademicsLayout } from '../../components/AcademicsLayout';
import { Workflow, Lightbulb, Microscope, Users, Star } from 'lucide-react';

export const Teaching: React.FC = () => (
  <AcademicsLayout 
    title="Teaching & Methodology" 
    subtitle="Innovative pedagogy focused on outcomes and professional readiness." 
    icon={Workflow}
  >
    <div className="space-y-16">
      <div className="prose prose-lg max-w-none text-customText font-medium">
        <p>At Karnataka College Group, we believe that education should be an active, engaging process. Our methodology transitions from traditional lecturing to a dynamic, learner-centric environment supported by modern technology.</p>
      </div>

      <div className="bg-primary p-12 md:p-20 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5"><Workflow className="w-64 h-64" /></div>
        <h3 className="text-3xl font-serif font-bold text-secondary mb-10 relative z-10">Outcome-Based Education (OBE)</h3>
        <p className="text-xl font-light opacity-90 leading-relaxed mb-12 relative z-10 italic">"We define what students must achieve and align every academic resource to ensure they reach those goals with confidence."</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
           {[
             { title: 'Define', desc: 'Clear learning objectives for every module.' },
             { title: 'Deliver', desc: 'Active pedagogy involving labs and cases.' },
             { title: 'Demonstrate', desc: 'Evidence-based evaluation of skills.' }
           ].map((step, i) => (
             <div key={i} className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-md">
                <span className="text-4xl font-black text-secondary mb-4 block">0{i+1}</span>
                <h4 className="font-bold text-xl mb-2">{step.title}</h4>
                <p className="text-xs opacity-60 font-medium">{step.desc}</p>
             </div>
           ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {[
          { icon: Lightbulb, title: 'Case Study Method', desc: 'Extensive use of real-world corporate and clinical scenarios in classrooms.' },
          { icon: Microscope, title: 'Experimental Learning', iconColor: 'text-blue-500', desc: 'Hands-on training in state-of-the-art simulation labs and hospitals.' },
          { icon: Users, title: 'Collaborative Groups', iconColor: 'text-orange-500', desc: 'Fostering teamwork through project-based learning and seminars.' },
          { icon: Star, title: 'Guest Lectures', iconColor: 'text-secondary', desc: 'Regular interactions with industry experts and global researchers.' }
        ].map((m, i) => (
          <div key={i} className="flex gap-8 p-10 bg-gray-50 rounded-[3rem] border border-gray-100 hover:shadow-xl transition-all">
            <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm ${m.iconColor || 'text-primary'}`}>
              <m.icon className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-primary mb-2">{m.title}</h4>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AcademicsLayout>
);
