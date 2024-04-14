import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "../animation.css";

const HeaderButton = ({ isActive, setIsActive }) => {
  return (
    <ButtonHeader
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      <motion.div
        className="slider"
        animate={{ left: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.024, 1] }}
      >
        <div className="el">
          <div className="slideText">
            <p>Menu</p>
            <p>Menu</p>
          </div>
        </div>
        <div className="el">
          <div className="slideText">
            <p>Close</p>
            <p>Close</p>
          </div>
        </div>
      </motion.div>
    </ButtonHeader>
  );
};

const ButtonHeader = styled.aside`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 100px;
  width: 40px;
  border-radius: 5px;
  margin-top: 100px;
  overflow: hidden;
  cursor: pointer;
  animation: slideFromRightAnimation 0.5s forwards;
  box-shadow: 0 0 5px white;

  & .slider {
    position: relative;
    display: flex;
    height: 100%;
    width: 100%;

    & .el {
      writing-mode: vertical-rl;
      text-orientation: upright;
      height: 100%;
      width: 100%;
      background-color: var(--color-white);
      text-transform: uppercase;

      &:nth-of-type(2) {
        position: absolute;
        left: 100%;
        background-color: var(--color-black);
        color: var(--color-white);
      }

      &:hover {
        & .slideText {
          transform: translateX(0%);

          & p {
            &:nth-of-type(1) {
              transform: translateX(175%);
              opacity: 0;
            }
            &:nth-of-type(2) {
              transform: translateX(0%);
              opacity: 1;
            }
          }
        }
      }

      & .slideText {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        transition: transform 0.75s cubic-bezier(0.76, 0, 0.24, 1);

        & p {
          transition: all 0.75s cubic-bezier(0.76, 0, 0.24, 1);
          &:nth-of-type(2) {
            position: absolute;
            transform: translateX(-175%);
            opacity: 1;
          }
        }
      }
    }
  }
  &:hover {
    filter: drop-shadow(0 0 3px var(--color-white));
    box-shadow: 0px 0px 5px white;
  }
`;
export default HeaderButton;
