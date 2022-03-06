import React from "react";

import "./style.css";

export default ({ token, setToken }) => {
  return (
    <>
      <div id="about-outer">
        <div id="about-inner">
          <div className="about-tab">
            <aside id="childhood-aside">
              <h1>Big teeth means big personality!</h1>
              <p></p>
            </aside>
            <img
              id="childhood-img"
              src="../../images/childhood.jpg"
              alt="Photo of Noah as a young lad"
              width="35%"
            />
          </div>
          <div className="about-tab">
            <img
              id="climbing-img"
              src="../../images/home_picture_3.jpg"
              alt="Photo of Noah holding 2 bouldering pads"
              width="35%"
            />
            <aside id="climbing-aside">
              <h1>Coding comes second...</h1>
              <p>
                I mean, I love coding but it doesn't hold a candle to my{" "}
                <strong>true</strong> love. <br />
                The main aspect of coding that appeals to me is the problem
                solving aspect; there are an infinite number of problems to
                solve and the way you solve each one can be completely unique to
                you. Coincidentally, this perfectly summarises my love for
                climbing. I began when I was 8 years old and it developed from
                ...
              </p>
              <p className="it-text">
                <i>a-Friday-night-lesson-whilst-mother-was-in-spin-class</i>
              </p>
              <p>to ...</p>
              <p className="it-text">
                <i>
                  an-every-night-session-whilst-there-was-work-I-should-be-doing.
                </i>
              </p>
              <p>
                Nothing challenges me and pushes me like climbing does and, for
                me, it's the only thing that can drag me away from my laptop!
              </p>
            </aside>
          </div>
          <div className="about-tab">
            <aside id="uni-aside">
              <h1>Coolest kid at Warwick uni</h1>
              <p></p>
            </aside>
            <img
              id="uni-img"
              src="../../images/uni_resized.jpg"
              alt="Photo of Noah at university"
              width="35%"
            />
          </div>
        </div>
      </div>
    </>
  );
};
