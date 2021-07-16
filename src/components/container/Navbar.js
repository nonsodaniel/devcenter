import React from "react";
import { NavLink } from "react-router-dom";
import arrow from "../assets/img/logo-arrow.svg";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="nav-logo navbar-items">
        <div className="nav__imgWrap"></div>
        <span className="logo__text">Orangeboat</span>
        <img src={arrow} className="logo__img" alt="" />
      </div>
      <div className="navbar-items navbar-tab" id="navbarText">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <NavLink className="navbar-link" to="#">
              You
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="navbar-link" to="#">
              Your Team
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="navbar-link active-link" to="#">
              Admin
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="acct navbar-items">
        <span className="acct__tag">EU</span>
        <span className="acct__name">Ekene</span>
        <img src={arrow} className="acct__img" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
