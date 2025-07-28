import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";

import Skills from "./components/Skills";
import Protofolio from "./components/Protofolio";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

import Contact from "./components/Contact";

function App() {
  return (

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
  )
}

export default App;
