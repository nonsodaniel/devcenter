import React from "react";
import { NavLink } from "react-router-dom";
import "./workspace.scss";
import sideIcon from "../assets/img/side-icon.png";
import Filter from "./Filter";
import Goals from "./Goals";
import Items from "../items/Items";

const Workspace = () => {
  return (
    <div className="workspace">
      <h4>Your Workspace</h4>
      <div className="workspace-tabs my-3 border-bottom">
        <ul className="ws-ul">
          <li className="ws-li">
            <NavLink to="#" className="ws-link">
              People
            </NavLink>
          </li>
          <li className="ws-li">
            <NavLink to="#" className="ws-link">
              Workspace Settings
            </NavLink>
          </li>
          <li className="ws-li">
            <NavLink to="#" className="ws-link active-ws">
              Reporting
            </NavLink>
          </li>
        </ul>
      </div>
      <main className="main mt-4">
        <div className="row">
          <div className="col-md-2 title">
            <ul>
              <li className="side-list">
                <NavLink to="#">Goals</NavLink>
                <img src={sideIcon} alt="side__icon" />
              </li>
            </ul>
          </div>
          <div className="col-md-10 content">
            <Filter />
            <Items />
            <Goals />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Workspace;
