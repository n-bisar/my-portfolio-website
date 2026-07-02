function ProjectCard({ project }) {
  return (
    <div
      className="
        mt-12

        rounded-3xl

        border
        border-zinc-800

        bg-[#111111]

        p-8

        transition-all
        duration-300

        hover:border-[#1ED760]
      "
    >

      <h3 className="text-3xl font-bold">

        {project.title}

      </h3>

      <p className="mt-6 text-zinc-400 leading-8">

        {project.description}

      </p>

    </div>
  );
}

export default ProjectCard;