import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import styled from "styled-components";
import FramerIcone from "../../FramerMotion/FramerIcone";

/* trouver color patern ralentir les bnoule a larreire
 */

const Header = () => {
  return (
    <HeaderContainer>
      {/*<nav>
        <div className="logo">
          <img src={logo} />
        </div>
/*
        <ul>
          <li>
            <a className="navLink" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="navLink" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="navLink" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="navLink" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>*/}

      <aside className="media">
        <ul>
          <FramerIcone>
            <li>
              <a>
                <FaLinkedin className="link" />
              </a>
            </li>
          </FramerIcone>

          <FramerIcone>
            <li>
              <a>
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

  /* & nav {
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 1690px) {
      justify-content: space-between;
    }

     & .logo {
      position: fixed;

      & img {
        height: 30px;
        @media screen and (max-width: 1690px) {
          height: 50px;
        }
      }
      @media screen and (max-width: 1690px) {
        position: relative;
      }
    }
    & ul {
      display: flex;
      flex-direction: column;
      position: fixed;
      row-gap: 50px;
      right: 2px;
      top: 50px;
      text-shadow: 0 0 5px white;
      text-align: right;

      & li {
        & .navLink {
          text-decoration: none;
          position: relative;
          text-transform: uppercase;
          font-size: 2rem;
          color: var(--color-white);

          &::after {
            content: "";
            width: 0;
            height: 3px;
            position: absolute;
            bottom: 0%;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--color-white);
            transition: width 0.4s;
          }
          &:hover::after {
            width: 100%;
          }
        }
      }
      @media screen and (max-width: 700px) {
        display: none;
      }
    }
  }*/

  & .media {
    color: var(--color-white);

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

        & .link {
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

        &:hover {
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
