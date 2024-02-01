import React from "react";
import styled from "styled-components";
import RingLoader from "react-spinners/RingLoader";

const Loading = () => {
  return (
    <LoadingContainer>
      <div className="section_wrapper">
        <div className="r-container">
          <div className="r-text first">⇻David</div>
          <aside>
            <div className="r-text last">Vidal↲</div>
          </aside>
          <div className="r-text job">
            →Fr&nbsp;
            <RingLoader
              color="#FFFF"
              cssOverride={{}}
              margin={20}
              size={130}
              speedMultiplier={1}
            />
            &nbsp;nt-End▻
          </div>
        </div>
      </div>
    </LoadingContainer>
  );
};
export default Loading;

const LoadingContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;

  & .section_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: inherit;
    height: inherit;

    & .r-container {
      position: relative;
      width: 100%;
      z-index: 10;

      & aside {
        display: flex;
      }

      & .r-text {
        position: relative;
        display: flex;
        overflow: hidden;
        font-weight: 500;
        color: var(--color-white);
        text-shadow: 0px 0px 5px white;
        font-size: var(--letter-size);
        height: var(--letter-size);
      }

      & .first {
        padding-left: 48rem;
      }
      & .last {
        padding-left: 24rem;
      }
      & .job {
        padding-left: 41rem;
      }

      & a {
        color: white;
        border: 2px solid white;
        padding: 5px 15px;
        border-radius: 5px;
        margin-left: 64rem;
      }
    }
  }
`;
