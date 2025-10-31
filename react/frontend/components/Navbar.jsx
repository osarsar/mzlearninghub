import "../style/css/Navbar.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../style/image/logo1.png";
import facebook from "../style/image/facebook.png";
import instagram from "../style/image/instagram.png";
import linkedin from "../style/image/linkedin.png";
import whatsapp from "../style/image/whatsapp.png";
import menu from "../style/image/menu2.png";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleScrollTo = (section) => {
    navigate("/", { state: { scrollTo: section } });
  };

  return (
    <nav className="navbar">
      {/* -------- Logo -------- */}
      <div className="navbar-logo">
        <a href="/">
          <img className="logo" src={logo} alt="MZ Learning Hub"/>
        </a>
      </div>

      {/* -------- Menu principal -------- */}
      <ul id="MenuList" className={showMenu ? "visible" : ""}>
        <a href="/">Accueil</a>
        <a onClick={() => handleScrollTo("services")}>Services</a>
        <a onClick={() => handleScrollTo("methodo")}>Méthodologie</a>
        <a onClick={() => handleScrollTo("why-us")}>Pourquoi nous</a>
        <a onClick={() => handleScrollTo("contact")}>Contact</a>
        <a href="https://wa.me/447901910703" className="cta">
          Devis rapide
        </a>
      </ul>

      {/* -------- Réseaux sociaux -------- */}
      <div className="social-links">
        {/* <a href="#"><img src={facebook} alt="Facebook" /></a>
        <a href="#"><img src={instagram} alt="Instagram" /></a>
        <a href="#"><img src={linkedin} alt="LinkedIn" /></a> */}
        <a href="https://wa.me/447901910703">
          <img src={whatsapp} alt="WhatsApp" />
        </a>
      </div>

      {/* -------- Bouton menu mobile -------- */}
      <div className="menu-icon" onClick={toggleMenu}>
        <img src={menu} alt="Menu" />
      </div>
    </nav>
  );
}

export default Navbar;
