import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

export default ({ token, setToken }) => {
  function handleClick() {
    localStorage.clear();
    setToken(undefined);
  }

  return (
    <nav>
      <div className="nav-div">
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink exact to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink exact to="/projects" activeClassName="active">
          Projects
        </NavLink>
      </div>
      <div className="nav-div">
        {!token ? (
          <>
            <NavLink exact to="/auth" activeClassName="active">
              Login / Register
            </NavLink>
          </>
        ) : (
          <>
            <NavLink onClick={handleClick} to="/" activeClassName="active">
              Logout
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};
