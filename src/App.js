import "./styles/App.css";
import { useState } from "react";
import logo from "./images/logo.png";
import hamburger from "./images/hamburger.png";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Navlinks from "./components/NavLinks";
import Navbar from "./components/Navbar";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="App">
        <header>
          <img className="logo" src={logo} alt="logo"></img>
          <Navbar />
          <div className="hamburger">
            <img
              id="burger"
              src={hamburger}
              alt="hamburger"
              onClick={() => {
                setOpen(!open);
                console.log(open);
              }}
            />
            {open && (
              <div className="navlink">
                <Navlinks />
              </div>
            )}
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
