/**
 * Work
 * Presents example project directions and existing work that demonstrate design,
 * responsive layouts, and practical user flows.
 */
const Work = () => {
  const projects = [
    {
      title: 'Door & Window Portfolio Demo',
      tag: 'Portfolio Direction',
      text: 'A modern portfolio concept for a visual home-service business.',
    },
    {
      title: 'Command Portal',
      tag: 'Responsive Layout',
      text: 'A responsive personal command portal with clean card-based navigation.',
    },
    {
      title: 'Home Tracker',
      tag: 'Practical Workflows',
      text: 'A project tracking application with organized layouts and practical workflows.',
    },
    {
      title: 'Gift Ledger',
      tag: 'Full-Stack Experience',
      text: 'A full-stack gift list application with authentication, themes, lists, and connections.',
    },
  ];

  return (
    <section className="section work-section" id="work">
      <div className="container">
        <div className="section-heading centered">
          <p className="section-kicker">Example work</p>
          <h2>Clean interface design for real business needs.</h2>
          <p>
            Early examples focus on responsive layouts, organized content, clear
            calls to action, and practical user flows.
          </p>
        </div>

        <div className="work-grid">
          {projects.map((project) => (
            <article className="work-card" key={project.title}>
              <span>{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;