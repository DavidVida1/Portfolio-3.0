import React from "react";
import { useState } from "react";
import Card from "../../elements/Card.js";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeContainer>
      <Card />
      <article className="textWrapper">
        <h2>css-obssesed</h2>
        <div>
          <h2>front-end</h2>
          <p>
            Crafting visually captivating experience with code and creativity
          </p>
        </div>

        <h2>web developer</h2>
      </article>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
`;
