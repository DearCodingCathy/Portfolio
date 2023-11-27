import "./App.css";
import Header from "./components/Header/Header.tsx";
import Home from "./components/Home/Home.tsx";
import About from "./components/About/About.tsx";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;
