import React from 'react';
import { AboutLayout } from '../../components/AboutLayout';
import { ShieldCheck } from 'lucide-react';

export const AboutQuality: React.FC = () => {
  const affiliationLogos = [
    { name: 'AICTE', url: 'https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png', desc: 'Approved by AICTE' },
    { name: 'PCI', url: 'https://res.cloudinary.com/dejcpd56d/image/upload/v1767769752/Karnataka-Group-of-institute-brand-Guidline.pdf.pdf-3_1_qegbvr.svg', desc: 'Recognized by PCI' },
    { name: 'RGUHS', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTepoRcwGHChReAO7cHODgrBTZGOrC9W--3xQ&s', desc: 'Affiliated to RGUHS' },
    { name: 'NAAC', url: 'https://sjbit.edu.in/wp-content/uploads/2021/07/NAAC-Logo-250x250-1.png', desc: 'NAAC Accredited Grade A' },
    { name: 'INC', url: 'https://images.seeklogo.com/logo-png/39/1/nic-inc-logo-png_seeklogo-392312.png', desc: 'Recognized by INC' },
    { name: 'KSLU', url: 'https://iras-proxy-assets.s3.ap-south-1.amazonaws.com/60942ff751f89d059ff43066/logo/5-7-2021--4-16-35-am-logo.png', desc: 'Affiliated to KSLU' },
    { name: 'KNC', url: 'https://vidyarthiinstitutions.com/img/affiliations/3.jpg', desc: 'Recognized by KNC' },
    { name: 'Govt. Karnataka', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWSwtz3LdNqfcixXpoz5U1GVZMkrGoZEN8pg&s', desc: 'Govt. of Karnataka' },
    { name: 'BCU', url: 'https://i.pinimg.com/736x/2f/f6/27/2ff6272871bc45a24cc576502342a9bd.jpg', desc: 'Affiliated to BCU' },
    { name: 'CBSE', url: 'https://i.pinimg.com/736x/e2/da/ae/e2daaec4c90b8633c90b554b6e205620.jpg', desc: 'Affiliated to CBSE' },
  ];

  return (
    <AboutLayout title="Quality Assurance" subtitle="Rigorous standards for high-value degrees." icon={ShieldCheck}>
      <div className="space-y-12">
        <div className="prose prose-lg text-customText max-w-none font-medium mb-12 text-center">
          <p>Our commitment to quality is unwavering. Each institution under the group undergoes rigorous internal and external academic audits to ensure compliance with the highest educational standards in India. Our affiliations with premier governing bodies guarantee global academic validity.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {affiliationLogos.map((logo, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="h-20 w-full flex items-center justify-center mb-5">
                <img src={logo.url} alt={logo.name} className="max-h-full max-w-full object-contain transition-all duration-500 group-hover:scale-105" />
              </div>
              <h4 className="text-sm font-bold text-primary mb-1">{logo.name}</h4>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{logo.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </AboutLayout>
  );
};