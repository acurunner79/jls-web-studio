/**
 * Services
 * Displays the three launch packages for JLS Web Studio.
 */
const Services = () => {
  const services = [
    {
      title: 'Starter Website',
      price: 'Starting at $950',
      text: 'A clean one-page website for businesses that need a professional online presence.',
      features: [
        'Mobile-friendly design',
        'Services and about sections',
        'Basic gallery',
        'Contact form',
        'Google Maps embed',
      ],
      cta: 'Ask About Starter Websites',
      featured: false,
    },
    {
      title: 'Portfolio Website',
      price: 'Starting at $2,250',
      text: 'A stronger website for businesses that need to show completed work, project photos, and customer trust.',
      features: [
        'Project/gallery section',
        'Service sections',
        'Testimonials',
        'Quote request form',
        'Image optimization',
      ],
      cta: 'Ask About Portfolio Websites',
      featured: true,
    },
    {
      title: 'Monthly Care Plan',
      price: '$99/month',
      text: 'Ongoing support for small updates, photo swaps, form checks, and website monitoring.',
      features: [
        'Small text updates',
        'Photo swaps',
        'Form testing',
        'Uptime monitoring',
        'Light support',
      ],
      cta: 'Ask About Care Plans',
      featured: false,
    },
  ];

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-heading centered">
          <p className="section-kicker">Services</p>
          <h2>Website services built for small business needs.</h2>
          <p>
            Start simple with a clean website, then add support as your business
            needs grow.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article
              className={`service-card ${service.featured ? 'featured' : ''}`}
              key={service.title}
            >
              {service.featured && <span className="service-badge">Most Popular</span>}

              <h3>{service.title}</h3>
              <p className="service-text">{service.text}</p>
              <p className="service-price">{service.price}</p>

              <ul>
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <a className="service-link" href="#contact">
                {service.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;