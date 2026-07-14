import { motion } from "framer-motion";
import { techStack } from "../data";
import {
  FaPython,
  FaReact,
  FaNode,
  FaDocker,
  FaGit,
  FaDatabase,
} from "react-icons/fa";
import { SiTensorflow, SiTypescript, SiTailwindcss } from "react-icons/si";

const techIcons: { [key: string]: React.ReactNode } = {
  Python: <FaPython className="text-4xl text-yellow-400" />,
  React: <FaReact className="text-4xl text-cyan-400" />,
  TypeScript: <SiTypescript className="text-4xl text-blue-500" />,
  TensorFlow: <SiTensorflow className="text-4xl text-orange-500" />,
  PyTorch: <FaDatabase className="text-4xl text-red-500" />,
  "Node.js": <FaNode className="text-4xl text-green-500" />,
  MongoDB: <FaDatabase className="text-4xl text-green-600" />,
  Docker: <FaDocker className="text-4xl text-blue-400" />,
  OpenCV: <FaDatabase className="text-4xl text-purple-500" />,
  FastAPI: <FaDatabase className="text-4xl text-teal-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-4xl text-cyan-500" />,
  Git: <FaGit className="text-4xl text-red-600" />,
};

const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-20 sm:py-32 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Tech Stack & <span className="text-blue-400">Tools</span>
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
            Proficient in modern technologies and tools for building scalable AI/ML and web applications
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech}
              variants={itemVariants}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group flex flex-col items-center justify-center rounded-lg border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 p-4 sm:p-6 backdrop-blur-sm transition hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-3 group-hover:scale-110 transition duration-300">
                {techIcons[tech] || (
                  <div className="text-4xl font-bold text-blue-400">{tech[0]}</div>
                )}
              </div>

              {/* Label */}
              <p className="text-xs sm:text-sm font-semibold text-center text-white group-hover:text-blue-300 transition">
                {tech}
              </p>

              {/* Tooltip */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none whitespace-nowrap">
                <div className="rounded bg-blue-500 px-2 py-1 text-xs text-white shadow-lg">
                  {tech}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Categories */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 rounded-lg border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 p-6 sm:p-8 backdrop-blur-sm"
        >
          <h3 className="text-lg sm:text-xl font-bold mb-6">Expertise Areas</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { category: "AI/ML", skills: "TensorFlow, PyTorch, OpenCV, NLP" },
              { category: "Frontend", skills: "React, TypeScript, Tailwind CSS" },
              { category: "Backend", skills: "Node.js, FastAPI, Express.js" },
              { category: "DevOps", skills: "Docker, Git, Linux, Postman" },
            ].map((area) => (
              <motion.div
                key={area.category}
                whileHover={{ x: 5 }}
                className="rounded-lg border border-blue-400/30 bg-blue-400/10 p-4 hover:border-blue-400/50 transition"
              >
                <h4 className="font-bold text-blue-300 mb-2">{area.category}</h4>
                <p className="text-xs sm:text-sm text-neutral-300">{area.skills}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
