import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from './SEO';

const BASE_KEYWORDS = "KCM, KCM Bangalore, KCM College, Karnataka College of Management, Karnataka College of Management and Science, the best college in Bangalore, KCGI, karnataka college group of institutions, Karnataka Education Trust, Karnataka College of Pharmacy, Karnataka College of Nursing, Karnataka College of Education, Karnataka Public School CBSE, Karnataka Composite PU College, Karunadu College of Law, Karunadu College of Allied Health Science, Kaveri Paramedical College, Manjunatha College of Physiotherapy, Hegde Nagar Bengaluru, Thirumenahalli Bengaluru, Yelahanka Bengaluru, best pharmacy college in bangalore, top nursing colleges in bangalore, B.Pharm, M.Pharm, Pharm D, GNM, B.Sc Nursing, MBA, BBA, BCA, B.Com, B.Ed, LL.B 3 Years, B.Sc MLT, B.Sc MIT, Paramedical Diploma, BPT, MPT Physiotherapy, KCM Admissions 2026, Karnataka College Bangalore, top colleges in South India, best institutions in India, colleges in Kerala for nursing, colleges in Andhra Pradesh, higher education in Telangana, study in Bangalore, Tamil Nadu students, pan India admissions, best pharmacy college in India, top management colleges South India";

