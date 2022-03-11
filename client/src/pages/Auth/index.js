import React from "react";

import { SwipeElement } from "../../components";
import { useAuthContext } from "../../contexts/Auth";

import "./style.css";

export default () => {
  return (
    <div className="auth-page">
      <SwipeElement />
    </div>
  );
};
