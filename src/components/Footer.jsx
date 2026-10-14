
import { Link } from "react-router-dom";

function Footer() {
  const phoneNumber = "923009570408";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hello SafePath! I would like to enquire about your health and safety courses."
  )}`;

  return (
    <footer className="footer">
      <div className="footer-background" aria-hidden="true" />

      <div className="container footer-content">
        <div className="footer-main">
          <div className="footer-about">
            <Link className="brand footer-brand" to="/">
              <span className="brand-icon">S</span>

              <span className="brand-text">
                <strong>SafePath</strong>
                <small>HEALTH &amp; SAFETY INSTITUTE</small>
              </span>
            </Link>

            <p>
              Building knowledge for safer workplaces through
              health, safety, and professional development.
            </p>

            <a
              className="footer-whatsapp"
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with us on WhatsApp <span>↗</span>
            </a>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/courses">Our Courses</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="footer-column footer-contact">
            <h3>Get in Touch</h3>

            <a href="tel:+923009570408">
              <span className="contact-icon" aria-hidden="true">☎</span>
              <span>+92 300 9570408</span>
            </a>

            <a href="mailto:Ammarch@gmail.com">
              <span className="contact-icon" aria-hidden="true">✉</span>
              <span>Ammarch@gmail.com</span>
            </a>

            <p>
              <span className="contact-icon" aria-hidden="true">⌖</span>
              <span>Nawabcity Colony, Nawabpur Road, Multan</span>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} SafePath. All rights reserved.
          </p>

          <span>Learn safely. Work confidently.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
