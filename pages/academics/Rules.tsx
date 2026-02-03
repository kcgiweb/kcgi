
import React from 'react';
import { AcademicsLayout } from '../../components/AcademicsLayout';
import { ShieldAlert, CheckCircle2, Clock, UserCheck } from 'lucide-react';

export const Rules: React.FC = () => (
  <AcademicsLayout 
    title="Rules & Regulations" 
    subtitle="Standards of discipline and conduct for a sanctified academic environment." 
    icon={ShieldAlert}
  >
    <div className="space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8 p-10 bg-red-50 rounded-[3rem] border border-red-100">
           <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mb-6"><Clock className="w-7 h-7" /></div>
           <h3 className="text-2xl font-bold text-primary">Attendance Policy</h3>
           <p className="text-sm text-red-700/70 font-medium leading-relaxed">Regular attendance is crucial for academic success and is a mandatory requirement for appearing in final examinations.</p>
           <ul className="space-y-4">
              {[
                'Minimum 75% attendance mandatory in each subject.',
                'Leave of absence must be applied through Proctor.',
                'Medical leaves require certificate within 48 hours.',
                'Default in attendance leads to loss of eligibility.'
              ].map(v => (
                <li key={v} className="flex gap-3 text-xs font-bold text-red-900/60">
                   <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5" /> {v}
                </li>
              ))}
           </ul>
        </div>

        <div className="space-y-8 p-10 bg-blue-50 rounded-[3rem] border border-blue-100">
           <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6"><UserCheck className="w-7 h-7" /></div>
           <h3 className="text-2xl font-bold text-primary">Code of Conduct</h3>
           <p className="text-sm text-blue-700/70 font-medium leading-relaxed">Students are expected to maintain professional behavior and uphold the institutional values at all times.</p>
           <ul className="space-y-4">
              {[
                'Strict adherence to the prescribed formal uniform.',
                'Zero tolerance policy for ragging (legal action).',
                'Misconduct with faculty/staff leads to suspension.',
                'Damage to campus property will be penalized.'
              ].map(v => (
                <li key={v} className="flex gap-3 text-xs font-bold text-blue-900/60">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5" /> {v}
                </li>
              ))}
           </ul>
        </div>
      </div>

      <div className="bg-gray-50 p-12 rounded-[4rem] border border-gray-100">
         <h3 className="text-2xl font-serif font-bold text-primary mb-8">Additional Policies</h3>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Digital Ethics', desc: 'Restricted mobile usage during academic hours.' },
              { title: 'Library Rules', desc: 'Silence and card-based issuance systems.' },
              { title: 'Parking', desc: 'Designated zones for student vehicles with permits.' }
            ].map((p, i) => (
              <div key={i} className="space-y-2">
                 <h4 className="font-bold text-primary text-sm uppercase tracking-wider">{p.title}</h4>
                 <p className="text-xs text-gray-400 leading-relaxed font-medium">{p.desc}</p>
              </div>
            ))}
         </div>
      </div>
    </div>
  </AcademicsLayout>
);
