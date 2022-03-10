import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home, About, Auth, Projects } from "./pages";
import { Header, Footer } from "./layout";

import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/auth">
          <Auth />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </>
  );
};

export default App;
