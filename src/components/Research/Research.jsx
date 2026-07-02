
import { FaPython } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { FiActivity } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

function Research() {
  return (
    <section
      id="research"
      className="w-[88%] max-w-[1500px] mx-auto py-24"
    >
      <p className="text-[#1ED760] uppercase tracking-[0.25em] text-sm font-semibold">
        RESEARCH
      </p>

      <h2 className="mt-5 text-5xl font-bold leading-tight">
        Research that solves
        real-world problems.
      </h2>

      <p className="mt-6 text-zinc-400 max-w-3xl leading-8">
        My research focuses on Artificial Intelligence and ECG signal
        processing for the early detection of Sudden Cardiac Arrest using
        machine learning techniques.
      </p>

        <div
  className="
group
mt-16
rounded-3xl
border
border-zinc-800
bg-[#111111]
p-8
flex
gap-10
items-center

transition-all
duration-300

hover:border-[#1ED760]
hover:-translate-y-2
"
>
  {/* Image */}

  <img
    src="/research/sca.png"
    alt="Research"
    className="
w-72
h-52
object-cover
rounded-2xl

transition-all
duration-500

group-hover:scale-105
"
  />

  {/* Content */}

  <div className="flex-1">

    <p className="text-[#1ED760] text-sm font-medium">
      UEMCOS 2025
    </p>

    <h3 className="mt-3 text-3xl font-bold">
      AI-Based Sudden Cardiac Arrest Detection
    </h3>

    <p className="mt-5 text-zinc-400 leading-7">
      Developed a machine learning model for early Sudden Cardiac Arrest
      detection using ECG spectral features. The Neural Network achieved
      an accuracy of <span className="text-white font-semibold">95.91%</span>.
    </p>

    <div className="mt-6 flex flex-wrap gap-3">

  <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700">
    <FaPython className="text-yellow-400" />
    Python
  </span>

  <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700">
    <SiTensorflow className="text-orange-500" />
    TensorFlow
  </span>

  <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700">
    <FiActivity className="text-green-400" />
    Signal Processing
  </span>

  <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700">
    <HiOutlineSparkles className="text-yellow-300" />
    95.91% Accuracy
  </span>

</div>

    <button
      className="
        mt-8
        text-[#1ED760]
        font-medium
        hover:translate-x-2
        transition-all
      "
    >
        <a
  href="/public/Research/Chapter_5_3_Manuscript.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-block text-[#1ED760] font-medium hover:translate-x-2 transition-all"
>
  Read Paper →
</a>
     
    </button>

  </div>
</div>

    </section>
  );
}

export default Research;