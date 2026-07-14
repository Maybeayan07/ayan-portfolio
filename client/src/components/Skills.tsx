import { motion } from "framer-motion";
import { skills } from "../data";

const Skills = () => {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-[#050505] py-20 sm:py-32 text-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Skills & <span className="text-blue-400">Expertise</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-300" />
        </motion.div>

        {/* Skills by Category */}
        <div className="grid gap-12 lg:grid-cols-2">
          {categories.map((category, categoryIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIdx * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-blue-400">
                {category}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm sm:text-base font-medium text-neutral-300">
                          {skill.name}
                        </span>
                        <span className="text-xs sm:text-sm text-blue-400 font-semibold">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 w-full rounded-full bg-neutral-700 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1.5,
                            ease: "easeOut",
                            delay: 0.1,
                          }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 rounded-lg border border-blue-500/20 bg-blue-500/5 p-6 sm:p-8 backdrop-blur-sm"
        >
          <h3 className="text-lg sm:text-xl font-bold mb-4">Tech Stack Summary</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              "Python",
              "React",
              "TypeScript",
              "TensorFlow",
              "PyTorch",
              "Node.js",
              "MongoDB",
              "Docker",
            ].map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.05 }}
                className="rounded-lg border border-blue-400/30 bg-blue-400/10 px-3 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-semibold text-blue-300 cursor-pointer transition hover:bg-blue-400/20"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
