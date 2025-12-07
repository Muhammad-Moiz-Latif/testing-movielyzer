"use client";

import './App.css';
import Features from './components/Features';
import { Hero } from './components/Hero';
import HowItWorks from './components/HowItWorks';
import { Navbar } from './components/navbar';
import { Pricing } from './components/pricing';
import { Stats } from './components/stats';
import { JoinUs } from './components/JoinUs';
import { Footer } from './components/footer';
import { motion, type Variants } from 'framer-motion';
import { Routes, Route, useLocation } from "react-router-dom";
import SignIn from './components/SignIn';
import LogIn from './components/Login';
import { About } from './components/AboutUs';
import ContactUs from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import FAQ from './components/FAQ';


const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/SignIn" || location.pathname === "/LogIn";

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {!hideNavbar && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInDown}
          transition={{ delay: 0.9 }}
          className="relative z-50"
        >
          <Navbar />
        </motion.div>
      )}

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <HowItWorks />
            <Stats />
            <Pricing />
            <JoinUs />
            <Footer />
          </>
        } />
      <Route path='/About' element={<>
        <About/>
        <JoinUs/>
        <Footer/>
      </>} />
       <Route path='/Contact' element={<>
        <ContactUs/>
        <JoinUs/>
        <Footer/>
      </>} />
       <Route path='/Policy' element={<>
        <PrivacyPolicy/>
        <JoinUs/>
        <Footer/>
      </>} />
       <Route path='/FAQ' element={<>
        <FAQ/>
        <JoinUs/>
        <Footer/>
      </>} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/LogIn" element={<LogIn />} />
    </Routes>
    </div >
  );
}
