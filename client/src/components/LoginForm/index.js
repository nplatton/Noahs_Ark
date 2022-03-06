import "regenerator-runtime/runtime";

import React, { useState } from "react";
import axios from "axios";

import jwt_decode from "jwt-decode";

import "./style.css";

export default ({ setToken }) => {
  const handleSubmission = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        username: e.target["login-name"].value,
        password: e.target["login-pswrd"].value,
      };
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:3000/auth/login",
        userData,
        options
      );

      if (data.success) {
        console.log("Success!");
      } else {
        console.log("Failure");
        incorrectPassword(e);
      }
      setToken(data.token);
      loginUser(data.token);
    } catch (err) {
      console.warn(err);
    }
  };

  const loginUser = (token) => {
    const user = jwt_decode(token);
    localStorage.setItem("token", token);
    localStorage.setItem("username", user.username);
  };

  const incorrectPassword = (e) => {
    e.target.childNodes[1].classList.add("wrong-pswrd");
  };

  return (
    <>
      <form onSubmit={handleSubmission}>
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
            type="password"
            id="login-pswrd"
            name="login-pswrd"
            placeholder="Enter your password..."
          ></input>
        </div>
        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
};
