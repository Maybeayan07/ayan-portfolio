import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiArrowUpRight, FiMapPin, FiCheckCircle } from "react-icons/fi";

interface ContactProps {
  onHireClick?: () => void;
}

const contactLinks = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "ayanaleem1992@gmail.com",
    href: "mailto:ayanaleem1992@gmail.com",
    external: false,
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/Maybeayan07",
    href: "https://github.com/Maybeayan07",
    external: true,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ayan-aleem",
    href: "https://www.linkedin.com/in/ayan-aleem-4380932a9",
    external: true,
  },
];

const Contact = ({ onHireClick }: ContactProps) => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] py-20 text-white sm:py-28"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-500/10 blur-[150px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-blue-400">
            Contact
          </span>
          <h2 className="section-title mt-5 text-4xl font-black sm:text-5xl">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="mt-5 text-base leading-7 text-neutral-400 sm:text-lg">
            Have a project in mind, an opportunity to discuss, or just want to
            talk AI? My inbox is always open.
          </p>
        </motion.div>

        {/* Main Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto grid w-full max-w-5xl gap-6 lg:grid-cols-5"
        >
          {/* Left: Availability / pitch card */}
          <div className="card-surface relative flex flex-col justify-between overflow-hidden rounded-2xl p-7 sm:p-8 lg:col-span-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Available for work
              </div>

              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Open to internships &amp; freelance projects
              </h3>
              <p className="mt-3 text-sm leading-6 text-neutral-400 sm:text-base sm:leading-7">
                I typically reply within 24 hours. Whether it's a full-time
                role, a short engagement, or a technical chat — reach out.
              </p>

              <ul className="mt-6 space-y-2.5">
                {["AI / ML internships", "RAG & LLM projects", "Computer vision work"].map(
                  (item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-neutral-300"
                    >
                      <FiCheckCircle className="text-blue-400" size={16} />
                      {item}
                    </li>
                  )
                )}
              </ul>

              <div className="mt-6 flex items-center gap-2 text-xs text-neutral-500">
                <FiMapPin size={14} />
                Open to remote &amp; on-site opportunities
              </div>
            </div>

            <motion.button
              type="button"
              onClick={onHireClick}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:shadow-cyan-400/30"
            >
              Get In Touch
              <FiArrowUpRight size={17} />
            </motion.button>
          </div>

          {/* Right: Contact links */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-1">
            {contactLinks.map(({ icon: Icon, label, value, href, external }, i) => (
              <motion.a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
                className="card-surface group flex items-center gap-4 rounded-2xl p-5 transition-all hover:border-blue-500/40"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500/20">
                  <Icon size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-semibold text-white">{label}</h4>
                  <p className="truncate text-sm text-neutral-400 group-hover:text-blue-400 transition">
                    {value}
                  </p>
                </div>
                <FiArrowUpRight
                  size={16}
                  className="flex-shrink-0 text-neutral-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-400"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;