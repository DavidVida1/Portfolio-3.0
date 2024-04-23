import React, { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import styled from "styled-components";
import FramerIcone from "../FramerMotion/FramerIcone";
import "../animation.css";
import HeaderButton from "./HeaderButton";
import Nav from "./Nav";

const Header = () => {
  const [slideAnimation, setSlideAnimation] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isShowing, setIsShowing] = useState(false);

  /*animation made with css and not FramerMotion to pratice*/
  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideAnimation(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HeaderContainer>
      {slideAnimation && (
        <div className="wrapper">
          <div className="menu">
            {isShowing && <Nav isActive={isActive} />}

            <HeaderButton
              isActive={isActive}
              setIsShowing={setIsShowing}
              setIsActive={setIsActive}
            />
          </div>

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

              {/*  <FramerIcone>
                <li>
                  <a href="#contact">
                    <FaEnvelope className="mail" />
                    <FaEnvelopeOpen className="mailOpen" />
                  </a>
                </li>
              </FramerIcone>*/}
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
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  z-index: 100;

  & .wrapper {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    color: var(--color-black);
    font-size: 1.5rem;
    height: 100%;
    right: 0;
    bottom: 0px;
    margin: 50px 0px;

    & .menu {
      position: absolute;
      top: 100px;
      right: 28px;
    }

    & .media {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
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

      @media screen and (max-width: 1430px) {
        display: none;
      }
    }
  }
`;
export default Header;
