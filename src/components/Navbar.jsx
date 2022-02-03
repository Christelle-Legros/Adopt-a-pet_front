import React from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import loginBtn from "../assets/Login_btn.png";
import addBtn from "../assets/Add_btn.png";

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
          </li>
        </Link>

        <Link to="/associations">
          <li className="navbar__title">Associations</li>
        </Link>

        <Link to="/login">
          <button className="navbar__login">
            <img src={loginBtn} alt="Bouton de connexion" />
          </button>
        </Link>

        <button className="navbar__add">
          <img src={addBtn} alt="Bouton d'ajout d'annonce" />
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
