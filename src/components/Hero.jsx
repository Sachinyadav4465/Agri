import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="agro-hero">

      <div className="hero-overlay"></div>

      <div className="container position-relative hero-content">

        <div className="row align-items-center min-vh-100">

          <div className="col-xl-7 col-lg-8 col-md-10 col-12 text-white">

            <h6 className="hero-subtitle text-uppercase fw-bold mb-3">
              Premium Crop Protection
            </h6>

            <h1 className="hero-title fw-bold mb-4">
              Protect Your Harvest
              <br />
              With Certified Solutions
            </h1>

            <p className="hero-text mb-5">
              Supplying powerful Insecticides, Fungicides and 100% Organic
              Bio-Pesticides to farmers across India with trusted quality,
              faster delivery and expert agricultural support.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3">

              <button className="btn btn-success hero-btn fw-bold">
                SHOP NOW
              </button>

              <button className="btn btn-outline-light hero-btn">
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