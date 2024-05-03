import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import Footer from "./Footer.js";

const Contact = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-10px" });

  /*InView  animation on the h3 name of the section*/
  const textVariants = {
    initial: {
      x: -300,
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
  /*End of InView  animation on the h3 name of the section*/

  return (
    <>
      <ContactContainer id="contact">
        <article className="contactText">
          <motion.h2
            variants={textVariants}
            initial="initial"
            animate={isInView && "animate"}
            ref={ref}
            whileHover={{ color: "white" }}
          >
            Have an awesome idea?
          </motion.h2>

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
                <label htmlFor="fname"></label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name.."
                />
              </div>

              <div className="nameContainer">
                <label htmlFor="lname"></label>
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Your last name.."
                />
              </div>
            </div>

            <label htmlFor="email"></label>
            <input
              type="email"
              placeholder="Enter Email..."
              name="email"
              id="email"
              required
            ></input>

            <label htmlFor="subject"></label>
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
      <Footer />
    </>
  );
};

export default Contact;

const ContactContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
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
  @media (max-width: 640px) {
    .container {
      max-width: 640px;
    }
  }
  @media (max-height: 640px) {
    height: 100%;
  }

  & .contactText {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 640px) {
      padding-top: 150px;
    }
    & h2 {
      text-transform: uppercase;
      letter-spacing: 3px;
      padding: 30px 20px;

      @media (max-width: 1024px) {
        font-size: clamp(2rem, 4.2vw, 6rem);
      }
    }

    & h4 {
      align-self: center;
      font-size: clamp(1rem, 3vw, 5rem);

      @media (max-width: 640px) {
        font-size: clamp(1rem, 2.5vw, 3rem);
      }
    }
  }

  & .wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding-bottom: 50px;
    margin: 0 100px;

    & .formContainer {
      display: flex;
      flex-direction: column;
      padding: 30px 50px;
      width: 70%;

      @media (max-width: 640px) {
        padding: 0px 50px;
      }

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
        font-size: var(--size-placeholder);
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

        @media screen and (max-width: 768px) {
          align-self: center;
        }
      }

      & .nameWrapper {
        display: flex;
        gap: 0px 1rem;

        & .nameContainer {
          width: 100%;
        }

        @media screen and (max-width: 768px) {
          flex-direction: column;
        }
      }
    }

    @media screen and (max-width: 768px) {
      margin: 0px 50px;
    }
    @media screen and (max-width: 640px) {
      margin: 0px;
    }
  }
`;
