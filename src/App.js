import "./App.css";
import Header from "./components/Header/Header.tsx";
import Home from "./components/Home/Home.tsx";
import About from "./components/About/About.tsx";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Qualifications from "./components/Qualifications/Qualifications";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollUp from "./components/ScrollUp/ScrollUp";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifications />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
