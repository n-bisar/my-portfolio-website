import { FaArrowRight } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div
      className="
      group

      rounded-3xl

      border
      border-zinc-800

      bg-[#111111]

      p-5

      transition-all
      duration-300

      hover:border-[#1ED760]
      hover:-translate-y-2
      "
    >

      {/* Image */}

      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        decoding="async"
        className="
        w-full
        h-52

        object-cover

        rounded-2xl

        transition-all
        duration-500

        group-hover:scale-[1.03]
        "
      />

      {/* Title */}

      <h3 className="mt-6 text-2xl font-bold">

        {project.title}

      </h3>

      {/* Description */}

      <p className="mt-4 text-zinc-400 leading-7">

        {project.description}

      </p>

      {/* Bottom */}

      <div className="mt-8 flex justify-between items-center">

        <div className="flex flex-wrap gap-2">

          {project.technologies.map((tech) => (

<div
key={tech.name}

className="
flex
items-center
gap-2

px-3
py-1

rounded-full

bg-[#1A1A1A]

border

border-zinc-700

text-sm

text-zinc-300
"
>

{tech.icon}

<span>

{tech.name}

</span>

</div>

))}

        </div>

        <button
          className="
            w-11
            h-11

            rounded-full

            border

            border-zinc-700

            flex

            items-center

            justify-center

            group-hover:bg-[#1ED760]
            group-hover:text-black

            transition-all
          "
        >
            <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="
    w-11
    h-11
    rounded-full
    border
    border-zinc-700
    flex
    items-center
    justify-center
    transition-all
    group-hover:bg-[#1ED760]
    group-hover:text-black
  "
>
  <FaArrowRight />
</a>
          

        </button>

      </div>

    </div>
  );
}

export default ProjectCard;