import React from 'react';
import { AboutLayout } from '../../components/AboutLayout';
import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutQuality: React.FC = () => {
  return (
    <AboutLayout title="Quality Assurance" subtitle="Rigorous standards for high-value degrees." icon={ShieldCheck}>
      <div className="space-y-12">
        <div className="prose prose-lg text-customText max-w-none font-medium mb-12 text-center">
          <p>Quality information should be clear and verifiable. Approval, affiliation and eligibility requirements are specific to each institution and programme, and can change over time.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {['Course eligibility', 'Current fee information', 'Programme-specific approval and affiliation documents'].map((item) => (
            <div key={item} className="bg-white p-7 rounded-3xl border border-gray-100 text-center shadow-sm">
              <h2 className="text-lg font-bold text-primary">{item}</h2>
            </div>
          ))}
        </div>
        <div className="text-center"><Link to="/admissions/enquiry" className="inline-flex bg-primary text-white px-7 py-3 rounded-xl font-bold hover:bg-secondary transition-colors">Request verified programme information</Link></div>
      </div>
    </AboutLayout>
  );
};
