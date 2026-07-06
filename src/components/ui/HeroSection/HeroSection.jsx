import { Link } from "react-router-dom";
import Button from "../../common/Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-background hero-glow-one"></div>
      <div className="hero-background hero-glow-two"></div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Your digital study universe
        </div>

        <h1 className="hero-title">
          Store smarter.
          <br />
          Study better.
          <br />
          <span>Stay organized.</span>
        </h1>

        <p className="hero-description">
          SkyVault brings your personal files, study materials, notes,
          assignments, and academic resources together in one beautifully
          organized workspace.
        </p>

        <div className="hero-actions">
          <Link to="/register" className="hero-link">
            <Button variant="primary">Start for Free</Button>
          </Link>

          <a href="#features" className="hero-link">
            <Button variant="secondary">Explore Features</Button>
          </a>
        </div>

        <div className="hero-trust">
          <div className="trust-item">
            <span>✓</span>
            Free to start
          </div>

          <div className="trust-item">
            <span>✓</span>
            Student focused
          </div>

          <div className="trust-item">
            <span>✓</span>
            One organized space
          </div>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>

        <div className="vault-window">
          <div className="vault-window-header">
            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="window-title">SkyVault Workspace</div>
          </div>

          <div className="vault-window-body">
            <div className="mini-sidebar">
              <div className="mini-logo">SV</div>
              <div className="mini-nav-item active"></div>
              <div className="mini-nav-item"></div>
              <div className="mini-nav-item"></div>
              <div className="mini-nav-item"></div>
            </div>

            <div className="mini-dashboard">
              <div className="mini-topbar">
                <div>
                  <span className="mini-label">Welcome back</span>
                  <strong>Your workspace</strong>
                </div>

                <div className="mini-avatar">S</div>
              </div>

              <div className="mini-cards">
                <div className="mini-card personal-card">
                  <span className="mini-card-icon">🔐</span>
                  <div>
                    <strong>Personal Vault</strong>
                    <small>Private files</small>
                  </div>
                </div>

                <div className="mini-card study-card">
                  <span className="mini-card-icon">📚</span>
                  <div>
                    <strong>Study Spaces</strong>
                    <small>4 subjects</small>
                  </div>
                </div>
              </div>

              <div className="mini-resources">
                <div className="resource-heading">
                  <strong>Recent resources</strong>
                  <span>View all</span>
                </div>

                <div className="resource-row">
                  <span className="resource-icon pdf-icon">PDF</span>
                  <div>
                    <strong>Database Notes</strong>
                    <small>Updated today</small>
                  </div>
                </div>

                <div className="resource-row">
                  <span className="resource-icon note-icon">N</span>
                  <div>
                    <strong>Quick Revision</strong>
                    <small>Study note</small>
                  </div>
                </div>

                <div className="resource-row">
                  <span className="resource-icon video-icon">▶</span>
                  <div>
                    <strong>Lecture Recording</strong>
                    <small>42 minutes</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="floating-card floating-note">
          <span>📝</span>
          <div>
            <strong>Quick Notes</strong>
            <small>Ideas saved instantly</small>
          </div>
        </div>

        <div className="floating-card floating-file">
          <span>☁️</span>
          <div>
            <strong>All in one place</strong>
            <small>Files + study</small>
          </div>
        </div>

        <div className="floating-card floating-reminder">
          <span>📅</span>
          <div>
            <strong>Assignment</strong>
            <small>Due tomorrow</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;