/**
 * Contact
 * Renders the lead capture form for website reviews and service inquiries.
 * The form submits to Netlify Forms with fetch, then redirects to the custom
 * success page after Netlify accepts the submission.
 */
const Contact = () => {
  /**
   * encodeFormData
   * Converts form values into URL-encoded data for Netlify Forms.
   */
  const encodeFormData = (data) => {
    return new URLSearchParams(data).toString();
  };

  /**
   * handleSubmit
   * Prevents the default Netlify success screen, submits the form to Netlify,
   * and redirects visitors to the custom success page.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData(formData),
      });

      if (!response.ok) {
        throw new Error('Form submission failed.');
      }

      window.location.href = '/success.html';
    } catch (error) {
      console.error(error);
      alert('Something went wrong while sending your request. Please try again.');
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-form-card">
          <div className="section-heading">
            <p className="section-kicker">Free website review</p>
            <h2>Request a free website review.</h2>
            <p>
              Tell me about your business and website. I’ll review your current
              online presence and send back practical notes on layout, mobile
              experience, service clarity, and contact flow.
            </p>
            <p>
              No website yet? That’s fine. I can still review your goals and
              recommend a strong starting point.
            </p>
          </div>

          <form name="website-review" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="website-review" />

            <p className="hidden-field">
              <label htmlFor="bot-field">
                Do not fill this out if you are human:
                <input id="bot-field" name="bot-field" />
              </label>
            </p>

            <label htmlFor="name">
              Name
              <input id="name" type="text" name="name" autoComplete="name" required />
            </label>

            <label htmlFor="businessName">
              Business Name
              <input id="businessName" type="text" name="businessName" required />
            </label>

            <label htmlFor="email">
              Email
              <input id="email" type="email" name="email" autoComplete="email" required />
            </label>

            <label htmlFor="phone">
              Phone
              <input id="phone" type="tel" name="phone" autoComplete="tel" />
            </label>

            <label htmlFor="currentWebsite">
              Current Website
              <input
                id="currentWebsite"
                type="url"
                name="currentWebsite"
                placeholder="https://example.com"
                autoComplete="url"
              />
            </label>

            <label htmlFor="businessType">
              Business Type
              <select id="businessType" name="businessType" defaultValue="Other">
                <option>Auto Detailing</option>
                <option>Tint / Wrap Shop</option>
                <option>Plumbing</option>
                <option>Contractor / Home Service</option>
                <option>Window / Door Installer</option>
                <option>Landscaping</option>
                <option>Other</option>
              </select>
            </label>

            <label htmlFor="serviceInterest">
              What type of help do you need?
              <select id="serviceInterest" name="serviceInterest" defaultValue="Not Sure Yet">
                <option>Starter Website</option>
                <option>Portfolio Website</option>
                <option>Website Refresh</option>
                <option>Monthly Care Plan</option>
                <option>Not Sure Yet</option>
              </select>
            </label>

            <label htmlFor="message">
              Message
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your business, current website, or what you want improved."
                required
              ></textarea>
            </label>

            <button className="btn btn-primary form-button" type="submit">
              Request My Free Review
            </button>

            <p className="form-helper-text">
              No pressure and no automated spam. I’ll review your request and follow up personally.
            </p>
          </form>
        </div>

        <aside className="contact-side-card">
          <h3>What I’ll review</h3>

          <ol>
            <li>Your current website or business goals if you do not have a site yet.</li>
            <li>Layout, mobile experience, service clarity, and contact flow.</li>
            <li>Whether a starter site, portfolio site, refresh, or care plan makes sense.</li>
          </ol>

          <div className="contact-note">
            <strong>Phase 1 services:</strong>
            <span>Starter websites, portfolio websites, and monthly care plans.</span>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;