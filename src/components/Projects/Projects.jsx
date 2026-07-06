import ProjectCard from "./ProjectCard";
import projects from "./projectsData";

import { motion } from "framer-motion";
import { staggerContainer, fadeItem } from "/src/animation/fadeUp";

function Projects() {
  return (
    <motion.section
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.15 }}
      id="projects"
      className="scroll-mt-28 w-[88%] max-w-[1500px] mx-auto py-16 lg:py-24"
    >
      {/* Section Header */}

      <div
        className="
          flex
          flex-col
          sm:flex-row

          gap-5

          sm:justify-between
          sm:items-center
        "
      >
        <p className="text-[#1ED760] uppercase tracking-[0.25em] text-sm font-semibold">
          FEATURED PROJECTS
        </p>

        <button
          className="
            flex
            items-center
            gap-2

            self-start
            sm:self-auto

            text-[#1ED760]

            font-medium

            transition-all
            duration-300

            hover:gap-4
          "
        >
          View All Projects →
        </button>
      </div>

      {/* Projects Grid */}

      <div
        className="
          mt-16

          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3

          gap-6
          lg:gap-8
        "
      >
        {projects.map((project) => (

  <motion.div
    key={project.title}
    variants={fadeItem}
  >
    <ProjectCard project={project} />
  </motion.div>

))}
      </div>
    </motion.section>
  );
}

export default Projects;