const routeSEO: Record<string, { title: string, description: string, keywords?: string }> = {
  '/': {
    title: 'KCM | Karnataka College Group of Institutions | The Best College in Bangalore',
    description: 'KCM (Karnataka College Group of Institutions): The Best College in Bangalore offering Excellence in Pharmacy, Nursing, Law, and Management. KCM admissions open.',
    keywords: 'KCM, KCM Bangalore, KCM College, karnataka college group of institutions, Karnataka Education Trust, the best college in bangalore, top institutions in karnataka'
  },
  
  // ABOUT US PAGES
  '/about': {
    title: 'About KCGI | Karnataka College Group of Institutions',
    description: 'Learn about the legacy of Karnataka College Group of Institutions (KCGI), managed by Karnataka Education Trust. Excellence in education since 1997.',
    keywords: 'about KCGI, karnataka education trust history, kcgi legacy, kcgi bangalore about us'
  },
  '/about/overview': {
    title: 'Overview | About KCGI Bangalore',
    description: 'Detailed overview of Karnataka College Group of Institutions (KCGI), our sprawling campus in Bangalore, and our educational philosophy.',
    keywords: 'kcgi overview, karnataka college campus, kcgi infrastructure, kcgi bangalore campus'
  },
  '/about/history': {
    title: 'Our History | Karnataka College Group of Institutions',
    description: 'Explore the rich history and milestones of Karnataka Education Trust and KCGI since its establishment in 1997.',
    keywords: 'kcgi history, karnataka education trust established, kcgi milestones, history of karnataka college bangalore'
  },
  '/about/vision': {
    title: 'Vision & Mission | KCGI Bangalore',
    description: 'The Vision and Mission of Karnataka College Group of Institutions. Shaping minds and empowering global leaders.',
    keywords: 'kcgi vision mission, karnataka college vision, kcgi goals, kcgi bangalore objectives'
  },
  '/about/core-values': {
    title: 'Core Values | KCGI Bangalore',
    description: 'Discover the core values that drive the Karnataka College Group of Institutions: Excellence, Integrity, and Innovation.',
    keywords: 'kcgi core values, karnataka college ethics, kcgi principles'
  },
  '/about/chairman-message': {
    title: 'Chairman Message | KCGI Bangalore',
    description: 'Read the inspiring message from the Chairman of Karnataka Education Trust and KCGI.',
    keywords: 'kcgi chairman, karnataka education trust chairman message, leadership at kcgi'
  },
  '/about/governing-body': {
    title: 'Governing Body | KCGI Bangalore',
    description: 'Meet the visionary leaders and members of the Governing Body steering Karnataka College Group of Institutions.',
    keywords: 'kcgi governing body, karnataka education trust members, kcgi leadership board'
  },
  '/about/quality': {
    title: 'Quality Policy | KCGI Bangalore',
    description: 'KCGI Quality Policy. We are committed to providing world-class education and adhering to global academic standards.',
    keywords: 'kcgi quality policy, karnataka college standards, academic excellence kcgi'
  },
  '/about/social-responsibility': {
    title: 'Social Responsibility | KCGI Bangalore',
    description: 'Learn about KCGI\'s commitment to corporate social responsibility, community outreach, and social upliftment.',
    keywords: 'kcgi social responsibility, kcgi nss, kcgi community service, karnataka college outreach'
  },
  '/about/future-vision': {
    title: 'Future Vision | KCGI Bangalore',
    description: 'Our roadmap for the future. How KCGI is expanding its educational footprint to meet global demands.',
    keywords: 'kcgi future vision, kcgi upcoming projects, kcgi expansion'
  },

  // ACADEMICS PAGES
  '/academics': {
    title: 'Academics & Courses | KCGI',
    description: 'Explore the wide range of academic programs at KCGI including Pharmacy, Nursing, Management, Law, Physiotherapy, and Allied Health Sciences.',
    keywords: 'kcgi courses, karnataka college programs, pharmacy nursing law management degrees'
  },
  '/academics/ug-programs': {
    title: 'Undergraduate Programs (UG) | KCGI',
    description: 'Explore UG degrees at KCGI Bangalore. B.Pharm, B.Sc Nursing, BBA, BCA, B.Com, BPT, LL.B, and Allied Health Sciences.',
    keywords: 'kcgi ug courses, undergraduate degrees bangalore, b.pharm bangalore, bca bangalore, b.com kcgi, bsc nursing bangalore'
  },
  '/academics/pg-programs': {
    title: 'Postgraduate Programs (PG) | KCGI',
    description: 'Explore PG degrees at KCGI Bangalore. M.Pharm, M.Sc Nursing, MBA, M.Com, MPT, and Pharm D.',
    keywords: 'kcgi pg courses, masters degrees bangalore, mba kcgi, m.pharm bangalore, msc nursing karnataka'
  },
  '/academics/diploma-pu-programs': {
    title: 'Diploma & PU Programs | KCGI',
    description: 'Pre-University (PU) Science/Commerce and Paramedical Diploma courses like D.Pharm, GNM, and DMLT at KCGI.',
    keywords: 'kcgi pu college, paramedical diploma bangalore, d.pharm kcgi, gnm nursing kcgi, pu science commerce bangalore'
  },
  '/academics/teaching-methodology': {
    title: 'Teaching Methodology | KCGI',
    description: 'Innovative teaching methodologies and modern pedagogy employed at Karnataka College Group of Institutions.',
    keywords: 'kcgi teaching methodology, digital classrooms kcgi, practical learning kcgi'
  },
  '/academics/academic-calendar': {
    title: 'Academic Calendar | KCGI',
    description: 'View the academic calendar, term dates, and exam schedules for all programs at KCGI.',
    keywords: 'kcgi academic calendar, kcgi exam dates, karnataka college schedule'
  },
  '/academics/evaluation-system': {
    title: 'Evaluation System | KCGI',
    description: 'Understand the fair and transparent evaluation and grading system used across KCGI institutions.',
    keywords: 'kcgi evaluation system, kcgi grading, kcgi exams'
  },
  '/academics/research': {
    title: 'Research & Innovation | KCGI',
    description: 'State-of-the-art research facilities and ongoing innovative projects at Karnataka College Group of Institutions.',
    keywords: 'kcgi research, karnataka college innovation, pharmacy research kcgi, research labs bangalore'
  },
  '/academics/rules-regulations': {
    title: 'Rules & Regulations | KCGI',
    description: 'Academic rules, code of conduct, and disciplinary regulations for students at KCGI.',
    keywords: 'kcgi rules and regulations, kcgi code of conduct, student discipline kcgi'
  },
  '/academics/the-edge': {
    title: 'The KCGI Edge | Why KCGI?',
    description: 'Discover the KCGI Edge. What makes Karnataka College Group of Institutions the best choice for higher education in Bangalore.',
    keywords: 'why choose kcgi, kcgi advantage, best college in bangalore kcgi'
  },

  // ADMISSIONS PAGES
  '/admissions': {
    title: 'Admissions Open | Apply to KCGI Bangalore',
    description: 'Admissions are now open at Karnataka College Group of Institutions (KCGI) for various UG, PG, and Diploma programs. Apply today for a bright future.',
    keywords: 'kcgi admissions 2026, karnataka college admission open, apply to kcgi, bangalore college admissions'
  },
  '/admissions/process': {
    title: 'Admission Process | KCGI',
    description: 'Step-by-step guide to the admission process at Karnataka College Group of Institutions (KCGI).',
    keywords: 'kcgi admission process, how to apply to kcgi, karnataka college enrollment'
  },
  '/admissions/eligibility': {
    title: 'Eligibility Criteria | KCGI Admissions',
    description: 'Check the eligibility criteria for Pharmacy, Nursing, Law, Management, and Paramedical courses at KCGI.',
    keywords: 'kcgi eligibility criteria, nursing admission eligibility bangalore, pharmacy eligibility kcgi'
  },
  '/admissions/documents': {
    title: 'Required Documents | KCGI Admissions',
    description: 'List of necessary documents required for UG, PG, and Diploma admissions at KCGI Bangalore.',
    keywords: 'kcgi admission documents, documents required for karnataka college, kcgi application requirements'
  },
  '/admissions/enquiry': {
    title: 'Admission Enquiry | KCGI',
    description: 'Submit an admission enquiry to Karnataka College Group of Institutions and get guidance from our counselors.',
    keywords: 'kcgi admission enquiry, contact kcgi admissions, kcgi counselor'
  },
  '/admissions/prospectus': {
    title: 'Download Prospectus | KCGI',
    description: 'Download the official prospectus of Karnataka College Group of Institutions to learn about all courses and facilities.',
    keywords: 'kcgi prospectus, download karnataka college brochure, kcgi course details pdf'
  },
  '/admissions/international': {
    title: 'International Admissions | KCGI',
    description: 'KCGI welcomes students from across the globe. Find details on international student admissions, visas, and NRI quotas.',
    keywords: 'kcgi international admissions, nri admission kcgi bangalore, foreign students karnataka college'
  },
  '/admissions/scholarships': {
    title: 'Scholarships & Financial Aid | KCGI',
    description: 'Details on merit-based scholarships, government schemes, and financial aid available at Karnataka College Group of Institutions.',
    keywords: 'kcgi scholarships, karnataka college financial aid, merit scholarship kcgi, educational loans kcgi'
  },

  // OTHER MAIN SECTIONS
  '/placements': {
    title: 'Training & Placements | KCGI Careers',
    description: 'KCGI offers excellent placement opportunities with top companies globally like Pfizer, Amazon, and Infosys. Discover our recruitment partners.',
    keywords: 'kcgi placements, karnataka college highest package, kcgi recruitment, top companies hiring kcgi'
  },
  '/facilities': {
    title: 'Campus Facilities & Infrastructure | KCGI',
    description: 'Explore the world-class facilities at KCGI campus: modern labs, digital libraries, AC hostels, transport, and sports complexes.',
    keywords: 'kcgi facilities, kcgi hostels, kcgi library, karnataka college infrastructure, kcgi laboratories'
  },
  '/contact': {
    title: 'Contact Us | KCGI Bangalore',
    description: 'Get in touch with Karnataka College Group of Institutions (KCGI) located in Hegde Nagar, Bengaluru for queries and campus tours.',
    keywords: 'kcgi contact number, kcgi address, karnataka college bangalore map, reach kcgi'
  },
  '/news': {
    title: 'News & Events | KCGI',
    description: 'Stay updated with the latest news, campus events, cultural fests, and academic seminars at Karnataka College Group of Institutions.',
    keywords: 'kcgi news, kcgi events, karnataka college fests, kcgi seminars'
  },
  '/naac': {
    title: 'NAAC Accreditation | KCGI',
    description: 'Karnataka College Group of Institutions NAAC accreditation details, reports, and internal quality assurance cell (IQAC).',
    keywords: 'kcgi naac grade, kcgi accreditation, karnataka college iqac, kcgi recognized universities'
  }
};

