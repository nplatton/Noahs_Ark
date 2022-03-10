import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home, About, Auth, Projects, Secret, NotFound } from "./pages";
import { Header, Footer } from "./layout";

import "./App.css";
import { useAuthContext } from "./contexts/Auth";
import { Redirect } from "react-router-dom";

const App = () => {
  const { user } = useAuthContext();

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        {user ? (
          <Route path="/secret">
            <Secret />
          </Route>
        ) : (
          <Redirect from="/secret" to="/">
            <Home />
          </Redirect>
        )}
        <Route>
          <NotFound />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </>
  );
};

export default App;
