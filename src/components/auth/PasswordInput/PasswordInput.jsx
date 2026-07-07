import { useState } from "react";
import "./PasswordInput.css";

function PasswordInput({
  id = "password",
  name = "password",
  label = "Password",
  value,
  onChange,
  placeholder = "Enter your password",
  autoComplete = "current-password",
  error = "",
  required = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="password-field">
      <label htmlFor={id}>{label}</label>

      <div
        className={`password-input-wrapper ${
          error ? "password-input-error" : ""
        }`}
      >
        <input
          id={id}
          name={name}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
        />

        <button
          type="button"
          className="password-toggle"
          onClick={() => setShowPassword((current) => !current)}
          aria-label={showPassword ? "Hide password" : "Show password"}
          aria-pressed={showPassword}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      {error && (
        <p className="password-error-message" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}

export default PasswordInput;