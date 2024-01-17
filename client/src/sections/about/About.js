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
    <AboutContainer id="about">
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
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.8) 50%,
      rgba(0, 0, 0, 0.4) 100%
    );
    border-radius: 10px;

    & .aboutInfo {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0px 30px;

      & img {
        border-radius: 10px;
        width: 20%;
        height: auto;

        -webkit-mask-image: linear-gradient(#000, transparent);
        mask-image: linear-gradient(#000, transparent);

        @media screen and (max-width: 1200px) {
          min-width: 30%;
        }
        @media screen and (max-width: 800px) {
          min-width: 40%;
        }
      }

      & p {
        padding: 0 50px;
        font-weight: 100;
        font-size: clamp(3rem, 3.2vw, 4rem);

        @media screen and (max-width: 700px) {
          font-size: clamp(2.3rem, 4.3vw, 4rem);
        }
        @media screen and (max-width: 600px) {
          font-size: clamp(2.9rem, 3.7vw, 4rem);
        }

        @media screen and (max-width: 450px) {
          font-size: clamp(2.6rem, 3.7vw, 4rem);
        }
      }

      @media screen and (max-width: 700px) {
        margin: 0;
      }

      @media screen and (max-width: 1400px) {
        flex-direction: column;
      }
    }
  }
`;
