import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("safepath-theme") === "dark";
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );

    localStorage.setItem("safepath-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    setMenuOpen(false);
  }, []);

  const phoneNumber = "923009570408";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hello SafePath! I would like to enquire about your health and safety courses."
  )}`;

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <div className="topbar">
        <div className="container topbar-content">
          <span>
            <span className="status-dot" />
            Professional Health &amp; Safety Training
          </span>

          <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
            Talk to our team <span>↗</span>
          </a>
        </div>
      </div>

      <header className="header">
        <div className="container nav">
          <Link
            className="brand"
            to="/"
            aria-label="SafePath home"
            onClick={closeMenu}
          >
            <span className="brand-icon">S</span>

            <span className="brand-text">
              <strong>SafePath</strong>
              <small>HEALTH &amp; SAFETY INSTITUTE</small>
            </span>
          </Link>

          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((previous) => !previous)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav
            className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}
            aria-label="Main navigation"
          >
            <NavLink to="/" end onClick={closeMenu}>
              Home
            </NavLink>

            <NavLink to="/courses" onClick={closeMenu}>
              Our Courses
            </NavLink>

            <NavLink to="/about" onClick={closeMenu}>
              About Us
            </NavLink>

            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>

            <button
              className="theme-toggle"
              type="button"
              onClick={() => setDarkMode((previous) => !previous)}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <span aria-hidden="true">{darkMode ? "☀" : "☾"}</span>
              <span className="theme-toggle-label">
                {darkMode ? "Light mode" : "Dark mode"}
              </span>
            </button>

            <a
              className="button button-small nav-mobile-cta"
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Enquire on WhatsApp <span>↗</span>
            </a>
          </nav>

          <Link className="button button-small nav-desktop-cta" to="/courses">
            Explore Courses <span>↗</span>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Navbar;