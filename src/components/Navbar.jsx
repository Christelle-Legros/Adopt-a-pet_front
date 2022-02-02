import React from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <Link to="/animals">
          <li className="navbar__title">A adopter</li>
        </Link>

        <Link to="/">
          <li className="navbar__logo">
            <img src={logo} alt="Logo Adopt a pet" />
          </li>{" "}
        </Link>

        <Link to="/associations">
          <li className="navbar__title">Associations</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
