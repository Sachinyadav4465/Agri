import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LimitedEdition.css';

const LimitedEdition = () => {
  const navigate = useNavigate();

  // Premium institutional-grade elite solutions data
  const premiumData = [
    {
      id: 'elite-crop-shield',
      name: 'Vanguard Elite',
      badgeIcon: 'https://i.pinimg.com/736x/15/2d/92/152d92fe64206084832baf3dfbbeb69c.jpg',
      image: 'https://i.pinimg.com/736x/15/2d/92/152d92fe64206084832baf3dfbbeb69c.jpg',
      desc: 'Fusing advanced nano-tech molecules with active bio-agents for a striking 360° plantation defense.'
    },
    {
      id: 'supreme-fungal-shield',
      name: 'Bio-Resilience Pro',
      badgeIcon: 'https://i.pinimg.com/736x/fc/62/d0/fc62d0fce7d864ec4f7b72e9b2395513.jpg',
      image: 'https://i.pinimg.com/736x/fc/62/d0/fc62d0fce7d864ec4f7b72e9b2395513.jpg',
      desc: 'Redefining organic strength with an anti-fungal botanical twist in a high-grade professional curation.'
    },
    {
      id: 'institutional-weed-shield',
      name: 'Terminator Max',
      badgeIcon: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=100&q=80',
      image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=500&q=80',
      desc: 'Immortalizing absolute root clearance with a rapid-action systemic formula built for massive acreages.'
    },
    {
      id: 'harvest-booster-shield',
      name: 'Imperial Harvest',
      badgeIcon: 'https://i.pinimg.com/736x/59/0a/77/590a77091b7205f60e7036fde19eeabf.jpg',
      image: 'https://i.pinimg.com/736x/59/0a/77/590a77091b7205f60e7036fde19eeabf.jpg',
      desc: 'Evoking extreme growth bursts and massive crop weight with cell-activating premium micronutrients.'
    }
  ];

  return (
    <section className="agro-limited-edition py-5 text-white">
      {/* Strict uniform container alignment matching all upper rows */}
      <div className="container">
        
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="limited-main-title fw-bold text-uppercase tracking-wide text-white">Limited Institutional Editions</h2>
          <p className="text-white-50 limited-subtitle">Ultra-concentrated commercial formulations engineered for scale and extreme precision</p>
          <div className="limited-underline mx-auto"></div>
        </div>

        {/* 4-Column Core Grid */}
        <div className="row g-4 justify-content-center">
          {premiumData.map((item) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
              <div 
                className="limited-card position-relative overflow-hidden cursor-pointer d-flex flex-column"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                
                {/* Image Window with floating Badge Icon */}
                <div className="limited-img-container rounded-3 position-relative overflow-hidden mb-4">
                  <img src={item.image} alt={item.name} className="limited-main-img w-100 h-100" />
                  
                  {/* Floating Identity Icon Layer */}
                  <div className="limited-badge-icon rounded-3 overflow-hidden border border-2 border-white shadow">
                    <img src={item.badgeIcon} alt="badge" className="w-100 h-100 object-fit-cover" />
                  </div>
                </div>

                {/* Info Text Area */}
                <div className="limited-info-box text-start px-1 mt-2">
                  <h4 className="limited-item-name fw-bold mb-2">{item.name}</h4>
                  <p className="limited-item-desc text-white-50 small mb-3">{item.desc}</p>
                  
                  {/* Shop Now Action Link */}
                  <span className="limited-shop-link fw-bold text-uppercase tracking-wider small">
                    Shop Now <i className="bi bi-chevron-right ms-1"></i>
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LimitedEdition;