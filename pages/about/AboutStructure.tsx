
import React from 'react';
import { AboutLayout } from '../../components/AboutLayout';
import { Network } from 'lucide-react';

export const AboutStructure: React.FC = () => (
  <AboutLayout title="Organizational Structure" subtitle="A streamlined hierarchy for institutional efficiency." icon={Network}>
    <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="bg-primary text-white p-8 rounded-3xl text-center font-bold text-2xl shadow-lg border-b-4 border-accent1">Board of Trustees</div>
        <div className="flex justify-center"><div className="w-1 h-12 bg-primary/20" /></div>
        <div className="bg-secondary text-white p-8 rounded-3xl text-center font-bold text-2xl shadow-lg border-b-4 border-primary">Chairman & Managing Trustee</div>
        <div className="flex justify-center"><div className="w-1 h-12 bg-primary/20" /></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl text-center border-2 border-primary/10 font-bold text-primary shadow-sm">Academic Council</div>
          <div className="bg-white p-8 rounded-3xl text-center border-2 border-primary/10 font-bold text-primary shadow-sm">Administrative Council</div>
        </div>
        <div className="flex justify-center"><div className="w-1 h-12 bg-primary/20" /></div>
        <div className="bg-white p-8 rounded-3xl text-center border-2 border-primary/10 font-bold text-primary shadow-sm">Heads of Institutions (Principals)</div>
      </div>
    </div>
  </AboutLayout>
);
