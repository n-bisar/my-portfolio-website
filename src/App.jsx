import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";




function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-24">

      <Navbar />
      <Hero />

      <div className="w-[88%] max-w-[1500px] mx-auto py-24 grid grid-cols-2 gap-24 divide-x divide-zinc-800">


    <About />

    <Skills />

</div>

    </div>
  );
}



export default App;

