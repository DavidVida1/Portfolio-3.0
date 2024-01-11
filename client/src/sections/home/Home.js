import React from "react";
import { useState } from "react";
import Card from "../../elements/Card.js";
import About from "../about/About.js";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <div className="cardContainer">
          <Card />
        </div>

        <article className="textWrapper">
          <h2>css-obssesed</h2>
          <div className="text">
            <h2>front-end</h2>
            <p>
              Crafting visually captivating experience with code and creativity
            </p>
          </div>

          <h2>web developer</h2>
        </article>
      </HomeContainer>
      <About />
    </>
  );
};

export default Home;

const HomeContainer = styled.section`
  width: 100%;
  height: 100vh;

  & .cardContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & .textWrapper {
    position: absolute;
    width: 800px;
    bottom: 100px;
    left: 80px;
    color: var(--color-white);
    text-transform: uppercase;
    font-size: 5rem;
    font-weight: 700;
    letter-spacing: 3px;
    text-shadow: 0 0 5px white;

    & h2:not(.text h2) {
      transform: translateX(3rem);
    }

    & .text {
      display: flex;
      letter-spacing: 5px;

      & p {
        font-size: 1.7rem;
        width: 400px;
      }
    }
  }
`;
