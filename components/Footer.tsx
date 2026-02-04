
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const logoUrl = "https://res.cloudinary.com/dejcpd56d/image/upload/v1767769752/Karnataka-Group-of-institute-brand-Guidline.pdf.pdf-3_1_qegbvr.svg";
  const externalMapsLink = "https://www.google.com/maps/place/Karnataka+College+Group+of+Institutions/@13.0860698,77.6355606,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae183352e8af21:0xa842e197d612053f!8m2!3d13.0860698!4d77.6355606!16s%2Fg%2F11l244r1vl?entry=ttu";

  return (
    <footer className="bg-white text-black pt-16 pb-8 border-t border-gray-100">
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
            <p className="text-black leading-relaxed text-sm font-bold">
              Providing world-class education for over three decades across multiple disciplines, fostering innovation and professional excellence.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center hover:bg-secondary text-primary hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link to="/" className="text-black hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-black hover:text-secondary transition-colors">About the Group</Link></li>
              <li><Link to="/admissions" className="text-black hover:text-secondary transition-colors">Admissions</Link></li>
              <li><Link to="/placements" className="text-black hover:text-secondary transition-colors">Placements</Link></li>
              <li><Link to="/contact" className="text-black hover:text-secondary transition-colors">Campus Map</Link></li>
            </ul>
          </div>

          {/* Accreditations */}
          <div>
            <h4 className="text-primary font-bold uppercase tracking-wider mb-6">Accreditations</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li className="text-black">Approved by AICTE & PCI</li>
              <li className="text-black">Affiliated to RGUHS, KSLU & BCU</li>
              <li className="text-black">CBSE Affiliated</li>
              <li className="text-black">Recognized by Govt of Karnataka</li>
              <li className="text-black">NAAC Accredited Grade 'A'</li>
              <li className="text-black">NMC Recognized</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary font-bold uppercase tracking-wider mb-6">Bengaluru Campus</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <a 
                    href={externalMapsLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-black hover:text-primary transition-colors leading-relaxed block"
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
                <span className="text-black">080808 33000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-black">info@karnatakacollege.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-black font-black">
          <p>© 2026 Karnataka College Group of Institutions. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
