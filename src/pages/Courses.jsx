import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CourseSection from "../components/CourseSection";

function Courses() {
  return (
    <div className="courses-page">
      <Helmet>
        <title>Health & Safety Courses | SafePath Multan</title>

        <meta
          name="description"
          content="Explore health and safety learning options with SafePath in Multan, Pakistan. Contact our team to ask about course content, availability, and enrolment."
        />

        <meta
          property="og:title"
          content="Health & Safety Courses | SafePath Multan"
        />

        <meta
          property="og:description"
          content="Explore workplace health and safety learning options and contact SafePath for course information."
        />
      </Helmet>

      <section className="courses-page-hero">
        <div className="courses-hero-background" aria-hidden="true" />

        <div className="container courses-hero-content">
          <div className="courses-hero-copy">
            <div className="eyebrow">
              <span className="status-dot"></span>
              EXPLORE LEARNING OPTIONS
            </div>

            <h1>
              Find the right path to a
              <span> safer future.</span>
            </h1>

            <p>
              Explore health and safety learning options, develop
              workplace awareness, and find a course that fits your goals.
            </p>

            <Link className="button" to="/contact">
              Ask About Courses <span>↗</span>
            </Link>

            <div className="courses-hero-note">
              <span className="check-circle">✓</span>
              Take the next step in workplace safety learning.
            </div>
          </div>

          <div className="courses-hero-badge">
            <span className="courses-badge-icon">✓</span>
            <div>
              <strong>Safety begins with knowledge.</strong>
              <p>Explore your learning options.</p>
            </div>
          </div>
        </div>
      </section>

      <CourseSection />
    </div>
  );
}

export default Courses;