import "./App.css";
import Header from "./components/Header/Header.tsx";
import Home from "./components/Home/Home.tsx";
import About from "./components/About/About.tsx";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services/>
      </main>
    </>
  );
}

export default App;
