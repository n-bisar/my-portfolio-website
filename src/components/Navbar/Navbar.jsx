import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Research", id: "research" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

        const scrollBottom = window.innerHeight + window.scrollY;

if (scrollBottom >= document.documentElement.scrollHeight - 5) {
  setActiveSection("contact");
  return;
}
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);

        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="fixed inset-x-0 top-5 z-50">

  <div className="w-[92%] max-w-[1500px] mx-auto">

      <nav
  className="
    w-[92%]
    max-w-[1500px]
    h-[72px]

    bg-[#0B0B0B]/80
    backdrop-blur-xl

    px-4
    lg:px-10

    rounded-2xl

    flex
    items-center
    justify-between
  "
>

  {/* Left */}

<div className="flex flex-1 items-center">

  {/* Mobile Menu */}

  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="text-white p-2 lg:hidden"
    aria-label={menuOpen ? "Close menu" : "Open menu"}
  >
    {menuOpen ? <X size={28} /> : <Menu size={28} />}
  </button>

</div>

  {/* Desktop Navigation */}

  <ul className="hidden lg:flex flex-1 justify-center items-center gap-3">

    {navItems.map((item) => (

      <li key={item.id}>

        <button
          onClick={() => scrollToSection(item.id)}
          className={`
            px-5
            py-2

            rounded-full

            transition-all
            duration-300

            ${
              activeSection === item.id
                ? "bg-[#1ED760] text-black font-semibold"
                : "text-zinc-300 hover:text-white"
            }
          `}
        >
          {item.name}
        </button>

      </li>

    ))}

  </ul>

        {/* Resume */}
    <div className="flex flex-1 justify-end">
<a
  
  href="/Resume/Bisar Nawaz Resume_CV.pdf"
  download
  className="
    flex
    items-center
    justify-center

    h-10

    w-10
    sm:w-auto

    px-0
    sm:px-6

    rounded-full

    border-2
    border-[#1ED760]

    text-white

    transition-all
    duration-300

    hover:bg-[#1ED760]
    hover:text-black
  "
>


  <span className="hidden md:block">
    Download Resume 
  </span>

  <Download size={ 18} />

</a>
</div>
</nav>
</div>
      {/* Mobile Menu */}

      {/* Mobile Menu */}

<AnimatePresence>

  {menuOpen && (

    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25 }}

      className="
        lg:hidden

        w-full

        overflow-hidden

        rounded-b-2xl

        bg-[#111111]

        border-x
        border-b
        border-zinc-800
      "
    >

      <ul className="flex flex-col">

        {navItems.map((item) => (

          <li key={item.id}>

            <button
              onClick={() => scrollToSection(item.id)}
              className={`
                w-full

                text-left

                px-6
                py-4

                border-b
                border-zinc-800

                transition

                ${
                  activeSection === item.id
                    ? "text-[#1ED760]"
                    : "text-zinc-300 hover:bg-[#1A1A1A] hover:text-[#1ED760]"
                }
              `}
            >
              {item.name}
            </button>

          </li>

        ))}

      </ul>

      <div className="p-6">

        <a
          href="/Resume/Bisar Nawaz Resume_CV.pdf"
          download
          className="
            flex
            items-center
            justify-center

            gap-3

            w-full
            h-12

            rounded-full

            bg-[#1ED760]

            text-black

            font-semibold
          "
        >
          <Download size={18} />

          Download Resume

        </a>

      </div>

    </motion.div>

  )}

</AnimatePresence>

</header>
  );
}

export default Navbar;