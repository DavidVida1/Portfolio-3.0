import React, { useState } from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingContainer>
      <div className="wrapper">
        <h2 data-text="David ">David</h2>
        <h2 data-text="Vidal">Vidal</h2>
        <h2 data-text="Front-End Web Developer">Front-End Web Developer</h2>
      </div>
    </LoadingContainer>
  );
};
export default Loading;

const LoadingContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;

  .wrapper {
  }
`;
