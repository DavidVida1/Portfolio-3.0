import React from "react";
import styled from "styled-components";
import { BiLogoLinkedin } from "react-icons/bi";
import { LuGithub } from "react-icons/lu";
import { AiOutlineInstagram, AiOutlineDownload } from "react-icons/ai";

const Contact = () => {
  return (
    <ContactContainer>
      <h3>Contact</h3>
      <div className="wrapper">
        <div className="container">
          <aside className="side">
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

  .wrapper {
    position: relative;

    .container {
      & .side {
        display: grid;
        width: 100%;
        grid-template-rows: auto 11rem;

        & .formContainer {
          display: flex;
          flex-direction: column;
          width: 50%;
          gap: 1rem;
          margin: 0 100px;
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
            background-color: var(--color-black);
            color: white;
            padding: 12px 20px;
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
  }
`;
