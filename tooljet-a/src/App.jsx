import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Input from "./components/input/input.jsx";

const App = () => {
  return (
    <>
      <div className="Home-main">
        <Navbar />
        <Input/>
      </div>
    </>
  );
};

export default App;
