import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiArrowUpRight, FiBriefcase, FiCheckCircle } from "react-icons/fi";

interface ContactProps {
  onHireClick?: () => void;
}

const Contact = ({ onHireClick }: ContactProps) => {
  const contactLinks = [
    {
      label: "Email",
      value: "ayanaleem1992@gmail.com",
      href: "mailto:ayanaleem1992@gmail.com",
      icon: FaEnvelope,
    },
    {
      label: "GitHub",
      value: "github.com/Maybeayan07",
      href: "https://github.com/Maybeayan07",
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/ayan-aleem",
      href: "https://www.linkedin.com/in/ayan-aleem-4380932a9",
      icon: FaLinkedin,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[22rem] w-[22rem] rounded-full bg-violet-500/10 blur-[140px]" />
      </div>

      <div
        className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-8"
        style={{ width: "100%", maxWidth: "72rem", marginInline: "auto" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-12"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
            Contact
          </p>
          <h2 className="section-title text-4xl font-black leading-tight sm:text-5xl">
            Let&apos;s Build <span className="text-blue-400">Something Together</span>
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300" />
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            Have a project in mind, an opportunity to discuss, or just want to talk AI? My inbox is always open.
          </p>
        </motion.div>

        <div
          className="mx-auto w-full max-w-5xl"
          style={{ width: "100%", maxWidth: "64rem", marginInline: "auto" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid w-full gap-4 md:grid-cols-3 md:gap-5"
          >
            {contactLinks.map(({ label, value, href, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="card-surface group flex min-w-0 items-center gap-4 rounded-2xl p-5 text-left transition hover:border-cyan-300/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300 ring-1 ring-blue-400/20 transition group-hover:bg-blue-500/25">
                  <Icon size={20} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-white">{label}</span>
                  <span className="mt-1 block truncate text-xs text-slate-400">{value}</span>
                </span>
                <FiArrowUpRight className="ml-auto shrink-0 text-slate-500 transition group-hover:text-cyan-300" size={17} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="card-surface mx-auto mt-6 w-full max-w-3xl rounded-2xl p-6 text-center sm:p-8"
            style={{ width: "100%", maxWidth: "48rem", marginInline: "auto" }}
          >
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Available for work
            </div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Open to internships &amp; freelance projects
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
              I typically reply within 24 hours. Whether it&apos;s a full-time role, a short engagement, or a technical chat, feel free to reach out.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400 sm:text-sm">
              <span className="inline-flex items-center gap-1.5"><FiCheckCircle className="text-cyan-300" /> AI / ML internships</span>
              <span className="inline-flex items-center gap-1.5"><FiCheckCircle className="text-cyan-300" /> RAG &amp; LLM projects</span>
              <span className="inline-flex items-center gap-1.5"><FiCheckCircle className="text-cyan-300" /> Computer vision work</span>
            </div>
            <motion.button
              type="button"
              onClick={onHireClick}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mx-auto mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:shadow-cyan-400/20"
            >
              <FiBriefcase size={16} />
              Contact Me
              <FiArrowUpRight size={17} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
