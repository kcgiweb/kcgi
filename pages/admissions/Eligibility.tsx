import React from 'react';
import { AdmissionsLayout } from '../../components/AdmissionsLayout';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Eligibility: React.FC = () => {
  const eligibilityData = [
    { 
      unit: 'Pharmacy (B.Pharm / Pharm.D)', 
      req: [
        '10+2 / PUC with Physics, Chemistry & Biology/Maths', 
        'Minimum 45% aggregate in PCB/PCM (40% for SC/ST)', 
        'KCET / NEET qualification as per Govt. norms'
      ] 
    },
    { 
      unit: 'Nursing (B.Sc / GNM)', 
      req: [
        '10+2 with Physics, Chemistry, Biology & English', 
        'Min 45% aggregate for B.Sc / 40% for GNM', 
        'Registered through Karnataka Nursing Council'
      ] 
    },
    { 
      unit: 'Management (MBA)', 
      req: [
        'Bachelor degree in any stream from a recognized university', 
        'Min 50% aggregate (45% for reserved categories)', 
        'Valid KMAT / MAT / CAT / PGCET score'
      ] 
    },
    { 
      unit: 'Law (LL.B)', 
      req: [
        'Graduation in any discipline (for 3-Year LLB)', 
        '10+2 qualification (for 5-Year Integrated Program)', 
        'Minimum 45% aggregate score in qualifying exam'
      ] 
    },
    { 
      unit: 'UG Management & Science', 
      subtitle: '(BBA / B.Com / BCA)',
      req: [
        '10+2 / PUC from a recognized board', 
        'Commerce or Science stream preferred for B.Com/BCA', 
        'Minimum qualifying percentage as per university norms'
      ] 
    },
    { 
      unit: 'Physiotherapy (BPT)', 
      req: [
        '10+2 / PUC with PCB and English', 
        'Minimum 45% aggregate in science subjects', 
        'Admission based on merit and counseling'
      ] 
    },
    { 
      unit: 'Allied Health Sciences (B.Sc)', 
      subtitle: '(MLT, MIT, Dialysis etc.)',
      req: [
        '10+2 / PUC with Science stream (PCB)', 
        'Minimum 45% aggregate score', 
        'Admission based on merit'
      ] 
    },
    { 
      unit: 'PU College (Science & Commerce)', 
      req: [
        'Pass in 10th Standard / SSLC / CBSE / ICSE', 
        'Minimum aggregate score as per board norms', 
        'Selection based on merit and counseling'
      ] 
    }
  ];

  return (
    <AdmissionsLayout 
      title="Eligibility Criteria" 
      subtitle="Minimum academic requirements for enrollment across all institutional units." 
      icon={ShieldCheck}
    >
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eligibilityData.map((cat, i) => (
            <div key={i} className="p-8 bg-gray-50 rounded-[3rem] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all group flex flex-col">
              <div>
                <h3 className="text-lg font-bold text-primary mb-1">{cat.unit}</h3>
                {cat.subtitle && <p className="text-xs font-bold uppercase text-secondary tracking-wider mb-6">{cat.subtitle}</p>}
                <div className="h-px bg-gray-200 w-1/4 my-6" />
              </div>
              <ul className="space-y-4 flex-grow">
                {cat.req.map((r, j) => (
                  <li key={j} className="flex gap-3 text-sm font-medium text-gray-500 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" /> 
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </AdmissionsLayout>
  );
};