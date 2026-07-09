import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Categories.css';

const Categories = () => {
  const navigate = useNavigate();

  // Premium International Agro-Chemical Products Data
  const categoryData = [
    {
      id: 'insecticides',
      title: 'Chemical Insecticides',
      image: 'https://i.pinimg.com/736x/ae/c0/d8/aec0d8f3b7bcb551f7a5286dfbf6de18.jpg',
      desc: 'Advanced broad-spectrum insect control to eliminate caterpillars, aphids, and chewing pests instantly.'
    },
    {
      id: 'fungicides',
      title: 'Systemic Fungicides',
      image: 'https://i.pinimg.com/1200x/aa/ef/ea/aaefea3a2c22fa256aac607c2e3284f0.jpg',
      desc: 'Protective and curative solutions to eradicate leaf blast, root rot, and downy mildew outbreaks.'
    },
    {
      id: 'herbicides',
      title: 'Selective Herbicides',
      image: 'https://i.pinimg.com/736x/57/29/33/572933abd7d95c2d38a6746129e8dc08.jpg',
      desc: 'Pre and post-emergence weed control formulations targeting unwanted grass without affecting main crop yield.'
    },
    {
      id: 'growth-boosters',
      title: 'Bio-Growth Boosters',
      image: 'https://i.pinimg.com/1200x/08/d6/36/08d6365d3172073cc4a6e83be9aa11ab.jpg',
      desc: 'Organic plant nutrients and metabolic activators engineered to revitalize damaged crops and maximize yield.'
    }
  ];

  return (
    <section className="agro-categories py-5 bg-white">
      <div className="container">
        
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="section-title fw-bold text-uppercase tracking-wide">Featured Crop Solutions</h2>
          <p className="text-muted subtitle-text">Select a professional agro category to view targeted treatments</p>
          <div className="title-underline mx-auto"></div>
        </div>

        {/* Category Grid */}
        <div className="row g-4 justify-content-center">
          {categoryData.map((item) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
              {/* Click handles the dynamic routing to details page */}
              <div 
                className="agro-card position-relative overflow-hidden rounded-3 shadow-sm cursor-pointer"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                
                {/* Product Image */}
                <div className="card-img-wrapper">
                  <img 
                    src={item.image} 
                    className="agro-card-img w-100 h-100" 
                    alt={item.title} 
                  />
                </div>

                {/* Always Visible Title Bottom Bar */}
                <div className="card-title-bar bg-white text-center py-3 border-top">
                  <h5 className="card-title fw-bold m-0 text-uppercase">{item.title}</h5>
                </div>

                {/* Dynamic Hover Overlay Container (P-tag details inside) */}
                <div className="agro-hover-overlay d-flex flex-column justify-content-center align-items-center text-center p-4">
                  <h5 className="overlay-title text-white fw-bold text-uppercase mb-2">{item.title}</h5>
                  <p className="overlay-desc text-white-50 small mb-4">{item.desc}</p>
                  <button className="btn btn-sm btn-light rounded-pill px-4 fw-bold tracking-wider">
                    VIEW DETAILS
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;