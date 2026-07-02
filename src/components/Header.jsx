/**
 * Header
 * Renders the top navigation, JLS Web Studio brand mark,
 * section links, and the primary free website review CTA.
 */
const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="JLS Web Studio home">
          <span className="brand-mark">JLS</span>
          <span className="brand-text">Web Studio</span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#who-we-help">Who We Help</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-cta" href="#contact">
          Free Website Review
        </a>
      </div>
    </header>
  );
};

export default Header;