import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-glow"></div>

      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand-column">
            <Link to="/" className="footer-brand">
              <span className="footer-logo" aria-hidden="true">
                SV
              </span>

              <span className="footer-brand-name">
                Sky<span>Vault</span>
              </span>
            </Link>

            <p className="footer-description">
              A personal digital vault and student workspace designed to keep
              files, notes, subjects, assignments, and study resources
              beautifully organized.
            </p>

            <div className="footer-status">
              <span className="footer-status-dot"></span>
              Building a smarter student workspace
            </div>
          </div>

          <div className="footer-links-column">
            <h3>Product</h3>

            <a href="#features">Features</a>
            <a href="#spaces">Spaces</a>
            <Link to="/login">Login</Link>
            <Link to="/register">Get Started</Link>
          </div>

          <div className="footer-links-column">
            <h3>Workspace</h3>

            <a href="#spaces">Personal Vault</a>
            <a href="#spaces">Study Spaces</a>
            <a href="#features">Smart Notes</a>
            <a href="#features">Resources</a>
          </div>

          <div className="footer-links-column">
            <h3>SkyVault</h3>

            <a href="#about">About</a>
            <a href="#features">Why SkyVault</a>
            <span className="footer-muted-link">Campus Hub — Future</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} SkyVault. Built as an original student workspace.</p>

          <p className="footer-tech">
            React • Open-source tools • Free-first development
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;