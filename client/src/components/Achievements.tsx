import { motion } from "framer-motion";
import { achievements } from "../data";

const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-16 sm:py-24 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">
            Key <span className="text-blue-400">Achievements</span>
          </h2>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.08, rotate: 2 }}
              className="group relative overflow-hidden rounded-lg border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 p-6 sm:p-8 backdrop-blur-sm transition hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/20"
            >
              {/* Icon */}
              <div className="mb-4 text-4xl sm:text-5xl group-hover:scale-110 transition duration-300">
                {achievement.icon}
              </div>

              {/* Label */}
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {achievement.label}
              </h3>

              {/* Gradient Background Animation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.1), transparent)",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
