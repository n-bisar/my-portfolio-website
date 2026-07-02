import ProjectCard from "./ProjectCard";
import projects from "./projectsData";

function Projects() {
  return (
    <section
      id="projects"
      className="w-[88%] max-w-[1500px] mx-auto py-32"
    >
      <p className="text-[#1ED760] uppercase tracking-[0.25em] text-sm font-semibold">
        FEATURED PROJECTS
      </p>

      <h2 className="mt-5 text-5xl font-bold leading-tight max-w-3xl">
        Projects that reflect my passion for solving real-world problems.
      </h2>

      <p className="mt-8 text-zinc-400 leading-8 max-w-3xl">
        A collection of projects ranging from modern web applications to Artificial Intelligence and research.
      </p>

      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          project={project}
        />
      ))}

    </section>
  );
}

export default Projects;