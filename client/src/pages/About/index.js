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
    } else if (e.keyCode == 40 && tab < 3) {
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
    if (tab < 3) {
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
                <p>
                  I grew up Sheffield with my parents and 2-year-younger
                  brother. I think it goes without saying that, being the older
                  brother, I felt the incessant need to wind up my brother and
                  constantly get sent to the naughty step. I find this quite
                  funny since, when we were anywhere but at home, I was the best
                  behaved kid you've ever seen. I guess I just didn't want
                  strangers to see me cry when I was getting yelled at!
                </p>
                <p>Nowadays I'd say it was all in good fun ...</p>
                <p className="quote">
                  <i>" no harm done "</i>
                </p>
                <p>
                  ... I think my brother's chipped tooth may think otherwise.
                </p>
                <p>
                  Of course, it wasn't all scrapping. Like any brotherly
                  relationship there's plenty of competitiveness. In fact, I
                  would never tell him this but I give my brother a lot of
                  credit for how good I am at climbing. After all, he's the
                  better looking sibling... I needed to best him at something!
                </p>
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
                <h2>Coolest kid at Warwick University</h2>
                <p>
                  As a kid I was super shy. I hated trying new things and
                  meeting new people. Honestly, this is primarily the reason I
                  did maths at uni... stick with what you're good at I suppose.{" "}
                  <br />I know it sounds like I'm regretful but that couldn't be
                  farther from reality! I loved maths at university! It just
                  took a while to adjust to the fact that my average grade
                  naturally dropped from 90% to 65% &#128557;.
                </p>
                <p>
                  <strong>But</strong> the toughness of my degree is what made
                  me enjoy it so much, and I'm glad I did else I wouldn't have
                  stayed for a masters, and I wouldn't have started coding!
                </p>
                <p>I have always believed that</p>
                <p className="text-center">
                  <i>things in life will always work out well</i>
                </p>
                <p>
                  and I'm happy to say that my time at Warwick was no exception.
                </p>
              </aside>
              <img
                id="uni-img"
                src="../../images/uni_resized.jpg"
                alt="Photo of Noah at university"
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
                id="travelling-img"
                src="../../images/travelling.jpg"
                alt="Photo of Noah in Singapore"
                width="35%"
              />
              <aside className="about-aside">
                <h2>With my huge nose I blend right in</h2>
                <p>
                  If I'm being completely honest, the only reason I want to earn
                  any money in life is so that I can explore all the incredible
                  places in the world. I reckon I could survive on a single
                  cracker for every meal if it meant I could afford to do this!
                </p>
                <p>
                  I've started to gradually make my way through my list of
                  targets, including Thailand, Singapore, Dubai, and Cuba. It
                  seems that I gravitate towards the warmer countries. It must
                  be the Indian in me!
                </p>
                <p>I'm not sure where I should go next... what do you think?</p>
                <form>
                  {/* Create a form for visitors to make their selection */}
                </form>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
