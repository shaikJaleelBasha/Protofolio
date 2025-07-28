import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
<<<<<<< HEAD
import Skills from "./components/Skills";
import Protofolio from "./components/Protofolio";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
=======
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
>>>>>>> 16f971b ( all files updated)
import Contact from "./components/Contact";

function App() {
  return (
<<<<<<< HEAD
    <>
      <div>
        <Navbar />
        <Home />
        <Education />
        <Skills />
        <Protofolio />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
=======
    <div>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="education"><Education /></section>
      <section id="projects"><Portfolio /></section>
      <section id="experience"><Experience /></section>
      <section id="contact"><Contact /></section>
    </div>
>>>>>>> 16f971b ( all files updated)
  );
}

export default App;
