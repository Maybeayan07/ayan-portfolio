import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#050505] py-20 sm:py-32 text-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[150px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[150px]" />
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
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto" />
          <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto">
            I'm always excited to discuss new ideas, collaborations, and opportunities.
            Feel free to connect with me through any of the platforms below!
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {/* Email */}
            <motion.a
              href="mailto:ayanaleem1992@gmail.com"
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm transition-all hover:border-blue-500/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 mb-4 text-blue-400">
                <FaEnvelope size={24} />
              </div>
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <span className="text-sm text-neutral-400 hover:text-blue-400 transition break-all">
                ayanaleem1992@gmail.com
              </span>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/Maybeayan07"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm transition-all hover:border-blue-500/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 mb-4 text-blue-400">
                <FaGithub size={24} />
              </div>
              <h3 className="font-semibold text-white mb-2">GitHub</h3>
              <span className="text-sm text-neutral-400 hover:text-blue-400 transition">
                github.com/Maybeayan07
              </span>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/ayan-aleem-4380932a9"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm transition-all hover:border-blue-500/40 md:col-span-2 lg:col-span-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 mb-4 text-blue-400">
                <FaLinkedin size={24} />
              </div>
              <h3 className="font-semibold text-white mb-2">LinkedIn</h3>
              <span className="text-sm text-neutral-400 hover:text-blue-400 transition">
                linkedin.com/in/ayan-aleem
              </span>
            </motion.a>
          </motion.div>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 backdrop-blur-sm text-center max-w-2xl mx-auto"
          >
            <h3 className="font-semibold text-white mb-2">Availability</h3>
            <p className="text-sm sm:text-base text-neutral-400">
              I'm currently open to internship opportunities and freelance
              projects. Feel free to reach out anytime!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
