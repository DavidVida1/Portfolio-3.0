import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerchildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <ContactContainer id="contact">
      <article className="contactText">
        <motion.h3
          variants={textVariants}
          initial="initial"
          animate={isInView && "animate"}
          ref={ref}
          whileHover={{ color: "white" }}
        >
          Have an awesome idea?
        </motion.h3>

        <h4>Let's team up and make it come alive with a touch of</h4>
        <h4>Creativity and a lot of technical magic in web development!</h4>
      </article>

      <div className="wrapper">
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
            placeholder="Enter Email..."
            name="email"
            id="email"
            required
          ></input>

          <label for="subject"></label>
          <textarea
            id="message"
            type="message"
            name="message"
            placeholder="Write something.."
            className="message"
            rows="5"
          ></textarea>

          <input type="submit" value="Submit" />
        </form>

        <div className="socials">
          <h6>Socials</h6>
          <ul>
            <li>
              <a>
                <p>LinkedIn</p>
              </a>
            </li>
            <li>
              <a>
                <p>Github</p>
              </a>
            </li>
          </ul>
        </div>

        <div className="localTime">
          <h6>Local Time</h6>
          <ul>
            <li>
              <p>Montreal</p>
            </li>
            <li>
              <p> 2:00 pm to 2:00 am</p>
            </li>
          </ul>
        </div>
      </div>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.section`
  position: relative;
  width: 100%;
  height: 98vh;
  color: var(--color-white);

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.05) 2%,
    rgba(0, 0, 0, 0.25) 5%,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0.92) 15%,
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 100%
  );

  & .contactText {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & h3 {
      font-size: clamp(3rem, 6.2vw, 12rem);
      text-transform: uppercase;
      letter-spacing: 3px;
      padding: 30px 20px;
    }

    & h4 {
      align-self: center;
      font-size: clamp(2rem, 4.2vw, 5rem);
    }
  }
  & .wrapper {
    position: relative;
    display: grid;
    grid-gap: 10%;
    grid-template-columns: 45% 13% 13%;
    padding-top: 75px;
    margin: 0 100px;

    & .formContainer {
      display: flex;
      flex-direction: column;

      & label {
        font-size: 2.5rem;
      }

      & input[type="text"],
      input[type="email"] {
        color: var(--color-white);
        width: 100%;
        margin: 30px 0px;
        padding: 5px 0px;
        border: 1px solid transparent;
        box-sizing: border-box;
        resize: vertical;
        background: transparent;
        outline-style: none;
        border-bottom: 1px solid var(--color-white);
      }

      & textarea {
        color: var(--color-white);
        width: 100%;
        padding: 5px 0px;
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
        font-size: 1.5rem;
      }

      & input[type="submit"] {
        background-color: rgba(99, 99, 99, 1);
        color: white;
        padding: 12px 20px;
        margin-top: 20px;
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
      }
    }

    & .socials,
    .localTime {
      margin-top: 18px;
      & h6 {
        position: relative;

        &::after {
          position: absolute;
          content: "";
          height: 1px;
          width: 100%;
          bottom: -1rem;
          left: 0;
          background: var(--color-white);
        }
      }

      & ul {
        font-size: 2rem;
        font-weight: 300;
        & li:first-child {
          padding: 25px 0;
        }
      }
    }

    @media screen and (max-width: 700px) {
      margin: 0px 50px;
    }
    @media screen and (max-width: 600px) {
      margin: 10px;
    }
  }
`;
