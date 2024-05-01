import React from "react";
import { navListData } from "../data/myData";
import styled from "styled-components";
import "../animation.css";
import { motion } from "framer-motion";
import NavFooter from "./NavFooter";

const Nav = ({ isActive }) => {
  const menuVariants = {
    open: {
      width: 350,
      height: 330,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
      top: "-10px",
      right: "-10px",
    },
    closed: {
      width: 40,
      height: 100,
      top: "0px",
      right: "0px",
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const perspective = {
    initial: {
      opacity: 0,
      rotateX: 90,
    },
    enter: (_id) => ({
      opacity: 1,
      rotateX: 0,
      transition: {
        /*duration: 0.55,
        /*opacity: { duration: 0.35 },*/
        delay: 0.5 + _id * 0.1,
        /*ease: [0.215, 0.61, 0.355, 1],*/
      },
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <NavWrapperMotion
      className="menuNav glassBg"
      variants={menuVariants}
      animate={isActive ? "open" : "closed"}
      initial="closed"
    >
      <div className="navBody">
        {navListData.map((data, _id) => {
          return (
            <div key={_id} className="linkContainer">
              <motion.div
                custom={_id}
                variants={perspective}
                initial="initial"
                animate={isActive ? "enter" : "exit"}
              >
                <a href={data.href} className="nav">
                  {data.name}
                </a>
              </motion.div>
            </div>
          );
        })}
        <NavFooter isActive={isActive} />
      </div>
    </NavWrapperMotion>
  );
};

export default Nav;

const NavWrapperMotion = styled(motion.nav)`
  &.menuNav {
    position: relative;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;

    & .navBody {
      position: relative;
      display: flex;
      flex-direction: column;

      gap: 10px;
      /*  height: calc(100% - 110px);*/
      height: max-content;
      top: 25px;
      padding: 0px 40px 30px 40px;
      box-sizing: border-box;
      & .linkContainer {
        perspective: 120px;
        perspective-origin: left;
        & .nav {
          color: white;
        }
      }
    }
  }
`;
