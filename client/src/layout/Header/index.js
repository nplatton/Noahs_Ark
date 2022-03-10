import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts/Auth";

import "./style.css";

export default () => {
  const { user, setUser } = useAuthContext();

  function handleLogout() {
    localStorage.clear();
    setUser(null);
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
        {!user ? (
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
