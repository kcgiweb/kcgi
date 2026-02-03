
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  History, 
  Target, 
  Heart, 
  UserCheck, 
  Network, 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  Users, 
  TrendingUp, 
  Globe, 
  Quote,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Award,
  Medal,
  Star,
  BookOpen
} from 'lucide-react';
import { INSTITUTIONS } from '../constants';

export const AboutGroup: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'overview', title: 'Group Overview', icon: Globe },
    { id: 'history', title: 'Our Heritage', icon: History },
    { id: 'vision', title: 'Vision & Mission', icon: Target },
    { id: 'leadership', title: 'Leadership', icon: UserCheck },
    { id: 'quality', title: 'Quality & Accreditations', icon: ShieldCheck },
    { id: 'impact', title: 'Social Impact', icon: Users },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Cinematic Banner */}
      <div className="relative h-[50vh] min-h-[400px] bg-primary overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover opacity-20 scale-105" 
            alt="Institutional Heritage" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-secondary">About the Group</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            A Legacy of <br /> Academic Excellence
          </h1>
          <p className="text-xl text-white/80 max-w-2xl font-light leading-relaxed">
            Founded on a vision in 1997, we have built 29 years of academic trust.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sticky Navigation Sidebar */}
          <aside className="lg:w-1/4">
            <div className="sticky top-32 space-y-2">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 px-4">About Section</p>
              {sections.map((sec) => (
                <button 
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className="w-full flex items-center gap-3 px-5 py-4 rounded-2xl hover:bg-primary/5 text-gray-500 hover:text-primary transition-all group text-left border border-transparent hover:border-primary/10"
                >
                  <sec.icon className="w-5 h-5 group-hover:text-secondary transition-colors" />
                  <span className="font-bold text-sm">{sec.title}</span>
                </button>
              ))}
              <div className="mt-10 p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <p className="text-xs font-bold text-primary mb-3">Admission Enquiry</p>
                <p className="text-[10px] text-gray-500 mb-4 leading-relaxed font-medium">Have questions about our group institutions? Our advisors are ready to help.</p>
                <Link to="/admissions/enquiry" className="text-secondary font-bold text-[10px] uppercase tracking-widest flex items-center gap-2">
                  Contact Now <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Content Sections */}
          <div className="lg:w-3/4 space-y-40">
            
            {/* 1. Overview */}
            <section id="overview" className="scroll-mt-32">
              <div className="space-y-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 rounded-full text-primary font-bold text-[10px] uppercase tracking-[0.2em]">
                  <Globe className="w-4 h-4" /> Group Overview
                </div>
                <h2 className="text-4xl font-serif font-bold text-primary">Nurturing Intellect Since 1997</h2>
                <div className="prose prose-lg max-w-none text-customText space-y-8 font-medium">
                  <p className="text-2xl leading-relaxed text-primary/80 font-light italic">
                    "Our educational voyage officially commenced in 1997 with the establishment of Physiotherapy, paving the way for a multi-disciplinary legacy."
                  </p>
                  <p>
                    Established in the Silicon Valley of India, Bengaluru, the **Karnataka College Group of Institutions** is a multi-disciplinary educational conglomerate. Managed by the Karnataka Educational Trust, we have built a reputation for excellence over nearly three decades of active academic presence.
                  </p>
                  <p>
                    Our group spans across **11 specialized institutions**, offering a diverse range of programs from primary school education to advanced post-graduate research. Each institution operates with a shared vision: **Excellence in Education, Integrity in Character.**
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { label: 'Total Institutions', value: '11', icon: Building2 },
                    { label: 'Programs Offered', value: '45+', icon: BookOpen },
                    { label: 'Global Alumni', value: '55,000+', icon: Users },
                    { label: 'Years of Trust', value: '29', icon: Award },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all text-center">
                      <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                        <stat.icon className="w-5 h-5" />
                      </div>
                      <span className="block text-3xl font-bold text-primary mb-1">{stat.value}</span>
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 2. History & Timeline */}
            <section id="history" className="scroll-mt-32 bg-gray-50 -mx-6 md:-mx-12 px-6 md:px-12 py-24 rounded-[4rem]">
              <div className="space-y-16">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                  <h2 className="text-3xl font-serif font-bold text-primary">Our Historic Journey</h2>
                  <p className="text-gray-500 font-medium">A professional timeline of growth and academic trust.</p>
                </div>
                <div className="relative border-l border-gray-200 ml-6 md:ml-12 space-y-20 py-10">
                   {[
                     { 
                       year: '1997', 
                       title: 'Foundation & Genesis of Professional Education', 
                       desc: 'The Karnataka Educational Trust was established, and the Group launched its academic journey into specialized higher education with the establishment of the Department of Physiotherapy.',
                       color: 'bg-secondary'
                     },
                     { 
                       year: '2003', 
                       title: 'Pharmacy & Pharmaceutical Sciences', 
                       desc: 'Expansion of the medical portfolio with the Karnataka College of Pharmacy, now a top-tier research unit.',
                       color: 'bg-secondary'
                     },
                     { 
                       year: '2012', 
                       title: 'Multi-Disciplinary Growth', 
                       desc: 'Launch of Management, Law, and Allied Health sciences, creating a holistic professional campus.',
                       color: 'bg-secondary'
                     },
                     { 
                       year: '2018', 
                       title: 'NAAC A Grade Recognition', 
                       desc: 'Achieving excellence in academic audits and ranking among top institutions in Bengaluru.',
                       color: 'bg-secondary'
                     },
                     { 
                       year: '2024', 
                       title: 'Modern Excellence', 
                       desc: 'Transformation into a digital-first enterprise educational group with 11 premier institutions.',
                       color: 'bg-secondary'
                     }
                   ].map((item, i) => (
                     <div key={i} className="relative pl-12 group">
                        <div className={`absolute left-[-6.5px] top-2 w-3 h-3 rounded-full bg-secondary border-2 border-white shadow-[0_0_0_4px_rgba(247,150,30,0.1)] group-hover:scale-150 transition-transform`} />
                        <span className={`text-2xl font-bold mb-2 block text-primary`}>{item.year}</span>
                        <h4 className="text-xl font-bold text-black mb-3">{item.title}</h4>
                        <p className="text-customText leading-relaxed max-w-2xl font-medium">{item.desc}</p>
                     </div>
                   ))}
                </div>
              </div>
            </section>

            {/* 3. Vision & Mission */}
            <section id="vision" className="scroll-mt-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-primary p-16 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group flex flex-col justify-center">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform">
                            <Target className="w-40 h-40" />
                        </div>
                        <div className="relative z-10 space-y-8">
                            <h3 className="text-4xl font-serif font-bold">Our Vision</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-secondary uppercase tracking-widest text-xs mb-2">Primary Vision</h4>
                                    <p className="text-lg leading-relaxed italic font-light">
                                        To contribute to societal advancement by nurturing students into skilled, ethical, and socially responsible professionals who can lead the betterment of humanity.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary uppercase tracking-widest text-xs mb-2">Educational Vision</h4>
                                    <p className="text-lg leading-relaxed italic font-light">
                                        To be a premier global center for quality education, fostering innovation and research to serve the evolving needs of a globalized world.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-secondary p-16 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform">
                            <Sparkles className="w-40 h-40" />
                        </div>
                        <div className="relative z-10 space-y-8">
                            <h3 className="text-4xl font-serif font-bold">Our Mission</h3>
                            <ul className="space-y-6">
                                {[
                                    'Providing industry-integrated education through modern pedagogy.',
                                    'Cultivating research culture in healthcare and social sciences.',
                                    'Developing leaders with high moral and ethical standards.',
                                    'Promoting inclusive growth and social responsibility.',
                                    'Fostering an inclusive academic community with global perspectives.'
                                ].map((m, i) => (
                                    <li key={i} className="flex gap-4 items-start font-medium text-lg leading-snug">
                                        <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" /> {m}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Leadership */}
            <section id="leadership" className="scroll-mt-32">
               <div className="space-y-16">
                  <div className="text-center max-w-2xl mx-auto space-y-4">
                     <h2 className="text-3xl font-serif font-bold text-primary">Institutional Leadership</h2>
                     <p className="text-gray-500 font-medium">Led by visionaries dedicated to the advancement of Indian education.</p>
                  </div>
                  
                  {/* Chairman Message Block */}
                  <div className="bg-gray-50 rounded-[4rem] p-12 md:p-20 border border-gray-100 flex flex-col md:flex-row gap-16 items-center">
                     <div className="w-full md:w-1/3">
                        <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-8 border-white grayscale hover:grayscale-0 transition-all duration-700">
                           <img src="https://res.cloudinary.com/dejcpd56d/image/upload/v1767687458/download_1_hopo91.png" alt="Chairman Prof. Basavaraj Ramanal" className="w-full h-full object-cover" />
                        </div>
                     </div>
                     <div className="w-full md:w-2/3 space-y-8">
                        <QuoteIcon className="w-16 h-16 text-primary/10" />
                        <h3 className="text-3xl font-serif font-bold text-primary">Message from the Chairman</h3>
                        <p className="text-xl text-customText leading-relaxed italic font-light">
                          "Education is the most powerful weapon which you can use to change the world. At Karnataka College Group, we don't just teach subjects; we inspire minds to question, innovate, and lead with empathy. Our heritage is built on the trust of parents and the success of our students across the globe."
                        </p>
                        <div>
                           <h4 className="text-2xl font-bold text-primary">Prof. Basavaraj Ramanal</h4>
                           <p className="text-xs uppercase tracking-[0.3em] font-black text-secondary mt-1">Chairman & Managing Trustee</p>
                        </div>
                     </div>
                  </div>

                  {/* Governing Body Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                     {[
                       { 
                        name: 'SMT. SUVARNA BASAVARAJ RAMNAL', 
                        role: 'Chairperson', 
                        org: 'Karnataka Education Trust',
                        image: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767687764/download_3_gzxfum.png' 
                       },
                       { 
                        name: 'Mr. Pradeep Ramnal', 
                        role: 'CEO', 
                        org: 'Karnataka college Group of Institutions',
                        image: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767687679/download_2_cbxmzc.png' 
                       }
                     ].map((member, i) => (
                       <div key={i} className="p-10 bg-white border border-gray-100 rounded-[3rem] text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                          <div className="w-40 h-40 rounded-[2rem] overflow-hidden mx-auto mb-8 border-4 border-gray-50 shadow-md group-hover:scale-105 transition-transform duration-500">
                             <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                          </div>
                          <h4 className="font-bold text-primary text-xl uppercase tracking-tight">{member.name}</h4>
                          <p className="text-[10px] font-black uppercase tracking-widest text-secondary mt-2 mb-2">{member.role}</p>
                          <p className="text-[10px] text-gray-400 font-bold leading-tight">{member.org}</p>
                       </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* 5. Quality Assurance */}
            <section id="quality" className="scroll-mt-32">
               <div className="bg-primary p-12 md:p-24 rounded-[4rem] text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
                     <ShieldCheck className="w-96 h-96" />
                  </div>
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                     <div className="space-y-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-secondary font-bold text-[10px] uppercase tracking-[0.2em]">
                           Accreditations
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold">Uncompromising Quality Standards</h2>
                        <p className="text-xl text-white/70 font-light leading-relaxed">
                          Our institutions are periodically assessed by the highest governing bodies in India to ensure your degree holds global value.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                           {[
                             { title: 'NAAC A-Grade', desc: 'Highest standard of academic audit.' },
                             { title: 'AICTE Approved', desc: 'Compliant with technical council norms.' },
                             { title: 'RGUHS Affiliated', desc: 'Premier Health Science University.' },
                             { title: 'PCI Recognized', desc: 'Approved for Pharmacy practice.' },
                             { title: 'BCU Affiliated', desc: 'Affiliated to Bengaluru City University.' },
                             { title: 'CBSE Affiliated', desc: 'For school education curriculum.' },
                             { title: 'KSLU Affiliated', desc: 'Affiliated to Karnataka State Law University.' }
                           ].map((item, i) => (
                             <div key={i} className="flex gap-4 items-start">
                                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                                <div>
                                   <h4 className="font-bold">{item.title}</h4>
                                   <p className="text-xs opacity-60 mt-1">{item.desc}</p>
                                </div>
                             </div>
                           ))}
                        </div>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="aspect-square bg-white rounded-3xl flex items-center justify-center p-8 grayscale">
                           <img src="https://sjbit.edu.in/wp-content/uploads/2021/07/NAAC-Logo-250x250-1.png" alt="NAAC" className="max-w-full" />
                        </div>
                        <div className="aspect-square bg-white rounded-3xl flex items-center justify-center p-8 grayscale">
                           <img src="https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png" alt="AICTE" className="max-w-full" />
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* 6. Social Impact */}
            <section id="impact" className="scroll-mt-32 pb-20">
               <div className="space-y-16">
                  <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-gray-100 pb-12">
                     <div className="max-w-2xl">
                        <h2 className="text-3xl font-serif font-bold text-primary">Corporate Social Responsibility</h2>
                        <p className="text-gray-500 font-medium mt-4">Impacting the community through health, awareness, and empowerment.</p>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-primary font-bold">20+</div>
                        <div className="max-w-[120px] text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight mt-3">Annual Health Camps Conducted</div>
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {[
                       { 
                         title: 'Health Initiatives', 
                         desc: 'Free primary healthcare camps and diagnostic drives for rural Bengaluru.',
                         image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=600'
                       },
                       { 
                         title: 'Eco-Campus Drive', 
                         desc: 'Sustainability programs including rainwater harvesting and zero-plastic policies.',
                         image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600'
                       },
                       { 
                         title: 'Women Empowerment', 
                         desc: 'Special scholarship programs and vocational training for underprivileged girl students.',
                         image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600'
                       }
                     ].map((item, i) => (
                       <div key={i} className="group cursor-default">
                          <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 relative">
                             <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                             <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <h4 className="text-2xl font-serif font-bold text-primary mb-3">{item.title}</h4>
                          <p className="text-sm text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                       </div>
                     ))}
                  </div>
               </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

function QuoteIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6738 6 22.017 7.34315 22.017 9V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91244 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12C3.017 12.5523 2.56928 13 2.017 13H0.017C-0.535279 13 -1.017 12.5523 -1.017 12V9C-1.017 7.34315 0.326142 6 2.017 6H8.017C9.67386 6 11.017 7.34315 11.017 9V15C11.017 18.3137 8.33071 21 5.017 21H3.017Z"/>
    </svg>
  );
}
