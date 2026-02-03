
import React from 'react';
import { AboutLayout } from '../../components/AboutLayout';
import { History } from 'lucide-react';

export const AboutHistory: React.FC = () => (
  <AboutLayout title="History & Growth" subtitle="A multi-disciplinary legacy built on trust and academic rigor." icon={History}>
    <div className="max-w-4xl mx-auto py-10">
      <div className="relative border-l border-gray-200 ml-4 md:ml-8 space-y-16 pb-12">
        {[
          { 
            year: '1997', 
            title: 'The Visionary Foundation & Academic Voyage', 
            desc: 'The Karnataka Educational Trust was established in Bengaluru, and our official education journey began with the establishment of the Physiotherapy division. This strategic entry into higher education set the benchmark for clinical excellence that defines us today.' 
          },
          { 
            year: '2003', 
            title: 'Pharmacy Milestone', 
            desc: 'Expansion into pharmaceutical sciences with the Karnataka College of Pharmacy, bridging the gap between academic research and the healthcare industry.' 
          },
          { 
            year: '2005', 
            title: 'Healthcare Expansion', 
            desc: 'Inception of the College of Nursing and School of Nursing to meet the rising global demand for highly skilled medical professionals and compassionate care providers.' 
          },
          { 
            year: '2012', 
            title: 'Diversified Portfolios', 
            desc: 'A significant phase of growth with the launch of Management, Law, and Allied Health sciences, creating a holistic multi-disciplinary campus environment.' 
          },
          { 
            year: '2018', 
            title: 'Quality & Accreditation', 
            desc: 'Achieving NAAC Grade "A" accreditation across key institutions, validating our unwavering commitment to global standards of academic infrastructure and quality control.' 
          },
          { 
            year: '2022', 
            title: 'Research & Innovation Cell', 
            desc: 'Launch of the dedicated Central Innovation Cell and advanced simulation labs, fostering a culture of experimental discovery and patenting in clinical sciences.' 
          },
          { 
            year: '2024', 
            title: 'Modern Excellence', 
            desc: 'Today, the Karnataka College Group stands as an enterprise-level educational conglomerate with 11 specialized institutions and a tech-integrated campus serving thousands of students.' 
          }
        ].map((item, i) => (
          <div key={i} className="relative pl-10 md:pl-16 group">
            {/* Timeline Dot */}
            <div className="absolute left-[-5.5px] top-2 w-3 h-3 rounded-full bg-secondary border-2 border-white shadow-[0_0_0_4px_rgba(247,150,30,0.1)] group-hover:scale-125 transition-transform" />
            
            {/* Content */}
            <div className="space-y-2">
              <span className="text-2xl font-bold text-primary block leading-none tracking-tight">
                {item.year}
              </span>
              <h4 className="text-xl font-bold text-black tracking-tight">
                {item.title}
              </h4>
              <p className="text-black max-w-3xl font-medium leading-relaxed text-[15px]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AboutLayout>
);
