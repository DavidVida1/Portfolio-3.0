import Card from "../../elements/Card.js";
import styled from "styled-components";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import "../../animation.css";

const Home = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [positionY, setPositionY] = useState(0);
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    /*text goes down if scroll down and opacity is reduced until 0 is reached */
    const newPosition = latest * 1500;
    setPositionY(newPosition);
    /**/

    /*opacity reaches 0 when scrolling down*/
    const newOpacity = 1 - latest * 8;
    setScrollOpacity(Math.max(0, Math.min(1, newOpacity)));
    /**/
  });

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: scrollOpacity,
      transition: {
        duration: 1,
        staggerchildren: 0.1,
      },
      translateY: positionY,
    },
  };

  return (
    <HomeContainer>
      <div className="cardContainer">
        <Card />
      </div>

      <motion.article
        animate="animate"
        className="textWrapper "
        initial="initial"
        variants={textVariants}
      >
        <h2>css-obssesed</h2>

        <div className="text">
          <h2>front-end</h2>
          <p>
            Crafting visually captivating experience with code and creativity
          </p>
        </div>

        <h2>web developer</h2>
      </motion.article>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-x: hidden;
  & .cardContainer {
    animation: float 3s ease-in-out infinite;
  }

  & h2,
  .text p {
    transform: translateX(-30px);
  }

  & .textWrapper {
    position: absolute;
    bottom: 10%;
    left: 8%;
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
    letter-spacing: 3px;

    & .text {
      display: flex;
      width: 100%;
      letter-spacing: 5px;

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

      @media screen and (max-width: 600px) {
        flex-direction: column;
      }
    }

    @media screen and (max-width: 700px) {
      bottom: 13%;
    }

    @media screen and (max-width: 450px) {
      h2 {
        font-size: 3.6rem;
      }
    }
  }
`;
