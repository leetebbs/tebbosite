import React from "react";
import "../styles/portfolio.css";
import bees from "../images/bees.png";
import pots from "../images/pots.png";
import badcr from "../images/badcr.png";
import shortr from "../images/shortr.png";
import contact from "../images/contact.png";
import { ImGithub } from 'react-icons/im'
import { CgWebsite } from 'react-icons/cg'

function Portfolio() {
  return (
    <>
      <div className="container">
        <div className="title">Portfolio</div>
        <div className="bees">
            <a href="https://savethebeesgoreli.netlify.app/" rel="noreferrer" target="_blank">
            <img src={bees} alt="" />
            </a>
          <div className="text">
            This is simple bare bones project to demonstrate the connection of a
            simple ERC721 smart contract to the frontend with metamask using
            simple javascript.
          </div>
          <div className="icons">
          <a href="https://github.com/Tebbo-Web-Devs/beesdapp" rel="noreferrer" target="_blank">
          <ImGithub />
          </a>
          <a href="https://savethebeesgoreli.netlify.app/" rel="noreferrer" target="_blank">
          <CgWebsite />
          </a>
          </div>
          
        </div>
        <div className="pots">
        <a href="https://potty-pots.vercel.app/" rel="noreferrer" target="_blank">
          <img src={pots} alt="" />
          </a>
          <div className="text">
            A React.js site built for a young artist deployed to the Mumbai
            testnet. Using ERC721 Smart contract standards.
          </div>
          <div className="icons">
          <a href="https://github.com/leetebbs/potty-pots" rel="noreferrer" target="_blank">
          <ImGithub />
          </a>
          <a href="https://potty-pots.vercel.app/" rel="noreferrer" target="_blank">
          <CgWebsite />
          </a>
          </div>
        </div>
        <div className="badcr">
        <a href="https://badcr.netlify.app/" rel="noreferrer" target="_blank">
          <img src={badcr} alt="" />
          </a>
          <div className="text">
          A React.js site deployed to the polygon network using the ERC721A smart contract. Using canvas, css and react.
          </div>
          <div className="icons">
          <a href="https://github.com/leetebbs/BADCR" rel="noreferrer" target="_blank">
          <ImGithub />
          </a>
          <a href="https://badcr.netlify.app/" rel="noreferrer" target="_blank">
          <CgWebsite />
          </a>
          </div>
        </div>
        <div className="shortr">
        <a href="https://shortr-zeta.vercel.app/" rel="noreferrer" target="_blank">
          <img src={shortr} alt="" />
          </a>
          <div className="text">
          React.js site leveraging the bitly API to shorten any URL.
          </div>
          <div className="icons">
          <a href="https://github.com/leetebbs/shortr" rel="noreferrer" target="_blank">
          <ImGithub />
          </a>
          <a href="https://shortr-zeta.vercel.app/" rel="noreferrer" target="_blank">
          <CgWebsite />
          </a>
          </div>
          <a href="mailto:tebbouk@gmail.com">
            <img className="contactButton" src={contact} alt="contact"></img>
          </a>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
