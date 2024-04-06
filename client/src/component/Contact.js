import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";

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
            placeholder="Share your idea..."
            className="message"
            rows="5"
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
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
      font-size: clamp(2rem, 6vw, 12rem);
      text-transform: uppercase;
      letter-spacing: 3px;
      padding: 30px 20px;
    }

    & h4 {
      align-self: center;
      font-size: clamp(1rem, 3.6vw, 5rem);
    }
  }
  & .wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    margin: 0 100px;

    & .formContainer {
      display: flex;
      flex-direction: column;
      padding: 30px 50px;
      /*border-radius: 10px;
      border: 1px solid rgba(203, 155, 81, 0.2);
      box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;*/
      width: 50%;

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
        border-bottom: 2px solid var(--color-white);
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
        border-bottom: 2px solid var(--color-white);
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

        @media screen and (max-width: 800px) {
          align-self: center;
        }
      }

      & .nameWrapper {
        display: flex;
        gap: 0px 1rem;

        & .nameContainer {
          width: 100%;
        }

        @media screen and (max-width: 800px) {
          flex-direction: column;
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