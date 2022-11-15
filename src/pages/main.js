import React from "react";
import hero from "../images/hero.png";
import contact from "../images/contact.png";
import lens from "../images/lens.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import "../styles/App.css";

function Main() {
  return (
    <>
      <div className="container">
        <img className="hero" src={hero} alt="hero-logo"></img>
        <div className="main-text">
          <h3>I am a web3 developer</h3>
          <h3>based in the UK.</h3>
        </div>
        <h1>Get in Touch</h1>
        <div className="contactBox">
          <p>Want to work together or</p>
          <p>have any questions ?</p>
          <a href="mailto:tebbouk@gmail.com">
            <img className="contactButton" src={contact} alt="contact"></img>
          </a>
        </div>
        <div className="socials">
          <a
            href="https://www.lensfrens.xyz/tebbo.lens"
            target="_blank"
            rel="noreferrer"
          >
            <img className="socialBtn" src={lens} alt="lensLogo"></img>
          </a>
          <a
            href="https://twitter.com/LTebbs2"
            target="_blank"
            rel="noreferrer"
          >
            <img className="socialBtn" src={twitter} alt="twitterLogo"></img>
          </a>
          <a
            href="https://www.linkedin.com/in/tebbo-"
            target="_blank"
            rel="noreferrer"
          >
            <img className="socialBtn" src={linkedin} alt="linkedinLogo"></img>
          </a>
        </div>
      </div>
    </>
  );
}

export default Main;
