
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const logoUrl = "/assets/images/logo-480.webp";
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
                width={480}
                height={127}
                loading="lazy"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-black leading-relaxed text-sm font-bold">
              Providing world-class education since 1997 across multiple disciplines, fostering innovation and professional excellence.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: "https://facebook.com/Kcgiedu", label: "KCGI on Facebook" },
                { Icon: Instagram, href: "https://instagram.com/Kcgiedu", label: "KCGI on Instagram" },
                { Icon: Twitter, href: "https://twitter.com/Kcgiedu", label: "KCGI on X (Twitter)" },
                { Icon: Linkedin, href: "https://linkedin.com/company/kcgiedu", label: "KCGI on LinkedIn" },
                { Icon: (props: any) => (
                  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z" />
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                  </svg>
                ), href: "https://youtube.com/@kcgiedu?si=5nI63pg8UhxbekMg", label: "KCGI on YouTube" }
              ].map(({ Icon, href, label }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  aria-label={label}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center hover:bg-secondary text-primary hover:text-white transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-primary font-bold uppercase tracking-wider mb-6 text-base">Quick Links</h2>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link to="/admissions" className="text-black hover:text-secondary transition-colors">Admissions 2026-27</Link></li>
              <li><Link to="/academics" className="text-black hover:text-secondary transition-colors">Courses &amp; Academics</Link></li>
              <li><Link to="/admissions/fees" className="text-black hover:text-secondary transition-colors">Fees Structure</Link></li>
              <li><Link to="/facilities" className="text-black hover:text-secondary transition-colors">Campus Facilities</Link></li>
              <li><Link to="/placements" className="text-black hover:text-secondary transition-colors">Placements</Link></li>
              <li><Link to="/contact" className="text-black hover:text-secondary transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="text-black hover:text-secondary transition-colors">About KCGI</Link></li>
            </ul>
          </div>

          {/* Academic information */}
          <div>
            <h2 className="text-primary font-bold uppercase tracking-wider mb-6 text-base">Academic Information</h2>
            <ul className="space-y-4 text-sm font-bold">
              <li className="text-black">11 institutions on one Bengaluru campus</li>
              <li className="text-black">Healthcare, law, management and school education</li>
              <li className="text-black">Programme-specific documents available from Admissions</li>
              <li><Link to="/academics" className="text-primary hover:text-secondary transition-colors">Explore courses and institutions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-primary font-bold uppercase tracking-wider mb-6 text-base">Bengaluru Campus</h2>
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
                    className="text-xs font-black uppercase tracking-widest text-[#A35400] mt-2 flex items-center gap-1"
                  >
                    Get Directions <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="tel:+918080833000" className="text-black hover:text-primary transition-colors">080808 33000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:info@kcgiedu.org" className="text-black hover:text-primary transition-colors">info@kcgiedu.org</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-black font-black">
          <p>© 2026 Karnataka College Group of Institutions (KCGI). All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <a href="/sitemap.xml" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
