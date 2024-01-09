import React from "react";
import { useState } from "react";
import Card from "../../elements/Card.js";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeContainer>
      <Card />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.section`
  position: relative;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
`;
