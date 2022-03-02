import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "./pages";
// import { Header, Footer } from "./layout";

import "./App.css";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <Switch>
        <Route exact path="/"> */}
      <Home />
      {/* </Route>
      </Switch> */}
      {/* <Footer /> */}
    </>
  );
};

export default App;
