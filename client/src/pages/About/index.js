import React, { useEffect, useState } from "react";

import "./style.css";

export default ({ token, setToken }) => {
  const [tab, setTab] = useState(0);

  useEffect(() => {
    document.addEventListener("keydown", handleScroll);

    return () => {
      document.removeEventListener("keydown", handleScroll);
    };
  }, [tab]);

  function handleScroll(e) {
    if (e.keyCode == 38 && tab > 0) {
      e.target.children[0].lastChild.firstChild.style.setProperty(
        "--i",
        tab - 1
      );
      setTab((prev) => prev - 1);
    } else if (e.keyCode == 40 && tab < 2) {
      e.target.children[0].lastChild.firstChild.style.setProperty(
        "--i",
        tab + 1
      );
      setTab((prev) => prev + 1);
    }
  }

  function handleScrollUp(e) {
    if (tab > 0) {
      // if (!e.)
      e.target.parentNode.parentNode.style.setProperty("--i", tab - 1);
      setTab((prev) => prev - 1);
    }
  }

  function handleScrollDown(e) {
    if (tab < 2) {
      e.target.parentNode.parentNode.style.setProperty("--i", tab + 1);
      setTab((prev) => prev + 1);
    }
  }

  return (
    <>
      <div id="about-outer">
        <div id="about-inner">
          <div className="about-tab">
            <div className="content">
              <aside className="about-aside">
                <h2>Big teeth means big personality!</h2>
                <p></p>
              </aside>
              <img
                id="childhood-img"
                src="../../images/childhood.jpg"
                alt="Photo of Noah as a young lad"
                width="35%"
              />
            </div>
            <div onMouseLeave={handleScrollDown} className="scroll-down">
              Scroll Down
            </div>
          </div>
          <div className="about-tab">
            <div onMouseLeave={handleScrollUp} className="scroll-up">
              Scroll Up
            </div>
            <div className="content">
              <img
                id="climbing-img"
                src="../../images/home_picture_3.jpg"
                alt="Photo of Noah holding 2 bouldering pads"
                width="35%"
              />
              <aside className="about-aside">
                <h2>Coding comes second...</h2>
                <p>
                  I mean, I love coding but it doesn't hold a candle to my{" "}
                  <strong>true</strong> love. <br />
                  The main aspect of coding that appeals to me is the problem
                  solving aspect; there are an infinite number of problems to
                  solve and the way you solve each one can be completely unique
                  to you. Coincidentally, this perfectly summarises my love for
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
                  Nothing challenges me and pushes me like climbing does and,
                  for me, it's the only thing that can drag me away from my
                  laptop!
                </p>
              </aside>
            </div>
            <div onMouseLeave={handleScrollDown} className="scroll-down">
              Scroll Down
            </div>
          </div>
          <div className="about-tab">
            <div onMouseLeave={handleScrollUp} className="scroll-up">
              Scroll Up
            </div>
            <div className="content">
              <aside className="about-aside">
                <h2>Coolest kid at Warwick uni</h2>
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
      </div>
    </>
  );
};
