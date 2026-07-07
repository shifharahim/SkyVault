import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import PasswordInput from "../../components/auth/PasswordInput";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [formMessage, setFormMessage] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));

    setFormMessage("");
  };

  const validateForm = () => {
    const nextErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      nextErrors.password = "Please enter your password.";
    } else if (formData.password.length < 6) {
      nextErrors.password = "Password must contain at least 6 characters.";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setFormMessage("");
      return;
    }

    setErrors({});
    setFormMessage(
      "Login form is ready. Real account authentication will be connected with the SkyVault backend."
    );
  };

  return (
    <AuthLayout>
      <div className="login-card">
        <div className="login-heading">
          <span className="login-kicker">Welcome back</span>

          <h2>Sign in to SkyVault</h2>

          <p>
            Continue to your Personal Vault and Study Spaces.
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <div className="login-field">
            <label htmlFor="email">Email address</label>

            <div
              className={`login-input-wrapper ${
                errors.email ? "login-input-error" : ""
              }`}
            >
              <span className="login-input-icon" aria-hidden="true">
                @
              </span>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email ? "email-error" : undefined
                }
              />
            </div>

            {errors.email && (
              <p className="login-error-message" id="email-error">
                {errors.email}
              </p>
            )}
          </div>

          <PasswordInput
            id="password"
            name="password"
            label="Password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            autoComplete="current-password"
            error={errors.password}
          />

          <div className="login-options">
            <label className="remember-option">
              <input
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleChange}
              />

              <span className="remember-checkmark" aria-hidden="true"></span>
              <span>Remember me</span>
            </label>

            <button
              type="button"
              className="forgot-password-button"
              onClick={() =>
                setFormMessage(
                  "Forgot-password recovery will be connected when authentication is added."
                )
              }
            >
              Forgot password?
            </button>
          </div>

          <button type="submit" className="login-submit-button">
            <span>Sign In</span>
            <span aria-hidden="true">→</span>
          </button>

          {formMessage && (
            <div className="login-form-message" role="status">
              <span aria-hidden="true">ℹ</span>
              <p>{formMessage}</p>
            </div>
          )}
        </form>

        <div className="login-divider">
          <span></span>
          <p>New to SkyVault?</p>
          <span></span>
        </div>

        <Link to="/register" className="create-account-link">
          Create your free account
        </Link>

        <p className="login-note">
          SkyVault is currently being built with a free-first,
          open-source-friendly technology approach.
        </p>
      </div>
    </AuthLayout>
  );
}

export default Login;