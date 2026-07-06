import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CodingProfiles from "./components/CodingProfiles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import Background from "./components/Background";


function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Background/>
      <ScrollProgress/>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CodingProfiles />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;