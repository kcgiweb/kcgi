import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ArrowRight,
  Globe,
  Target,
  Heart,
  Building2,
  UserCheck,
  ShieldCheck,
  Users,
  CheckCircle2,
  GraduationCap,
  School,
  Sparkles,
  Award,
  ShieldAlert,
  Quote
} from 'lucide-react';
import { INSTITUTIONS } from '../constants';

export const AboutUsMain: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* 1 & 2. Header & Breadcrumb */}
      <div className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-6 relative z-10 text-white">
          <nav className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-secondary">About the Group</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight fade-in-left">A Global Academic <br /> Conglomerate</h1>
          <p className="text-lg text-white/70 font-light max-w-2xl mt-6">
            Pioneering educational standards in India since 1997 with 11 premier institutions dedicated to professional excellence.
          </p>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-secondary/10 -skew-x-12 translate-x-20" />
      </div>

      {/* 3. About the Group – Overview */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-primary font-bold text-xs uppercase tracking-widest">
                <Globe className="w-4 h-4 text-secondary" /> Academic Legacy
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">Nurturing Intellectual Growth Since 1997</h2>
              <div className="prose prose-lg text-customText font-light leading-relaxed space-y-6">
                <p className="text-xl text-primary font-medium italic">"We represent the future of multi-disciplinary professional training in Bengaluru."</p>
                <p>
                  Established by the **Karnataka Educational Trust**, our group has evolved into a powerhouse of knowledge across healthcare, legal, management, and foundational sciences since its inception in 1997.
                </p>
                <p>
                  Our sprawling 25-acre integrated campus hosts state-of-the-art research laboratories, digital classrooms, and extensive library systems serving thousands of students from 20+ countries.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/about/overview" className="bg-primary text-white px-8 py-3 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-secondary transition-all shadow-xl shadow-primary/20">Full History <ArrowRight className="w-4 h-4" /></Link>
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

      {/* 4. Statistics Grid */}
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

      {/* 5. Vision & Mission Summary */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-primary to-accent1 p-12 md:p-16 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 group-hover:rotate-12 transition-transform duration-1000">
                <Target className="w-64 h-64" />
              </div>
              <div className="relative z-10 space-y-8">
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Our Vision 2030</h3>
                <p className="text-xl leading-relaxed italic font-light opacity-90">
                  "To contribute to societal advancement by nurturing students into skilled, ethical leaders, and to be a premier global center for quality education that fosters innovation and serves humanity."
                </p>
                <Link to="/about/vision" className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all">Strategic Roadmap <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
            <div className="space-y-10 px-4">
              <h3 className="text-4xl font-serif font-bold text-primary">Mission & Commitment</h3>
              <div className="space-y-6">
                {[
                  { title: 'Industry Integration', desc: 'Syncing every curriculum with current corporate and technical needs.', icon: Building2 },
                  { title: 'Research Pedagogy', desc: 'Nurturing a culture of inquiry and experimental research in labs.', icon: Sparkles },
                  { title: 'Global Ethics', desc: 'Developing leaders with a strong moral compass and social empathy.', icon: ShieldCheck },
                  { title: 'Global Community', desc: 'Fostering an inclusive community with a global outlook.', icon: Globe }
                ].map((m, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all shadow-sm shrink-0">
                      <m.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-primary">{m.title}</h4>
                      <p className="text-sm text-gray-500 font-medium leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Institutions */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-secondary font-bold uppercase tracking-widest mb-4 text-sm">The Academic Universe</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold">11 Premier Institutions</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INSTITUTIONS.map((inst) => (
              <Link
                key={inst.id}
                to={`/institution/${inst.id}`}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-secondary transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-10 h-10 text-white/20 rotate-[-45deg]" />
                </div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-secondary group-hover:bg-white group-hover:text-primary transition-all">
                    {inst.category === 'Higher Education' ? <GraduationCap className="w-6 h-6" /> : <School className="w-6 h-6" />}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-60 bg-white/5 px-3 py-1.5 rounded-full">{inst.category}</span>
                </div>
                <h4 className="text-xl font-bold leading-tight mb-4">{inst.name}</h4>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all">
                  Visit Unit <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Leadership Snapshot */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center bg-gray-50 p-12 md:p-16 rounded-3xl border border-gray-100 shadow-2xl relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-12 opacity-5 pointer-events-none">
              <QuoteIcon className="w-48 h-48 text-primary" />
            </div>
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-2xl shrink-0 border-8 border-white group">
              <img src="https://res.cloudinary.com/dejcpd56d/image/upload/v1767687458/download_1_hopo91.png" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" alt="Chairman Prof. Basavaraj Ramanal" />
            </div>
            <div className="space-y-6 text-center md:text-left relative z-10">
              <h3 className="text-3xl font-serif font-bold text-primary">Prof. Basavaraj Ramanal</h3>
              <p className="text-lg text-customText italic font-light leading-relaxed">
                "Our mission is to empower minds to think beyond boundaries. We cultivate leaders who carry both professional expertise and deep ethical integrity."
              </p>
              <div className="pt-4">
                <h4 className="font-bold text-secondary uppercase tracking-widest text-xs mb-4">Chairman & Managing Trustee</h4>
                <Link to="/about/chairman-message" className="bg-primary text-white px-8 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-secondary transition-all shadow-lg shadow-primary/20">Read Full Address</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Social Impact */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-indigo-900 via-primary to-accent1 p-12 md:p-20 rounded-3xl text-white flex flex-col lg:flex-row justify-between items-center gap-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/connected.png')] opacity-10" />
            <div className="max-w-2xl space-y-8 relative z-10">
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-secondary">Global Impact Beyond the Classroom</h3>
              <p className="text-lg opacity-80 leading-relaxed font-light">
                From rural healthcare camps to zero-plastic sustainability drives, we are committed to serving the heart of Karnataka.
              </p>
              <Link to="/about/social-responsibility" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-secondary hover:text-white transition-all shadow-xl">
                Impact Report 2026 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex gap-6 relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20 transform hover:scale-110 transition-all"><Users className="w-8 h-8 text-secondary" /></div>
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20 transform hover:scale-110 transition-all translate-y-4"><Heart className="w-8 h-8 text-red-400" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Final CTA */}
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

function QuoteIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6738 6 22.017 7.34315 22.017 9V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91244 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12C3.017 12.5523 2.56928 13 2.017 13H0.017C-0.535279 13 -1.017 12.5523 -1.017 12V9C-1.017 7.34315 0.326142 6 2.017 6H8.017C9.67386 6 11.017 7.34315 11.017 9V15C11.017 18.3137 8.33071 21 5.017 21H3.017Z" />
    </svg>
  );
}