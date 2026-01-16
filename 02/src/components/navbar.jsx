import { NavLink } from "react-router-dom";
import "./Navbar.css";


function Navbars() {
  return (
    <nav>
      <h2>Navbar</h2>

      <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>
        Home
      </NavLink>

      <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
        About
      </NavLink>

      <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbars;
