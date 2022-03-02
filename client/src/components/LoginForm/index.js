import React, { useState, useEffect } from "react";

import "./style.css";

export default () => {
  function handleSubmission(e) {
    e.preventDefault();
    try {
    } catch (err) {
      console.warn(err);
    }
  }
  return (
    <>
      <form>
        <div className="field">
          <label htmlFor="login-name">Username/email</label>
          <input
            type="text"
            id="login-name"
            name="login-name"
            placeholder="Enter your username or email..."
          ></input>
        </div>
        <div className="field">
          <label htmlFor="login-pswrd">Password</label>
          <input
            type="text"
            id="login-pswrd"
            name="login-pswrd"
            placeholder="Enter your password..."
          ></input>
        </div>
        <input onClick={handleSubmission} type="submit" value="Submit"></input>
      </form>
    </>
  );
};
