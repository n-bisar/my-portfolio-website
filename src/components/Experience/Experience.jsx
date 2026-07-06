
import { motion } from "framer-motion";
import { staggerContainer, fadeItem } from "/src/animation/fadeUp";

function Experience() {
  return (
    <motion.section
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
      id="experience"
      className="scroll-mt-28 w-[88%] max-w-[1500px] mx-auto py-16 lg:py-24"
    >
      <p className="text-[#1ED760] uppercase tracking-[0.25em] text-sm font-semibold">
        EXPERIENCE
      </p>

      <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
        Experience & Education
      </h2>

      <div
        className="
          mt-16

          border-l-2
          border-zinc-800

          pl-6
          sm:pl-10

          space-y-14
          lg:space-y-16
        "
      >
        {/* Internship */}

        <motion.div
  className="relative"
  variants={fadeItem}
>

          <div
            className="
              absolute

              -left-[31px]
              sm:-left-[47px]

              top-2

              w-4
              h-4

              rounded-full

              bg-[#1ED760]
            "
          ></div>

          <p className="text-sm text-zinc-400">
            June 2025 – July 2025
          </p>

          <h3 className="mt-2 text-xl sm:text-2xl font-semibold">
            Summer Research Intern
          </h3>

          <p className="text-[#1ED760] mt-1">
            Institute of Engineering and Management
          </p>

          <p className="mt-4 text-zinc-400 leading-7 text-sm sm:text-base">
            Developed an AI-based poultry disease detection system using
            OpenCV and YOLOv8. Worked on computer vision, object detection,
            dataset preparation and model evaluation.
          </p>

        </motion.div>

        {/* Education */}

        <motion.div
  className="relative"
  variants={fadeItem}
>

          <div
            className="
              absolute

              -left-[31px]
              sm:-left-[47px]

              top-2

              w-4
              h-4

              rounded-full

              bg-[#1ED760]
            "
          ></div>

          <p className="text-sm text-zinc-400">
            2023 – Present
          </p>

          <h3 className="mt-2 text-xl sm:text-2xl font-semibold">
            B.Tech in Electronics & Communication Engineering
          </h3>

          <p className="text-[#1ED760] mt-1">
            Institute of Engineering and Management
          </p>

          <p className="mt-4 text-zinc-400 leading-7 text-sm sm:text-base">
            Current CGPA:{" "}
            <span className="text-white font-medium">8.82</span>. Building
            expertise in Software Development, AI/ML and Computer Vision.
          </p>

        </motion.div>
      </div>
    </motion.section>
  );
}

export default Experience;