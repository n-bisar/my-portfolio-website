import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>

      {show && (

        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}

          transition={{ duration: 0.25 }}

          onClick={scrollTop}

          className="
            fixed

            bottom-8
            right-8

            w-14
            h-14

            rounded-full

            bg-[#1ED760]

            text-black

            shadow-xl

            flex
            items-center
            justify-center

            hover:scale-110

            transition

            z-[999]
          "
        >
          <ChevronUp size={24} />
        </motion.button>

      )}

    </AnimatePresence>
  );
}

export default BackToTop;