import React from 'react';
import { AboutLayout } from '../../components/AboutLayout';
import { Network } from 'lucide-react';

export const AboutGoverning: React.FC = () => (
  <AboutLayout
    title="Governing Body"
    subtitle="The strategic leadership steering our institutional excellence."
    icon={Network}
  >
    <div className="max-w-screen-2xl mx-auto px-6 py-20 space-y-24">

      {/* Chairperson */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <p className="text-black-700 text-lg leading-relaxed">
            Our vision is to empower students through value-based education,
            laying a strong foundation for them to become successful,
            responsible, and compassionate global citizens.
          </p>

          <div className="pt-6 border-t">
            <h4 className="text-xl font-bold text-primary">
              Smt. Suvarna Basavaraj Ramnal
            </h4>
            <p className="text-sm uppercase tracking-widest text-secondary mt-1">
              Chairperson
            </p>
          </div>
        </div>

        <div>
          <img
            src="https://res.cloudinary.com/dejcpd56d/image/upload/v1767687764/download_3_gzxfum.png"
            alt="Smt. Suvarna Basavaraj Ramnal"
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </div>

      {/* CEO */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <img
            src="https://res.cloudinary.com/dejcpd56d/image/upload/v1767687679/download_2_cbxmzc.png"
            alt="Mr. Pradeep Ramnal"
            className="w-full h-auto rounded-3xl"
          />
        </div>

        <div className="order-1 lg:order-2 space-y-6">
          <p className="text-black-700 text-lg leading-relaxed">
            We are committed to driving innovation in education, ensuring our
            students develop the skills, confidence, and strategic mindset
            required to succeed in a rapidly evolving global environment.
          </p>

          <div className="pt-6 border-t">
            <h4 className="text-xl font-bold text-primary">
              Mr. Pradeep Ramnal
            </h4>
            <p className="text-sm uppercase tracking-widest text-secondary mt-1">
              COO
            </p>
          </div>
        </div>
      </div>

    </div>
  </AboutLayout>
);
