import React from 'react';
import { AboutLayout } from '../../components/AboutLayout';
import { Network } from 'lucide-react';

export const AboutGoverning: React.FC = () => (
  <AboutLayout title="Governing Body" subtitle="The strategic leadership steering our institutional excellence." icon={Network}>
    <div className="flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-16 max-w-4xl mx-auto py-10">
      {[
        { 
          name: 'SMT. SUVARNA BASAVARAJ RAMNAL', 
          role: 'Chairperson', 
          org: 'Karnataka Education Trust',
          image: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767687764/download_3_gzxfum.png',
          quote: 'Our vision is to empower students with value-based education, creating a foundation for them to become not just successful professionals, but compassionate and responsible global citizens.'
        },
        { 
          name: 'MR. PRADEEP RAMNAL', 
          role: 'CEO', 
          org: 'Karnataka college Group of Institutions',
          image: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767687679/download_2_cbxmzc.png',
          quote: 'We are dedicated to driving innovation in education, ensuring our students are equipped with the skills and strategic mindset needed to excel in a rapidly evolving global landscape.'
        }
      ].map((m, i) => (
        <div key={i} className="bg-[#F9FAFB] p-10 rounded-2xl text-center shadow-lg w-full max-w-sm">
          <div className="w-32 h-32 rounded-2xl overflow-hidden mx-auto mb-6 shadow-md">
            <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
          </div>
          <h4 className="text-lg font-bold text-primary mb-1 uppercase">{m.name}</h4>
          <p className="text-xs font-bold uppercase tracking-widest text-secondary">{m.role}</p>
          <p className="text-sm text-gray-500 mt-1">{m.org}</p>

          <blockquote className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 italic leading-relaxed">"{m.quote}"</p>
          </blockquote>
        </div>
      ))}
    </div>
  </AboutLayout>
);