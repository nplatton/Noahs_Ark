import React, { useState, useContext } from "react";

import jwt_decode from "jwt-decode";
import axios from "axios";

const AuthContext = React.createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getCurrentUser());

  function getCurrentUser() {
    const token = localStorage.getItem("token");
    if (token) {
      return jwt_decode(token).username;
    }
    return null;
  }

  const login = (userData) => {
    return new Promise(async (res, rej) => {
      try {
        const options = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const { data } = await axios.post(
          `${process.env.API_URL}/auth/login`,
          userData,
          options
        );

        if (data.success) {
          console.log("Success!");
        } else {
          throw new Error("Login not authorised");
          // incorrectPassword(e);
        }

        loginUser(data.token);
        res("Login successful");
      } catch (err) {
        rej(`Login error: ${err}`);
      }
    });
  };

  const loginUser = (token) => {
    localStorage.setItem("token", token);
    const user = jwt_decode(token);
    setUser(user.username);
  };

  // const register = (userData) => {
  //   return new Promise(async (res, rej) => {
  //     try {
  //       const options = {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       };

  //       const { data } = await axios.post(
  //         `${process.env.API_URL}/auth/login`,
  //         userData,
  //         options
  //       );

  //       if (data.err) {
  //         throw Error(data.err);
  //       }

  //       await login(userData);

  //       res("Registration successful");
  //     } catch (err) {
  //       rej(`Registration error: ${err}`);
  //     }
  //   });
  // };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  const auth = { login, user, logout };

  return (
    <>
      <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
    </>
  );
};
