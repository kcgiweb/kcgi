import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const logoUrl = "https://res.cloudinary.com/dejcpd56d/image/upload/v1767769752/Karnataka-Group-of-institute-brand-Guidline.pdf.pdf-3_1_qegbvr.svg";
  const externalMapsLink = "https://maps.app.goo.gl/LgWqNWGxzi9ZpwH26";

  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src={logoUrl}
                alt="Karnataka College Group of Institutions"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-white/60 leading-relaxed text-sm">
              Providing world-class education for over three decades across multiple disciplines, fostering innovation and professional excellence.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-secondary font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="text-white/60 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/60 hover:text-white transition-colors">About the Group</Link></li>
              <li><Link to="/admissions" className="text-white/60 hover:text-white transition-colors">Admissions</Link></li>
              <li><Link to="/placements" className="text-white/60 hover:text-white transition-colors">Placements</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-white transition-colors">Campus Map</Link></li>
            </ul>
          </div>

          {/* Accreditations */}
          <div>
            <h4 className="text-secondary font-bold uppercase tracking-wider mb-6">Accreditations</h4>
            <ul className="space-y-4 text-sm">
              <li className="text-white/60">Approved by AICTE & PCI</li>
              <li className="text-white/60">Affiliated to RGUHS, KSLU & BCU</li>
              <li className="text-white/60">CBSE Affiliated</li>
              <li className="text-white/60">Recognized by Govt of Karnataka</li>
              <li className="text-white/60">NAAC Accredited Grade 'A'</li>
              <li className="text-white/60">NMC Recognized</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-secondary font-bold uppercase tracking-wider mb-6">Bengaluru Campus</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <a
                    href={externalMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-secondary transition-colors leading-relaxed block"
                  >
                    33/2, Hegde Nagar Main Rd, Yelahanka, Thirumenahalli, Bengaluru, Karnataka 560064
                  </a>
                  <a
                    href={externalMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-black uppercase tracking-widest text-secondary mt-2 flex items-center gap-1"
                  >
                    Get Directions <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-white/60">+91 80 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-white/60">info@karnatakacollege.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2026 Karnataka College Group of Institutions. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};