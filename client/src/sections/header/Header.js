import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
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
              wtver
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="navLink">
              wtver
            </NavLink>
          </li>
        </ul>
      </nav>

      <aside className="media">
        <ul>
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaTwitter />
          </li>
        </ul>
      </aside>
    </HeaderContainer>
  );
};
const HeaderContainer = styled.section`
  position: absolute;
  margin-top: 20px;
  z-index: 1;

  & nav {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .logo {
      position: relative;
      left: 80px;
      font-weight: bold;
      text-transform: uppercase;
      color: var(--color-white);
      font-size: 1.4rem;
    }
    & ul {
      display: flex;
      position: fixed;
      z-index: 2;
      right: 30px;

      & li {
        margin: 0px 40px;

        & .navLink {
          text-decoration: none;
          position: relative;
          text-transform: uppercase;
          font-size: 1.4rem;
          color: var(--color-white);

          &::after {
            content: "";
            width: 0;
            height: 3px;
            position: absolute;
            bottom: -5px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #ff3131;
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
      z-index: 2;
      list-style: none;
      position: fixed;
      right: 30px;
      top: 76%;
      padding: 10px 10px;

      & li {
        font-size: 2rem;
        margin: 24px 0;
        transition: 0.3s;

        &:hover {
          transform: scale(1.8);
        }
      }
    }
  }
`;
export default Header;
