import React, { useRef } from "react";
import { projects } from "./../data/myData";
import { motion, useInView } from "framer-motion";
import styled from "styled-components";

const Projects = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-10px" });

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
    <ProjectContainer id="projects">
      <motion.h3
        variants={textVariants}
        initial="initial"
        animate={isInView && "animate"}
        ref={ref}
      >
        Projects
      </motion.h3>
      <section className="projectWrapper container">
        {projects.map((project, id) => {
          return (
            <a href={project.link} key={id}>
              <img
                className="a kenburns-top"
                src={project.projectImg}
                alt="projectImg"
              />

              <div className="overlay">
                <aside className="skillsInvolved">
                  <p>{project.category}</p>

                  {project.skills ? (
                    <>
                      {project.skills.map((skill, skillIndex) => (
                        <p key={skillIndex}>{skill}</p>
                      ))}
                    </>
                  ) : (
                    <p>No skills information available for this project.</p>
                  )}
                </aside>

                <p>{project.description}</p>
              </div>
            </a>
          );
        })}
      </section>
    </ProjectContainer>
  );
};

export default Projects;

const ProjectContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 30px;
  color: var(--color-white);

  padding-bottom: 30px;
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 0.99) 75%,
    rgba(0, 0, 0, 0.95) 80%,
    rgba(0, 0, 0, 0.9) 85%,
    rgba(0, 0, 0, 0.85) 90%,
    rgba(0, 0, 0, 0.8) 95%,
    rgba(0, 0, 0, 0.77) 100%
  );

  box-shadow: var(--shadow-project);
  border-radius: 0px 0px 20px 20px;
  z-index: 10;

  & .projectWrapper {
    display: grid;
    grid-template-columns: 28.5% 28.5% 28.5%;
    grid-template-rows: 85%;
    grid-gap: 30px;

    justify-content: center;

    & :first-child {
      grid-column: 1 / 1;
      grid-row: 1 / 1;
    }

    & :nth-child(2) {
      grid-column: 2;
      grid-row: 1 / 1;
    }

    & :nth-child(3) {
      grid-column: 3;
      grid-row: 1 / 1;
    }

    & a {
      position: relative;
      border: 5px solid rgba(0, 0, 0, 0.4);
      border-radius: 40px;
      height: 100%;
      width: 100%;
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

      & img {
        position: relative;
        border-radius: 5px;
        height: 100%;
        width: 100%;
      }

      & .overlay {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        border-radius: 40px;
        inset: 15px;
        padding: 10px 20px;
        color: var(--color-white);
        background-color: rgba(0, 0, 0, 0.5);
        transition: all 0.8s ease-in-out;
        font-size: clamp(1rem, 4.2vw, 3rem);
        opacity: 0;

        & .skillsInvolved {
          display: flex;
          flex-wrap: wrap;
          font-size: clamp(1rem, 4.2vw, 3rem);
          padding: 10px 0px;
          gap: 5px 10px;

          & p {
            font-weight: bold;
            padding: 5px 10px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 10px;
            background: linear-gradient(
              to right,
              #462523 0,
              #cb9b51 22%,
              #f6e27a 45%,
              #f6f2c0 50%,
              #f6e27a 55%,
              #cb9b51 78%,
              #462523 100%
            );

            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            background-clip: text;

            &:first-child {
              background: radial-gradient(
                circle farthest-corner at center,
                rgba(0, 155, 227, 1) 10%,
                rgba(0, 129, 199, 1) 20%,
                rgba(0, 104, 171, 1) 30%,
                rgba(0, 80, 144, 1) 40%,
                rgba(0, 58, 118, 1) 50%,
                rgba(0, 37, 93, 1) 60%,
                rgba(0, 13, 69, 1) 70%,
                rgba(0, 4, 46, 1) 80%,
                rgba(0, 1, 24, 1) 90%,
                rgba(0, 0, 0, 1) 100%
              );
              -webkit-text-fill-color: transparent;
              -webkit-background-clip: text;
              background-clip: text;
            }
          }
        }

        & p {
          font-size: clamp(1rem, 4.2vw, 3rem);
          font-weight: 100;
        }
      }

      &:hover::after,
      &:hover::before,
      &:hover .overlay {
        opacity: 1;
      }

      &:hover {
        .kenburns-top {
          -webkit-animation: kenburns-top 10s ease-out both;
          animation: kenburns-top 10s ease-out both;
        }
      }
    }
    @media screen and (max-width: 1280px) {
      display: flex;
      flex-direction: column;
      align-items: center;

      & a {
        height: 55%;
        width: 55%;
      }
    }
  }
`;
