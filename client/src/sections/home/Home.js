import React from "react";
import Card from "../../elements/Card.js";
import styled from "styled-components";
import "../../animation.css";

const Home = () => {
  return (
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
  );
};

export default Home;

const HomeContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  & .cardContainer {
    animation: float 3s ease-in-out infinite;
  }

  & .textWrapper {
    position: absolute;
    bottom: 10%;
    left: 5%;
    color: var(--color-white);
    text-transform: uppercase;
    letter-spacing: 3px;

    @media screen and (max-width: 700px) {
      bottom: 13%;
    }

    @media screen and (max-width: 450px) {
      h2 {
        font-size: 3.6rem;
      }
    }

    & h2:not(.text h2) {
      transform: translateX(3rem);
    }

    & .text {
      display: flex;
      width: 100%;
      letter-spacing: 5px;

      @media screen and (max-width: 600px) {
        flex-direction: column;
      }
      & p {
        font-size: clamp(1.3rem, 1.2vw, 1.7rem);
        width: 32%;
        text-shadow: 0 0 5px white;
        font-weight: 700;
        @media screen and (max-width: 1150px) {
          width: 33%;
        }
        @media screen and (max-width: 1050px) {
          width: 35%;
        }
        @media screen and (max-width: 910px) {
          width: 38%;
        }
        @media screen and (max-width: 820px) {
          width: 42%;
        }
        @media screen and (max-width: 750px) {
          width: 50%;
        }
        @media screen and (max-width: 620px) {
          font-size: clamp(1rem, 2vw, 1.7rem);
        }
        @media screen and (max-width: 600px) {
          width: 100%;
        }
      }
    }
  }
`;
