import React, { useLayoutEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import { Home, About, Auth, Projects } from "./pages";
import { Header, Footer } from "./layout";

import "./App.css";

const App = () => {
  const [token, setToken] = useState();
  useLayoutEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, [token]);

  return (
    <>
      <Header token={token} setToken={setToken} />
      <Switch>
        <Route exact path="/">
          <Home token={token} setToken={setToken} />
        </Route>
        <Route exact path="/about">
          <About token={token} setToken={setToken} />
        </Route>
        <Route exact path="/projects">
          <Projects token={token} setToken={setToken} />
        </Route>
        {/* <Route exact path="/auth">
          <Auth token={token} setToken={setToken} />
        </Route> */}
      </Switch>
      {/* <Footer /> */}
    </>
  );
};

export default App;
