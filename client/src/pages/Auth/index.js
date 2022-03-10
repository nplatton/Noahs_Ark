import React from "react";

import { SwipeElement } from "../../components";
import { useAuthContext } from "../../contexts/Auth";

import "./style.css";

export default () => {
  const { user } = useAuthContext();

  return (
    <>
      {user ? (
        <h1>Welcome to the Arkives, {user}!</h1>
      ) : (
        <div className="auth-page">
          <SwipeElement />
        </div>
      )}
    </>
  );
};
