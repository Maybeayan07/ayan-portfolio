import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { FiDownload, FiChevronDown } from "react-icons/fi";
import profileImage from "../assets/image/profile-ayan-jeep.png";
import resume from "../assets/resume.pdf";
import { stats } from "../data";

interface HeroProps {
  onHireClick?: () => void;
}

const roles = [
  "AI/ML Engineer",
  "RAG Systems Builder",
  "Computer Vision Developer",
  "Full-Stack Engineer",
];

const useTypewriter = (words: string[], speed = 80, pause = 1800) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
};

const ParticleField = () => {
  const particles = Array.from({ length: 30 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        const size = Math.random() * 3 + 1;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 5;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/40"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

const ProfileImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative flex w-full items-center justify-center scale-90 sm:scale-100"
    >
      <div className="absolute h-[320px] w-[320px] sm:h-[430px] sm:w-[430px] rounded-full bg-blue-500/20 blur-[100px] sm:blur-[120px]" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        className="absolute h-[290px] w-[290px] sm:h-[390px] sm:w-[390px] rounded-full border border-blue-400/20 border-dashed"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
        className="absolute h-[320px] w-[320px] sm:h-[430px] sm:w-[430px] rounded-full border border-violet-500/10"
      />

      {/* Orbiting dot on the ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        className="absolute h-[290px] w-[290px] sm:h-[390px] sm:w-[390px]"
      >
        <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_3px_rgba(34,211,238,0.6)]" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="relative"
      >
        <div className="overflow-hidden rounded-full border border-white/10 bg-[#111111] p-2 sm:p-3 shadow-2xl">
          <img
            src={profileImage}
            alt="Ayan Aleem"
            className="h-[200px] w-[200px] sm:h-[280px] sm:w-[280px] md:h-[340px] md:w-[340px] lg:h-[420px] lg:w-[420px] rounded-full object-cover object-top"
          />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="profile-orbit-label absolute -top-2 right-0 hidden rounded-2xl border border-blue-500/20 bg-[#111111]/90 px-3 py-2 backdrop-blur-xl shadow-xl sm:right-0 sm:top-6 sm:flex sm:px-5 sm:py-4 sm:scale-100"
      >
        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-blue-400 font-medium">
          Focus
        </p>
        <h4 className="mt-1 sm:mt-2 text-xs sm:text-sm font-semibold">RAG & Computer Vision</h4>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="profile-orbit-label absolute -bottom-2 left-0 hidden rounded-2xl border border-white/10 bg-[#111111]/90 px-3 py-2 backdrop-blur-xl shadow-xl sm:bottom-10 sm:left-0 sm:flex sm:px-5 sm:py-4 sm:scale-100"
      >
        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-neutral-400 font-medium">
          Tech Stack
        </p>
        <h4 className="mt-1 sm:mt-2 text-xs sm:text-sm font-semibold text-blue-400">
          Python • React • TensorFlow
        </h4>
      </motion.div>
    </motion.div>
  );
};

const Hero = ({ onHireClick }: HeroProps) => {
  const typedRole = useTypewriter(roles);

  return (
    <section
      className="relative overflow-x-hidden overflow-y-visible bg-[#050505] pb-14 pt-28 text-white scroll-mt-24 sm:scroll-mt-28 sm:pt-40 lg:pt-48 xl:pt-52 sm:min-h-screen"
      
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
          }}
        />
        <ParticleField />
        <div className="absolute -top-60 -left-60 h-[600px] w-[600px] rounded-full bg-blue-500/20 blur-[180px]" />
        <div className="absolute -bottom-60 -right-60 h-[600px] w-[600px] rounded-full bg-violet-500/20 blur-[180px]" />
      </div>

      <div
        className="relative z-20 mx-auto flex min-h-[85vh] w-full max-w-6xl items-center px-6 py-16 sm:px-8 sm:py-20"
        style={{ width: "100%", maxWidth: "72rem", marginInline: "auto" }}
      >
        <div className="grid w-full items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:justify-items-stretch">
          <div className="hero-copy min-w-0 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-10 mb-6 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-blue-400 backdrop-blur-md sm:mt-0 lg:mt-4"
            >
              🚀 Open to AI / ML Internship Opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="section-title mx-auto max-w-3xl text-5xl font-black leading-[0.98] sm:text-6xl lg:mx-0 lg:text-7xl"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
                Ayan Aleem
              </span>
            </motion.h1>

            {/* Typewriter role — auto height on mobile so wrapping text doesn't clip */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-4 sm:mt-6 min-h-[2.25rem] text-lg sm:text-2xl md:text-3xl font-semibold text-neutral-200 sm:h-10"
            >
              <span className="text-blue-400">{typedRole}</span>
              <span className="animate-pulse text-blue-400">|</span>
            </motion.h2>

            <div className="hidden">
              <ProfileImage />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mx-auto mt-6 max-w-xl break-words text-base leading-8 text-slate-300 sm:mt-8 sm:text-lg sm:leading-9 lg:mx-0"
            >
              AI/ML student and developer building practical, end-to-end AI
systems — from{" "}
<span className="font-semibold text-white">
  Retrieval-Augmented Generation chatbots
</span>{" "}
to{" "}
<span className="font-semibold text-white">
  computer vision applications
</span>
.
<br />
<br />
I build{" "}
<span className="font-semibold text-white">
  intelligent, scalable solutions
</span>{" "}
that turn AI concepts into practical products.
            </motion.p>

            {/* Mobile-only profile image, shown above the Hire Me row. */}
            <div className="mt-6 flex justify-center lg:hidden">
              <ProfileImage />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="mt-9 flex flex-col items-center gap-3 sm:mt-11 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start"
            >
              <motion.button
                onClick={onHireClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
              >
                💼 Hire Me
              </motion.button>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-3 rounded-full border border-blue-500/40 bg-blue-500/10 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-blue-300 transition-all duration-300 hover:bg-blue-500/20 hover:text-blue-200"
              >
                View Projects
                <FaArrowRight className="transition group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href={resume}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 sm:px-8 py-3 sm:py-4 font-semibold backdrop-blur-md transition hover:border-blue-400 hover:bg-blue-500/10"
              >
                <FiDownload />
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-8 flex justify-center gap-4 sm:gap-6 lg:justify-start"
            >
              <motion.a
                href="https://github.com/Maybeayan07"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-2xl sm:text-3xl text-neutral-500 transition hover:text-blue-400"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/ayan-aleem-4380932a9"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-2xl sm:text-3xl text-neutral-500 transition hover:text-blue-400"
              >
                <FaLinkedin />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-7 text-center sm:mt-14 sm:grid-cols-4 sm:gap-6 lg:text-left"
            >
              {stats.map(({ number, label }) => (
                <div key={label}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-blue-400">
                    {number}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-400">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="hidden min-w-0 justify-center lg:flex">
            <ProfileImage />
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <FiChevronDown size={30} className="text-blue-400" />
      </motion.div>
    </section>
  );
};

export default Hero;