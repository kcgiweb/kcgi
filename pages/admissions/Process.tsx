
import React from 'react';
import { AdmissionsLayout } from '../../components/AdmissionsLayout';
import { ClipboardCheck, ArrowRight, UserCheck, Search, FileText, Wallet } from 'lucide-react';

export const AdmissionProcess: React.FC = () => (
  <AdmissionsLayout 
    title="Admission Process" 
    subtitle="A transparent, step-by-step roadmap to joining our global academic community." 
    icon={ClipboardCheck}
  >
    <div className="space-y-20">
      <div className="prose prose-lg max-w-none text-customText font-medium">
        <p>At Karnataka College Group, we ensure a seamless and student-friendly admission journey. Whether you are applying for a professional degree or primary education, our counselors are available at every step to guide you.</p>
      </div>

      <div className="relative space-y-12 before:absolute before:left-[27px] before:top-4 before:bottom-4 before:w-1 before:bg-gray-50">
        {[
          { icon: Search, title: 'Inquiry & Counseling', desc: 'Visit our campus or fill out the online form. Our academic advisors will contact you to discuss your career goals and suggest the best-fit programs.' },
          { icon: FileText, title: 'Application Submission', desc: 'Collect the application form from the campus or download it online. Submit the filled form with the required academic credentials.' },
          { icon: UserCheck, title: 'Entrance & Interview', desc: 'For professional courses (Pharmacy, Nursing, Law), shortlisting is based on KCET/KMAT scores or our institutional selection interview.' },
          { icon: ClipboardCheck, title: 'Document Verification', desc: 'Submit original certificates for verification as per University/Board requirements to finalize eligibility.' },
          { icon: Wallet, title: 'Fee Payment & Enrollment', desc: 'Pay the admission fee through secure channels to confirm your seat and receive your official registration number.' }
        ].map((step, i) => (
          <div key={i} className="relative pl-20 group">
            <div className="absolute left-0 top-0 w-14 h-14 bg-white border-2 border-primary rounded-2xl flex items-center justify-center text-primary font-black z-10 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
              <step.icon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">0{i+1}. {step.title}</h3>
            <p className="text-gray-500 leading-relaxed max-w-3xl font-medium">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </AdmissionsLayout>
);
