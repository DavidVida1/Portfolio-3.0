import { motion } from "framer-motion";
import styled from "styled-components";

const FramerTransition = (OriginalComponent) => {
  return () => {
    <TransitionContainer>
      <OriginalComponent />
      <motion.div
        className="slide-in"
        initial={{ scyaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>

      <motion.div
        className="slide-out"
        initial={{ scyaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
    </TransitionContainer>;
  };
};
export default FramerTransition;

const TransitionContainer = styled.section`
  & .slide-in {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--color-black);
    transform-origin: bottom;
  }

  .slide-out {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--color-black);
    transform-origin: top;
  }
`;
