
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import { SiOpencv } from "react-icons/si";

import {
  SiJavascript,
  SiTailwindcss,
  SiSupabase,
  SiTensorflow,
  SiScikitlearn,
  SiVite,
  SiGooglegemini,
} from "react-icons/si";

import { LuDatabase } from "react-icons/lu";

const projects = [
  {
    title: "AnonMind",
    github: "https://github.com/n-bisar/AnonMind",
    image: "/projects/anonmind.png",
    description:
      "A privacy-first mental health platform that allows users to seek AI-assisted support and connect with verified professionals anonymously.",
    technologies:[

{
name:"HTML",
icon:<FaHtml5 className="text-orange-500"/>
},

{
name:"CSS",
icon:<FaCss3Alt className="text-blue-500"/>
},

{
name:"JavaScript",
icon:<SiJavascript className="text-yellow-400"/>
},

{
name:"Supabase",
icon:<SiSupabase className="text-green-500"/>
},

{
name:"Gemini",
icon:<SiGooglegemini className="text-sky-400"/>
},

],
    
    
  },
  {
  title: "AI-Based Poultry Disease Detection",
  github: "#",
  demo: "#",
  image: "/projects/poultry.png",
  description:
    "Developed a computer vision system during my summer internship using OpenCV and YOLOv8 to detect poultry size and assist in early disease identification.",
  technologies: [
    {
      name: "Python",
      icon: <FaPython className="text-yellow-400" />,
    },
    
    {
      name: "YOLOv8",
      icon: <FiCamera className="text-green-400" />,
    },
    {
      name: "OpenCV",
      icon: <SiOpencv className="text-blue-500" />,
    },
  ],
  },

  {
    title: "Spotify Inspired Portfolio",
    image: "/projects/portfolio.png",
    description:
      "A premium Spotify-inspired developer portfolio built using React, Tailwind CSS and Vite.",
    technologies: [

{
    name:"React",
    icon:<FaReact className="text-cyan-400"/>
},

{
    name:"Tailwind CSS",
    icon:<SiTailwindcss className="text-sky-400"/>
},

{
    name:"Vite",
    icon:<SiVite className="text-purple-400"/>
},

],
    github: "https://github.com/n-bisar/my-portfolio-website",
    demo: "#",
  },

  {
    title: "AI-Based Sudden Cardiac Arrest Detection",
    image: "/projects/sca.png",
    description:
      "Machine learning model for ECG-based Sudden Cardiac Arrest detection using spectral features.",
    technologies:[

{
name:"Python",
icon: <FaPython className="text-yellow-400"/>
},

{
name:"TensorFlow",
icon:<SiTensorflow className="text-orange-500"/>
},

{
name:"Scikit-learn",
icon:<SiScikitlearn className="text-orange-400"/>
},

],
    github: "#",
    demo: "#",
  },
];

export default projects;