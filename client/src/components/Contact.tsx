import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

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
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always excited to discuss new ideas and opportunities.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-blue-500/20 bg-blue-500/5 px-4 py-3 text-white placeholder-neutral-500 transition focus:border-blue-500/40 focus:bg-blue-500/10 focus:outline-none"
                  placeholder="John Doe"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-blue-500/20 bg-blue-500/5 px-4 py-3 text-white placeholder-neutral-500 transition focus:border-blue-500/40 focus:bg-blue-500/10 focus:outline-none"
                  placeholder="john@example.com"
                />
              </motion.div>

              {/* Message Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-lg border border-blue-500/20 bg-blue-500/5 px-4 py-3 text-white placeholder-neutral-500 transition focus:border-blue-500/40 focus:bg-blue-500/10 focus:outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
              >
                {submitted ? "Message Sent! ✓" : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Email */}
            <motion.div
              whileHover={{ x: 10 }}
              className="flex gap-4 cursor-pointer"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                <FaEnvelope className="text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <a
                  href="mailto:ayan@example.com"
                  className="text-neutral-400 hover:text-blue-400 transition"
                >
                  ayan@example.com
                </a>
              </div>
            </motion.div>

            {/* GitHub */}
            <motion.a
              href="https://github.com/Maybeayan07"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 10 }}
              className="flex gap-4 cursor-pointer"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                <FaGithub className="text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-white">GitHub</h3>
                <p className="text-neutral-400 hover:text-blue-400 transition">
                  github.com/Maybeayan07
                </p>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/ayan-aleem-4380932a9"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 10 }}
              className="flex gap-4 cursor-pointer"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                <FaLinkedin className="text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-white">LinkedIn</h3>
                <p className="text-neutral-400 hover:text-blue-400 transition">
                  linkedin.com/in/ayan-aleem
                </p>
              </div>
            </motion.a>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-6 backdrop-blur-sm"
            >
              <h3 className="font-semibold text-white mb-2">Availability</h3>
              <p className="text-sm text-neutral-400">
                I'm currently open to internship opportunities and freelance
                projects. Feel free to reach out anytime!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
