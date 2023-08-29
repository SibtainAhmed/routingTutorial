import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul className="navbarClass">
        <li>
          <NavLink className="navbar-links" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-links" to="/About">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-links" to="/Contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-links" to="/xyz">
            Page404
          </NavLink>
        </li>
      </ul>
      <br />
    </div>
  );
}
export default Navbar;
