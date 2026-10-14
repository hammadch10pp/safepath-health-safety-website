import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">
      <Helmet>
        <title>About SafePath | Health & Safety Institute</title>
        <meta
          name="description"
          content="Learn about SafePath Health & Safety Institute in Multan, Pakistan, and our approach to practical health and safety education, workplace awareness, and safer working practices."
        />
        <meta
          property="og:title"
          content="About SafePath | Health & Safety Institute"
        />
        <meta
          property="og:description"
          content="Discover SafePath's mission, vision, and values for supporting workplace health and safety learning."
        />
      </Helmet>

      {/* About Hero */}
      <section className="about-hero">
        <div className="container about-hero-layout">
          <div className="about-hero-copy">
            <div className="eyebrow">
              <span className="status-dot"></span>
              ABOUT SAFEPATH
            </div>

            <h1>
              Empowering people to create
              <span> safer workplaces.</span>
            </h1>

            <p>
              We aim to make health and safety learning accessible,
              practical, and relevant to the challenges of modern workplaces.
            </p>

            <Link className="button" to="/contact">
              Get in Touch <span>↗</span>
            </Link>

            <div className="about-trust-note">
              <span className="check-circle">✓</span>
              Building awareness. Encouraging safer practices.
            </div>
          </div>

          <div className="about-hero-image">
            <img
              src="/images/about-page.jpg"
              alt="Workplace health and safety"
              loading="eager"
            />

            <div className="about-image-caption">
              <span className="about-image-mark">✓</span>
              <div>
                <strong>Safety starts with knowledge.</strong>
                <p>Learn today. Work safer tomorrow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="about-content">
        <div className="container about-grid">
          <article className="about-card">
            <div className="about-card-icon">◎</div>
            <p className="course-category">OUR MISSION</p>
            <h2>Make safety knowledge practical.</h2>
            <p>
              Our aim is to help learners understand workplace hazards,
              improve risk awareness, and develop safer working habits
              through accessible health and safety education.
            </p>
          </article>

          <article className="about-card about-card-highlight">
            <div className="about-card-icon">↗</div>
            <p className="course-category">OUR VISION</p>
            <h2>A safer future for every workplace.</h2>
            <p>
              We aspire to support a culture where safety is a shared
              responsibility and people have the knowledge to make
              informed decisions at work.
            </p>
          </article>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">
              <span className="status-dot"></span>
              WHAT GUIDES US
            </div>

            <h2>
              The values behind <span>our approach.</span>
            </h2>
          </div>

          <div className="values-grid">
            <article className="value-item">
              <span className="value-number">01</span>
              <h3>Safety First</h3>
              <p>
                Encouraging awareness, prevention, and responsible
                workplace practices.
              </p>
            </article>

            <article className="value-item">
              <span className="value-number">02</span>
              <h3>Practical Learning</h3>
              <p>
                Connecting safety concepts with real-world workplace
                situations.
              </p>
            </article>

            <article className="value-item">
              <span className="value-number">03</span>
              <h3>Continuous Growth</h3>
              <p>
                Supporting ongoing learning and professional development.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <div className="container about-cta-content">
          <div>
            <p className="course-category">TAKE THE NEXT STEP</p>
            <h2>Ready to explore your learning options?</h2>
            <p>
              Contact our team to discuss courses and confirm current
              availability.
            </p>
          </div>

          <Link className="button" to="/contact">
            Contact Us <span>↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;