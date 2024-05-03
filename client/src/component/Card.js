import React, { useState } from "react";
import Tilt from "./Tilt.js";
import styled from "styled-components";
import "../animation.css";
import logo from "../assets/logo.svg";
import logoGold from "../assets/logoGold.svg";

const Card = () => {
  /*if the card is click toggles the isFlipped and changes the class from font to back*/
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  /*Glare effect on the card*/
  const glare = {
    glare: true,
    "max-glare": 0.5,
    max: 30,
    "glare-prerender": false,
  };
  /*End of Glare effect on the card*/

  /*Mouvement Effect when hover on the Card*/
  const mouvement = {
    scale: 1.1,
    speed: 1000,
  };
  /*End of Mouvement Effect when hover on the Card*/

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
    border: 1px solid rgba(203, 155, 81, 0.2);
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

    @media only screen and (min-device-width: 640px) and (max-device-width: 1024px) and (min-device-height: 0px) and (max-device-height: 600px) and (orientation: landscape) {
      width: 285px;
      height: 175px;
    }

    @media (max-width: 475px) {
      &.card {
        width: 325px;
        height: 200px;
      }
    }

    & article {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      font-family: var(--font-times);
      width: 100%;

      & img {
        position: absolute;
        height: 17%;
        width: 100%;
        top: 40%;

        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;

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

        @media only screen and (min-device-width: 640px) and (max-device-width: 1024px) and (min-device-height: 0px) and (max-device-height: 600px) and (orientation: landscape) {
          top: 100px;
        }

        @media (max-width: 475px) {
          top: 120px;
        }
      }

      & .name {
        font-size: clamp(2rem, 3.5vw, 2.2rem);
        text-shadow: 2px 2px 3px var(--color-black);

        @media only screen and (min-device-width: 640px) and (max-device-width: 1024px) and (min-device-height: 0px) and (max-device-height: 600px) and (orientation: landscape) {
          font-size: 1.5rem;
        }
      }

      & .job {
        font-size: clamp(1.5rem, 3vw, 2rem);
        text-shadow: 2px 2px 3px var(--color-black);

        @media only screen and (min-device-width: 640px) and (max-device-width: 1024px) and (min-device-height: 0px) and (max-device-height: 600px) and (orientation: landscape) {
          font-size: 1.3rem;
        }
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

        .quote {
          font-size: 1.9rem;
          padding: 5px 0px;
          text-shadow: 2px 2px 3px var(--color-black);

          @media only screen and (min-device-width: 640px) and (max-device-width: 1024px) and (min-device-height: 0px) and (max-device-height: 600px) and (orientation: landscape) {
            font-size: 1.1rem;
          }
          @media (max-width: 475px) {
            &.quote {
              top: 130px;
              font-size: 1.3rem;
            }
          }
        }

        @media only screen and (min-device-width: 640px) and (max-device-width: 1024px) and (min-device-height: 0px) and (max-device-height: 600px) and (orientation: landscape) {
          top: 65%;
          left: 50%;
        }
      }
    }

    & .js-tilt-glare {
      border-radius: 10px;
    }

    @media (max-width: 1536px) {
      &.card {
        position: relative;
        bottom: 50px;
        left: 50px;
      }
    }

    @media only screen and (min-device-width: 640px) and (max-device-width: 1024px) and (min-device-height: 0px) and (max-device-height: 475px) and (orientation: landscape) {
      &.card {
        position: relative;
        bottom: -30px;
        left: 70px;
      }
    }
  }
`;
