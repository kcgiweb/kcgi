import React from 'react';
import { AdmissionsLayout } from '../../components/AdmissionsLayout';
import { BookOpen, Download, FileText } from 'lucide-react';
import { INSTITUTIONS } from '../../constants';

export const Prospectus: React.FC = () => (
  <AdmissionsLayout 
    title="Digital Prospectus" 
    subtitle="Download our detailed course guides and institutional brochures for 2026-27." 
    icon={BookOpen}
  >
    <div className="space-y-12">
      <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row items-center gap-8">
        <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center text-white shadow-xl"><FileText className="w-10 h-10" /></div>
        <div className="flex-grow text-center md:text-left">
          <h3 className="text-2xl font-serif font-bold text-primary">General Group Prospectus</h3>
          <p className="text-sm text-gray-500 font-medium mt-2">Comprehensive overview of the Karnataka College Group academic universe.</p>
        </div>
        <button className="bg-secondary text-white px-8 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-primary transition-all shrink-0">Download Now</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {INSTITUTIONS.map((inst, i) => (
          <div key={i} className="p-6 bg-white border border-gray-100 rounded-2xl flex justify-between items-center group hover:border-primary transition-all shadow-sm">
            <div>
              <h4 className="font-bold text-primary text-sm">{inst.name}</h4>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">Brochure 2026-27</p>
            </div>
            <button className="p-3 bg-gray-50 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all"><Download className="w-5 h-5" /></button>
          </div>
        ))}
      </div>
    </div>
  </AdmissionsLayout>
);