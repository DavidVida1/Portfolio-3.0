import React, { useRef } from "react";
import portrait from "../assets/Crop-Iphone1Black2.png";
import { motion, useInView } from "framer-motion";
import styled from "styled-components";

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "10px" });

  /*InView  animation on the h3 name of the section*/
  const textVariants = {
    initial: {
      x: -300,
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
  /*End of InView  animation on the h3 name of the section*/

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
  border-radius: var(--radius-about);
  background: var(--bg-about);
  box-shadow: var(--shadow-about);
  z-index: 10;

  @media (max-height: 640px) {
    height: 100%;
  }

  & .aboutWrappper {
    height: 100%;
    & .aboutInfo {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 100%;
      width: 100%;

      & img {
        border-radius: var(--radius10);
        width: 25%;
        height: auto;
        align-self: start;
        -webkit-mask-image: linear-gradient(#000, transparent);
        mask-image: linear-gradient(#000, transparent);

        @media screen and (max-width: 1536px) {
          min-width: 35%;
        }

        @media screen and (max-width: 1280px) {
          min-width: 40%;
        }

        @media screen and (max-width: 1024px) {
          min-width: 40%;
        }

        @media screen and (max-width: 768px) {
          align-self: center;
          min-width: 30%;
        }
      }

      & .text {
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-self: start;
        padding: 0 100px;

        @media (max-width: 1536px) {
          align-self: start;
        }

        @media screen and (max-width: 1280px) {
          padding: 0 20px;
          align-self: start;
        }
        @media screen and (max-width: 1024px) {
          padding: 0 10px;
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
          font-size: clamp(3rem, 3.8vw, 4.5rem);

          & span:nth-child(1) {
            color: var(--color-blue);
          }

          & span:nth-child(2) {
            color: var(--color-yellow);
          }

          @media screen and (max-width: 768px) {
            font-size: clamp(3.3rem, 3.8vw, 4rem);
          }
          @media screen and (max-width: 475px) {
            font-size: clamp(3rem, 3.2vw, 3.3rem);
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
