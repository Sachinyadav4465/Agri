import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BestSellers.css';

const BestSellers = () => {
  const navigate = useNavigate();
  
  // State to manage active tab (Default is 'exclusive')
  const [activeTab, setActiveTab] = useState('exclusive');

  // Pesticide Product Dataset divided by tabs
  const productsData = {
    exclusive: [
      {
        id: 'ex-1',
        title: 'Alpha-Guard Broad Spectrum Insecticide',
        price: 849,
        oldPrice: 999,
        rating: 5,
        image: 'https://i.pinimg.com/736x/af/a8/02/afa80274148f4c8f4e3d18e08c2306ee.jpg',
        tag: 'Sale 15% Off'
      },
      {
        id: 'ex-2',
        title: 'Blaster-X Systemic Fungicide',
        price: 1250,
        oldPrice: 1400,
        rating: 4,
        image: 'https://i.pinimg.com/1200x/72/8d/ff/728dff2507190194e40cb171447c875e.jpg',
        tag: 'Exclusive'
      },
      {
        id: 'ex-3',
        title: 'Weed-Out Selective Herbicide',
        price: 620,
        oldPrice: 699,
        rating: 5,
        image: 'https://i.pinimg.com/1200x/89/0b/26/890b264421e73827a3e8b192e916c003.jpg',
        tag: 'Premium'
      },
      {
        id: 'ex-4',
        title: 'Crop-Shield Nitro Booster',
        price: 899,
        oldPrice: 1100,
        rating: 5,
        image: 'https://i.pinimg.com/1200x/d4/a1/17/d4a117278fffa3a2f761bc40264dfeb6.jpg',
        tag: 'New Launch'
      }
    ],
    favorites: [
      {
        id: 'fav-1',
        title: 'Termite Sniper Soil Drench',
        price: 550,
        oldPrice: 650,
        rating: 5,
        image: 'https://i.pinimg.com/736x/58/a4/77/58a4777a3cabe6890a991fdcd82d7698.jpg',
        tag: 'Farmers Choice'
      },
      {
        id: 'fav-2',
        title: 'Blight-Control Powdery Wash',
        price: 720,
        oldPrice: 850,
        rating: 4,
        image: 'https://i.pinimg.com/1200x/6f/f3/5e/6ff35e4454f79266c8d55e6202062288.jpg',
        tag: 'Top Rated'
      },
      {
        id: 'fav-3',
        title: 'Super-Green Leaf Activator',
        price: 430,
        oldPrice: 500,
        rating: 5,
        image: 'https://i.pinimg.com/1200x/8a/42/43/8a4243c71c3e7bf14289f896b6316a24.jpg',
        tag: 'Best Seller'
      },
      {
        id: 'fav-4',
        title: 'Root-Mass Liquid Fertilizer',
        price: 950,
        oldPrice: 1100,
        rating: 4,
        image: 'https://i.pinimg.com/1200x/5f/62/34/5f62347b7d96e2a7d1df4fecc297fc97.jpg',
        tag: 'Hot Product'
      }
    ],
    organic: [
      {
        id: 'org-1',
        title: 'Bio-Neem Pure Concentrate',
        price: 399,
        oldPrice: 450,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=400&q=80',
        tag: '100% Organic'
      },
      {
        id: 'org-2',
        title: 'Eco-Weed Natural Eliminator',
        price: 499,
        oldPrice: 599,
        rating: 4,
        image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=400&q=80',
        tag: 'Herbal Care'
      },
      {
        id: 'org-3',
        title: 'Earth-Extract Soil Energizer',
        price: 320,
        oldPrice: 380,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80',
        tag: 'Eco Friendly'
      },
      {
        id: 'org-4',
        title: 'Bio-Vigor Crop Tonic',
        price: 640,
        oldPrice: 750,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=400&q=80',
        tag: 'Certified Bio'
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
    <section className="agro-bestsellers py-5 bg-white">
      <div className="container">
        
        {/* Section Title */}
        <div className="text-center mb-4">
          <h2 className="bestseller-main-title fw-bold text-uppercase tracking-wide">Best Sellers</h2>
          <p className="text-muted bestseller-subtitle">Discover top-performing crop protection trusted by premium growers</p>
        </div>

        {/* Tab Selection Row */}
        <div className="d-flex justify-content-center gap-4 border-bottom pb-3 mb-5 tab-header">
          <span 
            className={`tab-item fw-bold cursor-pointer pb-2 ${activeTab === 'exclusive' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('exclusive')}
          >
            Exclusive Collection
          </span>
          <span 
            className={`tab-item fw-bold cursor-pointer pb-2 ${activeTab === 'favorites' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('favorites')}
          >
            Farming Favorites
          </span>
          <span 
            className={`tab-item fw-bold cursor-pointer pb-2 ${activeTab === 'organic' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('organic')}
          >
            Organic Choices
          </span>
        </div>

        {/* Dynamic Product Grid based on activeTab state */}
        <div className="row g-4 justify-content-center">
          {productsData[activeTab].map((product) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <div 
                className="product-card position-relative overflow-hidden cursor-pointer d-flex flex-column animate-fade-in"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                
                {/* Image & Badge Overlay */}
                <div className="product-img-wrapper overflow-hidden rounded-3 position-relative">
                  <img src={product.image} className="product-img w-100 h-100" alt={product.title} />
                  {product.tag && (
                    <span className="product-badge  text-white px-2 py-1 small rounded-start position-absolute top-0 start-0 mb-3 ms-2">
                      {product.tag}
                    </span>
                  )}
                </div>

                {/* Info Text Block */}
                <div className="product-info-block pt-3 pb-2 text-start px-1">
                  <h5 className="product-name fw-bold mb-1 text-truncate">{product.title}</h5>
                  
                  {/* Rating Layer */}
                  <div className="product-rating mb-2 d-flex align-items-center">
                    {renderStars(product.rating)}
                  </div>

                  {/* Pricing Details */}
                  <div className="product-price-row d-flex align-items-center gap-2">
                    <span className="current-price fw-bold text-success">₹{product.price}</span>
                    <span className="old-price text-muted text-decoration-line-through small">₹{product.oldPrice}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-5">
          <button 
            className="btn btn-outline-success btn-view-all px-5 py-2.5 rounded-pill fw-bold text-uppercase"
            onClick={() => navigate('/all-products')}
          >
            View All Products
          </button>
        </div>

      </div>
    </section>
  );
};

export default BestSellers;