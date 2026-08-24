import { motion } from "framer-motion";
import { experiences } from "../data";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050505] py-16 text-white sm:py-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[150px]" />
      </div>

      <div
        className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-8"
        style={{ width: "100%", maxWidth: "72rem", marginInline: "auto" }}
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Work <span className="text-blue-400">Experience</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-300" />
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 md:space-y-12"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 hidden h-full w-0.5 bg-gradient-to-b from-blue-400 to-transparent md:block" />

              {/* Timeline Dot */}
              <div className="absolute -left-3 top-2 hidden h-6 w-6 rounded-full border-4 border-[#050505] bg-blue-400 md:block" />

              {/* Content */}
              <motion.div
                whileHover={{ x: 10 }}
                className="card-surface min-w-0 rounded-2xl p-6 transition hover:-translate-y-1 sm:p-8 md:ml-12"
              >
                {/* Header */}
                <div className="mb-4 flex min-w-0 flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm sm:text-base text-blue-400 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs text-neutral-400 sm:text-sm">
                    {exp.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-neutral-300 mb-4">
                  {exp.description}
                </p>

                {/* Achievements */}
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-3 text-xs sm:text-sm text-neutral-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="card-surface mx-auto mt-12 w-full max-w-3xl rounded-2xl p-6 text-center sm:mt-16 sm:p-8"
          style={{ width: "100%", maxWidth: "48rem", marginInline: "auto" }}
        >
          <h3 className="text-lg sm:text-xl font-bold mb-3">
            Looking for more details?
          </h3>
          <p className="mx-auto mb-6 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
            Check out my resume or connect with me on LinkedIn to learn more
            about my professional journey.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <motion.a
              href="https://www.linkedin.com/in/ayan-aleem-4380932a9"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:shadow-cyan-400/20"
            >
              Connect on LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
