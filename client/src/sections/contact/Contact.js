import React from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h3>Contact</h3>

      <div className="wrapper">
        <aside className="leftSide">
          <h4>Have an awesome idea? Let's bring it to life.</h4>
          <p>
            I am currently not available for freelance work. I am accepting new
            projects starting from February 2022.
          </p>
        </aside>

        <aside className="rightside">
          <form
            className="formContainer"
            action="https://formspree.io/f/xjvqzolw"
            method="POST"
          >
            <div className="nameWrapper">
              <div className="nameContainer">
                <label for="fname"></label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name.."
                />
              </div>

              <div className="nameContainer">
                <label for="lname"></label>
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Your last name.."
                />
              </div>
            </div>

            <label for="email"></label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              id="email"
              required
            ></input>

            <label for="subject"></label>
            <textarea
              id="message"
              name="message"
              placeholder="Write something.."
              className="message"
              rows="5"
            ></textarea>

            <input type="submit" value="Submit" />
          </form>
        </aside>
      </div>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 30px;
  color: var(--color-white);

  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 0.9) 93%,
    rgba(0, 0, 0, 0) 100%
  );

  & h3 {
    margin: 0 110px;
  }
  & .wrapper {
    position: relative;
    display: grid;
    grid-template-columns: 50% auto;
    margin: 0 100px;

    & .leftSide {
      width: 90%;
      & p {
        font-size: 3rem;
      }
    }

    & .rightside {
      display: grid;
      grid-template-rows: auto 11rem;

      & .formContainer {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        & label {
          font-size: 2.5rem;
        }

        & input[type="text"],
        input[type="email"],
        select,
        textarea {
          width: 100%;
          padding: 8px;
          border: 1px solid transparent;
          box-sizing: border-box;
          resize: vertical;
          background: transparent;
          outline-style: none;
          border-bottom: 1px solid var(--color-white);
        }

        & input::placeholder,
        textarea::placeholder {
          color: var(--color-white);
        }

        & input[type="submit"] {
          background-color: rgba(99, 99, 99, 1);
          color: white;
          padding: 12px 20px;
          width: 150px;
          border: none;
          border-radius: 4px;
          cursor: pointer;

          &:hover {
            background-color: #45a049;
          }
        }

        & .nameWrapper {
          display: flex;
          gap: 0px 1rem;

          & .nameContainer {
            width: 100%;
          }

          @media screen and (max-width: 650px) {
            flex-direction: column;
            gap: 1rem 0px;
          }
        }
      }
    }
  }
`;
