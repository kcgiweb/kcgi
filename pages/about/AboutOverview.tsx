import React from 'react';
import { AboutLayout } from '../../components/AboutLayout';
import { Globe, Building2, BookOpen, Users, Award } from 'lucide-react';

export const AboutOverview: React.FC = () => (
  <AboutLayout title="About the Group" subtitle="Nurturing Intellect and Integrity since 1997." icon={Globe}>
    <div className="space-y-12">
      <div className="prose prose-lg text-customText max-w-none font-medium leading-relaxed">
        <p>
          The Karnataka College Group of Institutions, managed by the Karnataka Educational Trust, stands as a beacon of academic excellence in Bengaluru. Founded with the mission to provide accessible, high-quality professional education, the group has grown into a multi-disciplinary educational hub.
        </p>
        <p>
          With over 11 institutions spread across a sprawling campus, we offer a diverse array of programs including Pharmacy, Nursing, Management, Law, Physiotherapy, and School Education. Our institutions are recognized for their state-of-the-art infrastructure, experienced faculty, and strong industry linkages.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: 'Years of Trust', value: '29 Years', desc: 'Consistency in excellence.' },
          { label: 'Alumni Network', value: '50,000+', desc: 'Placed globally in top firms.' },
          { label: 'Campus Area', value: '25 Acres', desc: 'Modern integrated facilities.' }
        ].map((stat, i) => (
          <div key={i} className="p-6 bg-gray-50 rounded-3xl border border-gray-100 text-center">
            <span className="block text-3xl font-bold text-primary mb-2">{stat.value}</span>
            <span className="block text-sm font-bold text-secondary uppercase tracking-widest mb-2">{stat.label}</span>
            <p className="text-xs text-gray-400">{stat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </AboutLayout>
);