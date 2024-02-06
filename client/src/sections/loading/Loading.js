import React from "react";
import styled from "styled-components";
import RingLoader from "react-spinners/RingLoader";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Loading = () => {
  const animationFirst = {
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

  const animationLast = {
    initial: {
      y: -500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerchildren: 0.1,
      },
    },
  };

  const animationJob = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.7,
        staggerchildren: 0.1,
      },
    },
  };
  return (
    <LoadingContainer>
      <div className="section_wrapper">
        <div className="r-container">
          <motion.div
            className="r-text first"
            animate="animate"
            initial="initial"
            variants={animationFirst}
          >
            ⇻David
          </motion.div>

          <motion.div
            className="r-text last"
            animate="animate"
            initial="initial"
            variants={animationLast}
          >
            Vidal↲
          </motion.div>

          <motion.div
            className="r-text job"
            animate="animate"
            initial="initial"
            variants={animationJob}
          >
            →Fr&nbsp;
            <RingLoader
              color="#FFFF"
              cssOverride={{}}
              size={120}
              speedMultiplier={1.3}
            />
            &nbsp;nt-End▻
          </motion.div>
        </div>
      </div>
    </LoadingContainer>
  );
};
export default Loading;

const LoadingContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;

  & .section_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: inherit;
    height: inherit;

    & .r-container {
      position: relative;
      z-index: 10;

      & .r-text {
        position: relative;
        display: flex;
        overflow: hidden;
        height: 100%;
        font-weight: 500;
        color: var(--color-white);
        text-shadow: 0px 0px 5px white;
        font-size: var(--letter-size);
        text-transform: uppercase;
      }

      & .first {
        padding-left: 24rem;
      }
      & .last {
        padding-left: 12rem;
      }
      & .job {
        padding-left: 20rem;
        padding-bottom: 60px;
      }

      & a {
        color: white;
        border: 2px solid white;
        padding: 5px 15px;
        border-radius: 5px;
        margin-left: 64rem;
      }
    }
  }
`;
