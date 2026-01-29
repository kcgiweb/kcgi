
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ChevronRight, 
  History, 
  Target, 
  Heart, 
  UserCheck, 
  Network, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  Globe,
  Quote,
  CheckCircle2,
  MapPin,
  Building2,
  Award
} from 'lucide-react';

const ABOUT_CONTENT: Record<string, { title: string, subtitle: string, icon: any, content: React.ReactNode }> = {
  'overview': {
    title: 'About the Group',
    subtitle: 'Nurturing Intellect and Integrity since 1990.',
    icon: Globe,
    content: (
      <div className="space-y-12">
        <div className="prose prose-lg text-customText max-w-none font-medium leading-relaxed">
          <p>
            The Karnataka College Group of Institutions, managed by the Karnataka Educational Trust, stands as a beacon of academic excellence in Bengaluru. Founded with the mission to provide accessible, high-quality professional education, the group has grown into a multi-disciplinary educational hub.
          </p>
          <p>
            With over 10 institutions spread across a sprawling campus, we offer a diverse array of programs including Pharmacy, Nursing, Management, Law, Physiotherapy, and School Education. Our institutions are recognized for their state-of-the-art infrastructure, experienced faculty, and strong industry linkages.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Academic Legacy', value: '30+ Years', desc: 'Consistency in excellence.' },
            { label: 'Alumni Network', value: '50,000+', desc: 'Placed globally in top firms.' },
            { label: 'Campus Area', value: '25 Acres', desc: 'Modern integrated facilities.' }
          ].map((stat, i) => (
            <div key={i} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
              <span className="block text-3xl font-bold text-primary mb-2">{stat.value}</span>
              <span className="block text-sm font-bold text-secondary uppercase tracking-widest mb-2">{stat.label}</span>
              <p className="text-xs text-gray-400">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    )
  },
  'history': {
    title: 'History & Growth',
    subtitle: 'From a single vision to a multi-disciplinary empire.',
    icon: History,
    content: (
      <div className="space-y-12">
        <div className="relative border-l-4 border-primary/10 ml-6 space-y-16 py-10">
          {[
            { year: '1990', title: 'The Foundation', desc: 'Karnataka Educational Trust was established with a focus on primary and secondary school education.' },
            { year: '2003', title: 'Pharmacy Milestone', desc: 'Establishment of the Karnataka College of Pharmacy, our first professional higher education venture.' },
            { year: '2005', title: 'Healthcare Expansion', desc: 'Inception of the College of Nursing and School of Nursing to meet global healthcare demands.' },
            { year: '2012', title: 'Diversified Portfolios', desc: 'Launch of Management, Law, and Allied Health sciences under the group umbrella.' },
            { year: '2024', title: 'Modern Excellence', desc: 'A tech-integrated campus serving thousands of students across 10 institutions.' }
          ].map((item, i) => (
            <div key={i} className="relative pl-12">
              <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-secondary border-4 border-white shadow-lg" />
              <span className="text-2xl font-black text-primary mb-2 block">{item.year}</span>
              <h4 className="text-xl font-bold text-customText mb-2">{item.title}</h4>
              <p className="text-gray-500 max-w-2xl">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    )
  },
  'vision': {
    title: 'Vision & Mission',
    subtitle: 'Strategic roadmap for institutional excellence.',
    icon: Target,
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-primary p-12 rounded-[3rem] text-white shadow-xl">
          <h3 className="text-3xl font-serif font-bold mb-8 text-secondary">Our Vision</h3>
          <p className="text-xl leading-relaxed italic font-light">
            "To be a premier global center for quality education, fostering innovation, professional ethics, and research to serve the evolving needs of society and humanity."
          </p>
        </div>
        <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100">
          <h3 className="text-3xl font-serif font-bold mb-8 text-primary">Our Mission</h3>
          <ul className="space-y-6">
            {[
              'To provide value-based education through industry-integrated curriculum.',
              'To cultivate a research-centric environment in all professional disciplines.',
              'To develop leaders with high moral standards and social responsibility.',
              'To bridge the gap between academic theory and practical industry application.'
            ].map((m, i) => (
              <li key={i} className="flex gap-4 items-start font-medium text-customText">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" /> {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  },
  'core-values': {
    title: 'Core Values',
    subtitle: 'The principles that guide our daily actions.',
    icon: Heart,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'Excellence', desc: 'Striving for the highest quality in every academic and administrative endeavor.' },
          { title: 'Integrity', desc: 'Upholding honesty and transparency in all interactions and assessments.' },
          { title: 'Innovation', desc: 'Encouraging creative thinking and new-age research methodologies.' },
          { title: 'Empathy', desc: 'Developing professionals who care for the community with compassion.' },
          { title: 'Diversity', desc: 'Creating an inclusive environment for students from across the globe.' },
          { title: 'Accountability', desc: 'Taking responsibility for the holistic growth of every student.' }
        ].map((v, i) => (
          <div key={i} className="p-10 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all">
            <h4 className="text-xl font-bold text-primary mb-4">{v.title}</h4>
            <p className="text-sm text-gray-500 leading-relaxed font-medium">{v.desc}</p>
          </div>
        ))}
      </div>
    )
  },
  'chairman-message': {
    title: "Chairman's Message",
    subtitle: 'A word from our visionary leader, Dr. S.A. Ahmed.',
    icon: UserCheck,
    content: (
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full lg:w-1/3">
          <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-gray-50">
            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Chairman" />
          </div>
        </div>
        <div className="w-full lg:w-2/3 space-y-8">
          <Quote className="w-16 h-16 text-primary/10" />
          <h3 className="text-3xl font-serif font-bold text-primary">Empowering Minds, Shaping Futures</h3>
          <div className="prose prose-lg text-customText font-medium italic leading-relaxed">
            "Education is not just about earning degrees; it is about character building and preparing for the challenges of life. At Karnataka College Group, we provide an environment where students are encouraged to think independently and innovate. Our legacy of 30 years is a testament to the trust of thousands of parents."
          </div>
          <div>
            <h4 className="text-2xl font-bold text-primary">Dr. S.A. Ahmed</h4>
            <p className="text-sm font-black uppercase text-secondary tracking-widest mt-1">Chairman & Managing Trustee</p>
          </div>
        </div>
      </div>
    )
  },
  'governing-body': {
    title: 'Governing Body',
    subtitle: 'The leadership driving our institutional vision.',
    icon: Network,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          { name: 'Dr. S.A. Ahmed', role: 'Chairman', info: 'Visionary educationist with 35+ years of experience.' },
          { name: 'Prof. K. Subramanyam', role: 'Executive Secretary', info: 'Former Academic head with deep administrative expertise.' },
          { name: 'Dr. Reena Ahmed', role: 'Academic Director', info: 'Ph.D in Health Sciences, leading academic audits.' },
          { name: 'Mr. Zafarullah Khan', role: 'Administrative Head', info: 'Managing global operations and student welfare.' },
          { name: 'Dr. Ramesh Kumar', role: 'Technical Advisor', info: 'Industry veteran in pharmaceutical research.' }
        ].map((m, i) => (
          <div key={i} className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 text-center hover:bg-white hover:shadow-xl transition-all">
            <div className="w-20 h-20 bg-primary/5 rounded-full mx-auto mb-6 flex items-center justify-center text-primary/30">
              <UserCheck className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-primary mb-1">{m.name}</h4>
            <p className="text-xs font-black uppercase text-secondary tracking-widest mb-4">{m.role}</p>
            <p className="text-xs text-gray-400 font-medium leading-relaxed">{m.info}</p>
          </div>
        ))}
      </div>
    )
  },
  'quality': {
    title: 'Quality Assurance',
    subtitle: 'Rigorous standards for high-value degrees.',
    icon: ShieldCheck,
    content: (
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'NAAC Accredited', text: 'Institutional Grade A certification for academic audits.' },
            { title: 'AICTE Approved', text: 'Compliant with Technical Council standards.' },
            { title: 'PCI & NMC Recognition', text: 'Approved for professional medical & pharmacy practice.' },
            { title: 'RGUHS Affiliation', text: 'Member of premier Health Sciences University.' }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <CheckCircle2 className="w-8 h-8 text-secondary flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500 font-medium">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  'social-responsibility': {
    title: 'Social Responsibility',
    subtitle: 'Impacting lives beyond the classroom.',
    icon: Users,
    content: (
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-primary">Community Health Drives</h3>
            <p className="text-gray-500 font-medium leading-relaxed">
              Our nursing and physiotherapy students regularly conduct free health camps in rural Bengaluru, providing diagnostic services and health awareness to thousands.
            </p>
            <ul className="space-y-4">
              {['Free Blood Pressure Monitoring', 'Diabetic Awareness Workshops', 'Primary First-Aid Training', 'Environmental Hygiene Drives'].map((v, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-primary">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" /> {v}
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="CSR" />
          </div>
        </div>
      </div>
    )
  },
  'future-vision': {
    title: 'Future Vision 2030',
    subtitle: 'Strategic roadmap for the next decade.',
    icon: TrendingUp,
    content: (
      <div className="bg-primary p-12 md:p-20 rounded-[3rem] text-white">
        <div className="max-w-2xl space-y-12">
          <h3 className="text-3xl font-serif font-bold text-secondary">A Global Academic Hub</h3>
          <div className="space-y-8">
            {[
              { title: 'Digital Campus Transformation', text: 'Implementation of AI-driven personalized learning systems.' },
              { title: 'International Collaborations', text: 'Strategic partnerships with European and American universities for dual degrees.' },
              { title: 'Research & Incubation Hub', text: 'Launching a dedicated startup incubator for student-led innovation.' },
              { title: 'Global Outreach', text: 'Expanding our footprint with administrative offices in Africa and Middle East.' }
            ].map((v, i) => (
              <div key={i} className="flex gap-6">
                <div className="text-4xl font-black text-white/10">{i + 1}</div>
                <div>
                  <h4 className="text-xl font-bold">{v.title}</h4>
                  <p className="text-white/60 text-sm mt-1">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
};

export const AboutUs: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? ABOUT_CONTENT[slug] : ABOUT_CONTENT['overview'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!page && slug) return <Navigate to="/about/overview" />;

  const PageIcon = page.icon;

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Dynamic Header */}
      <div className="bg-primary py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-white">
          <nav className="flex items-center gap-2 text-white/60 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/about/overview" className="hover:text-white transition-colors">About Us</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-secondary">{page.title}</span>
          </nav>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="w-20 h-20 bg-white/10 rounded-[1.5rem] flex items-center justify-center text-secondary border border-white/20">
              <PageIcon className="w-10 h-10" />
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">{page.title}</h1>
              <p className="text-xl text-white/60 font-light max-w-2xl">{page.subtitle}</p>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-accent1/10 -skew-x-12 translate-x-20" />
      </div>

      {/* Main Page Layout */}
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Internal Sidebar for Navigation between About Subpages */}
          <aside className="lg:w-1/4">
            <div className="sticky top-32 space-y-1">
              <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] mb-6 px-4">Sections</p>
              {Object.keys(ABOUT_CONTENT).map((key) => (
                <Link 
                  key={key}
                  to={`/about/${key}`}
                  className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl transition-all font-bold text-sm border ${
                    slug === key || (!slug && key === 'overview')
                    ? 'bg-primary border-primary text-white shadow-xl' 
                    : 'bg-white border-gray-100 text-gray-500 hover:border-primary/20 hover:bg-primary/5'
                  }`}
                >
                  {ABOUT_CONTENT[key].title}
                </Link>
              ))}
            </div>
          </aside>

          {/* Actual Page Content */}
          <div className="lg:w-3/4 animate-in fade-in slide-in-from-bottom-6 duration-700">
            {page.content}
          </div>
        </div>
      </div>
    </div>
  );
};