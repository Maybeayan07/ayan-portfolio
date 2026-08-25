import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data";
import { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "featured">( "all");

  const displayedProjects =
    filter === "featured" ? projects.filter((p) => p.featured) : projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#050505] py-20 text-white sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true" />

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
          <h2 className="section-title text-4xl font-black sm:text-5xl">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-300" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap gap-3"
        >
          {(["all", "featured"] as const).map((f) => (
            <motion.button
              key={f}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                filter === f
                  ? "bg-blue-500 text-white"
                  : "border border-blue-500/40 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20"
              }`}
            >
              {f === "all" ? "All Projects" : "Featured"}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid w-full items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group card-surface relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl backdrop-blur-sm transition hover:-translate-y-1"
            >
              {/* Project Image or Video */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                    style={{ objectPosition: 'center 30%' }}
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-5 sm:p-6">
                <h3 className="mb-2 text-lg font-bold text-white sm:text-xl lg:min-h-[3.5rem]">
                  {project.title}
                </h3>

                <p className="mb-5 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies and links */}
                <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                  <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2 pl-0.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-blue-500/20 px-2 py-1 text-xs text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="rounded-full bg-blue-500/20 px-2 py-1 text-xs text-blue-300">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex shrink-0 items-center gap-3">
                    {project.github && (
                      <motion.a
                        href="https://github.com/Maybeayan07"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        className="text-neutral-400 transition hover:text-blue-400"
                        title="GitHub"
                      >
                        <FaGithub size={20} />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        className="text-neutral-400 transition hover:text-blue-400"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-slate-950/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cyan-300 backdrop-blur">
                  Featured
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
};

export default Projects;