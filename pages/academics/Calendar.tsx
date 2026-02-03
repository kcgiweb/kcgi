
import React from 'react';
import { AcademicsLayout } from '../../components/AcademicsLayout';
import { Calendar as CalendarIcon, Download, FileText, ChevronRight } from 'lucide-react';

export const AcademicCalendar: React.FC = () => (
  <AcademicsLayout 
    title="Academic Calendar" 
    subtitle="Planning and schedule for the current academic session 2026-27." 
    icon={CalendarIcon}
  >
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-gray-100 pb-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-serif font-bold text-primary">Annual Timeline</h2>
          <p className="text-gray-500 font-medium mt-4">Stay informed about commencement dates, internal assessments, and examination cycles.</p>
        </div>
        <button className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-secondary transition-all shadow-lg">
          Download PDF Calendar <Download className="w-4 h-4" />
        </button>
      </div>

      <div className="overflow-hidden border border-gray-100 rounded-[3rem] shadow-xl bg-white">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary text-white border-b border-primary/20">
              <th className="px-10 py-6 font-bold uppercase tracking-widest text-xs">Event Type</th>
              <th className="px-10 py-6 font-bold uppercase tracking-widest text-xs">Tentative Schedule</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {[
              { event: 'Induction & Orientation (Freshers)', time: '1st Week of August 2026' },
              { event: 'Commencement of Classes (Odd Sem)', time: 'Mid August 2026' },
              { event: 'First Internal Assessment', time: 'October 2nd Week' },
              { event: 'Mid-Term Examinations', time: 'December 1st Week' },
              { event: 'Winter Recess', time: 'Dec 25 - Jan 5' },
              { event: 'Even Semester Commencement', time: 'February 1st Week 2027' },
              { event: 'Annual Sports & Cultural Meet', time: 'March Last Week' },
              { event: 'University Practical Exams', time: 'May 2nd Week' },
              { event: 'University Final Theory Exams', time: 'June - July 2027' }
            ].map((row, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors group">
                <td className="px-10 py-6 text-sm font-bold text-primary flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                  {row.event}
                </td>
                <td className="px-10 py-6 text-sm text-gray-500 font-medium">{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 mt-12 flex items-center gap-8 flex-col md:flex-row">
        <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-primary shadow-sm flex-shrink-0">
          <FileText className="w-8 h-8" />
        </div>
        <div className="flex-grow">
           <h4 className="text-xl font-bold text-primary">Department-wise Specific Calendars</h4>
           <p className="text-sm text-gray-400 font-medium">Pharmacy, Nursing, and Law institutions may have slight variations based on University (RGUHS/KSLU) mandates.</p>
        </div>
        <button className="text-secondary font-black text-[10px] uppercase tracking-widest border-b-2 border-secondary pb-1 flex items-center gap-2">Request Custom Copy <ChevronRight className="w-3 h-3" /></button>
      </div>
    </div>
  </AcademicsLayout>
);
