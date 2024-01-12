import React from "react";
import styled from "styled-components";

const Projects = () => {
  return (
    <ProjectContainer>
      <h3>Projects</h3>
    </ProjectContainer>
  );
};

export default Projects;

const ProjectContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
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
`;
