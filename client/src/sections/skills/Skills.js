import React from "react";
import { skillsData } from "..//../data/myData.js";
import styled from "styled-components";

const Skills = () => {
  return (
    <SkillContainer>
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
            <h4>My Design</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              mauris porta ex dapibus luctus
            </p>
          </div>
        </aside>

        <aside className="skillSection">
          {skillsData.map((skill) => (
            <p>{skill.name}</p>
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

  & h3 {
    margin: 0px 0px 30px 100px;
    padding-bottom: 30px;
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 700;
    text-shadow: 0 0 5px white;
  }

  & .skillWrapper {
    display: grid;
    grid-template-columns: 70% auto;
    gap: 20px;
    margin: 0 100px;

    & .skillInfo {
      display: flex;
      flex-direction: column;
      row-gap: 50px;

      & p {
        font-weight: 100;
      }
    }

    & .skillSection {
      display: flex;
      flex-direction: column;

      & p {
        color: rgba(217, 217, 217, 1);
        font-weight: 700;
      }
    }
  }
`;
