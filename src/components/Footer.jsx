/**
 * Footer
 * Renders the closing brand section, quick links, and copyright notice.
 */
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <a className="brand" href="#top" aria-label="JLS Web Studio home">
            <span className="brand-mark">JLS</span>
            <span className="brand-text">Web Studio</span>
          </a>

          <p>Modern websites for local service businesses.</p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#services">Services</a>
          <a href="#work">Example Work</a>
          <a href="#contact">Contact</a>
        </nav>

        <p className="footer-credit">
          © 2026 JLS Web Studio. All rights reserved.
          <br />
          Built by Jorge Soto.
        </p>
      </div>
    </footer>
  );
};

export default Footer;