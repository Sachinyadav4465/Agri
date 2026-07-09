import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TargetedSolutions.css';

const TargetedSolutions = () => {
  const navigate = useNavigate();

  const solutionsData = [
    {
      id: 'vegetable-protection',
      title: 'Vegetable Protection',
      image: 'https://i.pinimg.com/1200x/ca/ac/0c/caac0c990c0dbd33dde23dc93e44edc1.jpg',
      desc: 'Specialized kits to protect tomatoes, chillies, and leafy greens from leaf-miners and whiteflies.'
    },
    {
      id: 'grain-paddy-care',
      title: 'Cereal & Paddy Care',
      image: 'https://i.pinimg.com/736x/b3/4f/0b/b34f0b7f303465fa243a968b7598dd10.jpg',
      desc: 'Advanced formulations to eradicate stem borers and blast diseases in Rice and Wheat crops.'
    },
    {
      id: 'termite-pest-control',
      title: 'Root & Termite Control',
      image: 'https://i.pinimg.com/736x/38/4e/ca/384ecabac8591569581775fe4e91f9de.jpg',
      desc: 'Heavy-duty soil drenches to permanently eliminate underground termites and root-knot nematodes.'
    },
    {
      id: 'fruit-orchard-defense',
      title: 'Fruit Orchard Defense',
      image: 'https://i.pinimg.com/736x/e9/e2/81/e9e281fd104d294bfca426779ccf6588.jpg',
      desc: 'Maximum protection for citrus, mango, and apple orchards against fruit flies and powdery mildew.'
    },
    {
      id: 'soil-nutrition-health',
      title: 'Soil Health & Nutrition',
      image: 'https://i.pinimg.com/736x/bb/03/e1/bb03e140108491803fe539218b146552.jpg',
      desc: 'Bio-fertilizers and root energizers to recover damaged soil beds and improve root development.'
    },
    {
      id: 'termite-pest-control',
      title: 'Root & Termite Control',
      image: 'https://i.pinimg.com/736x/38/4e/ca/384ecabac8591569581775fe4e91f9de.jpg',
      desc: 'Heavy-duty soil drenches to permanently eliminate underground termites and root-knot nematodes.'
    }
  ];

  return (
    <section className="agro-solutions py-5 bg-light">
      {/* Width fixed to standard container to match upper sections */}
      <div className="container">
        
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="solutions-main-title fw-bold text-uppercase tracking-wide">Targeted Crop Solutions</h2>
          <p className="text-muted solutions-subtitle">Tailored treatments for every farming challenge and crop type</p>
          <div className="title-underline mx-auto"></div>
        </div>

        {/* 5-Card Grid Row */}
        <div className="row g-4 justify-content-center">
          {solutionsData.map((solution) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-2-4" key={solution.id}>
              <div 
                className="solution-card position-relative overflow-hidden rounded-3 shadow-sm cursor-pointer"
                onClick={() => navigate(`/product/${solution.id}`)}
              >
                
                {/* Product Image Wrapper */}
                <div className="solution-img-wrapper">
                  <img 
                    src={solution.image} 
                    className="solution-card-img w-100 h-100" 
                    alt={solution.title} 
                  />
                </div>

                {/* Bottom Title Bar */}
                <div className="solution-title-bar bg-white px-3 py-3 d-flex align-items-center justify-content-between border-top">
                  <span className="solution-title fw-bold text-uppercase">{solution.title}</span>
                  <div className="arrow-circle d-flex align-items-center justify-content-center bg-dark text-white rounded-circle">
                    <i className="bi bi-arrow-right small"></i>
                  </div>
                </div>

                {/* Smooth Hover Overlay */}
                <div className="solution-hover-overlay d-flex flex-column justify-content-center align-items-center text-center p-3">
                  <h6 className="overlay-heading text-white fw-bold text-uppercase mb-2">{solution.title}</h6>
                  <p className="overlay-text text-white-50 x-small mb-3">{solution.desc}</p>
                  <span className="badge bg-light text-success rounded-pill px-3 py-2 fw-bold">
                    TREAT CROP <i className="bi bi-chevron-right ms-1"></i>
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

export default TargetedSolutions;