/**
 * Work
 * Presents example project directions and existing work that demonstrate design,
 * responsive layouts, and practical user flows.
 */
const Work = () => {
  const projects = [
    {
      title: 'Pinto Developments',
      tag: 'Home-Service Portfolio',
      text: 'A modern portfolio website for a custom doors and windows installer, built to showcase services, completed work, and customer trust.',
      link: 'https://pinto-dev.netlify.app'
    },
    {
      title: 'FlowPro Plumbing Co.',
      tag: 'Plumbing Service Concept',
      text: 'A sample plumbing website concept focused on emergency contact, service clarity, trust signals, FAQs, service areas, and local service requests.',
      link: 'https://flo-pro.netlify.app',
    },
    {
      title: 'Apex Auto Detail Co.',
      tag: 'Auto Detailing Concept',
      text: 'A sample auto detailing website concept with premium service packages, before-and-after visuals, gallery sections, and quote-focused calls to action.',
      link: 'https://apex-auto-detail.netlify.app/',
    },
    {
      title: 'Gift Ledger',
      tag: 'Full-Stack Experience',
      text: 'A full-stack gift list application with authentication, themes, lists, and connections.',
      link: 'https://pinto-dev.netlify.app',
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
              {project.link && (
              <a className="work-link" href={project.link} target="_blank" rel="noreferrer">
                View Project
              </a>
            )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;