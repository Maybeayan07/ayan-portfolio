import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMail, FiLinkedin, FiPhone, FiCalendar, FiDownload, FiCheck } from "react-icons/fi";
import resume from "../assets/resume.pdf";

interface HireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HireModal = ({ isOpen, onClose }: HireModalProps) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to send message.");
    }

    setSubmitted(true);

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setSubmitted(false);
      onClose();
    }, 2000);
  } catch (error) {
    console.error("Contact form error:", error);

    alert(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again."
    );
  } finally {
    setLoading(false);
  }
};

  const contactOptions = [
    {
      icon: FiMail,
      label: "Email Me",
      href: "mailto:ayanaleem1992@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ayan-aleem-4380932a9",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: FiPhone,
      label: "WhatsApp",
      href: "https://wa.me/923035720848?text=Hi%20Ayan%2C%20I%27d%20like%20to%20discuss%20opportunities",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FiCalendar,
      label: "Schedule Meeting",
      href: "https://calendly.com/ayanaleem",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FiDownload,
      label: "Download Resume",
      href: resume,
      color: "from-orange-500 to-red-500",
      download: true,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0"
          >
            {/* Modal Content */}
            <motion.div
              layoutId="hire-modal"
              className="relative w-full max-w-2xl rounded-2xl border border-blue-500/30 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-900/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 transition"
              >
                <FiX size={24} />
              </motion.button>

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-2 border border-green-500/30"
              >
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold text-green-300">
                  Available for Opportunities
                </span>
              </motion.div>

              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mb-8"
              >
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
                  Let's Work Together 🚀
                </h2>
                <p className="text-sm sm:text-base text-neutral-400">
                  I'm currently open to internships, freelance projects, and full-time AI/ML or Full Stack opportunities.
                </p>
                <p className="text-xs sm:text-sm text-neutral-500 mt-2">
                  ⏱️ Typically responds within 24 hours.
                </p>
              </motion.div>

              {/* Contact Options Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, staggerChildren: 0.08 }}
                className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
              >
                {contactOptions.map((option, idx) => {
                  const Icon = option.icon;
                  return (
                    <motion.a
                      key={option.label}
                      href={option.href}
                      download={option.download}
                      target={option.href.startsWith("http") ? "_blank" : undefined}
                      rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.08 }}
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group relative overflow-hidden rounded-lg border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 p-4 sm:p-5 backdrop-blur-sm transition hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/20`}
                    >
                      {/* Gradient Background on Hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"
                        style={{
                          background: `linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))`,
                        }}
                      />

                      <div className="relative flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition">
                          <Icon className="text-blue-400 group-hover:text-blue-300 transition" size={20} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-white group-hover:text-blue-300 transition">
                            {option.label}
                          </p>
                        </div>
                        <motion.div
                          className="text-blue-400 opacity-0 group-hover:opacity-100 transition"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.div>
                      </div>
                    </motion.a>
                  );
                })}
              </motion.div>

              {/* Divider */}
              <div className="my-8 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

              {/* Quick Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-lg font-bold text-white mb-4">Quick Message</h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-8 text-center"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6 }}
                      className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 border border-green-500/30"
                    >
                      <FiCheck className="text-green-400" size={32} />
                    </motion.div>
                    <p className="text-lg font-semibold text-white">Message Sent!</p>
                    <p className="text-sm text-neutral-400 mt-2">
                      I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Input */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 }}
                    >
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full rounded-lg border border-blue-500/20 bg-blue-500/5 px-4 py-3 text-white placeholder-neutral-500 transition focus:border-blue-500/40 focus:bg-blue-500/10 focus:outline-none"
                      />
                    </motion.div>

                    {/* Email Input */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="w-full rounded-lg border border-blue-500/20 bg-blue-500/5 px-4 py-3 text-white placeholder-neutral-500 transition focus:border-blue-500/40 focus:bg-blue-500/10 focus:outline-none"
                      />
                    </motion.div>

                    {/* Message Input */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.55 }}
                    >
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                        rows={3}
                        className="w-full rounded-lg border border-blue-500/20 bg-blue-500/5 px-4 py-3 text-white placeholder-neutral-500 transition focus:border-blue-500/40 focus:bg-blue-500/10 focus:outline-none resize-none"
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="inline-block"
                        >
                          ⏳
                        </motion.div>
                      ) : (
                        "Send Message"
                      )}
                    </motion.button>
                  </form>
                )}
              </motion.div>

              {/* Footer Note */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-6 text-xs text-center text-neutral-500"
              >
                EmailJS integration available for production. Press ESC or click outside to close.
              </motion.p>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HireModal;
