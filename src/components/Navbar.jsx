import React, { useState } from "react";
import "../sass/_navbar.scss";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <div>
        <nav>
          <div className="logo">
            <h3>Honey</h3>
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
