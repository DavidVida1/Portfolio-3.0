/*import CardWrapper from "react-vanilla-tilt";*/
import React, { useState } from "react";
import Tilt from "./Tilt.js";
import styled from "styled-components";
import "../animation.css";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const glare = {
    glare: true,
    "max-glare": 0.5,
    max: 30,
    "glare-prerender": false,
  };

  const mouvement = {
    scale: 1.1,
    speed: 1000,
  };
  return (
    <CardWrapper>
      <Tilt options={mouvement}>
        <Tilt
          options={glare}
          className={`card ${isFlipped ? "back" : "front"}`}
          onClick={handleCardClick}
        >
          <article className="front">
            <p>David Vidal</p>
            <p>Front-end Web Developer</p>
          </article>
          <article className="back">
            <p>''A Good Design is Honest''</p>
            <p>-Dieter Rams</p>
          </article>
        </Tilt>
      </Tilt>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.section`
  -webkit-animation: roll-in-blurred-top 1.2s cubic-bezier(0.23, 1, 0.32, 1)
    both;
  animation: roll-in-blurred-top 1.2s cubic-bezier(0.23, 1, 0.32, 1) both;

  .card {
    position: relative;
    width: 400px;
    height: 250px;
    margin: 30px;
    background: rgba(21, 21, 21, 1);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    /* border: 1px solid rgba(255, 255, 255, 0.18);*/
    border: 1px solid rgba(203, 155, 81, 0.4);

    &.front {
      -webkit-animation: flip-in-hor-bottom 1s
        cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: flip-in-hor-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      & .back {
        display: none;
      }
    }

    &.back {
      -webkit-animation: flip-in-hor-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;
      animation: flip-in-hor-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      & .front {
        display: none;
      }

      & .back {
        position: absolute;
        display: block;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -325%);
        p {
          font-size: 1.5rem;
          padding: 5px 0px;
        }
      }
    }

    & .js-tilt-glare {
      border-radius: 10px;
    }
    & article {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      font-family: "Times New Roman", Times, serif;
      width: 100%;

      & p {
        position: relative;
        width: 100%;
        color: transparent;
        letter-spacing: 5px;
        font-weight: bold;
        top: 160px;
        background-image: linear-gradient(
          to right,
          #462523 0,
          #cb9b51 22%,
          #f6e27a 45%,
          #f6f2c0 50%,
          #f6e27a 55%,
          #cb9b51 78%,
          #462523 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        text-shadow: 0, 0, 0, rgba(255, 255, 255, 0.18);

        &:first-child {
          font-size: 3rem;
          text-transform: uppercase;
        }

        &:nth-child(2) {
          font-size: 1.5rem;
        }
      }
    }
  }
`;
