import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { 
  BookOpen, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight,
  ChevronRight,
  GraduationCap,
  Microscope,
  Briefcase,
  CheckCircle2
} from 'lucide-react';
import { INSTITUTIONS } from '../constants';

export const InstitutionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const inst = INSTITUTIONS.find(i => i.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!inst) return <Navigate to="/" />;

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-white">
      {/* Cinematic Banner */}
      <div className="relative h-[40vh] md:h-[60vh] min-h-[350px] overflow-hidden">
        <img 
          src={inst.image} 
          alt={inst.name} 
          className="w-full h-full object-cover transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent flex items-end">
          <div className="container mx-auto px-6 pb-12 md:pb-20">
            <nav className="hidden md:flex items-center gap-2 text-white/70 text-xs mb-6 uppercase tracking-widest font-bold">
              <Link to="/" className="hover:text-secondary">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/institutions" className="hover:text-secondary">Institutions</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-secondary">{inst.name}</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 max-w-5xl leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">{inst.name}</h1>
            <div className="flex items-center gap-4">
               <div className="w-10 h-0.5 bg-secondary" />
               <p className="text-base md:text-xl text-secondary font-bold tracking-widest uppercase">{inst.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Content Area */}
          <div className="lg:w-2/3 space-y-20 order-2 lg:order-1">
            
            {/* Overview */}
            <section id="overview" className="scroll-mt-32">
              <div className="space-y-10">
                <div className="inline-flex items-center gap-3">
                   <div className="w-2 h-10 bg-secondary rounded-full" />
                   <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Academic Overview</h2>
                </div>
                <div className="prose lg:prose-xl text-customText max-w-none space-y-6 font-light leading-relaxed">
                   <p className="text-xl md:text-2xl font-medium text-primary/80 leading-snug italic">"{inst.overview}"</p>
                </div>
              </div>
            </section>

            {/* Programs */}
            <section id="programs" className="scroll-mt-32">
              <div className="space-y-12">
                <div className="inline-flex items-center gap-3">
                   <div className="w-2 h-10 bg-secondary rounded-full" />
                   <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Offered Programs</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {inst.courses.map((course, idx) => (
                    <div key={idx} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 group hover:bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:bg-primary group-hover:scale-150 transition-all duration-700" />
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all relative z-10 shadow-sm">
                        <GraduationCap className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-6 relative z-10">{course.name}</h3>
                      <div className="space-y-4 text-sm font-bold text-gray-500 relative z-10">
                        <div className="flex justify-between border-b border-gray-100 pb-3">
                           <span className="uppercase tracking-widest text-xs">Duration</span>
                           <span className="text-secondary">{course.duration}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                           <span className="uppercase tracking-widest text-xs">Eligibility</span>
                           <span className="text-primary leading-tight font-medium opacity-80">{course.eligibility}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Placements */}
            <section id="placements" className="scroll-mt-32">
              <div className="bg-gradient-to-br from-primary to-accent1 p-10 md:p-16 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-10 flex items-center gap-4 relative z-10"><Briefcase className="text-secondary w-8 h-8"/> Placement Partners</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                   {inst.placements.map((p, i) => (
                      <div key={i} className="text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 font-bold text-sm hover:bg-secondary hover:border-white transition-all uppercase tracking-wider">{p}</div>
                   ))}
                </div>
              </div>
            </section>

            {/* Facilities */}
            <section id="facilities" className="scroll-mt-32">
              <div className="inline-flex items-center gap-3 mb-12">
                 <div className="w-2 h-10 bg-secondary rounded-full" />
                 <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Unit Infrastructure</h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {inst.facilities.map((fac, idx) => (
                  <div key={idx} className="p-6 bg-gray-50 rounded-3xl text-center flex flex-col items-center gap-4 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                       <Microscope className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">{fac}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar Area */}
          <div className="lg:w-1/3 order-1 lg:order-2">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl lg:sticky lg:top-32 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-secondary" />
              <h3 className="text-2xl font-serif font-bold text-primary mb-8">Admission Office</h3>
              <div className="space-y-6 mb-10">
                <div className="flex gap-4"><div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-secondary shrink-0"><MapPin className="w-5 h-5"/></div><p className="text-sm font-medium text-gray-500 leading-relaxed">{inst.contact.address}</p></div>
                <div className="flex gap-4"><div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-secondary shrink-0"><Phone className="w-5 h-5"/></div><p className="text-base font-bold text-primary">{inst.contact.phone}</p></div>
                <div className="flex gap-4"><div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-secondary shrink-0"><Mail className="w-5 h-5"/></div><p className="text-sm font-medium text-gray-500 break-all">{inst.contact.email}</p></div>
              </div>
              <div className="space-y-3">
                <Link to="/admissions/enquiry" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-sm hover:bg-secondary transition-all flex items-center justify-center gap-2 shadow-xl transform hover:-translate-y-1 uppercase tracking-wider">Apply Online <ArrowRight className="w-4 h-4" /></Link>
                <button className="w-full bg-white border-2 border-primary text-primary py-3 rounded-xl font-bold text-sm hover:bg-primary/5 transition-all uppercase tracking-wider">Prospectus</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};