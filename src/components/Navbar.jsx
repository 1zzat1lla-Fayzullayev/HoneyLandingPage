import React from "react";
import "../sass/_navbar.scss";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <p>Honey</p>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Our Product</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
