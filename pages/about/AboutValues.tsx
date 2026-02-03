
import React from 'react';
import { AboutLayout } from '../../components/AboutLayout';
import { Heart } from 'lucide-react';

export const AboutValues: React.FC = () => (
  <AboutLayout title="Core Values" subtitle="The principles that guide our daily actions." icon={Heart}>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { title: 'Excellence', desc: 'Striving for the highest quality in every academic and administrative endeavor.' },
        { title: 'Integrity', desc: 'Upholding honesty and transparency in all interactions and assessments.' },
        { title: 'Innovation', desc: 'Encouraging creative thinking and new-age research methodologies.' },
        { title: 'Empathy', desc: 'Developing professionals who care for the community with compassion.' },
        { title: 'Diversity', desc: 'Creating an inclusive environment for students from across the globe.' },
        { title: 'Accountability', desc: 'Taking responsibility for the holistic growth of every student.' }
      ].map((v, i) => (
        <div key={i} className="p-10 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
          <h4 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{v.title}</h4>
          <p className="text-sm text-gray-500 leading-relaxed font-medium">{v.desc}</p>
        </div>
      ))}
    </div>
  </AboutLayout>
);
