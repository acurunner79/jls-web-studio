/**
 * ValueSection
 * Explains the core value JLS Web Studio provides for local service businesses.
 */
const ValueSection = () => {
  const values = [
    {
      title: 'Look Professional',
      text: 'Make a stronger first impression with a clean, modern website.',
    },
    {
      title: 'Show Your Work',
      text: 'Display project photos, services, reviews, and completed jobs clearly.',
    },
    {
      title: 'Capture More Leads',
      text: 'Make it easy for customers to call, text, or request a quote.',
    },
  ];

  return (
    <section className="section value-section">
      <div className="container">
        <div className="section-heading centered">
          <p className="section-kicker">Why it matters</p>
          <h2>Your website should work as hard as your business does.</h2>
          <p>
            Many local businesses do great work, but their websites do not show
            it clearly. JLS Web Studio helps turn outdated or incomplete websites
            into clean, mobile-friendly pages that make it easier for customers
            to understand your services and request a quote.
          </p>
        </div>

        <div className="value-grid">
          {values.map((value) => (
            <article className="value-card" key={value.title}>
              <div className="card-icon" aria-hidden="true">
                ✓
              </div>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;