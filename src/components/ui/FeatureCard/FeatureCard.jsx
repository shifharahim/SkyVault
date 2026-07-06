import "./FeatureCard.css";

function FeatureCard({
  icon,
  title,
  description,
  accent = "indigo",
  label,
}) {
  return (
    <article className={`feature-card feature-card-${accent}`}>
      <div className="feature-card-top">
        <div className="feature-icon" aria-hidden="true">
          {icon}
        </div>

        {label && <span className="feature-label">{label}</span>}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="feature-card-line"></div>
    </article>
  );
}

export default FeatureCard;