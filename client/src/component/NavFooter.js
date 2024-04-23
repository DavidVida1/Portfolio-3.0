import React, { useRef, useState } from "react";
import { mediaData } from "../data/myData";
import styled from "styled-components";

const NavFooter = () => {
  return (
    <NavFooterContainer>
      <div className="footer">
        {mediaData.map((media, i) => {
          return (
            <div>
              <a className="footerText" href={media.href}>
                {media.name}
              </a>
            </div>
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
    margin-top: 100px;

    a {
      color: var(--color-white);

      &:hover {
        filter: drop-shadow(0 0 3px var(--color-white));
      }
    }
  }
`;
