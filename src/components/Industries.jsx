/**
 * Industries
 * Shows the types of local service businesses JLS Web Studio is built to help.
 */
const Industries = () => {
  const industries = [
    'Auto Detailers',
    'Tint & Wrap Shops',
    'Mobile Mechanics',
    'Contractors',
    'Window & Door Installers',
    'Remodelers',
    'Landscapers',
    'Garage Door Companies',
    'Local Service Businesses',
  ];

  return (
    <section className="section industries-section" id="who-we-help">
      <div className="container industries-grid">
        <div className="section-heading">
          <p className="section-kicker">Who we help</p>
          <h2>Built for local businesses that rely on trust, photos, and quote requests.</h2>
          <p>
            If your work is visual, local, or service-based, your website should
            make it easy for customers to see what you do and take the next step.
          </p>
        </div>

        <div className="industry-chips">
          {industries.map((industry) => (
            <span key={industry}>{industry}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;