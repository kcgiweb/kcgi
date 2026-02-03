
import React, { useEffect } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Users, 
  CheckCircle2, 
  Download,
  Award,
  BarChart,
  ArrowRight
} from 'lucide-react';

export const NAAC: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-primary py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-serif font-bold text-white mb-6">NAAC & IQAC</h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">Maintaining the highest standards of academic excellence through rigorous quality control and periodic assessment.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            <section className="space-y-8">
              <h2 className="text-3xl font-serif font-bold text-primary flex items-center gap-4"><ShieldCheck className="text-secondary"/> IQAC Overview</h2>
              <p className="text-customText leading-relaxed text-lg">
                The Internal Quality Assurance Cell (IQAC) was established in our institutions to maintain the momentum of quality consciousness. It is a vital part of the institutional system and works towards realizing the goals of quality enhancement and sustenance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Goal', desc: 'To develop a system for conscious, consistent and catalytic improvement in the performance of institutions.' },
                  { title: 'Focus', desc: 'Optimization of modern methods of teaching and learning across all disciplines.' }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                    <h4 className="font-bold text-primary mb-3">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-8">
              <h2 className="text-3xl font-serif font-bold text-primary flex items-center gap-4"><BarChart className="text-secondary"/> AQAR Reports</h2>
              <div className="space-y-4">
                {['AQAR 2025-26', 'AQAR 2024-25', 'AQAR 2023-24'].map((r, i) => (
                  <div key={i} className="flex justify-between items-center p-6 bg-white border border-gray-100 rounded-2xl group hover:border-primary transition-all shadow-sm">
                    <div className="flex items-center gap-4">
                      <FileText className="w-6 h-6 text-primary"/>
                      <span className="font-bold text-primary">{r}</span>
                    </div>
                    <button className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-secondary transition-colors">
                      <Download className="w-4 h-4"/> Download
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-12">
            <div className="bg-primary p-10 rounded-[3rem] text-white text-center shadow-xl">
               <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-secondary">
                  <span className="text-4xl font-bold">A</span>
               </div>
               <h3 className="text-xl font-serif font-bold mb-2">NAAC Accredited</h3>
               <p className="text-xs opacity-60 font-bold uppercase tracking-widest">Cycle 2 Grade A</p>
            </div>

            <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100">
               <h3 className="text-xl font-serif font-bold text-primary mb-6">IQAC Committee</h3>
               <div className="space-y-6">
                  {[
                    { name: 'Prof. Basavaraj Ramanal', role: 'Chairman' },
                    { name: 'Dr. Ramesh Kumar', role: 'IQAC Coordinator' },
                    { name: 'Prof. K. Subramanyam', role: 'Management Representative' },
                  ].map((m, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary"><Users className="w-5 h-5"/></div>
                      <div>
                        <p className="font-bold text-sm text-primary">{m.name}</p>
                        <p className="text-[10px] font-bold text-gray-400 uppercase">{m.role}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
