import { motion } from "framer-motion";
import { FiMenu, FiX, FiBriefcase } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import resume from "../assets/resume.pdf";

interface NavbarProps {
  isScrolled: boolean;
  onHireClick?: () => void;
}

const Navbar = ({ isScrolled, onHireClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const setVar = () => {
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${el.offsetHeight}px`
      );
    };

    setVar();
    const observer = new ResizeObserver(setVar);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-black/80 backdrop-blur-md border-b border-blue-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-8">
        <div className="flex min-h-20 items-center justify-between gap-6 py-4 sm:py-5">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 text-sm font-bold text-blue-400 backdrop-blur-md">
              AA
            </div>
            <div className="hidden sm:block">
              <h3 className="text-base font-bold">Ayan Aleem</h3>
              <p className="text-xs text-neutral-400">AI Student</p>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden flex-1 items-center justify-center gap-6 text-sm text-neutral-300 lg:flex">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ color: "#60A5FA" }}
                className="transition hover:text-blue-400"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 lg:flex lg:translate-x-4">
            {/* Hire Me Button - Desktop */}
            <motion.button
              onClick={onHireClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:shadow-lg hover:shadow-blue-500/30"
            >
              <FiBriefcase size={16} />
              Hire Me
            </motion.button>

            {/* Resume Button - Desktop */}
            <motion.a
              href={resume}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="shrink-0 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2.5 text-sm font-semibold text-blue-300 transition hover:border-cyan-300/60 hover:bg-blue-500/15 hover:text-white"
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="ml-auto rounded-lg border border-white/10 bg-white/5 p-2 text-blue-300 transition hover:border-blue-400/50 hover:bg-blue-500/10 lg:hidden"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative z-50 flex flex-col gap-4 border-t border-white/10 bg-[#050505] px-3 pb-6 pt-5 lg:hidden"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 8 }}
                className="text-neutral-300 hover:text-blue-400 transition"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.button
              onClick={() => {
                setIsOpen(false);
                onHireClick?.();
              }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-2 w-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-center text-sm font-semibold text-white transition hover:shadow-lg hover:shadow-blue-500/50"
            >
              <FiBriefcase size={16} />
              Hire Me
            </motion.button>
            <motion.a
              href={resume}
              download
              whileHover={{ scale: 1.05 }}
              className="rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-center text-sm font-semibold text-blue-400 transition hover:bg-blue-500 hover:text-white"
            >
              Download Resume
            </motion.a>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;