import { ArrowRight, MessageCircle } from "lucide-react";
import profile from "../../assets/images/profile.png";
import { Play, Music2 } from "lucide-react";

function Hero() {
  return (
    <section  className="w-[88%] max-w-[1500px] mx-auto mt-12">

      <div className="grid grid-cols-2 items-center min-h-[700px]">

        {/* LEFT */}

        <div className="border border-red-500 h-full flex flex-col justify-center pl-16">

          <div className="flex flex-col justify-center h-full">

  {/* Greeting */}
  <p className="text-[#1ED760] text-sm font-semibold tracking-widest uppercase">
    Hello, I'm
  </p>

  {/* Name */}
  <h1 className="mt-4 text-7xl font-extrabold leading-none">
    Bisar
    <br />
    <span className="text-[#1ED760]">
      Nawaz.
    </span>
  </h1>

  {/* Roles */}
  <div className="mt-6 text-3xl text-gray-300 leading-relaxed">

    <p>Electronics & Communication Engineer</p>

    <p>
      Full Stack Developer
      <span className="text-[#1ED760]"> • </span>
      AI/ML Enthusiast
    </p>

  </div>

  {/* Description */}

  <p className="mt-8 max-w-xl text-gray-400 text-xl leading-9">

    I build intelligent, scalable web applications
    and explore AI to solve real-world problems.

  </p>

  {/* CTA Buttons */}

<div className="mt-10 flex items-center gap-5">

  {/* View My Work */}

  <button
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

      hover:scale-105
      hover:shadow-[0_0_25px_rgba(30,215,96,0.35)]
    "
  >
    View My Work

    <ArrowRight size={18} />
  </button>

  {/* Contact */}

  <button
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
  </button>

</div>

</div>

        </div>

        {/* RIGHT */}

        <div className="border border-green-500 h-full flex justify-center items-center">

          <div className="relative flex items-center justify-center h-full">

  {/* Green Glow */}
  <div
  className="
    absolute

    w-[600px]
    h-[600px]

    rounded-full

    bg-[#1ED760]/10

    blur-2xl
  "
></div>

  {/* Profile Image */}

  <div
  className="
    absolute

    w-[520px]
    h-[520px]

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

    w-[470px]

    object-contain

    drop-shadow-[0_25px_40px_rgba(0,0,0,0.45)]

    select-none
    "
  />

  {/* Floating Spotify Card */}

<div
  className="
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

    flex
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

</div>

</div>
        </div>

      </div>

    </section>
  );
}

export default Hero;