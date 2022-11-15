import React from "react";
import "../styles/about.css";
import stack from "../images/stack.png";
import contact from "../images/contact.png";

function About() {
  return (
    <>
      <div className="container">
        <div className="about">About Me</div>
        <div className="textArea">
          I am Lee Tebbs a Developer based in the UK.
          <br />
          <br />I help designers, small agencies and businesses bring their
          ideas to life. Turning your requirements into quality websites and
          interactive Web3 Dapps on time and on budget.
        </div>
        <div className="stack">
          <img className="stackImage" src={stack} alt="" />
        </div>
        <div className="contact">
          <a href="mailto:tebbouk@gmail.com">
            <img className="contactButton" src={contact} alt="contact"></img>
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
