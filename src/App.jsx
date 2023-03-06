import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Journey from "./components/Journey"
// import Bot from "./components/Bot";
console.log('ENV vlaus:'+JSON.stringify(import.meta.env));
const App = () => {
  return (
    <div className="cursor-default" >
      <Navbar />
      <Hero />
      <Hireme />
      <Journey />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
