import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
import "./Navbar.css";
const logo =
  "https://res.cloudinary.com/nonsoblip/image/upload/v1620008559/logo.36f34a9f_uzyyrb.svg";
const Sidebar = () => {
  return (
    <nav className="col-md-2 side-bar">
      <div className="sidebar-sticky">
        <Link className="logo-link" to="/dashboard">
          <span className="img-wrap">
            <img src={logo} alt="Company Logos" />
          </span>
          <h5 className="logo-text">Nonso</h5>
        </Link>
        <ul className=" list-wrap flex-row-sm">
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10px"
                  height="14px"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-home"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </span>{" "}
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              <span>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10px"
                  height="14px"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-user"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </span>{" "}
              <span>Add Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
