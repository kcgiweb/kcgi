
import React from 'react';
import { AcademicsLayout } from '../../components/AcademicsLayout';
import { Microscope, Lightbulb, Globe, Award, Sparkles } from 'lucide-react';

export const Research: React.FC = () => (
  <AcademicsLayout 
    title="Research & Innovation" 
    subtitle="Fostering a culture of inquiry and experimental discovery." 
    icon={Microscope}
  >
    <div className="space-y-16">
      <div className="prose prose-lg max-w-none text-customText font-medium">
        <p>Research is the lifeblood of our group. We encourage both faculty and students to push the boundaries of knowledge in pharmacy, healthcare management, and social sciences through active publication and project grants.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-12 bg-white border-2 border-primary/5 rounded-[4rem] shadow-sm hover:shadow-xl transition-all group">
          <div className="w-16 h-16 bg-primary/5 rounded-3xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
            <Lightbulb className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-primary mb-4">Innovation Cell</h3>
          <p className="text-sm text-gray-500 leading-relaxed font-medium mb-6">A dedicated unit supporting student-led startups and prototypes, especially in pharmaceutical formulations and healthcare tech.</p>
          <ul className="space-y-3">
             {['Patent Filing Assistance', 'Seed Funding Mentorship', 'Interdisciplinary Workshops'].map(v => (
               <li key={v} className="flex items-center gap-3 text-xs font-bold text-primary/70">
                 <Sparkles className="w-4 h-4 text-secondary" /> {v}
               </li>
             ))}
          </ul>
        </div>

        <div className="p-12 bg-white border-2 border-primary/5 rounded-[4rem] shadow-sm hover:shadow-xl transition-all group">
          <div className="w-16 h-16 bg-secondary/5 rounded-3xl flex items-center justify-center text-secondary mb-8 group-hover:bg-secondary group-hover:text-white transition-all">
            <Globe className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-primary mb-4">Journal Publications</h3>
          <p className="text-sm text-gray-500 leading-relaxed font-medium mb-6">Our faculty contributes over 100+ research papers annually to indexed journals including Scopus and Web of Science.</p>
          <div className="flex gap-4">
             <div className="flex-1 p-4 bg-gray-50 rounded-2xl text-center">
                <span className="block text-2xl font-black text-primary">500+</span>
                <span className="text-[10px] uppercase font-bold text-gray-400">Citations</span>
             </div>
             <div className="flex-1 p-4 bg-gray-50 rounded-2xl text-center">
                <span className="block text-2xl font-black text-primary">45+</span>
                <span className="text-[10px] uppercase font-bold text-gray-400">Patents</span>
             </div>
          </div>
        </div>
      </div>

      <div className="bg-primary p-12 md:p-20 rounded-[4rem] text-white flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="lg:w-1/2 relative z-10">
          <h3 className="text-3xl font-serif font-bold text-secondary mb-6">Annual Research Expo</h3>
          <p className="text-lg opacity-80 leading-relaxed mb-8">Every academic year, the group hosts a mega research symposium where students from all 10 institutions present their posters and experimental findings to industry veterans.</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-bold tracking-widest uppercase">
            <Award className="w-4 h-4 text-secondary" /> Awards for Best Poster & Innovator
          </div>
        </div>
        <div className="lg:w-1/2 relative z-10 aspect-video rounded-3xl overflow-hidden shadow-2xl">
           <img src="https://images.unsplash.com/photo-1579154235884-331505f56284?auto=format&fit=crop&q=80&w=800" alt="Student Poster Presentation" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </AcademicsLayout>
);
