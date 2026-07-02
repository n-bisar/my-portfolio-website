import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <section
      id="contact"
      className="w-[88%] max-w-[1500px] mx-auto py-12 border-t border-zinc-800"
    >
      <div className="grid grid-cols-3 gap-20">

        {/* Left */}

        <div>
          <p className="text-[#1ED760] uppercase tracking-[0.2em] text-sm font-semibold">
            LET'S CONNECT
          </p>

          <p className="mt-6 text-zinc-400 leading-8">
            I'm always open to discussing new projects,
            internships and opportunities.
          </p>

          <p className="mt-12 text-zinc-500 text-sm">
            © 2026 Bisar Nawaz. All rights reserved.
          </p>
        </div>

        {/* Center */}

        <div className="space-y-6">

          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=bisarnawaz65@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-4 hover:text-[#1ED760] transition-all"
>
  <FaEnvelope className="text-[#1ED760]" />
  <span>bisarnawaz65@gmail.com</span>
</a>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-[#1ED760]" />
            <span>+91 73638 68562</span>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-[#1ED760]" />
            <span>Kolkata, India</span>
          </div>

        </div>

        {/* Right */}

        <div className="flex flex-col items-end justify-between">

          <div className="flex gap-5">

            <a
              href="https://github.com/n-bisar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center hover:border-[#1ED760] hover:text-[#1ED760] transition-all"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/bisar-nawaz-73a220287/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center hover:border-[#1ED760] hover:text-[#1ED760] transition-all"
            >
              <FaLinkedin size={22} />
            </a>

          </div>

          <p className="text-zinc-500 text-sm">
            Designed & Built with 💚 by <span className="text-white">Bisar Nawaz</span>
          </p>

        </div>

      </div>
    </section>
  );
}

export default Footer;