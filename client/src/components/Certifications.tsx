import { motion } from "framer-motion";
import { certifications } from "../data";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 sm:py-32 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[150px]" />
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
            Certifications & <span className="text-blue-400">Awards</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-300" />
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-lg border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 p-6 backdrop-blur-sm transition hover:border-blue-500/40 hover:bg-blue-500/15"
            >
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition">
                <FaAward className="text-blue-400 text-lg" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-sm text-blue-300 mb-3">{cert.issuer}</p>
              <p className="text-xs text-neutral-400 mb-4">{cert.date}</p>

              {/* Credential Link */}
              {cert.credentialUrl && (
                <motion.a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-cyan-300 transition"
                >
                  View Credential
                  <FaExternalLinkAlt size={12} />
                </motion.a>
              )}

              {/* Gradient Border Animation */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                  WebkitMaskImage: "linear-gradient(#fff, #fff)",
                  WebkitMaskComposite: "destination-out",
                  maskComposite: "exclude",
                  padding: "1px",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
