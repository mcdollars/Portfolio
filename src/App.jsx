import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline"
// import Bot from "./components/Bot";
console.log('ENV vlaus:'+JSON.stringify(import.meta.env));
const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Bot/> */}
      <Hero />
      {/* <About/> */}
      <Hireme />
      <Timeline />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
