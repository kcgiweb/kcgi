
import React from 'react';
import { AboutLayout } from '../../components/AboutLayout';
import { TrendingUp, Rocket, Globe, Zap } from 'lucide-react';

export const AboutFuture: React.FC = () => (
  <AboutLayout title="Future Vision 2030" subtitle="Strategic roadmap for the next decade of excellence." icon={TrendingUp}>
    <div className="bg-primary p-12 md:p-20 rounded-[4rem] text-white relative overflow-hidden">
      <Rocket className="absolute bottom-0 right-0 w-96 h-96 text-white/5 translate-y-20 translate-x-20" />
      <div className="max-w-2xl space-y-12 relative z-10">
        <h3 className="text-3xl font-serif font-bold text-secondary">A Global Academic Hub</h3>
        <div className="space-y-10">
          {[
            { title: 'Digital Campus Transformation', text: 'Implementation of AI-driven personalized learning systems and smart campus tech.', icon: Zap },
            { title: 'International Collaborations', text: 'Partnering with European and American universities for student exchange programs.', icon: Globe },
            { title: 'Research & Incubation Hub', text: 'Launching a dedicated startup incubator for healthcare and tech innovations.', icon: Rocket },
            { title: 'Global Outreach', text: 'Expanding our academic footprint with administrative offices in Africa and Middle East.', icon: TrendingUp }
          ].map((v, i) => (
            <div key={i} className="flex gap-6 items-start group">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-secondary border border-white/20 group-hover:bg-secondary group-hover:text-white transition-all">
                <v.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">{v.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </AboutLayout>
);
