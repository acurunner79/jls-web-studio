/**
 * Contact
 * Renders the lead capture form for website reviews and service inquiries.
 * The form is configured for Netlify Forms in the static Phase 1 build.
 */
const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-form-card">
          <div className="section-heading">
            <p className="section-kicker">Contact</p>
            <h2>Tell me about your business.</h2>
            <p>
              Share what you need help with, and I’ll review the details so we
              can identify the best starting point.
            </p>
          </div>

          <form
            name="website-review"
            method="POST"
            action="/success.html"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="website-review" />

            <p className="hidden-field">
              <label>
                Do not fill this out if you are human:
                <input name="bot-field" />
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
              Send Request
            </button>
          </form>
        </div>

        <aside className="contact-side-card">
          <h3>What happens next?</h3>

          <ol>
            <li>I review your request and current website if provided.</li>
            <li>I look for improvement areas in layout, mobile flow, and contact options.</li>
            <li>We identify whether a starter site, portfolio site, or refresh makes sense.</li>
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