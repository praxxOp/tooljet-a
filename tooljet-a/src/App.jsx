import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Input from "./components/input/input.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Open from "./components/OpeningA/Open.jsx";

const App = () => {
  return (
    <>
      <div className="Home-main">
        <Open/>
        <Navbar />
        <Input/>
        <Footer/>
      </div>
    </>
  );
};

export default App;