export const DynamicRouteSEO: React.FC = () => {
  const location = useLocation();
  const [seoData, setSeoData] = useState(routeSEO['/']);

  useEffect(() => {
    // Exact match
    if (routeSEO[location.pathname]) {
      setSeoData(routeSEO[location.pathname]);
    } else {
      // Find closest match or fallback
      const match = Object.keys(routeSEO).find(key => location.pathname.startsWith(key) && key !== '/');
      if (match && routeSEO[match]) {
        setSeoData(routeSEO[match]);
      } else {
        // Fallback for unknown routes (but don't override dynamic institution pages which have their own SEO)
        if (!location.pathname.includes('/institution/')) {
          setSeoData({
            title: 'KCM | Karnataka College Group of Institutions | The Best College in Bangalore',
            description: 'KCM: Excellence in Pharmacy, Nursing, Law, and Management in Bangalore. Apply to the best college in Bangalore.',
          });
        }
      }
    }
  }, [location.pathname]);

  // If we are on a dynamic institution page, let the InstitutionDetail component handle its own SEO
  if (location.pathname.startsWith('/institution/')) {
    return null; 
  }

  return (
    <SEO 
      title={seoData.title} 
      description={seoData.description} 
      keywords={seoData.keywords || BASE_KEYWORDS} 
    />
  );
};
