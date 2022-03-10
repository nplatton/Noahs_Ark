import React from "react";
import { useHistory } from "react-router-dom";

import "./style.css";

export default () => {
  const history = useHistory();

  return (
    <div id="not-found-div">
      <p id="not-found" role="alert">
        Sorry, we can't find the page "{history.location.pathname}"!
      </p>
    </div>
  );
};
