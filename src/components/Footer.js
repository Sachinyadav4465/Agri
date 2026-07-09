import React, { useState } from 'react';
import '../styles/Footer.css';

const Footer = () => {
  // Accordion Active State Monitor
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null); // Click karne par close ho jayega
    } else {
      setActiveFaq(index); // Naya open ho jayega
    }
  };

  // Pesticides & Insecticides Domain Focused FAQ Dataset
  const faqData = [
    {
      question: "Kya aapke saare chemical formulations CIB&RC dwara certified aur approved hain?",
      answer: "Haan, hamare saare crop protection products, pesticides aur bio-insecticides Central Insecticides Board and Registration Committee (CIB&RC) ke guidelines aur toxicity standards ke mutabik fully registered aur certified hain."
    },
    {
      question: "Commercial farming supply ya bulk dealership ke liye minimum order quantity (MOQ) kya hai?",
      answer: "Commercial farms aur bulk distributors ke liye hamara standard MOQ batch units par depend karta hai. Custom batch orders ya bulk wholesale supply ki pricing aur catalog ke liye aap hamare 'Request Bulk Quote' form se inquiry kar sakte hain."
    },
    {
      question: "Insecticides ka right dilution ratio aur safety precautions kya rakhni chahiye?",
      answer: "Har product package ke sath ek detailed technical booklet milti hai. General safety ke liye hum recommend karte hain ki application ke waqt PPE kits, gloves aur face masks ka use karein aur use hamesha recommended dosage ratio ke mutabik hi dilute karein."
    },
    {
      question: "Bulk commercial delivery ke liye standard shipping timelines kya hain?",
      answer: "Hamare certified logistic partners ke network ke throuhg domestic shipping mein standard 3-5 business days lagte hain. Weather conditions aur regional zone ke mutabik dispatch tracking updates aapko directly SMS aur Email par share kiye jaate hain."
    }
  ];

  return (
    <footer className="agro-footer-section">
      
      {/* =========================================================
          SECTION A: DYNAMIC ACCORDION (FAQ SECTION)
          ========================================================= */}
      <div className="faq-accordion-wrapper py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="faq-main-title fw-bold text-uppercase tracking-wide text-dark">Frequently Asked Questions</h2>
            <p className="text-muted small">Expert solutions and guidance for your crop protection queries</p>
            <div className="faq-underline mx-auto"></div>
          </div>

          <div className="accordion-custom-container mx-auto">
            {faqData.map((faq, index) => (
              <div 
                className={`accordion-custom-item mb-3 rounded-3 ${activeFaq === index ? 'active' : ''}`} 
                key={index}
              >
                <button 
                  className="accordion-custom-header w-100 d-flex justify-content-between align-items-center border-0 bg-transparent py-4 px-4 text-start fw-bold"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <span className={`accordion-arrow-icon ${activeFaq === index ? 'rotate' : ''}`}>
                    <i className="bi bi-chevron-down"></i>
                  </span>
                </button>
                
                <div className={`accordion-custom-body-wrapper ${activeFaq === index ? 'show' : ''}`}>
                  <div className="accordion-custom-body px-4 pb-4 text-muted">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================
          SECTION B: NEWSLETTER ROW (As per image_810c2c.png)
          ========================================================= */}
      <div className="newsletter-row py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-md-6 text-start">
              <h2 className="newsletter-title fw-bold mb-1">Sign up for our newsletter</h2>
              <p className="newsletter-subtitle text-muted mb-0">Sign up & get 10% off your first bulk purchase</p>
            </div>
            <div className="col-12 col-md-6">
              <form className="newsletter-form position-relative" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  className="form-control newsletter-input rounded-0 border-0 border-bottom bg-transparent px-0 py-2" 
                  placeholder="Email" 
                  required 
                />
                <button type="submit" className="btn newsletter-submit-btn position-absolute end-0 bottom-0 mb-2 bg-dark text-white rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          SECTION C: MAIN CORPORATE FOOTER (As per image_810c2c.png)
          ========================================================= */}
      <div className="main-dark-footer py-5 text-white">
        <div className="container">
          <div className="row g-4">
            
            {/* Column 1: Brand Info & Contacts */}
            <div className="col-12 col-lg-4 text-start">
              <div className="footer-brand-meta mb-4">
                <h3 className="footer-logo text-uppercase tracking-wider fw-bold mb-1">The Agro Shield</h3>
                <span className="footer-logo-sub text-uppercase tracking-widest small opacity-50">Crop Protection</span>
              </div>
              <div className="contact-links-box d-flex flex-column gap-3">
                <a href="tel:+918976449556" className="text-decoration-none text-white d-flex align-items-center gap-3 footer-contact-item">
                  <div className="contact-icon-circle rounded-circle border border-white border-opacity-25 d-flex align-items-center justify-content-center">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <span className="small tracking-wide">+91-89764-49556</span>
                </a>
                <a href="mailto:contact@theagroshield.com" className="text-decoration-none text-white d-flex align-items-center gap-3 footer-contact-item">
                  <div className="contact-icon-circle rounded-circle border border-white border-opacity-25 d-flex align-items-center justify-content-center">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <span className="small tracking-wide">contact@theagroshield.com</span>
                </a>
              </div>
            </div>

            {/* Column 2: Link Matrix 1 */}
            <div className="col-6 col-md-4 col-lg-2 text-start">
              <h5 className="footer-menu-title fw-bold text-white mb-3">Company</h5>
              <ul className="list-unstyled footer-menu-links d-flex flex-column gap-2.5">
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/faqs">FAQs</a></li>
                <li><a href="/blogs">Blogs</a></li>
              </ul>
            </div>

            {/* Column 3: Link Matrix 2 */}
            <div className="col-6 col-md-4 col-lg-2 text-start">
              <h5 className="footer-menu-title fw-bold text-white mb-3">Services</h5>
              <ul className="list-unstyled footer-menu-links d-flex flex-column gap-2.5">
                <li><a href="/track-order">Track Your Order</a></li>
                <li><a href="/corporate-gifting">Corporate Supply</a></li>
                <li><a href="/licensing">Wholesale Licensing</a></li>
              </ul>
            </div>

            {/* Column 4: Link Matrix 3 */}
            <div className="col-6 col-md-4 col-lg-2 text-start">
              <h5 className="footer-menu-title fw-bold text-white mb-3">Legal Policy</h5>
              <ul className="list-unstyled footer-menu-links d-flex flex-column gap-2.5">
                <li><a href="/terms">Terms & Conditions</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/refund">Refund Policy</a></li>
                <li><a href="/shipping">Shipping Policy</a></li>
              </ul>
            </div>

            {/* Column 5: Social Networking Links */}
            <div className="col-6 col-lg-2 text-start">
              <h5 className="footer-menu-title fw-bold text-white mb-3">Follow us on</h5>
              <div className="d-flex gap-2.5 social-links-wrapper">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-btn rounded-circle bg-white text-dark d-flex align-items-center justify-content-center">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn rounded-circle bg-white text-dark d-flex align-items-center justify-content-center">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon-btn rounded-circle bg-white text-dark d-flex align-items-center justify-content-center">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Copyright Copyright Ring Line */}
          <div className="footer-copyright-row text-center mt-5 pt-4 border-top border-white border-opacity-10 text-white-50 small">
            © 2026 theagroshield.com All rights reserved.
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;