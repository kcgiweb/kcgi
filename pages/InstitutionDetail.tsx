
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
  CheckCircle2,
  Star,
  Zap,
  ChevronRightCircle
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
      {/* Dynamic Cinematic Banner */}
      <div className="relative h-[35vh] md:h-[48vh] min-h-[280px] overflow-hidden">
        <img 
          src={inst.image} 
          alt={inst.name} 
          className="w-full h-full object-cover transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent flex items-end">
          <div className="container mx-auto px-6 pb-12">
            <nav className="hidden md:flex items-center gap-2 text-white/90 text-[10px] mb-4 uppercase tracking-[0.2em] font-bold">
              <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/institutions" className="hover:text-secondary transition-colors">Institutions</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-secondary">{inst.name}</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-2 leading-tight drop-shadow-lg">{inst.name}</h1>
            <div className="flex items-center gap-4">
               <div className="w-8 h-0.5 bg-secondary" />
               <p className="text-xs md:text-sm text-secondary font-bold tracking-[0.25em] uppercase">{inst.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Content Area */}
          <div className="lg:w-2/3 space-y-16 order-2 lg:order-1">
            
            {/* Institution Overview */}
            <section id="overview" className="scroll-mt-32">
              <div className="space-y-8">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">About the Institution</h2>
                <div className="prose prose-lg text-black max-w-none font-bold leading-relaxed">
                   <p className="text-base md:text-lg opacity-100">{inst.overview}</p>
                </div>
              </div>
            </section>

            {/* Modernized Courses Offered Section */}
            <section id="programs" className="scroll-mt-32">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-10">Courses Offered</h2>
              {inst.id === 'pu-college' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                  <div className="space-y-5">
                    {inst.courses.filter(c => c.name.startsWith('Science')).map((course, idx) => {
                      const nameParts = course.name.split(': ');
                      return (
                        <div key={`sci-${idx}`} className="group p-5 bg-[#F9F7F8] rounded-xl border border-gray-100 flex items-center gap-5 transition-all duration-300 hover:bg-white hover:shadow-lg hover:border-primary/10">
                          <div className="w-12 h-12 bg-[#F1EBED] rounded-xl flex items-center justify-center text-primary shrink-0 transition-transform group-hover:scale-110">
                            <GraduationCap className="w-6 h-6 opacity-70" />
                          </div>
                          <div>
                            <span className="block text-xs font-black uppercase tracking-wider text-black">{nameParts[0]}</span>
                            <span className="block text-base font-bold text-primary tracking-tight leading-tight">{nameParts[1]}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="space-y-5">
                    {inst.courses.filter(c => c.name.startsWith('Commerce')).map((course, idx) => {
                      const nameParts = course.name.split(': ');
                      return (
                        <div key={`com-${idx}`} className="group p-5 bg-[#F9F7F8] rounded-xl border border-gray-100 flex items-center gap-5 transition-all duration-300 hover:bg-white hover:shadow-lg hover:border-primary/10">
                          <div className="w-12 h-12 bg-[#F1EBED] rounded-xl flex items-center justify-center text-primary shrink-0 transition-transform group-hover:scale-110">
                            <GraduationCap className="w-6 h-6 opacity-70" />
                          </div>
                          <div>
                            <span className="block text-xs font-black uppercase tracking-wider text-black">{nameParts[0]}</span>
                            <span className="block text-base font-bold text-primary tracking-tight leading-tight">{nameParts[1]}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {inst.courses.map((course, idx) => {
                    const nameParts = course.name.split(': ');
                    const hasCategory = nameParts.length === 2;

                    return (
                      <div key={idx} className="group p-5 bg-[#F9F7F8] rounded-xl border border-gray-100 flex items-center gap-5 transition-all duration-300 hover:bg-white hover:shadow-lg hover:border-primary/10">
                        <div className="w-12 h-12 bg-[#F1EBED] rounded-xl flex items-center justify-center text-primary shrink-0 transition-transform group-hover:scale-110">
                          <GraduationCap className="w-6 h-6 opacity-70" />
                        </div>
                        {hasCategory ? (
                          <div>
                            <span className="block text-xs font-black uppercase tracking-wider text-black">{nameParts[0]}</span>
                            <span className="block text-base font-bold text-primary tracking-tight leading-tight">{nameParts[1]}</span>
                          </div>
                        ) : inst.id === 'public-school' ? (
                          <div>
                            <span className="block text-base font-bold text-primary tracking-tight leading-tight">{course.name}</span>
                            <span className="block text-xs font-black uppercase tracking-wider text-black mt-1">CBSE SYLLABUS</span>
                          </div>
                        ) : (
                          <span className="text-base font-bold text-primary tracking-tight leading-tight">{course.name}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </section>

            {/* Special Highlight Programs */}
            {inst.specialCourses && inst.specialCourses.length > 0 && (
              <section id="special-courses" className="scroll-mt-32">
                <div className="bg-gradient-to-br from-primary to-accent1 p-8 md:p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-10 opacity-5 rotate-12">
                     <Star className="w-48 h-48" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 flex items-center gap-4 relative z-10">
                    <Zap className="text-secondary w-8 h-8"/> Special Certifications
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-4 relative z-10">
                    {inst.specialCourses.map((spec, idx) => (
                      <div key={idx} className="flex gap-4 items-center bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-md">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                        <p className="text-sm font-bold tracking-wide">{spec}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Why Choose Us Modern Section */}
            <section id="why-choose" className="scroll-mt-32">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-10">Why Choose This Institution?</h2>
              <div className="grid grid-cols-1 gap-4">
                {inst.whyChoose.map((point, idx) => (
                  <div key={idx} className="flex gap-5 items-start p-6 bg-white border border-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-base text-black font-bold leading-relaxed">{point}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar Area */}
          <div className="lg:w-1/3 order-1 lg:order-2">
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-2xl lg:sticky lg:top-32 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-secondary" />
              <h3 className="text-xl font-serif font-bold text-primary mb-8">Admission Desk</h3>
              
              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                   <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-secondary shrink-0"><MapPin className="w-5 h-5"/></div>
                   <p className="text-xs font-black text-black leading-relaxed uppercase tracking-wider">{inst.contact.address}</p>
                </div>
                <div className="flex gap-4">
                   <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-secondary shrink-0"><Phone className="w-5 h-5"/></div>
                   <div>
                      <p className="text-base font-bold text-primary tracking-tight">{inst.contact.phone}</p>
                      <p className="text-[10px] font-black text-black uppercase tracking-widest mt-1">Official Hotline</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-secondary shrink-0"><Mail className="w-5 h-5"/></div>
                   <div>
                      <p className="text-sm font-bold text-primary break-all">{inst.contact.email}</p>
                      <p className="text-[10px] font-black text-black uppercase tracking-widest mt-1">Inquiry Mail</p>
                   </div>
                </div>
              </div>

              <div className="space-y-4">
                <Link to="/admissions/enquiry" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-xs hover:bg-secondary transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em] shadow-xl transform hover:-translate-y-1">
                   Apply Online <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="w-full bg-white border-2 border-primary/10 text-primary py-3.5 rounded-xl font-bold text-xs hover:bg-primary hover:text-white transition-all uppercase tracking-[0.2em]">
                   Download Prospectus
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
