import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./sections/header/Header";
import Home from "./sections/home/Home";
import About from "./sections/about/About";
import Projects from "./sections/projects/Projects";
import Skills from "./sections/skills/Skills";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import Loading from "./sections/loading/Loading";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Background from "./Background";
import { AnimatePresence } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1700);
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

          <AppContainer>
            <Skills />
          </AppContainer>

          <Contact />
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;

const AppContainer = styled.section`
  position: relative;
  margin: 0px 100px;

  @media screen and (max-width: 700px) {
    margin: 0px 50px;
  }
  @media screen and (max-width: 600px) {
    margin: 10px;
  }
`;
