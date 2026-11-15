import React, { useEffect } from 'react';
import { FileCheck2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NAAC: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return <main className="pt-24 min-h-screen bg-white">
    <section className="bg-primary py-24"><div className="container mx-auto px-6 text-white"><h1 className="text-5xl font-serif font-bold mb-6">Quality &amp; Academic Information</h1><p className="text-xl text-white/80 max-w-2xl leading-relaxed">Find programme-specific information through the relevant KCGI institution before applying.</p></div></section>
    <section className="container mx-auto px-6 py-20 max-w-4xl"><div className="grid md:grid-cols-2 gap-8"><article className="p-8 bg-gray-50 rounded-3xl border border-gray-100"><ShieldCheck className="w-10 h-10 text-secondary mb-5" /><h2 className="text-2xl font-serif font-bold text-primary mb-3">Verify before you decide</h2><p className="text-customText leading-relaxed">Affiliations, approvals, eligibility, fee structures and document requirements are programme-specific. Request the current official document from Admissions.</p></article><article className="p-8 bg-gray-50 rounded-3xl border border-gray-100"><FileCheck2 className="w-10 h-10 text-secondary mb-5" /><h2 className="text-2xl font-serif font-bold text-primary mb-3">Need a document?</h2><p className="text-customText leading-relaxed">The admissions team can direct you to the appropriate institution for current programme information and official records.</p></article></div><div className="text-center mt-10"><Link to="/admissions/enquiry" className="inline-flex bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary transition-colors">Request programme information</Link></div></section>
  </main>;
};
