import { Link } from "react-router-dom";
import AuthFeature from "../AuthFeature";
import "./AuthLayout.css";

const authFeatures = [
  {
    icon: "🔐",
    title: "Personal Vault",
    description:
      "Keep private files and personal resources in one clear space.",
  },
  {
    icon: "📚",
    title: "Study Spaces",
    description:
      "Organize subjects, assignments, papers, and lecture resources.",
  },
  {
    icon: "📝",
    title: "Quick Notes",
    description:
      "Capture revision points and ideas without creating a file.",
  },
];

function AuthLayout({
  children,
  eyebrow = "🌌 Your digital universe",
  heading = "Welcome back to a",
  highlightedText = "calmer workspace.",
  description = "Return to the place where your personal files and study life stay organized without the clutter.",
  footerText = "Personal Vault + Study Spaces",
}) {
  return (
    <div className="auth-layout">
      <section className="auth-showcase">
        <div className="auth-orb auth-orb-one"></div>
        <div className="auth-orb auth-orb-two"></div>
        <div className="auth-grid-pattern"></div>

        <div className="auth-showcase-content">
          <Link to="/" className="auth-brand">
            <span className="auth-brand-logo" aria-hidden="true">
              SV
            </span>

            <span className="auth-brand-name">
              Sky<span>Vault</span>
            </span>
          </Link>

          <div className="auth-showcase-copy">
            <span className="auth-eyebrow">
              {eyebrow}
            </span>

            <h1>
              {heading}{" "}
              <span>{highlightedText}</span>
            </h1>

            <p>{description}</p>
          </div>

          <div className="auth-feature-list">
            {authFeatures.map((feature) => (
              <AuthFeature
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          <div className="auth-showcase-footer">
            <span className="auth-live-dot"></span>
            {footerText}
          </div>
        </div>
      </section>

      <section className="auth-form-side">
        <div className="auth-form-topbar">
          <Link to="/" className="auth-back-link">
            <span aria-hidden="true">←</span>
            Back to Home
          </Link>
        </div>

        <div className="auth-form-stage">
          {children}
        </div>
      </section>
    </div>
  );
}

export default AuthLayout;