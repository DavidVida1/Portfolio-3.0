import React, { useRef } from "react";
import portrait from "../../assets/Crop-Iphone1Black2.png";
import { motion, useInView } from "framer-motion";
import styled from "styled-components";

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

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <AboutContainer id="about">
      <div className="aboutWrappper">
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

          <p>
            From microbiologist to web developer, I've shifted my focus from the
            microscopic world to the digital one, leveraging my analytical
            mindset and passion for crafting visually captivating user-friendly
            web experiences. My career shift represents a fusion of scientific
            rigor and digital creativity in the ever-evolving landscape of web
            development.
          </p>
        </aside>
      </div>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  color: var(--color-white);
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px -15px 15px,
    rgba(0, 0, 0, 0.12) 0px -15px 15px, rgba(0, 0, 0, 0.12) 0px -15px 15px,
    rgba(0, 0, 0, 0.17) 0px -15px 15px, rgba(0, 0, 0, 0.09) 0px -15px 15px;
  overflow-x: hidden;

  & h3 {
    margin: 0px 100px;
  }
  & .aboutWrappper {
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 25%,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 0.6) 80%,
      rgba(0, 0, 0, 0.4) 90%,
      rgba(0, 0, 0, 0.2) 95%,
      rgba(0, 0, 0, 0) 100%
    );
    border-radius: 10px;

    & .aboutInfo {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0px 30px;

      & img {
        border-radius: 10px;
        width: 20%;
        height: auto;

        -webkit-mask-image: linear-gradient(#000, transparent);
        mask-image: linear-gradient(#000, transparent);

        @media screen and (max-width: 1200px) {
          min-width: 25%;
        }
        @media screen and (max-width: 800px) {
          min-width: 40%;
        }
      }

      & p {
        padding: 0 50px;
        font-weight: 100;
        /* font-size: clamp(3rem, 3.2vw, 4rem);*/
        font-size: clamp(3rem, 4.2vw, 5rem);

        @media screen and (max-width: 1400px) {
          font-size: clamp(2rem, 4.3vw, 4rem);
        }

        /* @media screen and (max-width: 1200px) {
          font-size: clamp(2.6rem, 3.7vw, 4rem);
        }*/
      }

      @media screen and (max-width: 700px) {
        margin: 0;
      }

      @media screen and (max-width: 1400px) {
        flex-direction: column;
      }
    }
  }
`;
