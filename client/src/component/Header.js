import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import styled from "styled-components";
import FramerIcone from "../FramerMotion/FramerIcone";

const Header = () => {
  return (
    <HeaderContainer>
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
    </HeaderContainer>
  );
};
const HeaderContainer = styled.header`
  position: absolute;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  margin: 50px;
  z-index: 1;

  & .media {
    & ul {
      position: fixed;
      display: flex;
      flex-direction: column;
      align-items: center;

      row-gap: 50px;
      width: 100px;
      right: 0;
      top: 70%;

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
