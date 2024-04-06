import React, { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import styled from "styled-components";
import FramerIcone from "../FramerMotion/FramerIcone";
import "../animation.css";

const Header = () => {
  const [showMedia, setShowMedia] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /*animation made with css and note FramerMotion to pratice*/
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMedia(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      {showMedia && (
        <div>
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

          <aside className="media">
            <div
              className={`menu ${isMenuOpen ? "openMenu" : ""}`}
              onClick={toggleMenu}
            >
              <div>
                <span className="line-1"></span>
                <span className="line-2"></span>
                <span className="line-3"></span>
              </div>
            </div>

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
        </div>
      )}
    </HeaderContainer>
  );
};
const HeaderContainer = styled.header`
  position: absolute;
  right: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  z-index: 1;

  & .headerList {
    margin: 50px 0px;
    font-size: 2rem;
    animation: slideFromRightAnimation 0.5s forwards;

    & li {
      padding: 1rem;
      letter-spacing: 3px;

      & a {
        color: var(--color-white);
      }
    }
  }

  & .media {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    /*margin: 50px 0px;*/
    right: 0;
    bottom: 0px;
    animation: slideFromRightAnimation 0.5s forwards;

    & .menu {
      width: 50px;
      height: 50px;
      /* margin-top: 100px;*/
      background-image: linear-gradient(to right, #e91e63, #f44336);
      border-radius: 5px;
      cursor: pointer;

      & div {
        position: relative;
        width: 20px;
        height: 10px;
        margin: 0px;

        & span {
          background: #fff;
          width: 100%;
          height: 5px;
          border-radius: 5px;
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(30%, 300%);
          transition: transform 0.5s, width 0s;
        }
      }

      & .line-1 {
        transform: translate(30%, 5px);
      }

      & .line-3 {
        transform: translate(30%, 25px);
      }
    }

    .openMenu .line-1 {
      transform: translate(30%, 300%) rotate(-45deg);
    }
    .openMenu .line-3 {
      transform: translate(30%, 300%) rotate(45deg);
    }
    .openMenu .line-2 {
      width: -0px;
    }

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
`;
export default Header;
