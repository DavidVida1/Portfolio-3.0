import React from "react";
import GlobalStyles from "./GlobalStyles";
import Header from "./sections/header/Header";
import Home from "./sections/home/Home";
import About from "./sections/about/About";
import Projects from "./sections/projects/Projects";
import Skills from "./sections/skills/Skills";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Background from "./Background";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Background />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/projects" exact element={<Projects />} />
        <Route path="/skills" exact element={<Skills />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>

      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
