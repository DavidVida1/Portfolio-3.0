import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Loading from "./component/Loading";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Background from "./Background";
import { AnimatePresence } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Background />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

          <About />
          <Projects />

          <SkillsContainer>
            <Skills />
          </SkillsContainer>

          <Contact />
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;

const SkillsContainer = styled.section`
  position: sticky;
  top: 0;
  margin: 0 100px;
  z-index: 1;

  @media screen and (max-width: 700px) {
    margin: 0px 50px;
  }
  @media screen and (max-width: 600px) {
    margin: 10px;
  }
`;
