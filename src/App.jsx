import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import React from "react";
import Home from "./components/Sections/Home";
import About from "./components/Sections/About";
import Experience from "./components/Sections/Experience";
import Work from "./components/Sections/Work";
import Contact from "./components/Sections/Contact";
import Footer from "./components/Footer/Footer";
import Sosmed from "./components/Footer/Sosmed";
import Email from "./components/Footer/Email";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Work />
      <Contact />
      <Sosmed />
      <Email />
      <Footer />
    </>
  );
}

export default App;
