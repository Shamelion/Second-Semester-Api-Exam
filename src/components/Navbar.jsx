import React from "react";
// import React, { useState } from 'react';

import {
  FaGithub,
  FaEnvelope,
  FaTwitter,
  FaLinkedin,
  FaMedium,
} from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">
      <FaGithub className="github-icon" />
      <h1>Shamelion&apos;s GitHub Portfolio.</h1>
      <div className="/">
        Web Developer <span className="/">|</span> HTML{" "}
        <span className="/">|</span> CSS <span className="/">|</span> JavaScript{" "}
        <span className="/">|</span> React <br /> <span className="/"></span>
        <div>Public Repository : 5</div>
      </div>
      <div>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/Shamelion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a href="mailto:adekunlesangoniran@gmail.com">
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://twitter.com/@4_dhustle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sangoniran-adekunle-a138612ba/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://medium.com/@adekunlesangoniran"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMedium size={24} />
          </a>
        </div> 
      </div><hr />
    </div> 
  );
}

export default Navbar;
