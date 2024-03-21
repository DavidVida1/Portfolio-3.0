import React from "react";
import styled from "styled-components";
import RingLoader from "react-spinners/RingLoader";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Loading = () => {
  const animationJob = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <LoadingContainer>
      <div className="section_wrapper">
        <motion.div
          className="r-text job"
          animate="animate"
          initial="initial"
          variants={animationJob}
        >
          <RingLoader
            color="#FFFF"
            cssOverride={{}}
            size={120}
            speedMultiplier={1.3}
          />
        </motion.div>
      </div>
    </LoadingContainer>
  );
};
export default Loading;

const LoadingContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;

  animation: backgroundAnimation 2s linear; /* Adjusted the animation duration and added infinite iteration */
  animation-timing-function: linear; /* Changed timing function for smoother transition */

  & .section_wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;

    & .r-text {
      height: 100%;
      font-weight: 500;
      color: var(--color-white);
      text-shadow: 0px 0px 5px white;
      filter: drop-shadow(0 0 3px var(--color-white));
    }
  }

  @keyframes backgroundAnimation {
    0% {
      background: rgba(25, 33, 46, 1);
    }

    100% {
      background: rgba(25, 33, 46, 0.5);
      box-shadow: rgba(0, 0, 0, 0.25) 0px -15px 15px inset,
        rgba(0, 0, 0, 0.12) 0px -15px 15px inset,
        rgba(0, 0, 0, 0.12) 0px -15px 15px inset,
        rgba(0, 0, 0, 0.17) 0px -15px 15px inset,
        rgba(0, 0, 0, 0.09) 0px -15px 15px inset;
    }
  }
`;
