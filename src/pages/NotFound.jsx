
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found-page">
      <div className="container not-found-content">
        <span className="not-found-code">404</span>

        <div className="eyebrow">
          <span className="status-dot"></span>
          PAGE NOT FOUND
        </div>

        <h1>
          Looks like you've taken
          <span> a wrong turn.</span>
        </h1>

        <p>
          The page you are looking for may have moved or does not exist.
          Let's help you get back on track.
        </p>

        <div className="not-found-actions">
          <Link className="button" to="/">
            Back to Home <span>↗</span>
          </Link>

          <Link className="not-found-link" to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
