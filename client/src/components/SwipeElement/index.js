import React, { useState } from "react";

import "./style.css";

import { LoginForm, RegForm } from "..";

export default () => {
  const [left, setLeft] = useState(true);

  function handleMouseDown(e) {
    sessionStorage.setItem("downX", e.clientX);
  }

  function handleMouseUp(e) {
    return e.clientX;
  }

  function handleSwipe(e) {
    const downX = sessionStorage.getItem("downX");
    const upX = handleMouseUp(e);
    if (left) {
      if (downX > upX) {
        e.target.style.setProperty("--i", 1);
        setLeft(!left);
      }
    } else {
      if (downX < upX) {
        e.target.style.setProperty("--i", 0);
        setLeft(!left);
      }
    }
  }

  return (
    <>
      <div
        role="region"
        aria-label="swiper"
        onMouseDown={handleMouseDown}
        onMouseUp={handleSwipe}
        id="outer-container"
        className="hide-scrollbar"
      >
        <div id="swipe-container">
          <div id="left-item">
            <LoginForm />
            <p>Swipe right to register!</p>
          </div>
          <div id="right-item">{/* <RegForm /> */}</div>
        </div>
      </div>
    </>
  );
};
