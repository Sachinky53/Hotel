import React, { useState } from "react";
import "./NavBar.css";
import { VscAccount } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileMenu = () => {
    setProfileOpen(!profileOpen);
  };

  return (
    <nav className="nav-bar">
      <div className="hamburger" onClick={toggleMenu}>
        <RxHamburgerMenu />
      </div>

      <div className="nav-left">
        <h2 className="brand-name">Mr Hotelier</h2>
      </div>

      <div className={`nav-center ${isOpen ? "active" : ""}`}>
        <ul className="nav-center-option">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
        </ul>
      </div>

      <div className={`admin-control ${profileOpen ? "active" : ""}`}>
        <button className="signup-btn">Sign Up</button>
        <button className="login-btn">Log In</button>
      </div>

      <div className="right-nav" onClick={toggleProfileMenu}>
        <VscAccount />
      </div>
    </nav>
  );
}
