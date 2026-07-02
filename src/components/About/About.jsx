function About() {
  return (
    <div>

      <p className="text-[#1ED760] uppercase tracking-[0.25em] text-sm font-semibold">
        ABOUT ME
      </p>

      <h2 className="mt-5 text-5xl font-bold leading-tight">

        Turning ideas into
        <br />
        impactful digital
        <br />
        experiences.

      </h2>

      <p className="mt-8 text-gray-400 leading-8 max-w-md">

        I'm an Electronics & Communication Engineering
        student passionate about building modern web
        applications, solving real-world problems, and
        exploring Artificial Intelligence and Machine Learning.

      </p>

      <div className="mt-10 grid grid-cols-2 gap-6 text-zinc-300">

  <div>
    <p className="text-[#1ED760] text-sm">Location</p>
    <p className="mt-1">Kolkata, India</p>
  </div>

  <div>
    <p className="text-[#1ED760] text-sm">Education</p>
    <p className="mt-1">B.Tech (ECE)</p>
  </div>

  <div>
    <p className="text-[#1ED760] text-sm">Focus</p>
    <p className="mt-1">Full Stack + AI/ML</p>
  </div>

  

</div>

      <button className="mt-10 flex items-center gap-2 text-[#1ED760] font-medium hover:gap-4 transition-all duration-300">
  More About Me →
</button>

    </div>
  );
}

export default About;