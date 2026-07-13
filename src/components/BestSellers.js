import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BestSellers.css";
import ProductCard from "./ProductCard";
import productsData from "../products";

const BestSellers = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("exclusive");

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`bi ${
          index < rating
            ? "bi-star-fill text-warning"
            : "bi-star text-muted"
        } me-1`}
      ></i>
    ));
  };

  return (
    <section className="agro-bestsellers py-5 bg-white">
      <div className="container">

        {/* Section Title */}
        <div className="text-center mb-4">
          <h2 className="bestseller-main-title fw-bold text-uppercase tracking-wide">
            Best Sellers
          </h2>
          <p className="text-muted bestseller-subtitle">
            Discover top-performing crop protection trusted by premium growers
          </p>
        </div>

        {/* Tabs */}
        <div className="d-flex justify-content-center gap-4 border-bottom pb-3 mb-5 tab-header">
          <span
            className={`tab-item fw-bold cursor-pointer pb-2 ${
              activeTab === "exclusive" ? "active-tab" : ""
            }`}
            onClick={() => setActiveTab("exclusive")}
          >
            Exclusive Collection
          </span>

          <span
            className={`tab-item fw-bold cursor-pointer pb-2 ${
              activeTab === "favorites" ? "active-tab" : ""
            }`}
            onClick={() => setActiveTab("favorites")}
          >
            Farming Favorites
          </span>

          <span
            className={`tab-item fw-bold cursor-pointer pb-2 ${
              activeTab === "organic" ? "active-tab" : ""
            }`}
            onClick={() => setActiveTab("organic")}
          >
            Organic Choices
          </span>
        </div>

        {/* Product Grid */}
        <div className="row g-4 justify-content-center">
          {productsData[activeTab].map((product) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              key={product.id}
            >
              <ProductCard
                product={product}
                renderStars={renderStars}
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-5">
          <button
            className="btn btn-outline-success btn-view-all px-5 py-2 rounded-pill fw-bold text-uppercase"
            onClick={() => navigate("/products")}
          >
            View All Products
          </button>
        </div>

      </div>
    </section>
  );
};

export default BestSellers;