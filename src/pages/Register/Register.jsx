import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import PasswordInput from "../../components/auth/PasswordInput";
import PasswordRequirements from "../../components/auth/PasswordRequirements";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
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

  const passwordIsValid = (password) => {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password)
    );
  };

  const validateForm = () => {
    const nextErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    } else if (formData.fullName.trim().length < 2) {
      nextErrors.fullName = "Name must contain at least 2 characters.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      nextErrors.password = "Please create a password.";
    } else if (!passwordIsValid(formData.password)) {
      nextErrors.password =
        "Your password must satisfy all requirements below.";
    }

    if (!formData.confirmPassword) {
      nextErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.confirmPassword !== formData.password) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }

    if (!formData.acceptTerms) {
      nextErrors.acceptTerms =
        "Please accept the terms to create your account.";
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
      "Registration form is ready. Real account creation will be connected with the SkyVault backend."
    );
  };

  return (
    <AuthLayout
      eyebrow="✨ Begin your SkyVault journey"
      heading="Create your"
      highlightedText="digital universe."
      description="Build one organized space for your personal files, study resources, quick notes, assignments, and everything that matters."
      footerText="One account. Unlimited possibilities.">

      <div className="register-card">
        <div className="register-heading">
          <span className="register-kicker">Start your journey</span>

          <h2>Create your SkyVault</h2>

          <p>
            One account for your Personal Vault and Study Spaces.
          </p>
        </div>

        <form
          className="register-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="register-field">
            <label htmlFor="fullName">Full name</label>

            <div
              className={`register-input-wrapper ${
                errors.fullName ? "register-input-error" : ""
              }`}
            >
              <span className="register-input-icon" aria-hidden="true">
                U
              </span>

              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                autoComplete="name"
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={
                  errors.fullName ? "fullName-error" : undefined
                }
              />
            </div>

            {errors.fullName && (
              <p
                className="register-error-message"
                id="fullName-error"
              >
                {errors.fullName}
              </p>
            )}
          </div>

          <div className="register-field">
            <label htmlFor="registerEmail">Email address</label>

            <div
              className={`register-input-wrapper ${
                errors.email ? "register-input-error" : ""
              }`}
            >
              <span className="register-input-icon" aria-hidden="true">
                @
              </span>

              <input
                id="registerEmail"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email ? "registerEmail-error" : undefined
                }
              />
            </div>

            {errors.email && (
              <p
                className="register-error-message"
                id="registerEmail-error"
              >
                {errors.email}
              </p>
            )}
          </div>

          <PasswordInput
            id="registerPassword"
            name="password"
            label="Password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a strong password"
            autoComplete="new-password"
            error={errors.password}
          />

          <PasswordRequirements password={formData.password} />

          <PasswordInput
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Enter your password again"
            autoComplete="new-password"
            error={errors.confirmPassword}
          />

          <div className="register-terms-group">
            <label className="register-terms">
              <input
                name="acceptTerms"
                type="checkbox"
                checked={formData.acceptTerms}
                onChange={handleChange}
              />

              <span
                className="register-terms-checkmark"
                aria-hidden="true"
              ></span>

              <span className="register-terms-text">
                I agree to the{" "}
                <button
                  type="button"
                  onClick={() =>
                    setFormMessage(
                      "Terms and Privacy pages will be added before public deployment."
                    )
                  }
                >
                  Terms
                </button>{" "}
                and{" "}
                <button
                  type="button"
                  onClick={() =>
                    setFormMessage(
                      "Terms and Privacy pages will be added before public deployment."
                    )
                  }
                >
                  Privacy Policy
                </button>
                .
              </span>
            </label>

            {errors.acceptTerms && (
              <p className="register-error-message">
                {errors.acceptTerms}
              </p>
            )}
          </div>

          <button type="submit" className="register-submit-button">
            <span>Create Free Account</span>
            <span aria-hidden="true">→</span>
          </button>

          {formMessage && (
            <div className="register-form-message" role="status">
              <span aria-hidden="true">ℹ</span>
              <p>{formMessage}</p>
            </div>
          )}
        </form>

        <div className="register-divider">
          <span></span>
          <p>Already have a SkyVault?</p>
          <span></span>
        </div>

        <Link to="/login" className="register-login-link">
          Sign in to your account
        </Link>

        <p className="register-note">
          No payment is required for the current SkyVault development
          plan. The project follows a free-first approach.
        </p>
      </div>
    </AuthLayout>
  );
}

export default Register;