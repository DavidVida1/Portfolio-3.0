import React from "react";
import GlobalStyles from "./GlobalStyles";
import Header from "./sections/header/Header";
import Home from "./sections/home/Home";
import About from "./sections/about/About";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
