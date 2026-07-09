import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="agro-hero">
      <div className="hero-overlay"></div>
      <div className="container h-100 position-relative" style={{ zIndex: 2 }}>
        <div className="row h-100 align-items-center">
          
          <div className="col-lg-7 text-white">
            <h5 className="text-uppercase fw-bold text-success mb-3" style={{ letterSpacing: '2px' }}>
              Premium Crop Protection
            </h5>
            <h1 className="display-3 fw-bold mb-4">
              Protect Your Harvest <br/> With Certified Solutions
            </h1>
            <p className="lead mb-5 opacity-75">
              Supplying powerful Insecticides, Fungicides, and 100% Organic Bio-Pesticides to farmers across India.
            </p>
            <div className="d-flex gap-3">
              <button className="btn btn-success btn-lg px-5 py-3 rounded-pill fw-bold">
                SHOP NOW
              </button>
              <button className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill">
                VIEW CATALOG
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;