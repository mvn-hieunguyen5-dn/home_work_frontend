import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
export default function Header() {
  // const user = JSON.parse(localStorage.getItem('user'));
  const { isLogged, logout, user } = useAuth();
  return (
    <>
      <header className="header wrap-content wrap-between">
        <nav className="header-links ">
          <ul className="header-list wrap-content">
            <li className="header-item">
              <NavLink activeClassName="active" exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" exact to="/product">
                Products
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex-grow"></div>
        <ul className="header-actions-list header-list">
          <li>
            <NavLink activeClassName="active" to="/account"></NavLink>
          </li>
          {!isLogged ? (
            <li>
              <NavLink activeClassName="active" to="/auth/login">
                {" "}
                Login{" "}
              </NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink activeClassName="active" to="/auth/MyAccount">
                  <span>{user.email}</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  onClick={() => logout()}
                  to="/auth/login"
                >
                  <span> <i className="fa-solid fa-door-open"></i> Logout</span>
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </header>
    </>
  );
}
