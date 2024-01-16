import React from "react";
import styled from "styled-components";
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
      <AppContainer>
        <About />
        <Projects />
        <Skills />
      </AppContainer>
      <Contact /> <Footer />
    </BrowserRouter>
  );
}

export default App;

const AppContainer = styled.section`
  position: relative;
  margin: 0px 100px;
`;
