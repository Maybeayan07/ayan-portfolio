import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Maybeayan07",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/ayan-aleem-4380932a9",
      label: "LinkedIn",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com",
      label: "Twitter",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#050505] border-t border-blue-500/10 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 py-12 sm:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-4 cursor-pointer"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 text-sm font-bold text-blue-400 backdrop-blur-md">
                AA
              </div>
              <div>
                <h3 className="font-bold">Ayan Aleem</h3>
                <p className="text-xs text-neutral-400">AI Student</p>
              </div>
            </motion.div>
            <p className="text-sm text-neutral-400">
              Building intelligent solutions with AI and modern web technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: "#60A5FA" }}
                    className="text-sm text-neutral-400 transition"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: "#60A5FA" }}
                  className="text-neutral-400 transition"
                  title={link.label}
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-neutral-400"
        >
          <p>
            © {currentYear} Ayan Aleem. All rights reserved. | Built with React
            + TypeScript + Tailwind CSS
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
