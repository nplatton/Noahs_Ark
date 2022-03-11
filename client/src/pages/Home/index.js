import React from "react";
import Helmet from "react-helmet";

import "./style.css";

export default () => {
  return (
    <>
      <Helmet>
        <style>
          {`
            body {
              overflow-x: hidden;
            }
          `}
        </style>
      </Helmet>
      <div id="home-main">
        <div id="home-circles">
          <a role="link" href="https://github.com/nplatton" target="_blank">
            <i className="fab fa-github fa-2x fa-border" id="github"></i>
          </a>
          <img
            id="main-circle"
            src="../../images/home_picture.jpg"
            alt="Photo of Noah looking smart"
            width="20%"
          />
          <a
            role="link"
            href="https://www.linkedin.com/in/noah-platton-4568bb1a2/"
            target="_blank"
          >
            <i className="fab fa-linkedin fa-2x fa-border" id="linkedin"></i>
          </a>
        </div>
        <p id="intro-text">
          Hi, I'm Noah and I'm a full stack developer and maths graduate.
        </p>
        <div data-testid="tech-region" id="technologies">
          <i className="fab fa-html5 fa-3x" id="html5"></i>
          <i className="fab fa-css3 fa-3x" id="css3"></i>
          <i className="fab fa-node-js fa-3x" id="nodejs"></i>
          <i className="fab fa-react fa-3x" id="react"></i>
          <i className="fab fa-duotone fa-python fa-3x" id="python"></i>
          <i className="fab fa-docker fa-3x" id="docker"></i>
        </div>
      </div>
    </>
  );
};
