

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiPython,
  SiTensorflow,
  SiSpringboot,
  SiScikitlearn,
} from "react-icons/si";

import { TbBrandGithub } from "react-icons/tb";

import { LuDatabase } from "react-icons/lu";



const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },

  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },

  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-2xl" /> },

  { name: "React", icon: <FaReact className="text-cyan-400 text-2xl" /> },

  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-2xl" /> },

  { name: "Python", icon: <SiPython className="text-yellow-400 text-2xl" /> },

  { name: "Java", icon: <FaJava className="text-orange-400 text-2xl" /> },

  { name: "SQL", icon: <LuDatabase className="text-blue-400 text-2xl" /> },

  { name: "Git & GitHub", icon: <TbBrandGithub className="text-white text-2xl" /> },

  { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500 text-2xl" /> },

  { name: "Scikit-learn", icon: <SiScikitlearn className="text-blue-400 text-2xl" /> },

  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500 text-2xl" /> },
];


function Skills() {
  return (
    <div className="pl-20">

      <p className="text-[#1ED760] uppercase tracking-[0.25em] text-sm font-semibold mb-8">
        SKILLS
      </p>

      <div className="grid grid-cols-3 gap-5">

        {skills.map((skill) => (

          <div
            key={skill.name}
            className="
            group
h-[72px]

rounded-2xl

bg-[#111111]

border
border-zinc-800

flex
items-center

gap-4

px-6

cursor-pointer

transition-all
duration-300

hover:border-[#1ED760]

hover:bg-[#151515]

hover:-translate-y-1

hover:shadow-[0_0_20px_rgba(30,215,96,0.15)]
"
          >

            <div
    className="
    transition-transform
    duration-300
    group-hover:scale-110
    "
>
    {skill.icon}
</div>
            <span className="
text-zinc-200
font-medium
tracking-wide
">
              {skill.name}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Skills;