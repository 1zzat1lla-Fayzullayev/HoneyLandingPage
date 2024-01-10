import React, { useState } from "react";
import "../sass/_navbar.scss";
import navbar_logo from "../assets/images/navbar_logo.png";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <div className="navbar">
        <nav>
          <div className="logo">
            <img src={navbar_logo} alt="navbar logo" />
          </div>
          <ul className={`nav-links ${showNavbar && "active"}`}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Our Product</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <div className="burger" onClick={handleShowNavbar}>
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
