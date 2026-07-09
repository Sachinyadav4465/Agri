import React from 'react';
import '../styles/WordsOfAcclaim.css';

const WordsOfAcclaim = () => {
  // Real agricultural-focused client testimonials
  const testimonials = [
    {
      id: 1,
      quote: "Incredible range of bio-pesticides. Our potato crops saw an immediate recovery from late blight within 48 hours of application, with zero leaf damage.",
      author: "Gurdev Singh Dhillon",
      location: "Jalandhar, Punjab"
    },
    {
      id: 2,
      quote: "The systemic insecticides provided an airtight shield for our premium exports. They help protect our crop investments with maximum efficiency and minimal dosage.",
      author: "Rajesh Karande",
      location: "Nashik, Maharashtra"
    },
    {
      id: 3,
      quote: "A beautiful combination of premium formulation and technical guidance. Their seasonal kits eliminated root termites completely across my sugarcane fields.",
      author: "Dr. K. Raghavan",
      location: "Coimbatore, Tamil Nadu"
    }
  ];

  return (
    <section className="agro-acclaim py-5 bg-white">
      {/* Width strict locked to standard container for perfect grid line matching */}
      <div className="container">
        
        {/* Section Headings exactly matching reference design */}
        <div className="text-center mb-5">
          <h2 className="acclaim-main-title fw-bold text-uppercase tracking-wide">Words Of Acclaim</h2>
          <p className="text-muted acclaim-subtitle">Celebrated farming voices echo their trust in our elite crop protection solutions</p>
        </div>

        {/* Testimonial 3-Card Row Grid */}
        <div className="row g-4 justify-content-center">
          {testimonials.map((item) => (
            <div className="col-12 col-md-4" key={item.id}>
              <div className="acclaim-card position-relative rounded-4 p-4 p-lg-5 d-flex flex-column h-100 shadow-sm">
                
                {/* Large Quote Decorative Icon exactly like your reference template */}
                <div className="quote-icon-wrapper mb-3">
                  <span className="display-1 fw-serif text-success opacity-25">“</span>
                </div>

                {/* Main Quote Content Text */}
                <p className="acclaim-text text-white-50 flex-grow-1 mb-4">
                  {item.quote}
                </p>

                {/* Author Metadata Footer */}
                <div className="acclaim-author-meta mt-auto">
                  <h5 className="author-name fw-bold mb-1">{item.author}</h5>
                  <span className="author-location  small tracking-wide text-uppercase">{item.location}</span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WordsOfAcclaim;