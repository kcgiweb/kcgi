
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';

// Every other page is loaded on demand, so the first visit downloads only what it needs.
const named = <K extends string>(load: () => Promise<Record<K, React.ComponentType<any>>>, name: K) =>
  lazy(() => load().then(m => ({ default: m[name] })));

const InstitutionDetail = named(() => import('./pages/InstitutionDetail'), 'InstitutionDetail');
const Admissions = named(() => import('./pages/Admissions'), 'Admissions');
const Academics = named(() => import('./pages/Academics'), 'Academics');
const Placements = named(() => import('./pages/Placements'), 'Placements');
const NAAC = named(() => import('./pages/NAAC'), 'NAAC');
const NewsEvents = named(() => import('./pages/NewsEvents'), 'NewsEvents');
const Facilities = named(() => import('./pages/Facilities'), 'Facilities');
const ContactUs = named(() => import('./pages/ContactUs'), 'ContactUs');
const AboutUsMain = named(() => import('./pages/AboutUsMain'), 'AboutUsMain');
const AboutOverview = named(() => import('./pages/about/AboutOverview'), 'AboutOverview');
const AboutHistory = named(() => import('./pages/about/AboutHistory'), 'AboutHistory');
const AboutVision = named(() => import('./pages/about/AboutVision'), 'AboutVision');
const AboutValues = named(() => import('./pages/about/AboutValues'), 'AboutValues');
const AboutChairman = named(() => import('./pages/about/AboutChairman'), 'AboutChairman');
const AboutGoverning = named(() => import('./pages/about/AboutGoverning'), 'AboutGoverning');
const AboutQuality = named(() => import('./pages/about/AboutQuality'), 'AboutQuality');
const AboutSocial = named(() => import('./pages/about/AboutSocial'), 'AboutSocial');
const AboutFuture = named(() => import('./pages/about/AboutFuture'), 'AboutFuture');
const UGPrograms = named(() => import('./pages/academics/UGPrograms'), 'UGPrograms');
const PGPrograms = named(() => import('./pages/academics/PGPrograms'), 'PGPrograms');
const DiplomaPU = named(() => import('./pages/academics/DiplomaPU'), 'DiplomaPU');
const Teaching = named(() => import('./pages/academics/Teaching'), 'Teaching');
const AcademicCalendar = named(() => import('./pages/academics/Calendar'), 'AcademicCalendar');
const Evaluation = named(() => import('./pages/academics/Evaluation'), 'Evaluation');
const Research = named(() => import('./pages/academics/Research'), 'Research');
const Rules = named(() => import('./pages/academics/Rules'), 'Rules');
const TheEdge = named(() => import('./pages/academics/TheEdge'), 'TheEdge');
const AdmissionProcess = named(() => import('./pages/admissions/Process'), 'AdmissionProcess');
const Eligibility = named(() => import('./pages/admissions/Eligibility'), 'Eligibility');
const RequiredDocuments = named(() => import('./pages/admissions/Documents'), 'RequiredDocuments');
const AdmissionEnquiry = named(() => import('./pages/admissions/Enquiry'), 'AdmissionEnquiry');
const Prospectus = named(() => import('./pages/admissions/Prospectus'), 'Prospectus');
const InternationalAdmissions = named(() => import('./pages/admissions/International'), 'InternationalAdmissions');
const Scholarships = named(() => import('./pages/admissions/Scholarships'), 'Scholarships');
const FeesStructure = named(() => import('./pages/admissions/Fees'), 'FeesStructure');
const PrivacyPolicy = named(() => import('./pages/legal/PrivacyPolicy'), 'PrivacyPolicy');
const Terms = named(() => import('./pages/legal/Terms'), 'Terms');
const NotFound = named(() => import('./pages/NotFound'), 'NotFound');
const Apply = lazy(() => import('./pages/admissions/Apply'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));

import { AdmissionPopup } from './components/AdmissionPopup';
import { DynamicRouteSEO } from './components/DynamicRouteSEO';

const App: React.FC = () => {
  return (
    <Router>
      <DynamicRouteSEO />
      <div className="flex flex-col min-h-screen">
        <AdmissionPopup />
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
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
            <Route path="/admissions/fees" element={<FeesStructure />} />
            <Route path="/apply" element={<Apply />} />
            
            {/* Other Main Sections */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/placements/*" element={<Placements />} />
            <Route path="/naac/*" element={<NAAC />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/news/*" element={<NewsEvents />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
