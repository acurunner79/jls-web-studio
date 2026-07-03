/**
 * Hero
 * Renders the opening section for JLS Web Studio with the main value
 * proposition, CTA buttons, service tags, and a CSS-built website mockup.
 */
const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">JLS Web Studio</p>

          <h1>Modern websites for local service businesses.</h1>

          <p className="hero-text">
            JLS Web Studio builds clean, mobile-friendly websites that help
            businesses show their work, build trust, and turn visitors into
            quote requests.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Request a Free Website Review
            </a>

            <a className="btn btn-secondary" href="#work">
              View Example Work
            </a>
          </div>

          <div className="hero-trust">
            <span>Websites</span>
            <span>Galleries</span>
            <span>Quote Forms</span>
            <span>Care Plans</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Website preview mockup">
          <div className="browser-mockup">
            <div className="browser-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="mockup-hero-card">
              <div>
                <span>Local Service Co.</span>
                <h3>Quality work, clearly shown.</h3>
              </div>

              <a href="#contact">Request a Quote</a>
            </div>

            <div className="mockup-feature-row">
              <div>
                <span>Services</span>
                <p>Clear offer cards</p>
              </div>

              <div>
                <span>Gallery</span>
                <p>Project photos</p>
              </div>
            </div>

            <div className="mockup-tile-row">
              <div>
                <strong>Reviews</strong>
                <span>Build trust</span>
              </div>

              <div>
                <strong>Quote Form</strong>
                <span>Capture leads</span>
              </div>

              <div>
                <strong>Mobile Ready</strong>
                <span>Works anywhere</span>
              </div>
            </div>
          </div>

          <div className="phone-mockup">
            <div className="phone-speaker"></div>

            <div className="phone-content">
              <span>Mobile View</span>

              <div className="phone-card large"></div>
              <div className="phone-card"></div>

              <a href="#contact">Call Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;