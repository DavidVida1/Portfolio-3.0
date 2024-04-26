import React, { useRef } from "react";
import portrait from "../assets/Crop-Iphone1Black2.png";
import { motion, useInView } from "framer-motion";
import styled from "styled-components";

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-1px" });

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerchildren: 0.1,
      },
    },
  };
  return (
    <AboutContainer id="about">
      <div className="aboutWrappper container">
        <motion.h3
          variants={textVariants}
          initial="initial"
          animate={isInView && "animate"}
          ref={ref}
        >
          About Me
        </motion.h3>

        <aside className="aboutInfo">
          <img src={portrait} alt="portrait" />

          <div className="text">
            <h2>Hi,i'm David 👋</h2>
            <p>
              <span>Welcome to my corner of the web</span>, With every line of
              code, I strive to weave digital experiences that not only function
              flawlessly but also dazzle. <span>Motivated by passion </span>and
              fueled by a love for coding, I leverage a creative mindset to
              breathe life into digital visions with each keystroke.
            </p>
          </div>
        </aside>
      </div>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100dvh;
  color: var(--color-white);
  border-radius: 20px 20px 0px 0px;
  z-index: 10;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.99) 75%,
    rgba(0, 0, 0, 0.95) 80%,
    rgba(0, 0, 0, 0.9) 85%,
    rgba(0, 0, 0, 0.85) 90%,
    rgba(0, 0, 0, 0.8) 95%,
    rgba(0, 0, 0, 0.77) 100%
  );

  box-shadow: rgba(0, 0, 0, 0.25) 0px -15px 15px,
    rgba(0, 0, 0, 0.12) 0px -15px 15px, rgba(0, 0, 0, 0.12) 0px -15px 15px,
    rgba(0, 0, 0, 0.17) 0px -15px 15px, rgba(0, 0, 0, 0.09) 0px -15px 15px;
  border-radius: 20px 20px 0px 0px;

  & .aboutWrappper {
    height: 100dvh;
    & .aboutInfo {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;

      & img {
        border-radius: 10px;
        width: 25%;
        height: auto;
        -webkit-mask-image: linear-gradient(#000, transparent);
        mask-image: linear-gradient(#000, transparent);

        @media screen and (max-width: 1280px) {
          min-width: 40%;
        }
        @media screen and (max-width: 1024px) {
          min-width: 40%;
        }
        @media screen and (max-width: 768px) {
          min-width: 35%;
        }
      }

      & .text {
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 0 50px;

        @media screen and (max-width: 1280px) {
          padding: 0 40px;
        }
        @media screen and (max-width: 1024px) {
          padding: 0 5px;
        }
        @media screen and (max-width: 768px) {
          padding: 0 0px;
        }

        & h2 {
          display: block;
          margin: 25px 0;
          @media screen and (max-width: 1024px) {
            font-size: 5rem;
          }
        }

        & p {
          height: 100%;
          font-weight: 300;
          font-size: clamp(3rem, 4.2vw, 4rem);

          & span:nth-child(1) {
            color: rgba(100, 220, 255, 1);
          }

          & span:nth-child(2) {
            color: rgba(255, 200, 61, 1);
          }

          @media screen and (max-width: 768px) {
            font-size: 2.8rem;
          }
          @media screen and (max-width: 640px) {
            min-height: max-content;
          }
        }
      }

      @media screen and (max-width: 1024px) {
        margin: 0;
      }

      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    }
  }
`;
