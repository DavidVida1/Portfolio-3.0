/*import CardWrapper from "react-vanilla-tilt";*/
import React, { useState } from "react";
import Tilt from "./Tilt.js";
import styled from "styled-components";
import "../animation.css";
import logo from "../assets/logo.svg";
import logoGold from "../assets/logoGold.svg";

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
      <Tilt options={mouvement} className="mouvement">
        <Tilt
          options={glare}
          className={`card ${isFlipped ? "back" : "front"}`}
          onClick={handleCardClick}
        >
          <article className="front">
            <img src={logoGold} />
            <p className="name">David Vidal</p>
            <p className="job">Front-end Web Developer</p>
          </article>

          <article className="back">
            <p className="quote">''A Good Design is Honest''</p>
            <p className="quote">-Dieter Rams</p>
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

  & .mouvement {
  }

  & .card {
    position: relative;
    width: 400px;
    height: 250px;
    background: rgba(21, 21, 21, 1);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    border: 1px solid rgba(203, 155, 81, 0.2);
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

    @media screen and (max-width: 600px) {
      width: 320px;
      height: 200px;
    }
    & article {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      font-family: "Times New Roman", Times, serif;
      width: 100%;

      & img {
        position: absolute;
        height: 20%;
        width: 100%;
        top: 35%;

        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
        /*background-image: linear-gradient(
          to right,
          #462523 0,
          #cb9b51 22%,
          #f6e27a 45%,
          #f6f2c0 50%,
          #f6e27a 55%,
          #cb9b51 78%,
          #462523 100%
        );*/
        -webkit-mask-image: url(${logo}),
          linear-gradient(to bottom, #000, transparent 70%),
          linear-gradient(to bottom, transparent 95%, #000),
          linear-gradient(to top, transparent 55%, #000),
          linear-gradient(to left, transparent 75%, #000),
          linear-gradient(to right, transparent 100%, #000);

        mask-image: url(${logo}),
          linear-gradient(to bottom, #000, transparent 70%),
          linear-gradient(to bottom, transparent 95%, #000),
          linear-gradient(to top, transparent 55%, #000),
          linear-gradient(to left, transparent 75%, #000),
          linear-gradient(to right, transparent 100%, #000);

        -webkit-mask-size: 100%;
        mask-size: 100vh 100%;
      }

      & p {
        position: relative;
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

        @media screen and (max-width: 600px) {
          top: 130px;
        }
      }

      & .name {
        font-family: "Times New Roman", Times, serif;
        font-size: clamp(2rem, 3.5vw, 2.2rem);
        text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
      }
      & .job {
        font-family: "Times New Roman", Times, serif;
        font-size: clamp(1.5rem, 3vw, 2rem);
        text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
      }
    }

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
        top: 55%;
        left: 50%;
        transform: translate(-50%, -325%);

        @media screen and (max-width: 600px) {
          transform: translate(-50%, -320%);
        }

        .quote {
          font-size: 1.9rem;
          padding: 5px 0px;
          text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);

          @media screen and (max-width: 600px) {
            font-size: 1.3rem;
          }
        }
      }
    }

    & .js-tilt-glare {
      border-radius: 10px;
    }
  }
`;
