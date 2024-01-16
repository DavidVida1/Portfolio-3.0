import React from "react";
import { navPortfolio, projects } from "../../data/myData";
import styled from "styled-components";

const Projects = () => {
  return (
    <ProjectContainer>
      <h3>Projects</h3>
      <section className="projectWrapper">
        {/*selectedCategory est definie a linterieure ddu useEffect et a donc acces a Navportfolio*/}
        {projects.map((project) => {
          return (
            <a href={project.link}>
              <img className="a" src={project.projectImg} alt="projectImg" />

              <div className="overlay">
                <aside className="skillsInvolved">
                  <p>{project.category}</p>

                  {project.skills ? (
                    <>
                      {project.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>{skill}</div>
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
  width: 100%;
  height: 100%;
  padding-top: 30px;
  color: var(--color-white);

  & .projectWrapper {
    width: 100%;
    height: 100%;
    display: grid;

    grid-gap: 100px;
    grid-template-columns: repeat(4, 250px);
    grid-template-rows: repeat(3, 250px);
    justify-content: center;

    & :first-child {
      grid-column: 1 / 5;
      grid-row: 1 / 3;
    }

    & :nth-child(2) {
      grid-column: 1 / 3;
      grid-row: 3 / 5;
    }

    & :nth-child(3) {
      grid-column: 3 / 5;
      grid-row: 3 / 5;
    }
    & :nth-child(4) {
      grid-column: 1 / 5;
      grid-row: 5 /6;
    }

    & a {
      position: relative;
      border: 2px solid rgba(0, 0, 0, 0.2);
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 5px;
      padding: 15px;
      height: 100%;
      width: 100%;

      & img {
        position: relative;
        border-radius: 5px;
        height: 100%;
        width: 100%;
      }

      &::after,
      &::before {
        content: " ";
        position: absolute;
        height: 50px;
        width: 50px;
        z-index: 1;
        transition: all 0.5s ease-in-out;
        opacity: 0;
        border: 3px solid white;
      }

      &::after {
        top: 15px;
        left: 15px;
        border-bottom: 3px solid transparent;
        border-right: 3px solid transparent;
      }

      &::before {
        bottom: 15px;
        right: 15px;
        border-top: 3px solid transparent;
        border-left: 3px solid transparent;
      }
      & .overlay {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        inset: 15px;
        padding: 10px 20px;
        color: var(--color-white);
        background-color: rgba(0, 0, 0, 0.5);
        transition: all 0.8s ease-in-out;
        font-size: 1.5rem;
        opacity: 0;

        & .skillsInvolved {
          display: flex;
          flex-wrap: wrap;
          font-size: 2rem;
          padding: 10px 0px;
          gap: 5px 10px;

          & p,
          div {
            font-weight: bold;
            color: #cb9b51;

            background-color: rgba(0, 0, 0, 0.8);
            padding: 5px 10px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 10px;
          }
        }

        & p {
          font-size: 2rem;
        }
      }

      &:hover::after,
      &:hover::before,
      &:hover .overlay {
        opacity: 1;
      }
    }
    @media screen and (max-width: 1200px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      & a {
        height: clamp(300px, 20vw, 370px);
        width: clamp(300px, 50vw, 70%);
      }
    }

    @media screen and (max-width: 800px) {
      & a {
        height: 100%;
        width: 90%;
      }
    }
  }
`;
