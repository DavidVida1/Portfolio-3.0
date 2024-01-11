import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <AboutContainer>
      <div>test</div>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  font-size: 5rem;
  color: lime;
  z-index: 5;
`;
