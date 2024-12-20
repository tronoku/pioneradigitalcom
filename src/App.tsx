import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServicePage from './pages/ServicePage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyPage from './pages/CaseStudyPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FormJourneyPage from './pages/FormJourneyPage';
import TermsPage from './pages/legal/TermsPage';
import PrivacyPage from './pages/legal/PrivacyPage';
import NotFoundPage from './pages/NotFoundPage';
import PageLoading from './components/shared/PageLoading';
import ScrollToTop from './components/shared/ScrollToTop';

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-white flex flex-col">
    <Header />
    <main className="pt-16 flex-grow">
      <Suspense fallback={<PageLoading />}>
        {children}
      </Suspense>
    </main>
    <Footer />
  </div>
);

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Form Journey Route - No Header/Footer */}
          <Route path="/get-started" element={<FormJourneyPage />} />
          
          {/* Main Layout Routes */}
          <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
          <Route path="/services" element={<MainLayout><ServicesPage /></MainLayout>} />
          <Route path="/services/:id" element={<MainLayout><ServicePage /></MainLayout>} />
          <Route path="/case-studies" element={<MainLayout><CaseStudiesPage /></MainLayout>} />
          <Route path="/case-studies/:id" element={<MainLayout><CaseStudyPage /></MainLayout>} />
          <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><ContactPage /></MainLayout>} />
          <Route path="/terms" element={<MainLayout><TermsPage /></MainLayout>} />
          <Route path="/privacy" element={<MainLayout><PrivacyPage /></MainLayout>} />
          <Route path="*" element={<MainLayout><NotFoundPage /></MainLayout>} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}