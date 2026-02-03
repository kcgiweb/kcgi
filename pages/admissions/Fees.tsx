
import React from 'react';
import { AdmissionsLayout } from '../../components/AdmissionsLayout';
import { Wallet, Info, AlertTriangle } from 'lucide-react';

export const FeesStructure: React.FC = () => (
  <AdmissionsLayout 
    title="Fees Structure" 
    subtitle="Transparent financial guidelines and institutional fee policies." 
    icon={Wallet}
  >
    <div className="space-y-12">
      <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100">
        <h3 className="text-2xl font-serif font-bold text-primary mb-6 flex items-center gap-3"><Info className="text-secondary" /> Fee Policy Overview</h3>
        <p className="text-sm text-gray-500 leading-relaxed font-medium">The fee structure is determined based on the course, university affiliation, and government mandates. It typically includes Tuition Fee, Lab/Clinical Fee, Library Fee, and Examination Fee.</p>
      </div>

      <div className="bg-white border-2 border-primary/5 rounded-[3rem] p-12 text-center">
        <p className="text-lg font-bold text-primary mb-6">Request Detailed Course-wise Fee Breakup</p>
        <p className="text-sm text-gray-400 mb-10 max-w-xl mx-auto font-medium">As fees may vary based on quota (Merit/Management) and scholarship eligibility, we recommend contacting our finance office for a personalized quote.</p>
        <button className="bg-primary text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">Connect with Finance Cell</button>
      </div>

      <div className="p-8 bg-red-50 rounded-[2rem] border border-red-100 flex gap-6">
        <AlertTriangle className="text-red-500 shrink-0 w-8 h-8" />
        <div>
          <h4 className="font-bold text-red-900 text-sm">Cautionary Note</h4>
          <p className="text-xs text-red-700/70 font-medium leading-relaxed mt-1">Please be aware that the institution does not collect any cash payments outside of the authorized bank counters. Always insist on an official stamped receipt for every transaction.</p>
        </div>
      </div>
    </div>
  </AdmissionsLayout>
);
