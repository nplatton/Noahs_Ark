import React from "react";

import "./style.css";

export default ({ token, setToken }) => {
  return (
    <>
      <div id="home-main">
        <h1>Hi! Welcome to the Ark</h1>
        <div id="home-circles">
          <a href="https://github.com/nplatton" target="_blank">
            <i className="fa fa-github fa-2x fa-border" id="github"></i>
          </a>
          <img
            id="main-circle"
            src="../../images/home_picture.jpg"
            alt="Photo of Noah looking smart"
            width="35%"
          />
          <a
            href="https://www.linkedin.com/in/noah-platton-4568bb1a2/"
            target="_blank"
          >
            <i className="fa fa-linkedin fa-2x fa-border" id="linkedin"></i>
          </a>
        </div>
      </div>
    </>
  );
};
