import "./AuthFeature.css";

function AuthFeature({ icon, title, description }) {
  return (
    <div className="auth-feature">
      <div className="auth-feature-icon" aria-hidden="true">
        {icon}
      </div>

      <div className="auth-feature-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default AuthFeature;