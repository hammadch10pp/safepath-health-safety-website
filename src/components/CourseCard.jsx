
import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <article className="course-card">
      <div className="course-card-image">
        <img
          src={course.image}
          alt={`${course.title} training`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        {course.featured && (
          <span className="course-badge">Popular</span>
        )}

        <span className="course-image-icon" aria-hidden="true">
          {course.icon}
        </span>
      </div>

      <div className="course-card-body">
        <p className="course-category">{course.category}</p>

        <h3>{course.title}</h3>

        <p className="course-description">{course.description}</p>

        <div className="course-details">
          <span>
            <strong>Level</strong>
            <span>{course.level}</span>
          </span>

          <span>
            <strong>Duration</strong>
            <span>{course.duration}</span>
          </span>
        </div>

        <div className="course-card-footer">
          <span className="course-format">{course.format}</span>

          <Link
            className="course-link"
            to="/contact"
            aria-label={`Enquire about ${course.title}`}
          >
            Enquire Now <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;
