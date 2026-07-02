function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-28 w-[88%] max-w-[1500px] mx-auto py-24"
    >
      <p className="text-[#1ED760] uppercase tracking-[0.25em] text-sm font-semibold">
        EXPERIENCE
      </p>

      <h2 className="mt-5 text-5xl font-bold">
        Experience & Education
      </h2>

      <div className="mt-16 border-l-2 border-zinc-800 pl-10 space-y-16">

        {/* Internship */}

        <div className="relative">

          <div className="absolute -left-[47px] top-2 w-4 h-4 rounded-full bg-[#1ED760]"></div>

          <p className="text-sm text-zinc-400">
            June 2025 – July 2025
          </p>

          <h3 className="mt-2 text-2xl font-semibold">
            Summer Research Intern
          </h3>

          <p className="text-[#1ED760] mt-1">
            Institute of Engineering and Management
          </p>

          <p className="mt-4 text-zinc-400 leading-7">
            Developed an AI-based poultry disease detection system
            using OpenCV and YOLOv8. Worked on computer vision,
            object detection, dataset preparation and model evaluation.
          </p>

        </div>

        {/* Education */}

        <div className="relative">

          <div className="absolute -left-[47px] top-2 w-4 h-4 rounded-full bg-[#1ED760]"></div>

          <p className="text-sm text-zinc-400">
            2023 – Present
          </p>

          <h3 className="mt-2 text-2xl font-semibold">
            B.Tech in Electronics & Communication Engineering
          </h3>

          <p className="text-[#1ED760] mt-1">
            Institute of Engineering and Management
          </p>

          <p className="mt-4 text-zinc-400 leading-7">
            Current CGPA: <span className="text-white font-medium">8.82</span>.
            Building expertise in Software Development, AI/ML, Computer Vision.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Experience;