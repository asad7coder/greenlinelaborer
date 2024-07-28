import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
// import menu_icon from "../../assets/menu-icon.png";

// toggle

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    // mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    setMobileMenu(!mobileMenu);
  };
  return (
    <header>
      <nav>
        <Link to="hero" smooth={true} offset={-150} duration={500}>
          <h1 id="logo">GreenLineLaborer</h1>
        </Link>
        <ul className={mobileMenu ? "" : "hide-mobile"}>
          <li>
            <Link to="hero" smooth={true} offset={-150} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} offset={-160} duration={500}>
              Service
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={-200} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="team" smooth={true} offset={-170} duration={500}>
              Team
            </Link>
          </li>
          <li>
            <Link to="hCustomers" smooth={true} offset={-200} duration={500}>
              Happy_Customer
            </Link>
          </li>
          <li>
            {" "}
            <Link to="subscribe" smooth={true} offset={-100} duration={500}>
              <button className="btn navBtn">Contact</button>
            </Link>
          </li>
        </ul>
        <span onClick={toggleMenu}>tt</span>
      </nav>
    </header>
  );
};

export default Navbar;
