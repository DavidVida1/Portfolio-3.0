import React, { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import styled from "styled-components";
import FramerIcone from "../FramerMotion/FramerIcone";

const Header = () => {
  const [showMedia, setShowMedia] = useState(false);

  /*animation made with css and note FramerMotion*/
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMedia(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HeaderContainer>
      {showMedia && (
        <aside className="headerList">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </aside>
      )}

      {showMedia && (
        <aside className="media">
          <ul>
            <FramerIcone>
              <li>
                <a href="https://www.linkedin.com/in/david-vidal-dev/">
                  <FaLinkedin className="link" />
                </a>
              </li>
            </FramerIcone>

            <FramerIcone>
              <li>
                <a href="https://github.com/DavidVida1">
                  <FaGithub className="git" />
                </a>
              </li>
            </FramerIcone>

            <FramerIcone>
              <li>
                <a href="#contact">
                  <FaEnvelope className="mail" />
                  <FaEnvelopeOpen className="mailOpen" />
                </a>
              </li>
            </FramerIcone>
          </ul>
        </aside>
      )}
    </HeaderContainer>
  );
};
const HeaderContainer = styled.header`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  z-index: 1;
  margin: 50px 0px;

  & .headerList {
    font-size: clamp(2rem, 3.2vw, 2rem);
    animation: slideFromRightAnimation 0.5s forwards;

    & li {
      padding: 1rem;
      letter-spacing: 3px;

      & a {
        text-decoration: none;
        color: var(--color-white);
      }
    }
  }

  & .media {
    position: fixed;
    display: flex;
    right: 0;
    bottom: 50px;
    animation: slideFromRightAnimation 0.5s forwards;

    & ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 50px;
      width: 100px;

      & li {
        font-size: 3rem;
        transition: 0.3s;

        & .link,
        .git,
        .mail {
          color: var(--color-white);
        }

        & .mailOpen {
          display: none;
        }

        &:hover {
          filter: drop-shadow(0 0 3px var(--color-white));

          & .link {
            border-radius: 4px;
            box-shadow: 0px 0px 5px rgba(100, 220, 255, 1);
            border-radius: 4px;
            box-shadow: 0px 0px 5px white;
          }
          & .git {
            border-radius: 15px;
            box-shadow: 0px 0px 5px white;
          }

          & .mailOpen {
            display: none;

            color: var(--color-white);
          }
          & .mail {
            color: inherit;
            color: var(--color-white);
          }

          & .mail {
            display: none;
          }

          & .mailOpen {
            display: block;
            color: var(--color-white);
          }
        }
      }
    }
    @media screen and (max-width: 800px) {
      display: none;
    }
  }

  @keyframes slideFromRightAnimation {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
export default Header;
