import React from 'react';
import { Link } from 'react-router-dom';
import { INSTITUTIONS } from '../constants';

/** Real "not found" page (noindex is set by seo/config.ts for unknown paths). */
export const NotFound: React.FC = () => (
  <div className="pt-32 pb-24 min-h-screen bg-white">
    <div className="container mx-auto px-6 max-w-3xl text-center">
      <p className="text-secondary font-bold uppercase tracking-widest text-xs mb-4">Error 404</p>
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Page not found</h1>
      <p className="text-lg text-black mb-10">
        The page you are looking for has moved or no longer exists. Try one of these instead:
      </p>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <Link to="/" className="px-6 py-3 bg-primary text-white rounded-full font-bold text-sm">Home</Link>
        <Link to="/admissions" className="px-6 py-3 bg-secondary text-white rounded-full font-bold text-sm">Admissions 2026-27</Link>
        <Link to="/contact" className="px-6 py-3 border border-primary text-primary rounded-full font-bold text-sm">Contact</Link>
      </div>
      <h2 className="text-xl font-serif font-bold text-primary mb-4">Our institutions</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
        {INSTITUTIONS.map(i => (
          <li key={i.id}>
            <Link to={`/institution/${i.id}`} className="text-black hover:text-primary underline">{i.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
