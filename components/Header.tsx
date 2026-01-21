import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  School, 
  ChevronRight,
  GraduationCap,
  History,
  Target,
  UserCheck,
  Network,
  ShieldCheck,
  Users,
  TrendingUp,
  Globe,
  LayoutDashboard,
  Pill,
  Briefcase,
  Scale,
  Stethoscope,
  Activity,
  Award,
  BookOpen,
  Layers,
  Cpu,
  Workflow,
  Calendar,
  FileCheck,
  ShieldAlert,
  Microscope,
  Sparkles,
  FileText,
  Send,
  ClipboardCheck
} from 'lucide-react';

interface NavItem {
  title: string;
  path: string;
  mega?: boolean;
  type?: string;
}

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
    setMobileExpanded(null);
    window.scrollTo(0, 0);
  }, [location]);

  const getHeaderClasses = () => {
    if (isHome) {
      if (isScrolled) return 'bg-white shadow-lg text-customText border-b border-gray-100';
      return 'bg-black/60 backdrop-blur-md text-white';
    }
    return 'bg-white shadow-md text-customText border-b border-gray-100';
  };

  const aboutMegaMenu = {
    identity: [
      { label: 'Group Main', path: '/about', icon: LayoutDashboard, desc: 'Group overview & vision.' },
      { label: 'Overview', path: '/about/overview', icon: Globe, desc: 'Academic legacy.' },
      { label: 'History', path: '/about/history', icon: History, desc: 'Journey since 1990.' },
      { label: 'Vision', path: '/about/vision', icon: Target, desc: 'Future roadmap.' },
    ],
    leadership: [
      { label: "Chairman", path: '/about/chairman-message', icon: UserCheck, desc: 'Prof. Basavaraj Ramanal.' },
      { label: 'Governing Body', path: '/about/governing-body', icon: Network, desc: 'Strategic leaders.' },
      { label: 'Org Structure', path: '/about/org-structure', icon: LayoutDashboard, desc: 'Administrative hierarchy.' },
    ],
    impact: [
      { label: 'Quality', path: '/about/quality', icon: ShieldCheck, desc: 'Global standards.' },
      { label: 'Social Impact', path: '/about/social-responsibility', icon: Users, desc: 'Impacting lives.' },
      { label: 'Future 2030', path: '/about/future-vision', icon: TrendingUp, desc: 'Strategic roadmap.' },
    ]
  };

  const academicsMegaMenu = {
    streams: [
      { label: 'UG Programs', path: '/academics/ug-programs', icon: GraduationCap, desc: 'Degree courses.' },
      { label: 'PG Programs', path: '/academics/pg-programs', icon: Cpu, desc: 'Specializations.' },
      { label: 'Diploma & PU', path: '/academics/diploma-pu-programs', icon: Layers, desc: 'Foundational training.' },
    ],
    excellence: [
      { label: 'Teaching', path: '/academics/teaching-methodology', icon: Workflow, desc: 'Pedagogical approach.' },
      { label: 'Calendar', path: '/academics/academic-calendar', icon: Calendar, desc: 'Academic timelines.' },
      { label: 'Evaluation', path: '/academics/evaluation-system', icon: FileCheck, desc: 'Assessment standards.' },
    ],
    innovation: [
      { label: 'Research', path: '/academics/research', icon: Microscope, desc: 'Innovation & R&D.' },
      { label: 'Rules', path: '/academics/rules-regulations', icon: ShieldAlert, desc: 'Compliance.' },
      { label: 'The Edge', path: '/academics/the-edge', icon: Sparkles, desc: 'What sets us apart.' },
    ]
  };

  const admissionsMegaMenu = {
    guidelines: [
      { label: 'Process', path: '/admissions/process', icon: ClipboardCheck, desc: 'Step-by-step guide.' },
      { label: 'Eligibility', path: '/admissions/eligibility', icon: ShieldCheck, desc: 'Requirements.' },
      { label: 'Documents', path: '/admissions/documents', icon: FileText, desc: 'Checklist.' },
    ],
    enrollment: [
      { label: 'Enquiry', path: '/admissions/enquiry', icon: Send, desc: 'Start today.' },
      { label: 'Prospectus', path: '/admissions/prospectus', icon: BookOpen, desc: 'Brochures.' },
      { label: 'International', path: '/admissions/international', icon: Globe, desc: 'Global applicants.' },
    ],
    scholarships: [
      { label: 'Scholarships', path: '/admissions/scholarships', icon: Award, desc: 'Financial assistance.' },
    ]
  };

  const instMegaMenu = {
    professional: [
      { id: 'pharmacy', label: 'Pharmacy', icon: Pill, desc: 'B.Pharm, Pharm.D, Ph.D' },
      { id: 'management-science', label: 'Management & Sci', icon: LayoutDashboard, desc: 'BCA, BCA AI, B.Com' },
      { id: 'management', label: 'Management (MBA)', icon: Briefcase, desc: 'Corporate MBA & SCM' },
      { id: 'law', label: 'College of Law', icon: Scale, desc: '3 Year LL.B' },
      { id: 'education', label: 'Education', icon: BookOpen, desc: 'B.Ed Program' },
    ],
    healthcare: [
      { id: 'nursing', label: 'Nursing', icon: Stethoscope, desc: 'B.Sc, M.Sc, Ph.D' },
      { id: 'physiotherapy', label: 'Physiotherapy', icon: Activity, desc: 'BPT & MPT' },
      { id: 'allied-health', label: 'Allied Health', icon: Microscope, desc: 'B.Sc MLT, MIT, Dialysis' },
      { id: 'paramedical', label: 'Paramedical', icon: Award, desc: 'Diploma Programs' },
    ],
    foundation: [
      { id: 'pu-college', label: 'Composite PU', icon: Layers, desc: 'Pre-University (Sci & Comm)' },
      { id: 'public-school', label: 'Public School', icon: School, desc: 'School Education (LKG to 10th)' },
    ]
  };

  const navConfig: NavItem[] = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about', mega: true, type: 'about' },
    { title: 'Institutions', path: '/institutions', mega: true, type: 'institutions' },
    { title: 'Academics', path: '/academics', mega: true, type: 'academics' },
    { title: 'Admissions', path: '/admissions', mega: true, type: 'admissions' },
    { title: 'Facilities', path: '/facilities' },
    { title: 'Contact', path: '/contact' }
  ];

  const renderMegaMenu = (nav: NavItem) => {
    let menuData: any = null;
    let borderColor = 'border-primary';

    if (nav.type === 'about') { menuData = aboutMegaMenu; borderColor = 'border-secondary'; }
    else if (nav.type === 'academics') { menuData = academicsMegaMenu; borderColor = 'border-accent2'; }
    else if (nav.type === 'admissions') { menuData = admissionsMegaMenu; borderColor = 'border-accent1'; }

    if (!menuData && nav.type !== 'institutions') return null;

    const sections = menuData ? Object.keys(menuData) : [];

    return (
      <div 
        className={`absolute top-full left-0 right-0 w-full z-50 pointer-events-none transition-all duration-300 ${activeMenu === nav.title ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'}`}
        onMouseEnter={() => setActiveMenu(nav.title)}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="container mx-auto px-4 pointer-events-auto">
          <div className={`bg-white text-customText shadow-2xl rounded-b-3xl border-t-4 ${borderColor} overflow-hidden max-w-6xl mx-auto`}>
            {nav.type === 'institutions' ? (
              <div className="grid grid-cols-3 p-8 md:p-10 gap-10">
                <div>
                  <h4 className="text-primary font-black uppercase text-xs tracking-widest mb-6 border-b border-gray-100 pb-3 flex items-center gap-2">
                    <Briefcase className="w-3 h-3 text-secondary"/> Professional
                  </h4>
                  <div className="space-y-2">
                    {instMegaMenu.professional.map(item => (
                      <Link key={item.id} to={`/institution/${item.id}`} className="flex gap-4 group/sub hover:bg-primary/5 p-3 rounded-xl transition-all">
                        <item.icon className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover/sub:scale-110 transition-transform" />
                        <div><span className="block font-bold text-sm group-hover/sub:text-primary">{item.label}</span><span className="text-xs text-gray-400 font-medium">{item.desc}</span></div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-secondary font-black uppercase text-xs tracking-widest mb-6 border-b border-gray-100 pb-3 flex items-center gap-2">
                    <Stethoscope className="w-3 h-3 text-primary"/> Healthcare
                  </h4>
                  <div className="space-y-2">
                    {instMegaMenu.healthcare.map(item => (
                      <Link key={item.id} to={`/institution/${item.id}`} className="flex gap-4 group/sub hover:bg-secondary/5 p-3 rounded-xl transition-all">
                        <item.icon className="w-5 h-5 text-secondary shrink-0 mt-0.5 group-hover/sub:scale-110 transition-transform" />
                        <div><span className="block font-bold text-sm group-hover/sub:text-secondary">{item.label}</span><span className="text-xs text-gray-400 font-medium">{item.desc}</span></div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-accent1 font-black uppercase text-xs tracking-widest mb-6 border-b border-gray-100 pb-3 flex items-center gap-2">
                    <Layers className="w-3 h-3 text-accent1"/> Foundation & Schools
                  </h4>
                  <div className="space-y-2">
                    {instMegaMenu.foundation.map(item => (
                      <Link key={item.id} to={`/institution/${item.id}`} className="flex gap-4 group/sub hover:bg-accent1/5 p-3 rounded-xl transition-all">
                        <item.icon className="w-5 h-5 text-accent1 shrink-0 mt-0.5 group-hover/sub:scale-110 transition-transform" />
                        <div><span className="block font-bold text-sm group-hover/sub:text-accent1">{item.label}</span><span className="text-xs text-gray-400 font-medium">{item.desc}</span></div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-3 p-8 md:p-10 gap-10">
                {sections.map((sectionKey) => (
                  <div key={sectionKey}>
                    <h4 className="text-primary font-black uppercase text-xs tracking-widest mb-6 border-b border-gray-100 pb-3">
                      {sectionKey.replace(/([A-Z])/g, ' $1').trim()}
                    </h4>
                    <div className="space-y-2">
                      {menuData[sectionKey].map((item: any, i: number) => (
                        <Link key={i} to={item.path} className="flex gap-4 group/sub hover:bg-gray-50 p-3 rounded-xl transition-all">
                          <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover/sub:bg-primary group-hover/sub:text-white transition-all shrink-0">
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="block font-bold text-sm group-hover/sub:text-primary leading-tight">{item.label}</span>
                            <span className="text-xs text-gray-400 font-medium mt-1 block">{item.desc}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] header-transition ${getHeaderClasses()}`}>
      <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between relative">
        <Link to="/" className="flex items-center relative z-[110]">
          <img 
            src="https://res.cloudinary.com/dejcpd56d/image/upload/v1767769752/Karnataka-Group-of-institute-brand-Guidline.pdf.pdf-3_1_qegbvr.svg" 
            alt="Logo" 
            className={`h-10 md:h-12 transition-all`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5 h-full">
          {navConfig.map((nav, idx) => (
            <div 
              key={idx} 
              className="h-full flex items-center"
              onMouseEnter={() => setActiveMenu(nav.title)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="px-2 xl:px-3">
                {nav.mega ? (
                  <button className={`py-2 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1 whitespace-nowrap border-b-2 ${activeMenu === nav.title || location.pathname.startsWith(nav.path) ? 'border-secondary text-secondary' : 'border-transparent hover:text-secondary'}`}>
                    {nav.title} <ChevronDown className={`w-3 h-3 transition-transform ${activeMenu === nav.title ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link to={nav.path} className={`py-2 font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap border-b-2 ${location.pathname === nav.path ? 'border-secondary text-secondary' : 'border-transparent hover:text-secondary'}`}>
                    {nav.title}
                  </Link>
                )}
              </div>
              {nav.mega && renderMegaMenu(nav)}
            </div>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 relative z-[110]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6 text-primary"/> : <Menu className={`w-6 h-6 ${isHome && !isScrolled ? 'text-white' : 'text-primary'}`}/>}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div className={`lg:hidden fixed top-0 right-0 w-[85%] max-w-sm h-full bg-white z-[120] shadow-2xl transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <span className="font-bold text-primary text-sm uppercase tracking-widest">Navigation</span>
            <button onClick={() => setIsMobileMenuOpen(false)}><X className="w-5 h-5 text-gray-400"/></button>
          </div>
          
          <div className="flex-grow overflow-y-auto px-4 py-6 custom-scrollbar">
            <nav className="space-y-2">
              {navConfig.map((nav, i) => (
                <div key={i} className="border-b border-gray-50 last:border-0 pb-2">
                  {nav.mega ? (
                    <div>
                      <button 
                        onClick={() => setMobileExpanded(mobileExpanded === nav.title ? null : nav.title)}
                        className="w-full flex items-center justify-between py-3 text-sm font-bold text-primary uppercase tracking-wider"
                      >
                        {nav.title}
                        <ChevronRight className={`w-4 h-4 transition-transform ${mobileExpanded === nav.title ? 'rotate-90' : ''}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded === nav.title ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-4 py-2 space-y-3">
                          {nav.type === 'institutions' ? (
                            <div className="space-y-3">
                              {[...instMegaMenu.professional, ...instMegaMenu.healthcare, ...instMegaMenu.foundation].map((inst) => (
                                <Link key={inst.id} to={`/institution/${inst.id}`} className="block text-xs text-gray-500 font-medium">{inst.label}</Link>
                              ))}
                            </div>
                          ) : (
                            <div className="space-y-3">
                              {nav.type === 'about' && aboutMegaMenu.identity.map((m, si) => <Link key={si} to={m.path} className="block text-xs text-gray-500 font-medium">{m.label}</Link>)}
                              {nav.type === 'academics' && academicsMegaMenu.streams.map((m, si) => <Link key={si} to={m.path} className="block text-xs text-gray-500 font-medium">{m.label}</Link>)}
                              {nav.type === 'admissions' && admissionsMegaMenu.guidelines.map((m, si) => <Link key={si} to={m.path} className="block text-xs text-gray-500 font-medium">{m.label}</Link>)}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link to={nav.path} className="block py-3 text-sm font-bold text-primary uppercase tracking-wider">{nav.title}</Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};