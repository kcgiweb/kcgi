import React, { useEffect } from 'react';
import { 
  TrendingUp, 
  Briefcase, 
  Globe, 
  CheckCircle2, 
  Search, 
  Users, 
  Award,
  ArrowRight
} from 'lucide-react';

export const Placements: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { label: 'Recruitment Partners', value: '500+', color: 'text-orange-500' },
    { label: 'Placement Rate', value: '96%', color: 'text-green-500' },
    { label: 'Highest Package', value: '22 LPA', color: 'text-blue-500' },
    { label: 'Fortune 500 Ties', value: '120+', color: 'text-red-500' },
  ];

  const recruiters = [
    { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Deloitte', url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg' },
    { name: 'Pfizer', url: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Pfizer_%282021%29.svg' },
    { name: 'Biocon', url: 'https://www.logo.wine/a/logo/Biocon/Biocon-Logo.wine.svg' },
    { name: 'Infosys', url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
    { name: 'Wipro', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
    { name: 'TCS', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg' },
    { name: 'Apollo', url: 'https://upload.wikimedia.org/wikipedia/en/3/30/Apollo_Hospitals_Logo.svg' },
    { name: 'Manipal', url: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Manipal_Hospitals_Logo.svg' },
    { name: 'Cipla', url: 'https://upload.wikimedia.org/wikipedia/en/0/07/Cipla_logo.svg' }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Dynamic Placement Banner */}
      <div className="bg-primary py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-6 relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">Career Excellence & <br/>Global Placements</h1>
          <p className="text-lg text-white/70 max-w-3xl leading-relaxed font-light">Empowering our students to lead in Fortune 500 companies through specialized industry-integrated training at our Central Placement Cell (CPC).</p>
        </div>
        <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-secondary/20 to-transparent pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((s, i) => (
            <div key={i} className="p-8 bg-white border border-gray-100 rounded-3xl text-center shadow-lg hover:shadow-2xl transition-all group overflow-hidden relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-0 group-hover:h-2 bg-secondary transition-all duration-500" />
              <span className={`block text-4xl font-bold ${s.color} mb-3`}>{s.value}</span>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-bold text-primary">Central Placement Cell (CPC)</h2>
            <p className="text-customText text-lg leading-relaxed font-light">
              The CPC serves as a vital link between the academic environment and the professional world. Our 360-degree training model ensures every student is a "Plug & Play" professional from Day 1.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                'Aptitude & Logical Reasoning', 'Mock Corporate Interviews', 'Personality Branding', 'Industry Internships', 'Technical Certifications', 'Global Career Counseling'
              ].map(item => (
                <div key={item} className="flex gap-3 items-center group">
                  <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-500 transition-colors shrink-0">
                     <CheckCircle2 className="w-5 h-5 text-green-500 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm font-bold text-primary/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5">
               <Quote className="w-32 h-32 text-primary" />
            </div>
            <Quote className="w-12 h-12 text-secondary/20 mb-6"/>
            <p className="text-xl italic text-primary font-light mb-8 leading-relaxed">"The rigorous clinical training at Karnataka College of Pharmacy gave me the confidence to excel at Pfizer. I am proud to be an alumna."</p>
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent1 overflow-hidden shadow-lg p-0.5">
                 <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="Alumna" className="w-full h-full object-cover rounded-[14px]" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary">Dr. Anjali Menon</h4>
                <p className="text-xs uppercase font-bold text-secondary tracking-wider mt-1">Senior Researcher @ Pfizer</p>
              </div>
            </div>
          </div>
        </div>

        {/* RECRUITERS */}
        <div className="text-center mb-24">
          <div className="max-w-2xl mx-auto mb-16">
             <h2 className="text-secondary font-bold uppercase tracking-widest text-xs mb-4">Elite Global Partners</h2>
             <h3 className="text-3xl md:text-5xl font-serif font-bold text-primary">Where Our Students Excel</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {recruiters.map(r => (
              <div key={r.name} className="h-28 bg-white border border-gray-100 rounded-2xl flex items-center justify-center p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group">
                <img src={r.url} alt={r.name} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:scale-110 transition-transform" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary rounded-3xl p-10 md:p-12 text-center text-white relative overflow-hidden">
           <div className="relative z-10 space-y-6">
              <h2 className="text-3xl font-serif font-bold">Launch Your Global Career</h2>
              <p className="text-white/60 text-base max-w-2xl mx-auto font-light">Join the list of 50,000+ successful professionals globally. Start your journey with Karnataka College Group.</p>
              <button className="bg-secondary text-white px-10 py-3 rounded-xl font-bold text-sm hover:bg-white hover:text-primary transition-all uppercase tracking-widest shadow-2xl">Connect with CPC Office</button>
           </div>
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        </div>
      </div>
    </div>
  );
};

function Quote(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6738 6 22.017 7.34315 22.017 9V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91244 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12C3.017 12.5523 2.56928 13 2.017 13H0.017C-0.535279 13 -1.017 12.5523 -1.017 12V9C-1.017 7.34315 0.326142 6 2.017 6H8.017C9.67386 6 11.017 7.34315 11.017 9V15C11.017 18.3137 8.33071 21 5.017 21H3.017Z"/>
    </svg>
  );
}