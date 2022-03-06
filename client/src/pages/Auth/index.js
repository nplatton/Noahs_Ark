import React, { useState } from "react";

import { SwipeElement } from "../../components";

export default ({ token, setToken }) => {
  if (!token) {
    return (
      <>
        <SwipeElement setToken={setToken} />
      </>
    );
  }
  return <>{/* <h1>Welcome to Noah's Ark</h1> */}</>;
};
