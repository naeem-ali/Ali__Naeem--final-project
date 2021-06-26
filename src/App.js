import "./app.scss";
import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <section className="sec">
        <Intro />
        <Work />
        <Portfolio />
        <Contact />
      </section>
    </div>
  );
}

export default App;
