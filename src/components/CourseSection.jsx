
import { Link } from "react-router-dom";
import { courses } from "../data/courses";
import CourseCard from "./CourseCard";

function CourseSection() {
  return (
    <section className="courses-section" id="courses">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading">
          <div className="eyebrow">
            <span className="status-dot"></span>
            LEARN WITH CONFIDENCE
          </div>

          <div className="section-heading-content">
            <div>
              <h2>
                Training for a <span>safer future.</span>
              </h2>

              <p>
                Explore health and safety learning options designed
                to help you build knowledge and develop practical skills.
              </p>
            </div>

            <Link className="courses-view-all" to="/courses">
              View All Courses <span>↗</span>
            </Link>
          </div>
        </div>

        {/* Course Cards */}
        <div className="courses-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="courses-note">
          <span className="check-circle">✓</span>

          <p>
            Interested in a course? Contact our team to confirm
            availability, duration, fees, and delivery options.
          </p>

          <Link to="/contact">Talk to us ↗</Link>
        </div>
      </div>
    </section>
  );
}

export default CourseSection;
