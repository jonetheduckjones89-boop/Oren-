import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Vision from './pages/Vision';
import Product from './pages/Product';
import Careers from './pages/Careers';
import TeamPhilosophy from './pages/TeamPhilosophy';
import EarlyAccess from './pages/EarlyAccess';
import Apply from './pages/Apply';
import ThankYou from './pages/ThankYou';
import Investors from './pages/Investors';
import { modelEasing } from './lib/motion';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      duration: 0.8,
      ease: modelEasing,
    }}
    className="w-full relative flex flex-col"
  >
    {children}
  </motion.div>
);

const App: React.FC = () => {
  const location = useLocation();

  const isSpecialPage = [
    '/early-access', 
    '/team-philosophy', 
    '/apply',
    '/thank-you',
    '/investors'
  ].includes(location.pathname);

  useEffect(() => {
    // Standard scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-white">
      {!isSpecialPage && <Navbar />}
      <main className={`flex-grow w-full relative ${!isSpecialPage ? 'pt-[72px]' : ''}`}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/vision" element={<PageWrapper><Vision /></PageWrapper>} />
            <Route path="/product" element={<PageWrapper><Product /></PageWrapper>} />
            <Route path="/careers" element={<PageWrapper><Careers /></PageWrapper>} />
            <Route path="/team-philosophy" element={<PageWrapper><TeamPhilosophy /></PageWrapper>} />
            <Route path="/early-access" element={<PageWrapper><EarlyAccess /></PageWrapper>} />
            <Route path="/apply" element={<PageWrapper><Apply /></PageWrapper>} />
            <Route path="/thank-you" element={<PageWrapper><ThankYou /></PageWrapper>} />
            <Route path="/investors" element={<PageWrapper><Investors /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
      {!isSpecialPage && <Footer />}
    </div>
  );
};

export default App;