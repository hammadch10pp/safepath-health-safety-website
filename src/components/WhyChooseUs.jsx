
const benefits = [
  {
    number: "01",
    title: "Career-focused learning",
    text: "Develop practical knowledge that supports your health and safety career.",
  },
  {
    number: "02",
    title: "Expert guidance",
    text: "Learn through structured lessons and guidance from qualified trainers.",
  },
  {
    number: "03",
    title: "Flexible study",
    text: "Explore learning options that can fit around your work and personal schedule.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-section section" id="about">
      <div className="container why-layout">
        <div className="why-copy">
          <span className="section-kicker">WHY SAFEPATH</span>

          <h2>
            Your goals deserve
            <br />
            the right <span>guidance.</span>
          </h2>

          <p>
            The right training helps you recognize hazards, understand
            responsibilities, and contribute to safer working environments.
            Our focus is on useful knowledge and confident learning.
          </p>

          <a className="button" href="/contact">
            Talk to Our Team <span>→</span>
          </a>
        </div>

        <div className="benefit-list">
          {benefits.map((benefit) => (
            <article className="benefit-item" key={benefit.number}>
              <div className="benefit-number">{benefit.number}</div>

              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>

              <span className="benefit-arrow">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
