import React, { useEffect } from 'react';
import { 
  Calendar, 
  MapPin, 
  ChevronRight, 
  Newspaper, 
  Play, 
  Image as ImageIcon,
  ArrowRight
} from 'lucide-react';

export const NewsEvents: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const news = [
    { date: 'Oct 15, 2024', title: 'Admissions Open for Ph.D in Pharmacy', category: 'Admission', img: 'https://images.unsplash.com/photo-1579154235884-331505f56284?auto=format&fit=crop&q=80&w=600' },
    { date: 'Oct 10, 2024', title: 'Global Seminar on Nursing Ethics', category: 'Event', img: 'https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&q=80&w=600' },
    { date: 'Sep 28, 2024', title: 'Karnataka College Ranks Among Top 10', category: 'Award', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-primary py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-serif font-bold text-white mb-4">News & Media</h1>
          <p className="text-xl text-white/70">Stay updated with the latest happenings at Karnataka College Group.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="lg:col-span-2 space-y-12">
            <h2 className="text-3xl font-serif font-bold text-primary flex items-center gap-4"><Newspaper className="text-secondary"/> Latest News</h2>
            <div className="space-y-8">
              {news.map((item, i) => (
                <div key={i} className="group flex flex-col md:flex-row gap-8 bg-white p-6 rounded-3xl border border-gray-100 hover:shadow-xl transition-all">
                  <div className="md:w-1/3 aspect-video rounded-2xl overflow-hidden">
                    <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                  </div>
                  <div className="md:w-2/3 flex flex-col justify-center space-y-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-secondary">{item.category} • {item.date}</span>
                    <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">Detailed report on the recent achievements and upcoming initiatives from the group management.</p>
                    <button className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all">Read More <ArrowRight className="w-4 h-4"/></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-12">
            <h2 className="text-3xl font-serif font-bold text-primary flex items-center gap-4"><Calendar className="text-secondary"/> Upcoming Events</h2>
            <div className="space-y-4">
              {[
                { date: 'Nov 12', month: '2024', title: 'Annual Sports Meet', loc: 'Main Campus' },
                { date: 'Nov 25', month: '2024', title: 'Graduation Day', loc: 'Convention Center' },
                { date: 'Dec 05', month: '2024', title: 'Science Exhibition', loc: 'Block A' },
              ].map((e, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex gap-6 items-center">
                  <div className="text-center bg-primary text-white w-20 py-3 rounded-xl">
                    <span className="block text-xl font-bold leading-none">{e.date.split(' ')[1]}</span>
                    <span className="text-xs uppercase font-bold">{e.date.split(' ')[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{e.title}</h4>
                    <div className="flex items-center gap-2 text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">
                      <MapPin className="w-3 h-3"/> {e.loc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-secondary/5 p-8 rounded-2xl border border-secondary/10">
              <h4 className="text-primary font-bold mb-4">Gallery Highlights</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden"><img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover"/></div>
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden"><img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover"/></div>
              </div>
              <button className="w-full mt-6 py-3 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 text-sm"><ImageIcon className="w-4 h-4"/> View Photo Gallery</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};