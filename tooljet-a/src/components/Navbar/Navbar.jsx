import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar-main">
      <div className="navbar-left">
        <div className="navbar-left-group1">
          <img src="/Everflow-logo.svg" alt="Everflow-logo" className="navbar-logo" />
          <h5 className="navbar-title">EverFlow</h5>
        </div>
        <div className="navbar-hamburger" onClick={() => setMenuOpen((open) => !open)}>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </div>
        <div className="navbar-left-group2">
          <div className="navbar-link">Platform <span className="navbar-caret">▼</span></div>
          <div className="navbar-link">Product <span className="navbar-caret">▼</span></div>
          <div className="navbar-link">Pricing</div>
          <div className="navbar-link">Company <span className="navbar-caret">▼</span></div>
          <div className="navbar-link">Resources <span className="navbar-caret">▼</span></div>
        </div>
      </div>
      <div className="navbar-right">
        <div className="navbar-login">Login</div>
        <button className="navbar-cta">
          Try for free <span className="navbar-cta-arrow">↗</span>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="navbar-mobile-menu">
          <div className="navbar-link">Platform <span className="navbar-caret">▼</span></div>
          <div className="navbar-link">Product <span className="navbar-caret">▼</span></div>
          <div className="navbar-link">Pricing</div>
          <div className="navbar-link">Company <span className="navbar-caret">▼</span></div>
          <div className="navbar-link">Resources <span className="navbar-caret">▼</span></div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
