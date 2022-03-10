import "regenerator-runtime/runtime";

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import jwt_decode from "jwt-decode";

import { useAuthContext } from "../../contexts/Auth";

import "./style.css";

export default ({ setToken }) => {
  const { login } = useAuthContext();
  const history = useHistory();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState();
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const incompleteForm = () => Object.values(formData).some((value) => !value);

  const handleSubmission = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log(formData);
      await login(formData);
      setFormData({
        username: "",
        password: "",
      });
      history.push("/");
    } catch (err) {
      setLoading(false);
      setErr(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmission}>
        <div className="field">
          <label htmlFor="username">Username/email</label>
          <input
            onChange={handleInput}
            type="text"
            id="login-name"
            name="username"
            placeholder="Enter username or email..."
            value={formData.username}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleInput}
            type="password"
            id="login-pswrd"
            name="password"
            placeholder="Enter password..."
            value={formData.password}
          />
        </div>
        <input type="submit" value="Login" disabled={incompleteForm()} />
      </form>
      {err && <div id="error">{err}</div>}
      {loading && <div id="loading">{loading}</div>}
    </>
  );
};
