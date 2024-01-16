import React, { useEffect, useState } from "react";
import portrait from "../../assets/Crop-Iphone1Black2.png";
import styled from "styled-components";

const About = () => {
  useEffect(() => {
    window.addEventListener("scroll", reveal);

    function reveal() {
      let reveals = document.querySelectorAll(".reveal");

      reveals.forEach((reveal) => {
        let windowHeight = window.innerHeight;
        let revealTop = reveal.getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add("active");
        } else {
          reveal.classList.remove("active");
        }
      });
    }
  });
  return (
    <AboutContainer>
      <div className="aboutWrappper">
        <h3>About Me</h3>
        <aside className="aboutInfo">
          <img src={portrait} alt="portrait" />

          <p>
            From microbiologist to web developer, I've shifted my focus from the
            microscopic world to the digital one, leveraging my analytical
            mindset and passion for crafting visually captivating user-friendly
            web experiences. My career shift represents a fusion of scientific
            rigor and digital creativity in the ever-evolving landscape of web
            development.
          </p>
        </aside>{" "}
      </div>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  color: var(--color-white);

  & .aboutWrappper {
    /*margin: 0 50px;*/
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 0.9) 100%
    );
    border-radius: 10px;

    & h3 {
      margin: 0px 10px;
    }
  }

  & .aboutInfo {
    display: flex;
    margin: 0px 100px;

    & img {
      border-radius: 10px;
      width: 25%;
      height: auto;
      -webkit-mask-image: linear-gradient(#000, transparent);
      mask-image: linear-gradient(#000, transparent);
    }

    & p {
      padding: 0 50px;
      font-weight: 100;
      font-size: 4rem;
    }
  }
`;
