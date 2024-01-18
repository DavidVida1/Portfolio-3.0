import React from "react";
import { skillsData } from "..//../data/myData.js";
import styled from "styled-components";

const Skills = () => {
  return (
    <SkillContainer id="skills">
      <h3>Skills</h3>

      <div className="skillWrapper">
        <aside className="skillInfo">
          <div>
            <h4>My expertises.</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              mauris porta ex dapibus luctus
            </p>
          </div>

          <div>
            <h4>My Design.</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              mauris porta ex dapibus luctus
            </p>
          </div>
        </aside>

        <aside className="skillSection">
          {skillsData.map((skill) => (
            <h5>{skill.name}</h5>
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
  height: 100vh;
  font-size: 5rem;
  padding-top: 30px;
  color: var(--color-white);

  & .skillWrapper {
    display: grid;
    grid-template-columns: 60% auto;
    gap: 30px;
    height: auto;

    & .skillInfo {
      display: flex;
      flex-direction: column;
      row-gap: 50px;

      & p {
        font-weight: 100;
        width: 90%;
        font-size: clamp(3rem, 4.2vw, 5rem);
      }
    }

    & .skillSection {
      display: grid;
      grid-template-columns: 55% auto;
      justify-content: center;
      align-items: center;
      @media screen and (max-width: 600px) {
        grid-template-columns: 50% auto;
      }
    }

    @media screen and (max-width: 1500px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  @media screen and (max-width: 600px) {
    margin: 0 10px;
  }
`;
