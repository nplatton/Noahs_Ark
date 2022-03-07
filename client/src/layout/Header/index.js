import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

export default ({ token, setToken }) => {
  function handleLogout() {
    localStorage.clear();
    setToken(null);
  }

  return (
    <nav>
      <div className="nav-div">
        <NavLink exact to="/" className="nav-item" activeClassName="active">
          Home
        </NavLink>
        <NavLink
          exact
          to="/about"
          className="nav-item"
          activeClassName="active"
        >
          About
        </NavLink>
        <NavLink
          exact
          to="/projects"
          className="nav-item"
          activeClassName="active"
        >
          Projects
        </NavLink>
      </div>
      <div className="nav-div">
        {!token ? (
          <>
            <NavLink
              exact
              to="/auth"
              className="nav-item"
              activeClassName="active"
            >
              Login / Register
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              onClick={handleLogout}
              to="/"
              className="nav-item"
              activeClassName="active"
            >
              Logout
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};
