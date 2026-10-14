import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero hero-with-image">
      <div className="hero-background" aria-hidden="true" />

      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot"></span>
            YOUR FUTURE IN HEALTH &amp; SAFETY
          </div>

          <h1>
            Build a safer workplace.
            <span> Build your future.</span>
          </h1>

          <p className="hero-description">
            Develop practical health and safety knowledge through
            career-focused training designed to help you take your next
            professional step.
          </p>

          <div className="hero-actions">
            <Link className="button" to="/courses">
              Discover Our Courses <span>→</span>
            </Link>

            <Link className="hero-secondary-link" to="/about">
              Why choose us? <span>↗</span>
            </Link>
          </div>

          <div className="hero-note">
            <span className="check-circle">✓</span>
            Learn. Grow. Make workplaces safer.
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-top">
            <span className="visual-label">SAFETY FIRST</span>
            <span className="visual-symbol">↗</span>
          </div>

          <div className="safety-emblem">
            <div className="emblem-ring">
              <span>✓</span>
            </div>
          </div>

          <div className="visual-bottom">
            <div>
              <strong>Knowledge saves lives.</strong>
              <p>Build safer habits. Create safer workplaces.</p>
            </div>
            <span className="visual-check">✓</span>
          </div>
        </div>
      </div>

      <div className="hero-bottom-line"></div>
    </section>
  );
}

export default Hero;