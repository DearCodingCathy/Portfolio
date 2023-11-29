import "./App.css";
import Header from "./components/Header/Header.tsx";
import Home from "./components/Home/Home.tsx";
import About from "./components/About/About.tsx";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Qualifications from "./components/Qualifications/Qualifications";
import Testimonials from "./components/Testimonials/Testimonials";

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
        <Testimonials />
      </main>
    </>
  );
}

export default App;
