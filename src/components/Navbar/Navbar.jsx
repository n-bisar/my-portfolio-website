import { Download } from "lucide-react";
const navLinks = [
  "Home",
  "About",
  "Projects",
  "Research",
  "Experience",
  "Contact",
];

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-center pt-5 z-50">
      <nav className="w-[88%] max-w-[1500px] h-[72px] bg-[#0B0B0B]/80
backdrop-blur-xl px-10 flex items-center justify-between">

        {/* Empty space (will become logo later) */}
        <div className="w-48"></div>

        {/* Navigation */}
        <ul className="flex items-center gap-8 text-[16px] text-zinc-300">
  {navLinks.map((link) => (
    <li
      key={link}
      className="cursor-pointer transition-all duration-300 hover:text-[#1ED760]"
    >
      {link}
    </li>
  ))}
</ul>
        {/* Resume Button */}
        <div>
          <button
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
</button>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;