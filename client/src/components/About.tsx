import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#050505] py-20 sm:py-32 text-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[150px]" />
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
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-300" />
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-2"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-base sm:text-lg leading-8 text-neutral-300">
              I'm a passionate AI and Machine Learning enthusiast currently
              pursuing my degree in Artificial Intelligence. With a strong
              foundation in both machine learning and full-stack development, I
              love creating intelligent solutions that solve real-world problems.
            </p>

            <p className="text-base sm:text-lg leading-8 text-neutral-300">
              My journey in tech started with a curiosity about how machines
              learn, and it has evolved into a comprehensive skill set spanning
              deep learning, computer vision, NLP, and modern web development.
            </p>

            <p className="text-base sm:text-lg leading-8 text-neutral-300">
              When I'm not coding or training models, you'll find me exploring
              new technologies, contributing to open-source projects, or sharing
              knowledge with the community.
            </p>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-6"
            >
              {[
                { label: "Years Learning", value: "3+" },
                { label: "Projects Completed", value: "15+" },
                { label: "Technologies", value: "20+" },
                { label: "Certifications", value: "5+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4 backdrop-blur-sm"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-blue-400">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Timeline */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-xl sm:text-2xl font-bold">Education</h3>

            {[
              {
                year: "SSC",
                title: "Noble Grammar Public Secondary School",
                desc: "Science Group | FBISE",
              },
              {
                year: "Graduated 2022",
                title: "Army Public College, Attock",
                desc: "HSSC – Pre-Engineering | FBISE",
              },
              {
                year: "2023 - 2027",
                title: "COMSATS University Islamabad",
                desc: "BS Artificial Intelligence",
              },
            ].map((milestone, idx, arr) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                className="flex gap-4 sm:gap-6 cursor-pointer"
              >
                <div className="relative flex flex-col items-center">
                  <div className="h-4 w-4 rounded-full bg-blue-400 ring-4 ring-blue-400/20" />
                  {idx !== arr.length - 1 && (
                    <div className="mt-2 h-12 w-0.5 bg-gradient-to-b from-blue-400/50 to-transparent" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-sm font-bold text-blue-400">{milestone.year}</p>
                  <h4 className="mt-2 text-base sm:text-lg font-semibold">
                    {milestone.title}
                  </h4>
                  <p className="mt-1 text-sm sm:text-base text-neutral-400">
                    {milestone.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
