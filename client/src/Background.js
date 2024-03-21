import React from "react";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const Background = () => {
  const interBubbleRef = useRef(null);

  const move = (initialX, initialY, tgX, tgY) => {
    const offsetX = tgX - initialX;
    const offsetY = tgY - initialY;

    interBubbleRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

    requestAnimationFrame(() => {
      move(initialX, initialY, tgX, tgY);
    });
  };

  useEffect(() => {
    const bubbleRect = interBubbleRef.current.getBoundingClientRect();
    const initialX = bubbleRect.left + bubbleRect.width / 2;
    const initialY = bubbleRect.top + bubbleRect.height / 2;

    const handleMouseMove = (event) => {
      const tgX = event.clientX;
      const tgY = event.clientY;

      move(initialX, initialY, tgX, tgY);
    };

    const startAnimation = () => {
      window.addEventListener("mousemove", handleMouseMove);
    };

    const stopAnimation = () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

    startAnimation(); // Start the animation when component mounts

    return () => {
      stopAnimation(); // Stop the animation when component unmounts
    };
  }, []);

  return (
    <BackgroundContainer>
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>

          <div className="interactive" ref={interBubbleRef}></div>
        </div>
      </div>
    </BackgroundContainer>
  );
};

export default Background;

const BackgroundContainer = styled.section`
  position: -webkit-fixed;
  position: fixed;
  width: 100%;
  height: 100%;
  & .gradient-bg {
    /*width: 100vw;
    height: 100vh;*/
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    background: radial-gradient(
      circle,
      rgba(82, 94, 120, 0.5) 0%,
      rgba(25, 33, 46, 1) 30%
    );

    top: 0;
    left: 0;

    & svg {
      display: none;
    }

    & .gradients-container {
      filter: url(#goo) blur(40px);
      width: 100%;
      height: 100%;

      & .g1 {
        position: absolute;
        background: radial-gradient(
            circle at center,
            rgba(var(--color1), 0.8) 0,
            rgba(var(--color1), 0) 50%
          )
          no-repeat;
        mix-blend-mode: var(--blending);

        width: var(--circle-size);
        height: var(--circle-size);
        top: calc(50% - var(--circle-size) / 2);
        left: calc(50% - var(--circle-size) / 2);

        transform-origin: center center;
        animation: moveVertical 40s ease infinite;

        opacity: 1;
      }

      & .g2 {
        position: absolute;
        background: radial-gradient(
            circle at center,
            rgba(var(--color2), 0.8) 0,
            rgba(var(--color2), 0) 50%
          )
          no-repeat;
        mix-blend-mode: var(--blending);

        width: var(--circle-size);
        height: var(--circle-size);
        top: calc(50% - var(--circle-size) / 2);
        left: calc(50% - var(--circle-size) / 2);

        transform-origin: calc(50% - 400px);
        animation: moveInCircle 30s reverse infinite;

        opacity: 1;
      }

      & .g3 {
        position: absolute;
        background: radial-gradient(
            circle at center,
            rgba(var(--color3), 0.8) 0,
            rgba(var(--color3), 0) 50%
          )
          no-repeat;
        mix-blend-mode: var(--blending);

        width: var(--circle-size);
        height: var(--circle-size);
        top: calc(50% - var(--circle-size) / 2 + 200px);
        left: calc(50% - var(--circle-size) / 2 - 500px);

        transform-origin: calc(50% + 400px);
        animation: moveInCircle 50s linear infinite;

        opacity: 1;
      }

      & .g4 {
        position: absolute;
        background: radial-gradient(
            circle at center,
            rgba(var(--color4), 0.8) 0,
            rgba(var(--color4), 0) 50%
          )
          no-repeat;
        mix-blend-mode: var(--blending);

        width: var(--circle-size);
        height: var(--circle-size);
        top: calc(50% - var(--circle-size) / 2);
        left: calc(50% - var(--circle-size) / 2);

        transform-origin: calc(50% - 200px);
        animation: moveHorizontal 50s ease infinite;

        opacity: 0.7;
      }

      & .g5 {
        position: absolute;
        background: radial-gradient(
            circle at center,
            rgba(var(--color5), 0.8) 0,
            rgba(var(--color5), 0) 50%
          )
          no-repeat;
        mix-blend-mode: var(--blending);

        width: calc(var(--circle-size) * 2);
        height: calc(var(--circle-size) * 2);
        top: calc(50% - var(--circle-size));
        left: calc(50% - var(--circle-size));

        transform-origin: calc(50% - 800px) calc(50% + 200px);
        animation: moveInCircle 30s ease infinite;

        opacity: 1;
      }

      & .interactive {
        position: absolute;
        background: radial-gradient(
            circle at center,
            rgba(var(--color-interactive), 0.8) 0,
            rgba(var(--color-interactive), 0) 50%
          )
          no-repeat;
        mix-blend-mode: var(--blending);

        width: 100%;
        height: 100%;
        top: var(--translate-y, 0);
        left: var(--translate-x, 0);

        opacity: 0.7;
      }

      @keyframes moveInCircle {
        0% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(180deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes moveVertical {
        0% {
          transform: translateY(-50%);
        }
        50% {
          transform: translateY(50%);
        }
        100% {
          transform: translateY(-50%);
        }
      }

      @keyframes moveHorizontal {
        0% {
          transform: translateX(-50%) translateY(-10%);
        }
        50% {
          transform: translateX(50%) translateY(10%);
        }
        100% {
          transform: translateX(-50%) translateY(-10%);
        }
      }
    }
  }
`;
