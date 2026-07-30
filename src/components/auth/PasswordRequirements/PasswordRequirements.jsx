import "./PasswordRequirements.css";

function PasswordRequirements({ password = "" }) {
  const requirements = [
    {
      id: "length",
      label: "At least 8 characters",
      passed: password.length >= 8,
    },
    {
      id: "uppercase",
      label: "One uppercase letter",
      passed: /[A-Z]/.test(password),
    },
    {
      id: "lowercase",
      label: "One lowercase letter",
      passed: /[a-z]/.test(password),
    },
    {
      id: "number",
      label: "One number",
      passed: /\d/.test(password),
    },
  ];

  const passedCount = requirements.filter(
    (requirement) => requirement.passed
  ).length;

  const strength =
    passedCount === 0
      ? "Start typing"
      : passedCount <= 1
        ? "Weak"
        : passedCount <= 3
          ? "Good"
          : "Strong";

  return (
    <div className="password-requirements">
      <div className="requirements-header">
        <span>Password strength</span>

        <strong
          className={`strength-label strength-${strength
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          {strength}
        </strong>
      </div>

      <div className="strength-bars" aria-hidden="true">
        {requirements.map((requirement, index) => (
          <span
            key={requirement.id}
            className={index < passedCount ? "strength-bar-active" : ""}
          ></span>
        ))}
      </div>

      <div className="requirements-grid">
        {requirements.map((requirement) => (
          <div
            key={requirement.id}
            className={`requirement-item ${
              requirement.passed ? "requirement-passed" : ""
            }`}
          >
            <span className="requirement-check" aria-hidden="true">
              {requirement.passed ? "✓" : "○"}
            </span>

            <span>{requirement.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PasswordRequirements;