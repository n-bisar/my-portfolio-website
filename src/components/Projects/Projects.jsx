import ProjectCard from "./ProjectCard";
import projects from "./projectsData";

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 w-[88%] max-w-[1500px] mx-auto py-12"
    >
      <div className="flex justify-between items-center">

  <p className="text-[#1ED760] uppercase tracking-[0.25em] text-sm font-semibold">
    FEATURED PROJECTS
  </p>

  <button
    className="
      flex
      items-center
      gap-2

      text-[#1ED760]

      font-medium

      hover:gap-4

      transition-all
    "
  >
    View All Projects →
  </button>

</div>

      <div className="mt-16 grid grid-cols-3 gap-8">

  {projects.map((project) => (

    <ProjectCard
      key={project.title}
      project={project}
    />

  ))}

</div>

    </section>
  );
}

export default Projects;