/**
 * Success
 * Renders a simple confirmation section after a visitor submits the contact form.
 */
const Success = () => {
  return (
    <section className="success-section">
      <div className="container success-card">
        <p className="section-kicker">Request received</p>

        <h1>Thank you. Your message has been sent.</h1>

        <p>
          I’ll review your information and use it to identify the best starting
          point for your website project.
        </p>

        <a className="btn btn-primary" href="/">
          Back to Home
        </a>
      </div>
    </section>
  );
};

export default Success;