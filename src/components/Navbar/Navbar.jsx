import { Download } from "lucide-react";

function Navbar() {
  return (
    <header className="w-full flex justify-center pt-8">
      <nav className="w-[88%] max-w-[1500px] h-[72px] bg-[#0B0B0B] px-10 flex items-center justify-between">

        {/* Empty space (will become logo later) */}
        <div className="w-48"></div>

        {/* Navigation */}
        <ul className="flex items-center gap-10 text-[16px] text-gray-300">

          <li className="relative cursor-pointer text-white font-medium">
            Home
            <div className="absolute left-0 -bottom-2 h-[2px] w-full rounded-full bg-green-500"></div>
          </li>

          <li className="cursor-pointer transition-all duration-300 hover:text-white">
            About
          </li>

          <li className="cursor-pointer transition-all duration-300 hover:text-white">
            Projects
          </li>

          <li className="cursor-pointer transition-all duration-300 hover:text-white">
            Research
          </li>

          <li className="cursor-pointer transition-all duration-300 hover:text-white">
            Experience
          </li>

          <li className="cursor-pointer transition-all duration-300 hover:text-white">
            Contact
          </li>

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