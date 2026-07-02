import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Research from "./components/Research/Research";
import Experience from "./components/Experience/Experience";

import Footer from "./components/Footer/Footer";



function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-24">

      <Navbar />
      <Hero />

      <section
  id="about"
  className="w-[88%] max-w-[1500px] mx-auto py-24"
>
  <div className="grid grid-cols-2 gap-24 divide-x divide-zinc-800">

    <About />

    <Skills />

  </div>
</section>

    <Projects />
    <Research />
    <Experience />
    <Footer />

    </div>
  );
}



export default App;

