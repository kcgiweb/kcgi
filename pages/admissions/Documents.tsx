import React from 'react';
import { AdmissionsLayout } from '../../components/AdmissionsLayout';
import { FileText, Download } from 'lucide-react';

export const RequiredDocuments: React.FC = () => (
  <AdmissionsLayout 
    title="Required Documents" 
    subtitle="A comprehensive checklist of credentials required for a valid enrollment." 
    icon={FileText}
  >
    <div className="space-y-16">
      <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
        <h3 className="text-2xl font-serif font-bold text-primary mb-10">Essential Credentials</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            '10th Standard / SSLC Marksheet (Original)',
            'PUC / 10+2 / Diploma Marksheet (Original)',
            'Transfer Certificate (TC) from previous institution',
            'Migration Certificate (For Non-Karnataka students)',
            'Conduct / Character Certificate',
            'Caste & Income Certificate (If applicable)',
            '8 Recent Passport Size Photographs',
            'Copy of Aadhaar Card',
            'Entrance Exam Score Card (KCET/MAT/PGCET)',
            'Physical Fitness Certificate from Medical Officer'
          ].map((doc, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
              <div className="w-8 h-8 bg-primary/5 rounded-lg flex items-center justify-center text-primary font-bold text-xs shrink-0">{i+1}</div>
              <span className="text-sm font-bold text-primary/70">{doc}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 p-8 bg-secondary/5 rounded-2xl border border-secondary/10">
          <h4 className="text-xl font-bold text-primary mb-3">Note for Applicants</h4>
          <p className="text-sm text-gray-500 leading-relaxed font-medium">Please bring 3 sets of attested photocopies of all original documents. Original documents will be retained by the institution until university approval.</p>
        </div>
        <button className="flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-secondary transition-all">
          Download PDF Checklist <Download className="w-4 h-4" />
        </button>
      </div>
    </div>
  </AdmissionsLayout>
);