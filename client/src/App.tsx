import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HireModal from "./components/HireModal";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <Navbar isScrolled={isScrolled} onHireClick={() => setIsHireModalOpen(true)} />
      <main>
        <Hero onHireClick={() => setIsHireModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <TechStack />
        <Contact onHireClick={() => setIsHireModalOpen(true)} />
      </main>
      <Footer />
      <ScrollToTop />
      <HireModal isOpen={isHireModalOpen} onClose={() => setIsHireModalOpen(false)} />
      <Analytics />
    </div>
  );
}