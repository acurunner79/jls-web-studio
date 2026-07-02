/**
 * Process
 * Explains the simple four-step process from website review to launch.
 */
const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Website Review',
      text: 'We look at your current website, business goals, and what customers need to do next.',
    },
    {
      number: '02',
      title: 'Design Direction',
      text: 'We choose the structure, sections, photos, and message your website needs.',
    },
    {
      number: '03',
      title: 'Build & Review',
      text: 'Your website is built, tested on mobile, and refined through revision rounds.',
    },
    {
      number: '04',
      title: 'Launch & Support',
      text: 'The site is deployed, connected to your domain, and supported through an optional care plan.',
    },
  ];

  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div className="section-heading centered">
          <p className="section-kicker">Process</p>
          <h2>A simple process from first review to launch.</h2>
          <p>
            The goal is to make the website process clear, practical, and easy
            for busy business owners.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step) => (
            <article className="process-card" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;