import React from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <div className="logo">
          <span>Logo</span>
        </div>

        <ul>
          <li>
            <NavLink to="" className="navLink">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="navLink">
              Project
            </NavLink>
          </li>
        </ul>
      </nav>

      <aside className="media">
        <ul>
          <li>
            <FaLinkedin />
          </li>

          <li>
            <FaGithub />
          </li>
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

  & nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .logo {
      position: fixed;
      font-weight: bold;
      text-transform: uppercase;
      color: var(--color-white);
      font-size: 1.7rem;
    }
    & ul {
      display: flex;
      flex-direction: column;
      position: fixed;
      row-gap: 50px;
      z-index: 2;
      right: 10px;
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
            bottom: -5px;
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
    }
  }
  & .media {
    color: var(--color-white);

    & ul {
      position: fixed;
      display: flex;
      flex-direction: column;
      row-gap: 50px;
      right: 50px;
      top: 75%;

      & li {
        font-size: 3rem;
        transition: 0.3s;

        & svg:first-child {
          border-radius: 4px;
          box-shadow: 0px 0px 5px white;
        }
        &:nth-child(2) svg {
          border-radius: 15px;
          box-shadow: 0px 0px 5px white;
        }
        &:hover {
          transform: scale(1.8);
        }
      }
    }
  }
`;
export default Header;
