import React, { useState } from "react";
import "./NavBar.css";
import { VscAccount } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-bar">
      <div className="hamburger" onClick={toggleMenu}>
        <RxHamburgerMenu />
      </div>
      <div className={isOpen ? "nav-left active" : "nav-left"}>
        <ul className="nav-left-option">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
        </ul>
        <div className="admin-control">
          <div className="signup-btn">SignUp</div>
          <div className="login-btn">LogIn</div>
        </div>
      </div>
      <div className="nav-center">
        <h2 className="brand-name">Mr Hotelier</h2>
      </div>
      <div className="right-nav">
        <VscAccount />
      </div>
    </nav>
  );
}
