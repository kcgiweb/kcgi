import React, { useEffect } from 'react';
import { 
  Book, 
  FlaskConical, 
  Home, 
  Bus, 
  Trophy, 
  Stethoscope, 
  ChevronRight,
  ShieldCheck,
  Wifi,
  Coffee
} from 'lucide-react';

export const Facilities: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const facilityList = [
    { 
      title: 'Central Library', 
      icon: Book, 
      desc: 'Over 50,000 volumes, e-journals, and high-speed digital research terminals.', 
      img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800'
    },
    { 
      title: 'Advanced Laboratories', 
      icon: FlaskConical, 
      desc: 'CPCSEA approved animal house and industry-standard pharmaceutical & clinical labs.', 
      img: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800'
    },
    { 
      title: 'Separate Hostels', 
      icon: Home, 
      desc: 'Hygienic, secure, and comfortable accommodation for boys and girls with 24/7 power & Wi-Fi.', 
      img: 'https://images.unsplash.com/photo-1555854817-40e098ee7f57?auto=format&fit=crop&q=80&w=800'
    },
    { 
      title: 'Transportation', 
      icon: Bus, 
      desc: 'Fleet of buses covering all major parts of Bengaluru for safe commuting.', 
      img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800'
    },
    { 
      title: 'Sports & Fitness', 
      icon: Trophy, 
      desc: 'Indoor and outdoor sports arenas including a pool, gym, and cricket ground.', 
      img: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=800'
    },
    { 
      title: 'Medical Facilities', 
      icon: Stethoscope, 
      desc: 'On-campus health center with 24/7 ambulance service and nursing staff.', 
      img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-primary py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-serif font-bold text-white mb-4">Campus Facilities</h1>
          <p className="text-xl text-white/70 max-w-2xl">Modern infrastructure designed to support academic excellence and holistic student development.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilityList.map((f, i) => (
            <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all">
              <div className="h-56 overflow-hidden relative">
                <img src={f.img} alt={f.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-lg">
                  <f.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary mb-3">{f.title}</h3>
                <p className="text-sm text-customText leading-relaxed mb-5">{f.desc}</p>
                <div className="flex gap-4 border-t pt-5">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    <ShieldCheck className="w-3 h-3 text-secondary"/> Secure
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    <Wifi className="w-3 h-3 text-secondary"/> High-Speed
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-gray-50 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8">Virtual Campus Tour</h2>
          <div className="aspect-video max-w-4xl mx-auto bg-black rounded-2xl overflow-hidden shadow-2xl relative">
             <div className="absolute inset-0 flex items-center justify-center bg-black/40 group cursor-pointer">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white transform group-hover:scale-110 transition-transform">
                   <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1.5"/>
                </div>
             </div>
             <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-60" />
          </div>
        </div>
      </div>
    </div>
  );
};