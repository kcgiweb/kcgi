
import React from 'react';
/* Fix: Import from the correct layout component file and fix the path */
import { AdmissionsLayout } from '../../components/AdmissionsLayout';
import { Send, Phone, Mail, MapPin, ArrowRight, User, PhoneCall, MailSearch, GraduationCap, MessageSquare } from 'lucide-react';
import { INSTITUTIONS } from '../../constants';

export const AdmissionEnquiry: React.FC = () => (
  <AdmissionsLayout 
    title="Admission Enquiry" 
    subtitle="Connect with our counselors to start your academic journey for 2026-27." 
    icon={Send}
  >
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
      <div className="lg:col-span-2">
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-primary/5">
          <h3 className="text-3xl font-serif font-bold text-primary mb-10 flex items-center gap-4">
             <div className="w-1.5 h-10 bg-secondary rounded-full" /> Personal Information
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary/40 uppercase tracking-wider ml-2">Full Legal Name</label>
              <div className="relative">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                <input type="text" className="w-full pl-12 pr-5 py-4 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-semibold" placeholder="As per 10th marksheet" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary/40 uppercase tracking-wider ml-2">Mobile Number</label>
              <div className="relative">
                <PhoneCall className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                <input type="tel" className="w-full pl-12 pr-5 py-4 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-semibold" placeholder="+91 00000 00000" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary/40 uppercase tracking-wider ml-2">Email Address</label>
              <div className="relative">
                <MailSearch className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                <input type="email" className="w-full pl-12 pr-5 py-4 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-semibold" placeholder="name@domain.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary/40 uppercase tracking-wider ml-2">Preferred Program</label>
              <div className="relative">
                <GraduationCap className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                <select className="w-full pl-12 pr-10 py-4 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-semibold appearance-none bg-no-repeat">
                  <option value="">Select an Institution</option>
                  {INSTITUTIONS.map(inst => <option key={inst.id} value={inst.id}>{inst.name}</option>)}
                </select>
              </div>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-bold text-primary/40 uppercase tracking-wider ml-2">Describe your query</label>
              <div className="relative">
                <MessageSquare className="absolute left-5 top-5 w-4 h-4 text-secondary" />
                <textarea rows={4} className="w-full pl-12 pr-5 py-4 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-semibold resize-none" placeholder="Any specific requirements or questions?"></textarea>
              </div>
            </div>
            <button className="md:col-span-2 py-4 bg-primary text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-xl hover:bg-secondary transition-all flex items-center justify-center gap-3 group mt-4">
              Submit Enquiry <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>

      <div className="space-y-10">
        {/* Redesigned Campus Info Card per Image Reference */}
        <div className="bg-primary p-10 md:p-12 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden flex flex-col min-h-[450px]">
           <h3 className="text-2xl font-bold text-secondary mb-8">Campus Info</h3>
           
           <div className="h-px bg-white/10 w-full mb-10" />

           <div className="space-y-12 flex-grow">
              <div className="flex gap-5 items-start">
                <MapPin className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                <p className="text-sm font-semibold leading-relaxed text-white/90">
                  33/2, Hegde Nagar Main Rd,<br />
                  Yelahanka, Thirumenahalli,<br />
                  Bengaluru, 560064
                </p>
              </div>

              <div className="flex gap-5 items-start">
                <Phone className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <p className="text-xl font-bold tracking-tight text-white">+91 80 1234 5678</p>
                  <p className="text-[10px] font-black uppercase text-white/30 tracking-[0.2em] mt-1.5">Direct Admissions</p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <Mail className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-bold text-white break-all">admissions@karnatakacollege.edu</p>
                  <p className="text-[10px] font-black uppercase text-white/30 tracking-[0.2em] mt-1.5">Official Helpdesk</p>
                </div>
              </div>
           </div>
        </div>
        
        <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl transition-all duration-500">
           <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-5 group-hover:bg-primary group-hover:text-white transition-all">
             <GraduationCap className="w-8 h-8"/>
           </div>
           <h4 className="font-bold text-primary mb-2 text-lg">Academic Visit</h4>
           <p className="text-xs text-gray-500 font-medium leading-relaxed px-4">Book a personalized physical tour of our clinical laboratories and smart classrooms.</p>
        </div>
      </div>
    </div>
  </AdmissionsLayout>
);
