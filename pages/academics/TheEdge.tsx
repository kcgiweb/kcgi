import React from 'react';
import { AcademicsLayout } from '../../components/AcademicsLayout';
import { Sparkles, CheckCircle2, TrendingUp, Globe, Users } from 'lucide-react';

export const TheEdge: React.FC = () => (
  <AcademicsLayout 
    title="The Academic Edge" 
    subtitle="What sets Karnataka College Group apart in professional training." 
    icon={Sparkles}
  >
    <div className="space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-serif font-bold text-primary">Uncompromising Excellence</h2>
          <p className="text-xl text-customText leading-relaxed font-light">With over three decades of legacy, we have perfected the art of professional training, ensuring every graduate is "industry-ready" on day one.</p>
          <div className="space-y-6">
            {[
              { title: 'Global Benchmarking', desc: 'Our curriculum is synced with international standards in Pharmacy and Nursing.' },
              { title: 'Vibrant Alumni Power', desc: 'Direct mentorship from 50,000+ alumni placed in Fortune 500 companies.' },
              { title: 'Holistic Development', desc: 'Equal emphasis on personality branding, communication, and ethics.' }
            ].map((v, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all"><CheckCircle2 className="w-6 h-6" /></div>
                <div>
                   <h4 className="font-bold text-primary text-lg">{v.title}</h4>
                   <p className="text-sm text-gray-400 font-medium leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
           <div className="aspect-square bg-secondary/5 absolute inset-10 rounded-full animate-pulse" />
           <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10 border-8 border-white">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Student Success" />
           </div>
        </div>
      </div>

      <div className="bg-gray-50 p-12 md:p-16 rounded-3xl border border-gray-100 text-center">
         <h3 className="text-3xl font-serif font-bold text-primary mb-12">By The Numbers</h3>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Success Rate', value: '98%', icon: TrendingUp },
              { label: 'Nationalities', value: '20+', icon: Globe },
              { label: 'Industry Ties', value: '150+', icon: Users },
              { label: 'Faculty Years', value: '4000+', icon: Sparkles }
            ].map((s, i) => (
              <div key={i} className="space-y-4">
                 <s.icon className="w-8 h-8 text-secondary mx-auto" />
                 <span className="block text-4xl font-black text-primary">{s.value}</span>
                 <span className="text-xs uppercase font-bold text-gray-400 tracking-widest">{s.label}</span>
              </div>
            ))}
         </div>
      </div>
    </div>
  </AcademicsLayout>
);