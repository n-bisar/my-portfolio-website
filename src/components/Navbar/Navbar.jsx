import { Download } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Research", id: "research" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 3;

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

  return (
    <header className="fixed top-0 left-0 w-full flex justify-center pt-5 z-50">
      <nav
        className="
          w-[88%]
          max-w-[1500px]
          h-[72px]

          bg-[#0B0B0B]/80
          backdrop-blur-xl

          px-10

          flex
          items-center
          justify-between
        "
      >
        {/* Empty space for future logo */}
        <div className="w-48"></div>

        {/* Navigation */}

        <ul className="hidden lg:flex items-center gap-3 text-[16px]">

          {navItems.map((item) => (

            <li key={item.id}>

              <a
                href={`#${item.id}`}
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
              </a>

            </li>

          ))}

        </ul>

        {/* Resume Button */}

        <div className="hidden lg:block">

          <a
  href="/public/Resume/Bisar Nawaz Resume_CV.pdf"
  download
  className="
    flex
    items-center
    gap-3

    h-10
    px-8

    rounded-full

    border-2
    border-[#1ED760]

    text-white
    text-[15px]
    font-medium

    hover:bg-[#1ED760]
    hover:text-black

    transition-all
    duration-300
  "
>
  <span>Download Resume</span>

  <Download size={18} strokeWidth={2} />
</a>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;