import React, { useRef, useEffect } from "react";
import { skillsData } from "../data/myData.js";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";

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

const Skills = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-10px" });

  return (
    <SkillContainer id="skills" className="container">
      <motion.h3
        variants={textVariants}
        initial="initial"
        animate={isInView && "animate"}
        ref={ref}
      >
        Skills
      </motion.h3>

      <div className="skillWrapper">
        <aside className="skillInfo">
          <div>
            <h4>My expertises.</h4>
            <p>
              With a diverse set of tools and technologies, I bring a unique
              blend of creativity and technical prowess to the table, enabling
              me to craft visually stunning and user-friendly digital solutions
              with a touch of innovation.
            </p>
          </div>
        </aside>

        <aside className="skillSection skillText glassBg">
          {skillsData.map((skill, id) => (
            <h5 key={id}>{skill.name}</h5>
          ))}
        </aside>
      </div>
    </SkillContainer>
  );
};

export default Skills;

const SkillContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100dvh;
  color: var(--color-white);

  @media (max-height: 640px) {
    height: 100%;
  }

  &.container {
    @media (max-width: 640px) {
      max-width: 100%;
    }
  }

  & .skillWrapper {
    display: grid;
    grid-template-columns: 60% auto;
    margin: 0 100px;

    @media (max-width: 640px) {
      margin: 0 50px;
    }

    @media (max-width: 475px) {
      margin: 0 50px;
    }
    & .skillInfo {
      display: flex;
      flex-direction: column;
      row-gap: 50px;
      & div {
        & p {
          font-weight: 300;
          width: 90%;
          font-size: clamp(2rem, 4.2vw, 5rem);
        }
      }
    }

    & .skillSection {
      display: grid;
      grid-template-columns: 55% auto;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      padding: 10px 10px;

      @media screen and (max-width: 1536px) {
        margin: 50px 0;
      }

      @media screen and (max-width: 768px) {
        min-height: 200px;
      }
    }

    @media screen and (max-width: 1536px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;
