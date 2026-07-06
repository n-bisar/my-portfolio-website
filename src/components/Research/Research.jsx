import { FaPython } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { FiActivity } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import { motion } from "framer-motion";
import { fadeUp } from "/src/animation/fadeUp";

function Research() {
  return (
    <motion.section
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
      id="research"
      className="scroll-mt-28 w-[88%] max-w-[1500px] mx-auto py-16 lg:py-24"
    >
      {/* Heading */}

      <p className="text-[#1ED760] uppercase tracking-[0.25em] text-sm font-semibold">
        RESEARCH
      </p>

      <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
        Research that solves
        <br className="hidden sm:block" />
        real-world problems.
      </h2>

      <p className="mt-6 text-zinc-400 max-w-3xl leading-8 text-sm sm:text-base">
        My research focuses on Artificial Intelligence and ECG signal
        processing for the early detection of Sudden Cardiac Arrest using
        machine learning techniques.
      </p>

      {/* Research Card */}

      <div
        className="
          group

          mt-16

          rounded-3xl

          border
          border-zinc-800

          bg-[#111111]

          p-6
          lg:p-8

          flex
          flex-col
          lg:flex-row

          gap-8
          lg:gap-10

          items-center

          transition-all
          duration-300

          hover:border-[#1ED760]
          hover:-translate-y-2
        "
      >

        {/* Image */}

        <motion.img
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
          src="/images/paper.png"
          alt="Research"
          loading="lazy"
          decoding="async"
          className="
            w-[90%]
            sm:w-80
            lg:w-72

            mx-auto
            
            
            

            h-auto

            object-cover

            rounded-2xl

            transition-all
            duration-500

            group-hover:scale-105
          "
        />

        {/* Content */}

        <motion.div
  className="flex-1"
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
>

          <p className="text-[#1ED760] text-sm font-medium">
            UEMCOS 2025
          </p>

          <h3 className="mt-3 text-2xl lg:text-3xl font-bold">
            AI-Based Sudden Cardiac Arrest Detection
          </h3>

          <p className="mt-5 text-zinc-400 leading-7 text-sm sm:text-base">
            Developed a machine learning model for early Sudden Cardiac Arrest
            detection using ECG spectral features. The Neural Network achieved
            an accuracy of{" "}
            <span className="text-white font-semibold">95.91%</span>.
          </p>

          {/* Tech Stack */}

          <div className="mt-6 flex flex-wrap gap-3">

            <span className="flex items-center gap-2 px-3 py-2 rounded-full border border-zinc-700 text-sm">
              <FaPython className="text-yellow-400" />
              Python
            </span>

            <span className="flex items-center gap-2 px-3 py-2 rounded-full border border-zinc-700 text-sm">
              <SiTensorflow className="text-orange-500" />
              TensorFlow
            </span>

            <span className="flex items-center gap-2 px-3 py-2 rounded-full border border-zinc-700 text-sm">
              <FiActivity className="text-green-400" />
              Signal Processing
            </span>

            <span className="flex items-center gap-2 px-3 py-2 rounded-full border border-zinc-700 text-sm">
              <HiOutlineSparkles className="text-yellow-300" />
              95.91% Accuracy
            </span>

          </div>

          {/* Button */}

          <a
            href="/Research/Chapter_5_3_Manuscript.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-8

              inline-flex
              items-center

              text-[#1ED760]

              font-medium

              transition-all
              duration-300

              hover:translate-x-2
            "
          >
            Read Paper →
          </a>

        </motion.div>

      </div>

    </motion.section>
  );
}

export default Research;