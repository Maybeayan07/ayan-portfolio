import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { FiDownload, FiChevronDown } from "react-icons/fi";
import profileImage from "../assets/image/profile.jpeg";
import resume from "../assets/resume.pdf";
import { stats } from "../data";

interface HeroProps {
  onHireClick?: () => void;
}

const Hero = ({ onHireClick }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid */}
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

        {/* Blue Glow */}
        <div className="absolute -top-60 -left-60 h-[600px] w-[600px] rounded-full bg-blue-500/20 blur-[180px]" />

        {/* Purple Glow */}
        <div className="absolute -bottom-60 -right-60 h-[600px] w-[600px] rounded-full bg-violet-500/20 blur-[180px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 mx-auto flex min-h-[85vh] max-w-7xl items-center px-4 sm:px-8">
        <div className="grid w-full items-center gap-12 lg:gap-20 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-blue-400 backdrop-blur-md"
            >
              🚀 Open to AI / ML Internship Opportunities
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
                Ayan Aleem
              </span>
            </motion.h1>

            {/* Role */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-200"
            >
              Artificial Intelligence Student
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-8 sm:leading-9 text-neutral-400"
            >
              Building intelligent solutions through{" "}
              <span className="font-semibold text-white">Machine Learning</span>,{" "}
              <span className="font-semibold text-white">Computer Vision</span>,
              and{" "}
              <span className="font-semibold text-white">
                Modern Software Development
              </span>
              .
              <br />
              <br />
              Passionate about solving real-world problems with AI while
              continuously learning new technologies and building impactful
              software.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="mt-10 sm:mt-12 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5"
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
                className="group flex items-center justify-center sm:justify-start gap-3 rounded-full border border-blue-500/40 bg-blue-500/10 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-blue-300 transition-all duration-300 hover:bg-blue-500/20 hover:text-blue-200"
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

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-8 sm:mt-10 flex gap-6 sm:gap-8"
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

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mt-12 sm:mt-14 grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4"
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

          {/* RIGHT SIDE - Profile Image */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative flex items-center justify-center"
            >
              {/* Outer Glow */}
              <div className="absolute h-[430px] w-[430px] rounded-full bg-blue-500/20 blur-[120px]" />

              {/* Animated Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 18,
                  ease: "linear",
                }}
                className="absolute h-[390px] w-[390px] rounded-full border border-blue-400/20 border-dashed"
              />

              {/* Second Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  repeat: Infinity,
                  duration: 28,
                  ease: "linear",
                }}
                className="absolute h-[430px] w-[430px] rounded-full border border-violet-500/10"
              />

              {/* Floating Profile */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="overflow-hidden rounded-full border border-white/10 bg-[#111111] p-3 shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Ayan Aleem"
                    className="h-[340px] w-[340px] rounded-full object-cover md:h-[420px] md:w-[420px]"
                  />
                </div>
              </motion.div>

              {/* Floating AI Badge */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="absolute top-6 right-0 rounded-2xl border border-blue-500/20 bg-[#111111]/90 px-4 sm:px-5 py-3 sm:py-4 backdrop-blur-xl shadow-xl"
              >
                <p className="text-xs uppercase tracking-widest text-blue-400">
                  Focus
                </p>
                <h4 className="mt-2 text-sm font-semibold">Machine Learning</h4>
              </motion.div>

              {/* Floating Tech Badge */}
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                }}
                className="absolute bottom-10 left-0 rounded-2xl border border-white/10 bg-[#111111]/90 px-4 sm:px-5 py-3 sm:py-4 backdrop-blur-xl shadow-xl"
              >
                <p className="text-xs uppercase tracking-widest text-neutral-400">
                  Tech Stack
                </p>
                <h4 className="mt-2 text-sm font-semibold text-blue-400">
                  Python • React • TensorFlow
                </h4>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <FiChevronDown size={30} className="text-blue-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
