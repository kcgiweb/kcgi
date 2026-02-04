
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ArrowRight, 
  Globe, 
  Target, 
  Building2, 
  UserCheck, 
  ShieldCheck, 
  Users, 
  GraduationCap,
  School,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { INSTITUTIONS } from '../constants';

export const AboutUsMain: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header & Breadcrumb */}
      <div className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-6 relative z-10 text-white">
          <nav className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-secondary">About the Group</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight fade-in-left">A Global Academic <br/> Conglomerate</h1>
          <p className="text-lg text-white/70 font-light max-w-2xl mt-6">
            Pioneering educational standards in India since 1997 with 11 premier institutions dedicated to professional excellence.
          </p>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-secondary/10 -skew-x-12 translate-x-20" />
      </div>

      {/* About the Group – Overview */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-primary font-bold text-xs uppercase tracking-widest">
                <Globe className="w-4 h-4 text-secondary" /> Academic Legacy
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">Nurturing Intellectual Growth Since 1997</h2>
              <div className="prose prose-lg text-black font-bold leading-relaxed space-y-6">
                <p className="text-xl text-primary font-medium italic">"We represent the future of multi-disciplinary professional training in Bengaluru."</p>
                <p>
                  Established by the <strong>Karnataka Educational Trust</strong>, our group has evolved into a powerhouse of knowledge across healthcare, legal, management, and foundational sciences since its inception in 1997.
                </p>
                <p>
                  Our sprawling 25-acre integrated campus hosts state-of-the-art research laboratories, digital classrooms, and extensive library systems serving thousands of students from 20+ countries.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/about/overview" className="bg-primary text-white px-8 py-3 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-secondary transition-all shadow-xl shadow-primary/20">Full History <ArrowRight className="w-4 h-4"/></Link>
                <Link to="/contact" className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold text-sm hover:bg-primary/5 transition-all">Visit Campus</Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="aspect-square bg-secondary/10 absolute -inset-10 rounded-3xl -rotate-6" />
               <div className="aspect-square bg-primary absolute -inset-10 rounded-3xl translate-x-4 translate-y-4 opacity-5" />
               <div className="relative z-10 aspect-square rounded-3xl overflow-hidden shadow-2xl">
                 <img src="https://res.cloudinary.com/dejcpd56d/image/upload/v1767861219/unnamed_y30slw.jpg" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000" alt="Institutional Campus" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { label: 'Group Institutions', value: '11+', color: 'text-orange-500' },
                { label: 'Programs & Streams', value: '45+', color: 'text-blue-500' },
                { label: 'Research Scholars', value: '250+', color: 'text-green-500' },
                { label: 'Years of Trust', value: '29', color: 'text-red-500' }
              ].map((s, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 text-center shadow-lg hover:shadow-2xl transition-all group overflow-hidden relative">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700" />
                   <span className={`block text-5xl font-bold ${s.color} mb-3 relative z-10`}>{s.value}</span>
                   <span className="text-xs font-bold uppercase tracking-wider text-gray-400 relative z-10">{s.label}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* The Academic Universe - Institutional Cards with Offset Shadow */}
      <section className="py-24 bg-[#F2E6EC]/30 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">The Academic Universe</h2>
            <div className="w-20 h-1.5 bg-secondary mx-auto mb-6 rounded-full" />
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Explore our 11 Specialized Premier Institutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {INSTITUTIONS.map((inst) => (
              <div key={inst.id} className="relative group h-full">
                {/* Background offset layer */}
                <div className="absolute inset-0 bg-primary translate-x-3 translate-y-3 rounded-[2.5rem] transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
                
                {/* Main Card layer */}
                <Link 
                  to={`/institution/${inst.id}`}
                  className="relative h-full bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col justify-between transition-colors group-hover:border-primary/20"
                >
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        {inst.category === 'Higher Education' ? <GraduationCap className="w-7 h-7" /> : <School className="w-7 h-7" />}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
                        {inst.category}
                      </span>
                    </div>
                    <h4 className="text-2xl font-serif font-bold leading-tight mb-5 text-primary group-hover:text-secondary transition-colors duration-300">
                      {inst.name}
                    </h4>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed line-clamp-3 mb-8">
                      {inst.tagline}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-gray-50 mt-auto">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                      Explore Details <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Snapshot */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-primary font-bold text-xs uppercase tracking-widest">
                <Globe className="w-4 h-4 text-secondary" /> About Our Chairman
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight"> Empowering Minds, Shaping Futures</h2>
              <div className="prose prose-lg text-black font-bold leading-relaxed space-y-6">
                <p>
                  "Education is not just about earning degrees; it is about character building and preparing for the challenges of life. At Karnataka College Group, we provide an environment where students are encouraged to think independently and innovate."
                </p>
                <p>
                  "Our legacy of 30 years is a testament to the trust of thousands of parents. We remain committed to providing world-class infrastructure and pedagogical support to our students."
                </p>
              </div>
              <div className="pt-8 border-t border-gray-100">
                <h4 className="text-2xl font-bold text-primary">Prof. Basavaraj Ramanal</h4>
                <p className="text-xs font-black uppercase text-secondary tracking-[0.3em] mt-2">Chairman & Managing Trustee</p>
                <div className="mt-8">
                   <Link to="/about/chairman-message" className="bg-primary text-white px-8 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-secondary transition-all shadow-lg shadow-primary/20">Read Full Address</Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                 <img src="https://res.cloudinary.com/dejcpd56d/image/upload/v1767687458/download_1_hopo91.png" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000" alt="Institutional Campus" />
               </div>
               <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl z-0" />
               <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Begin Your Journey Today</h2>
            <p className="text-lg text-customText font-light">Join the ranks of thousands of successful professionals globally. Admissions are open for the academic year 2026.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link to="/admissions/enquiry" className="bg-secondary text-white px-10 py-4 rounded-xl font-bold text-sm hover:bg-primary transition-all shadow-2xl shadow-secondary/30 uppercase tracking-widest transform hover:-translate-y-1">Apply for Admission</Link>
              <Link to="/contact" className="border-2 border-primary text-primary px-10 py-4 rounded-xl font-bold text-sm hover:bg-primary/5 transition-all uppercase tracking-widest">Connect Support</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
