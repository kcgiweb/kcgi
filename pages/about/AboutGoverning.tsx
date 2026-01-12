import React from 'react';
import { AboutLayout } from '../../components/AboutLayout';
import { Network } from 'lucide-react';

export const AboutGoverning: React.FC = () => (
  <AboutLayout title="Governing Body" subtitle="The strategic leadership steering our institutional excellence." icon={Network}>
    <div className="flex flex-col md:flex-row justify-center gap-12 lg:gap-20 max-w-5xl mx-auto">
      {[
        { 
          name: 'SMT. SUVARNA BASAVARAJ RAMNAL', 
          role: 'Chairperson', 
          org: 'Karnataka Education Trust',
          image: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767687764/download_3_gzxfum.png' 
        },
        { 
          name: 'Mr. Pradeep Ramnal', 
          role: 'CEO', 
          org: 'Karnataka college Group of Institutions',
          image: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767687679/download_2_cbxmzc.png' 
        }
      ].map((m, i) => (
        <div key={i} className="flex-1 p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center hover:bg-white hover:shadow-2xl transition-all duration-500 group">
          <div className="w-40 h-40 rounded-3xl overflow-hidden mx-auto mb-8 border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-500">
            <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
          </div>
          <h4 className="text-xl font-bold text-primary mb-2 leading-tight uppercase tracking-tight">{m.name}</h4>
          <div className="space-y-1">
            <p className="text-sm font-black uppercase text-secondary tracking-widest">{m.role}</p>
            <p className="text-xs text-gray-400 font-medium leading-relaxed">{m.org}</p>
          </div>
        </div>
      ))}
    </div>
  </AboutLayout>
);