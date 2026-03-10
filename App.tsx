
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { InstitutionDetail } from './pages/InstitutionDetail';
import { Admissions } from './pages/Admissions';
import { Academics } from './pages/Academics';
import { Placements } from './pages/Placements';
import { NAAC } from './pages/NAAC';
import { NewsEvents } from './pages/NewsEvents';
import { Facilities } from './pages/Facilities';
import { ContactUs } from './pages/ContactUs';

// About Us Pages
import { AboutUsMain } from './pages/AboutUsMain';
import { AboutOverview } from './pages/about/AboutOverview';
import { AboutHistory } from './pages/about/AboutHistory';
import { AboutVision } from './pages/about/AboutVision';
import { AboutValues } from './pages/about/AboutValues';
import { AboutChairman } from './pages/about/AboutChairman';
import { AboutGoverning } from './pages/about/AboutGoverning';
import { AboutQuality } from './pages/about/AboutQuality';
import { AboutSocial } from './pages/about/AboutSocial';
import { AboutFuture } from './pages/about/AboutFuture';

// Academics Detailed Pages
import { UGPrograms } from './pages/academics/UGPrograms';
import { PGPrograms } from './pages/academics/PGPrograms';
import { DiplomaPU } from './pages/academics/DiplomaPU';
import { Teaching } from './pages/academics/Teaching';
import { AcademicCalendar } from './pages/academics/Calendar';
import { Evaluation } from './pages/academics/Evaluation';
import { Research } from './pages/academics/Research';
import { Rules } from './pages/academics/Rules';
import { TheEdge } from './pages/academics/TheEdge';

// Admissions Detailed Pages
import { AdmissionProcess } from './pages/admissions/Process';
import { Eligibility } from './pages/admissions/Eligibility';
import { RequiredDocuments } from './pages/admissions/Documents';
import { AdmissionEnquiry } from './pages/admissions/Enquiry';
import { Prospectus } from './pages/admissions/Prospectus';
import { InternationalAdmissions } from './pages/admissions/International';
import { Scholarships } from './pages/admissions/Scholarships';

import { AdmissionPopup } from './components/AdmissionPopup';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <AdmissionPopup />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/institution/:id" element={<InstitutionDetail />} />
            <Route path="/institutions" element={<Home />} />
            
            {/* About Us Routes */}
            <Route path="/about" element={<AboutUsMain />} />
            <Route path="/about/overview" element={<AboutOverview />} />
            <Route path="/about/history" element={<AboutHistory />} />
            <Route path="/about/vision" element={<AboutVision />} />
            <Route path="/about/core-values" element={<AboutValues />} />
            <Route path="/about/chairman-message" element={<AboutChairman />} />
            <Route path="/about/governing-body" element={<AboutGoverning />} />
            <Route path="/about/quality" element={<AboutQuality />} />
            <Route path="/about/social-responsibility" element={<AboutSocial />} />
            <Route path="/about/future-vision" element={<AboutFuture />} />
            
            {/* Academics Routes */}
            <Route path="/academics" element={<Academics />} />
            <Route path="/academics/ug-programs" element={<UGPrograms />} />
            <Route path="/academics/pg-programs" element={<PGPrograms />} />
            <Route path="/academics/diploma-pu-programs" element={<DiplomaPU />} />
            <Route path="/academics/teaching-methodology" element={<Teaching />} />
            <Route path="/academics/academic-calendar" element={<AcademicCalendar />} />
            <Route path="/academics/evaluation-system" element={<Evaluation />} />
            <Route path="/academics/research" element={<Research />} />
            <Route path="/academics/rules-regulations" element={<Rules />} />
            <Route path="/academics/the-edge" element={<TheEdge />} />
            
            {/* Admissions Routes */}
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/admissions/process" element={<AdmissionProcess />} />
            <Route path="/admissions/eligibility" element={<Eligibility />} />
            <Route path="/admissions/documents" element={<RequiredDocuments />} />
            <Route path="/admissions/enquiry" element={<AdmissionEnquiry />} />
            <Route path="/admissions/prospectus" element={<Prospectus />} />
            <Route path="/admissions/international" element={<InternationalAdmissions />} />
            <Route path="/admissions/scholarships" element={<Scholarships />} />
            
            {/* Other Main Sections */}
            <Route path="/placements/*" element={<Placements />} />
            <Route path="/naac/*" element={<NAAC />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/news/*" element={<NewsEvents />} />
            <Route path="/contact" element={<ContactUs />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
