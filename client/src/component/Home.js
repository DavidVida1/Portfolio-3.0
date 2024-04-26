import Card from "./Card.js";
import styled from "styled-components";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import "../animation.css";

const Home = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [positionY, setPositionY] = useState(0);
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    /*text goes down if scroll down and opacity is reduced until 0 is reached */
    /*const newPosition = latest * 3000;
    setPositionY(newPosition);*/

    /*opacity reaches 0 when scrolling down*/
    const newOpacity = 1 - latest * 8;
    setScrollOpacity(Math.max(0, Math.min(1, newOpacity)));
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
        duration: 0.5,
      },
      /*translateY: positionY,*/
    },
  };

  const cardVariants = {
    animate: {
      x: 0,
      opacity: scrollOpacity,
      transition: {
        duration: 0,
      },
      /*translateY: positionY,*/
    },
  };

  return (
    <HomeContainer id="">
      <motion.div
        animate="animate"
        variants={cardVariants}
        className="cardContainer"
      >
        <Card />
      </motion.div>

      <motion.article
        animate="animate"
        className="textWrapper "
        initial="initial"
        variants={textVariants}
      >
        <h2>css-obssesed</h2>

        <div className="text">
          <h2>front-end</h2>
          <div className="subtext">
            <p>Crafting visually</p>
            <p>captivating experience</p>
            <p>with code and creativity</p>
          </div>
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
  height: 100dvh;
  overflow-x: hidden;
  position: sticky;
  top: 0;
  z-index: 0;

  & .cardContainer {
    animation: float 3s ease-in-out infinite;
  }

  & h2,
  .text p {
    transform: translateX(-30px);

    @media screen and (max-width: 768px) {
      transform: translateX(0px);
      font-size: 5.2rem;
    }
  }

  & .textWrapper {
    position: absolute;
    bottom: 10%;
    left: 8%;
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
    letter-spacing: 3px;

    & :hover {
      filter: drop-shadow(0 0 1px var(--color-offWhite));
    }

    & .text {
      display: flex;
      width: 100%;
      flex-direction: row;
      align-items: center;
      letter-spacing: 5px;

      & .subtext {
        & p {
          width: 100%;
          font-size: clamp(1.3rem, 1.2vw, 1.7rem);
          text-shadow: 0 0 5px white;
          font-weight: 700;
        }
      }

      @media screen and (max-width: 768px) {
        &.text {
          flex-direction: column;
          align-items: flex-start;
        }
      }
    }
  }
  @media (max-width: 475px) {
    & h2 {
      font-size: 4rem;
    }
  }
  @media (max-width: 475px) {
    & .textWrapper {
      display: flex;
      flex-direction: column;
    }
  }
`;
