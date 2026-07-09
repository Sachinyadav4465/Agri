import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CorporateSupply.css';

const CorporateSupply = () => {
  const navigate = useNavigate();

  return (
    <section className="agro-corporate py-5">
      {/* Strict uniform container alignment matching all upper rows */}
      <div className="container">
        <div className="row g-0 align-items-stretch agro-corporate-wrapper rounded-4 overflow-hidden shadow-sm">
          
          {/* Left Column: Premium Image (50% Width) */}
          <div className="col-12 col-md-6 position-relative min-vh-50 image-section">
            <img 
              src="https://i.pinimg.com/736x/e9/e2/81/e9e281fd104d294bfca426779ccf6588.jpg" 
              alt="Commercial Agriculture B2B Supply" 
              className="corporate-img w-100 h-100"
            />
            {/* Soft Greenish Overlay to match luxury aesthetic */}
            <div className="corporate-img-overlay"></div>
          </div>

          {/* Right Column: Description Text & Action Button (50% Width) */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center p-4 p-lg-5 text-section">
            <span className="corporate-tag text-uppercase tracking-widest fw-bold text-success mb-2">B2B & Commercial Partnerships</span>
            <h2 className="corporate-title fw-bold mb-3">Bulk Corporate Supply</h2>
            
            <p className="corporate-desc text-muted mb-4">
              Empower your agro-distribution channel or commercial mega-farm with high-potency, certified protective chemical formulations. We offer wholesale contract manufacturing, custom batch packaging, and rapid logistics support across global networks with full regulatory documentation compliance.
            </p>

            <div>
              <button 
                className="btn btn-dark corporate-btn px-4 py-2.5 rounded-pill text-uppercase fw-bold"
                onClick={() => navigate('/corporate-inquiry')}
              >
                Request Bulk Quote
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CorporateSupply;