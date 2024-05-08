import React from "react";
import { mediaData } from "../data/myData";
import { motion } from "framer-motion";
import styled from "styled-components";

const NavFooter = ({ isActive }) => {
  /*Nav footer animation in menu*/
  const slideIn = {
    initial: {
      opacity: 0,
      y: 120,
    },

    enter: (mediaId) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.75 + mediaId * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),

    exit: {
      opacity: 0,
      transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
    },
  };
  /*End of Nav footer animation in menu*/

  return (
    <NavFooterContainer>
      <div className="footer">
        {mediaData.map((media, mediaId) => {
          return (
            <motion.a
              variants={slideIn}
              custom={mediaId}
              initial="initial"
              animate={isActive ? "enter" : "exit"}
              className="footerText"
              href={media.href}
              key={mediaId}
            >
              {media.name}
            </motion.a>
          );
        })}
      </div>
    </NavFooterContainer>
  );
};

export default NavFooter;

const NavFooterContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  .footer {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    margin-top: 25px;

    a {
      color: var(--color-white);

      &:hover {
        filter: drop-shadow(0 0 3px var(--color-white));
      }
    }
  }
`;
