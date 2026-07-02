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

        <div className="hero-visual" aria-label="Website design preview">
          <div className="browser-card">
            <div className="browser-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="mock-site">
              <div className="mock-hero">
                <div>
                  <p>Local Service Co.</p>
                  <h2>Quality work, clearly shown.</h2>
                </div>

                <button type="button">Request a Quote</button>
              </div>

              <div className="mock-services" aria-hidden="true">
                <div></div>
                <div></div>
                <div></div>
              </div>

              <div className="mock-gallery" aria-hidden="true">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>

          <div className="phone-card" aria-hidden="true">
            <div className="phone-speaker"></div>

            <div className="phone-screen">
              <div className="phone-title"></div>
              <div className="phone-block"></div>
              <div className="phone-block short"></div>

              <button type="button">Call Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;