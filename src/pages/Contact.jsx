import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact SafePath | Health & Safety Training in Multan</title>

        <meta
          name="description"
          content="Contact SafePath in Multan, Pakistan, for health and safety course information, training enquiries, availability, and enrolment guidance."
        />

        <meta
          property="og:title"
          content="Contact SafePath | Health & Safety Institute"
        />

        <meta
          property="og:description"
          content="Get in touch with SafePath to discuss health and safety training options in Multan, Pakistan."
        />
      </Helmet>

      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container contact-hero-layout">
          <div className="contact-hero-copy">
            <div className="eyebrow">
              <span className="status-dot"></span>
              GET IN TOUCH
            </div>

            <h1>
              Let's talk about your
              <span> learning journey.</span>
            </h1>

            <p>
              Have questions about health and safety training?
              Contact our team to discuss your learning options.
            </p>

            <a
              className="button"
              href="https://wa.me/923009570408"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp <span>↗</span>
            </a>
          </div>

          <div className="contact-hero-image">
            <img
              src="/images/contact-page.jpg"
              alt="Health and safety training and workplace support"
              loading="eager"
            />

            <div className="contact-image-caption">
              <span className="contact-image-check">✓</span>
              <div>
                <strong>We're here to help.</strong>
                <p>Let's discuss your training enquiry.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="contact-content">
        <div className="container contact-layout">
          <aside className="contact-information">
            <p className="course-category">CONTACT SAFEPATH</p>
            <h2>We're here to help.</h2>

            <p className="contact-intro">
              Send us your questions about courses, availability,
              duration, or enrolment. Our team is ready to help
              you with your enquiry.
            </p>

            <div className="contact-info-item">
              <span className="contact-info-icon" aria-hidden="true">
                @
              </span>
              <div>
                <h3>Email</h3>
                <a href="mailto:Ammarch@gmail.com">
                  Ammarch@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-icon" aria-hidden="true">
                ☎
              </span>
              <div>
                <h3>Phone</h3>
                <a href="tel:+923009570408">
                  +92 300 9570408
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-icon" aria-hidden="true">
                ⌖
              </span>
              <div>
                <h3>Location</h3>
                <p>Nawabcity Colony, Nawabpur Road, Multan</p>
              </div>
            </div>

            <div className="contact-help">
              <h3>Looking for a course?</h3>
              <p>
                Browse the available course information before
                sending your enquiry.
              </p>
              <Link to="/courses">
                Explore Courses <span>↗</span>
              </Link>
            </div>
          </aside>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}

export default Contact;