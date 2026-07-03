import { ArrowRight, MessageCircle } from "lucide-react";
import profile from "../../assets/images/profile.png";
import { Play, Music2 } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
  id="home"
  className="
    w-[88%]
    max-w-[1500px]
    mx-auto

    min-h-screen

    flex
    items-center
  "
>

      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="
grid
grid-cols-1
lg:grid-cols-2

items-center

min-h-screen

gap-16
"
>

        {/* LEFT */}

        <motion.div
  initial={{ opacity: 0, x: -60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="
h-full

flex
flex-col
justify-center

pl-0
lg:pl-16

text-center
lg:text-left
"
>

          <div className="flex flex-col justify-center h-full">

  {/* Greeting */}
  <p className="text-[#1ED760] text-sm font-semibold tracking-widest uppercase">
    Hello, I'm
  </p>

  {/* Name */}
  <h1 className="
mt-4

text-5xl
sm:text-6xl
lg:text-7xl

font-extrabold

leading-none
">
    Bisar
    <br />
    <span className="text-[#1ED760]">
      Nawaz.
    </span>
  </h1>

  {/* Roles */}
  <div className="
mt-6

text-xl
sm:text-2xl
lg:text-3xl

text-gray-300

leading-relaxed
">

    <p>Electronics & Communication Engineer</p>

    <p>
      Full Stack Developer
      <span className="text-[#1ED760]"> • </span>
      AI/ML Enthusiast
    </p>

  </div>

  {/* Description */}

  <p className="
mt-8

max-w-xl

mx-auto
lg:mx-0

text-gray-400

text-lg
lg:text-xl

leading-8
">

    I build intelligent, scalable web applications
    and explore AI to solve real-world problems.

  </p>

  {/* CTA Buttons */}

<div className="
mt-10

flex

flex-col
sm:flex-row

items-center

justify-center
lg:justify-start

gap-5
">

  {/* View My Work */}

  <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="
    flex
    items-center
    gap-3
    h-14
    px-8
    rounded-full
    bg-[#1ED760]
    text-black
    font-semibold
    text-[15px]
    transition-all
    duration-300
    hover:shadow-[0_0_25px_rgba(30,215,96,0.35)]
  "
>
  View My Work
  <ArrowRight size={18} />
</motion.button>

  {/* Contact */}

  <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="
    flex
    items-center
    gap-3
    h-14
    px-8
    rounded-full
    border
    border-zinc-700
    text-white
    font-medium
    text-[15px]
    transition-all
    duration-300
    hover:border-[#1ED760]
    hover:text-[#1ED760]
  "
>
  Contact Me
  <MessageCircle size={18} />
</motion.button>

</div>

</div>

        </motion.div>






        {/* RIGHT */}

        <motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="
h-full

flex

justify-center
items-center

order-first
lg:order-last
"
>

          <div className="relative flex items-center justify-center h-full">

  {/* Green Glow */}
  <div
  className="
    absolute

    w-[280px]
    h-[280px]

    sm:w-[380px]
    sm:h-[380px]

    lg:w-[600px]
    lg:h-[600px]

    rounded-full

    bg-[#1ED760]/10

    blur-2xl
  "
></div>

  {/* Profile Image */}

  <div
  className="
    absolute

    w-[240px]
    h-[240px]

    sm:w-[320px]
    sm:h-[320px]

    lg:w-[520px]
    lg:h-[520px]

    rounded-full

    border
    border-[#1ED760]/10
  "
></div>

  <img
    src={profile}
    alt="Bisar Nawaz"
    className="
    relative
    z-10

    w-[280px]
    sm:w-[360px]
    lg:w-[470px]

    object-contain

    drop-shadow-[0_25px_40px_rgba(0,0,0,0.45)]

    select-none
    "
  />

  {/* Floating Spotify Card */}

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8, duration: 0.6 }}
  className="
    hidden
    lg:flex

    absolute

    bottom-3
    left-6

    w-[400px]
    h-[90px]

    rounded-2xl

    bg-[#111111]/90
    backdrop-blur-md

    border
    border-zinc-800

    items-center
    justify-between

    px-5

    z-20
    shadow-2xl
  "
>

  {/* Album */}

  <div className="flex items-center gap-5">

    <div
      className="
        w-14
        h-14
        

        rounded-lg

        bg-[#1ED760]/20

        flex
        items-center
        justify-center
      "
    >
      <Music2 size={24} className="text-[#1ED760]" />
    </div>

    <div>

      <h3 className="font-semibold text-white">
        Code. Build. Iterate. Repeat
      </h3>

      <p className="text-sm text-gray-400">
        Bisar Nawaz
      </p>

      <div className="mt-2 w-36 h-[3px] rounded-full bg-zinc-700">

        <div className="w-20 h-full rounded-full bg-[#1ED760]"></div>

      </div>

    </div>

  </div>

  {/* Play */}

  <button
    className="
      w-12
      h-12

      rounded-full

      bg-[#1ED760]

      flex
      items-center
      justify-center

      hover:scale-110

      transition
    "
  >
    <Play fill="black" size={18} color="black" />
  </button>

</motion.div>

</div>
        </motion.div>

      </motion.div>

    </section>
  );
}

export default Hero;