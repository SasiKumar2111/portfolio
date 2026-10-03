import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import ExperienceShowcase from './components/ExperienceShowcase';
import TechMatrix from './components/TechMatrix';
import Contact from './components/Contact';
import ProjectCards from './components/ProjectCards';
import Credentials from './components/Credentials';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import CustomCursor from './components/CustomCursor';

export default function PortfolioApp() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-inter selection:bg-cyan-500/30">
      <CustomCursor />
      {/* Global Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 origin-left z-50"
        style={{ scaleX }}
      />
      <Navbar/>
      <main className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <Hero />
        <About />
        <ExperienceShowcase />
        <ProjectCards />
        <TechMatrix />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}