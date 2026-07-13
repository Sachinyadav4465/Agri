import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ExpertRecommendations.css';

const ExpertRecommendations = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('new');

  // Multi-tab Dataset customized for premium agricultural kits
  const recommendationsData = {
    new: [
      {
        id: 'rec-new1',
        title: 'Complete Paddy Protection Kit',
        price: 1899,
        oldPrice: 2200,
        rating: 5,
        image: 'https://i.pinimg.com/1200x/64/e9/8f/64e98f3ba0b9ed12c6804bf52865f617.jpg',
        tag: 'New Kit'
      },
      {
        id: 'rec-new2',
        title: 'Vegetable Yield Maximizer Combo',
        price: 1450,
        oldPrice: 1699,
        rating: 4,
        image: 'https://i.pinimg.com/1200x/5f/62/34/5f62347b7d96e2a7d1df4fecc297fc97.jpg',
        tag: 'Trending'
      },
      {
        id: 'rec-new3',
        title: 'Orchard Disease Shield Pack',
        price: 2499,
        oldPrice: 2999,
        rating: 5,
        image: 'https://i.pinimg.com/736x/63/9e/c9/639ec9d5963a5b209e826766c81a8440.jpg',
        tag: 'Expert Pick'
      },
      {
        id: 'rec-new4',
        title: 'Organic Soil Rejuvenation Set',
        price: 999,
        oldPrice: 1200,
        rating: 5,
        image: 'https://i.pinimg.com/1200x/8a/03/61/8a036175c9b76317874700fdc46b0e3a.jpg',
        tag: '100% Bio'
      }
    ],
    protection: [
      {
        id: 'rec-prot1',
        title: 'Heavy Insect-Control Combo',
        price: 1650,
        oldPrice: 1950,
        rating: 5,
        image: 'https://i.pinimg.com/736x/e8/0b/48/e80b4891e3ebd45be036d6500a6d375d.jpg',
        tag: 'High Demand'
      },
      {
        id: 'rec-prot2',
        title: 'Systemic Fungicide Duo',
        price: 1120,
        oldPrice: 1350,
        rating: 4,
        image: 'https://i.pinimg.com/1200x/32/ef/6a/32ef6ad6a0451edf29a0ad351b60d91f.jpg',
        tag: 'Anti-Fungal'
      },
      {
        id: 'rec-prot3',
        title: 'Advanced Root-Knot Guard',
        price: 850,
        oldPrice: 999,
        rating: 5,
        image: 'https://i.pinimg.com/1200x/b4/1f/57/b41f57550b5effc7c03128b3a91a3be8.jpg',
        tag: 'Soil Applied'
      },
      {
        id: 'rec-prot4',
        title: 'Broad-Spectrum Weed Killer Set',
        price: 1380,
        oldPrice: 1550,
        rating: 4,
        image: 'https://i.pinimg.com/1200x/0b/c4/63/0bc4636eac37b816af4ce5193f2c6672.jpg',
        tag: 'Best Value'
      }
    ],
    boosters: [
      {
        id: 'rec-boost1',
        title: 'Bio-Vigor Metabolic Activator',
        price: 799,
        oldPrice: 950,
        rating: 5,
        image: 'https://i.pinimg.com/736x/26/2a/44/262a44d5d6cdf1f7cdd7858174ed0a92.jpg',
        tag: 'Premium Fertilizer'
      },
      {
        id: 'rec-boost2',
        title: 'Micro-Nutrient Complex Liquid',
        price: 540,
        oldPrice: 650,
        rating: 5,
        image: 'https://i.pinimg.com/1200x/12/0b/ed/120bed77ad71bcaeb8124b38b2415344.jpg',
        tag: 'Fast Absorbing'
      },
      {
        id: 'rec-boost3',
        title: 'Premium Flowering & Fruiting Drop',
        price: 680,
        oldPrice: 800,
        rating: 4,
        image: 'https://i.pinimg.com/1200x/40/ad/c0/40adc0ea15e2a1ccd24f2919910eecf0.jpg',
        tag: 'Double Yield'
      },
      {
        id: 'rec-boost4',
        title: 'Super Amino Crop Energizer',
        price: 1200,
        oldPrice: 1450,
        rating: 5,
        image: 'https://i.pinimg.com/736x/8a/48/76/8a487669360570122465f23a0ba9d1f7.jpg',
        tag: 'Top Quality'
      }
    ]
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i 
        key={index} 
        className={`bi ${index < rating ? 'bi-star-fill text-warning' : 'bi-star text-muted'} me-1`}
      ></i>
    ));
  };

  return (
    <section className="agro-recommendations py-5 bg-light">
      {/* Container width carefully standard locked */}
      <div className="container">
        
        {/* Section Headers */}
        <div className="text-center mb-4">
          <h2 className="rec-main-title fw-bold text-uppercase tracking-wide">Expert Recommendations</h2>
          <p className="text-muted rec-subtitle">All-in-one combinations curated specifically by certified agronomists</p>
        </div>

        {/* Tab Headers Layer */}
        <div className="d-flex justify-content-center gap-4 border-bottom pb-3 mb-5 rec-tab-header">
          <span 
            className={`rec-tab-item fw-bold cursor-pointer pb-2 ${activeTab === 'new' ? 'rec-active-tab' : ''}`}
            onClick={() => setActiveTab('new')}
          >
            New Launches
          </span>
          <span 
            className={`rec-tab-item fw-bold cursor-pointer pb-2 ${activeTab === 'protection' ? 'rec-active-tab' : ''}`}
            onClick={() => setActiveTab('protection')}
          >
            Crop Protection Kits
          </span>
          <span 
            className={`rec-tab-item fw-bold cursor-pointer pb-2 ${activeTab === 'boosters' ? 'rec-active-tab' : ''}`}
            onClick={() => setActiveTab('boosters')}
          >
            Yield Boosters
          </span>
        </div>

        {/* Dynamic Display Grid */}
        <div className="row g-4 justify-content-center">
          {recommendationsData[activeTab].map((product) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <div 
                className="rec-product-card position-relative overflow-hidden cursor-pointer d-flex flex-column rec-fade-in"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                
                {/* Product Image Panel */}
                <div className="rec-img-wrapper overflow-hidden rounded-3 position-relative">
                  <img src={product.image} className="rec-product-img w-100 h-100" alt={product.title} />
                  {product.tag && (
                    <span className="rec-badge  text-white px-2 py-1 small rounded-start position-absolute top-0 start-0 mb-3 ms-2">
                      {product.tag}
                    </span>
                  )}
                </div>

                {/* Text Context Content Block */}
                <div className="rec-info-block pt-3 pb-2 text-start px-1">
                  <h5 className="rec-product-name fw-bold mb-1 text-truncate">{product.title}</h5>
                  
                  {/* Rating Block */}
                  <div className="rec-rating mb-2 d-flex align-items-center">
                    {renderStars(product.rating)}
                  </div>

                  {/* Pricing Fields */}
                  <div className="rec-price-row d-flex align-items-center gap-2">
                    <span className="rec-current-price fw-bold text-success">₹{product.price}</span>
                    <span className="rec-old-price text-muted text-decoration-line-through small">₹{product.oldPrice}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
 <div className="text-center mt-5">
          <button 
            className="btn btn-outline-success btn-view-all px-5 py-2.5 rounded-pill fw-bold text-uppercase"
            onClick={() => navigate('/products')}
          >
            View All Products
          </button>
        </div>

      </div>
    </section>
  );
};

export default ExpertRecommendations;