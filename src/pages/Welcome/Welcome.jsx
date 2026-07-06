import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import HeroSection from "../../components/ui/HeroSection";
import FeatureCard from "../../components/ui/FeatureCard";
import "./Welcome.css";

const features = [
  {
    icon: "🔐",
    title: "Personal Vault",
    description:
      "Keep personal documents, images, PDFs, videos, and important files organized in a private digital space.",
    accent: "indigo",
    label: "Private",
  },
  {
    icon: "📚",
    title: "Study Spaces",
    description:
      "Create dedicated academic spaces for subjects, semesters, notes, assignments, papers, and lecture resources.",
    accent: "cyan",
    label: "Academic",
  },
  {
    icon: "📝",
    title: "Quick Notes",
    description:
      "Capture ideas, revision points, reminders, and useful text directly inside SkyVault without creating a separate file.",
    accent: "violet",
    label: "Fast",
  },
  {
    icon: "📌",
    title: "Focused Resources",
    description:
      "Keep important study materials easy to find with favorites, pinned resources, search, and organized collections.",
    accent: "amber",
    label: "Organized",
  },
];

function Welcome() {
  return (
    <div className="welcome-page">
      <Navbar />

      <main>
        <HeroSection />

        <section className="features-section" id="features">
          <div className="section-container">
            <div className="section-heading">
              <span className="section-eyebrow">One workspace, two worlds</span>

              <h2>
                Your personal life and study life,
                <span> organized without the clutter.</span>
              </h2>

              <p>
                SkyVault is designed around the way students actually work:
                private storage when you need it and focused academic spaces
                when it is time to study.
              </p>
            </div>

            <div className="features-grid">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  accent={feature.accent}
                  label={feature.label}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="spaces-section" id="spaces">
          <div className="section-container spaces-layout">
            <div className="spaces-copy">
              <span className="section-eyebrow">Built around your day</span>

              <h2>
                Switch between
                <span> Personal Vault</span> and
                <span> Study Spaces.</span>
              </h2>

              <p>
                No need to mix private documents with semester notes or
                assignment files. SkyVault gives each part of your digital life
                a clear home while keeping everything inside one workspace.
              </p>

              <div className="spaces-points">
                <div className="space-point">
                  <span>01</span>
                  <div>
                    <h3>Personal Vault</h3>
                    <p>
                      Store documents, media, PDFs, personal notes, and files
                      that belong to you.
                    </p>
                  </div>
                </div>

                <div className="space-point">
                  <span>02</span>
                  <div>
                    <h3>Study Spaces</h3>
                    <p>
                      Organize subjects, assignments, previous papers, lecture
                      recordings, and pinned resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="spaces-visual" aria-hidden="true">
              <div className="space-panel personal-panel">
                <div className="space-panel-icon">🔐</div>
                <span>Private Space</span>
                <h3>Personal Vault</h3>
                <p>Documents • Photos • PDFs • Notes</p>

                <div className="space-panel-items">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>

              <div className="space-panel study-panel">
                <div className="space-panel-icon">📚</div>
                <span>Academic Space</span>
                <h3>Study Spaces</h3>
                <p>Subjects • Papers • Lectures • Tasks</p>

                <div className="study-subjects">
                  <span>DBMS</span>
                  <span>Networks</span>
                  <span>Java</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-container">
            <div className="about-card">
              <div className="about-copy">
                <span className="section-eyebrow">Why SkyVault?</span>

                <h2>A calmer digital workspace for student life.</h2>

                <p>
                  Files often live in one app, notes in another, assignments
                  somewhere else, and study materials across random folders.
                  SkyVault is our answer: one thoughtfully organized workspace
                  designed around personal storage and academic focus.
                </p>
              </div>

              <div className="about-stats">
                <div>
                  <strong>2</strong>
                  <span>Core spaces</span>
                </div>

                <div>
                  <strong>1</strong>
                  <span>Unified workspace</span>
                </div>

                <div>
                  <strong>∞</strong>
                  <span>Room to grow</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="welcome-cta">
          <div className="cta-orb cta-orb-one"></div>
          <div className="cta-orb cta-orb-two"></div>

          <div className="section-container cta-content">
            <span>🌌 Your space is waiting</span>

            <h2>Build your digital universe with SkyVault.</h2>

            <p>
              Start with your personal files. Create study spaces when you need
              them. Keep everything clear, focused, and yours.
            </p>

            <div className="cta-actions">
              <a href="/register" className="cta-primary">
                Create Your Vault
              </a>

              <a href="/login" className="cta-secondary">
                I already have an account
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Welcome;