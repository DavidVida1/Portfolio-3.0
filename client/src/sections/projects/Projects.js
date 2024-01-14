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
`;
