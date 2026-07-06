import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <span className="navbar-logo" aria-hidden="true">
            SV
          </span>

          <span className="navbar-brand-text">
            Sky<span>Vault</span>
          </span>
        </Link>

        <button
          className={`mobile-menu-button ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-content ${menuOpen ? "is-open" : ""}`}>
          <div className="nav-links">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>

            <a href="#features" onClick={closeMenu}>
              Features
            </a>

            <a href="#spaces" onClick={closeMenu}>
              Spaces
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </div>

          <div className="nav-actions">
            <Link to="/login" className="nav-action-link" onClick={closeMenu}>
              <Button variant="secondary">Login</Button>
            </Link>

            <Link to="/register" className="nav-action-link" onClick={closeMenu}>
              <Button variant="primary">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;