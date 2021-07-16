import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-nav w-100">
        <div className="nav-items">
          <div className="nav-item">
            <NavLink to="#">
              <i className="far fa-user icon"></i>
              <span className="title"> You </span>
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink className="" aria-current="page" to="#">
              <i className="fas fa-users icon"></i>
              <span className="title"> Your team</span>
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="#" className="active-link">
              <i className="fas fa-user-shield icon"></i>
              <span className="title"> Admin</span>
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


