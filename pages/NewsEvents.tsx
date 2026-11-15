import React, { useEffect } from 'react';
import { CalendarDays, Mail, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NewsEvents: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return <main className="pt-24 min-h-screen bg-white">
    <section className="bg-primary py-20"><div className="container mx-auto px-6"><h1 className="text-5xl font-serif font-bold text-white mb-4">News &amp; Updates</h1><p className="text-xl text-white/80 max-w-2xl">Verified campus announcements and event information from Karnataka College Group of Institutions.</p></div></section>
    <section className="container mx-auto px-6 py-24 max-w-5xl"><div className="grid md:grid-cols-2 gap-8"><article className="p-10 rounded-3xl bg-gray-50 border border-gray-100"><Newspaper className="w-10 h-10 text-secondary mb-6" /><h2 className="text-3xl font-serif font-bold text-primary mb-4">Campus announcements</h2><p className="text-customText leading-relaxed">Only confirmed updates are published here. For the latest admission notice or institution announcement, contact KCGI directly.</p><Link to="/admissions/enquiry" className="inline-flex mt-7 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-secondary transition-colors">Contact Admissions</Link></article><article className="p-10 rounded-3xl bg-primary text-white"><CalendarDays className="w-10 h-10 text-secondary mb-6" /><h2 className="text-3xl font-serif font-bold mb-4">Events</h2><p className="text-white/80 leading-relaxed">Event dates, venues and registration details will be published after they are confirmed by the relevant institution.</p><a href="mailto:info@kcgiedu.org" className="inline-flex mt-7 bg-white text-primary px-6 py-3 rounded-xl font-bold hover:bg-secondary hover:text-white transition-colors"><Mail className="w-4 h-4 mr-2" /> Email KCGI</a></article></div></section>
  </main>;
};
