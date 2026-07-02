/**
 * ReviewCTA
 * Provides a focused call-to-action for visitors who want a free website review.
 */
const ReviewCTA = () => {
  return (
    <section className="review-cta">
      <div className="container review-cta-inner">
        <p className="section-kicker">Free website review</p>
        <h2>Not sure what your website needs?</h2>
        <p>
          Request a free website review and get a clear look at what could be
          improved — layout, mobile experience, contact flow, photos, and quote
          request setup.
        </p>
        <a className="btn btn-primary" href="#contact">
          Request a Free Website Review
        </a>
      </div>
    </section>
  );
};

export default ReviewCTA;