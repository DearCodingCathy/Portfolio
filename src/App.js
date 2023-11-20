import "./App.css";
import Header from "./components/Header/Header.tsx";
import Home from "./components/Home/Home.tsx";

function App() {
  return (
    <>
      <Header />
      
      <main className="main">
        <Home />
      </main>
    </>
  );
}

export default App;
