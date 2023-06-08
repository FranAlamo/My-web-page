import React from "react";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Work from "../pages/Work";
import Contact from "../pages/Contact";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Home />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
