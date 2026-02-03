
import React from 'react';
import { AboutLayout } from '../../components/AboutLayout';
import { Users, CheckCircle2 } from 'lucide-react';

export const AboutSocial: React.FC = () => (
  <AboutLayout title="Social Responsibility" subtitle="Impacting lives beyond the classroom." icon={Users}>
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-serif font-bold text-primary">Community Health Drives</h3>
          <p className="text-gray-500 font-medium leading-relaxed">
            Our nursing and physiotherapy students regularly conduct free health camps in rural Bengaluru, providing diagnostic services and health awareness to thousands of underprivileged citizens.
          </p>
          <ul className="space-y-4">
            {['Free Blood Pressure Monitoring', 'Diabetic Awareness Workshops', 'Primary First-Aid Training', 'Environmental Hygiene Drives'].map((v, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-bold text-primary">
                <CheckCircle2 className="w-5 h-5 text-secondary" /> {v}
              </li>
            ))}
          </ul>
        </div>
        <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="CSR Health Camp" />
        </div>
      </div>
    </div>
  </AboutLayout>
);
