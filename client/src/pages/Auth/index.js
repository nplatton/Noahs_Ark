import React, { useState } from "react";

import { SwipeElement } from "../../components";

import "./style.css";

export default ({ token, setToken }) => {
  if (!token) {
    return (
      <>
        <div className="auth-page">
          <SwipeElement setToken={setToken} />
        </div>
      </>
    );
  }
  return <>{/* <h1>Welcome to Noah's Ark</h1> */}</>;
};
