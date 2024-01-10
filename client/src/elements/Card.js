/*import CardWrapper from "react-vanilla-tilt";*/
import Tilt from "./Tilt.js";
import styled from "styled-components";

const Card = () => {
  const options = {
    scale: 1.1,
    speed: 1000,
    glare: true,
    "max-glare": 0.5,
    max: 30,
    "glare-prerender": false,
  };
  return (
    <CardContainer>
      <Tilt className="card" options={options}>
        <article>
          <p>David Vidal</p>
          <p>Front-end Web Developer</p>
        </article>
      </Tilt>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.section`
  -webkit-animation: roll-in-blurred-top 1.2s cubic-bezier(0.23, 1, 0.32, 1)
    both;
  animation: roll-in-blurred-top 1.2s cubic-bezier(0.23, 1, 0.32, 1) both;

  @-webkit-keyframes roll-in-blurred-top {
    0% {
      -webkit-transform: translateY(-800px) translateX(1000px) rotateZ(0)
        rotate(720deg);
      transform: translateY(-800px) translateX(1000px) rotateZ(0) rotate(360deg);
      -webkit-filter: blur(50px);
      filter: blur(50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0) translateX(0) rotateZ(-40deg)
        rotate(0deg);
      transform: translateY(0) translateX(0) rotateZ(-40deg) rotate(0deg);
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
  @keyframes roll-in-blurred-top {
    0% {
      -webkit-transform: translateY(-800px) translateX(1000px) rotateZ(0)
        rotate(720deg);
      transform: translateY(-800px) translateX(1000px) rotateZ(0) rotate(360deg);
      -webkit-filter: blur(50px);
      filter: blur(50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0) translateX(0) rotateZ(-40deg)
        rotate(0deg);
      transform: translateY(0) translateX(0) rotateZ(-40deg) rotate(0deg);
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }

  .card {
    position: relative;
    width: 400px;
    height: 250px;
    margin: 30px;
    background: rgba(21, 21, 21, 1);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.18);

    & .js-tilt-glare {
      border-radius: 10px;
    }
    & article {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      width: 100%;

      & p {
        position: relative;
        width: 100%;
        color: transparent;
        letter-spacing: 5px;
        font-weight: bold;
        top: 160px;
        background-image: linear-gradient(
          to right,
          #462523 0,
          #cb9b51 22%,
          #f6e27a 45%,
          #f6f2c0 50%,
          #f6e27a 55%,
          #cb9b51 78%,
          #462523 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        text-shadow: 0, 0, 0, rgba(255, 255, 255, 0.18);

        &:first-child {
          font-size: 3rem;
          text-transform: uppercase;
        }

        &:nth-child(2) {
          font-size: 1.5rem;
        }
      }
    }
  }
`;
