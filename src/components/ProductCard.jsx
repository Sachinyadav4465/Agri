import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, renderStars }) => {
  const navigate = useNavigate();

  return (
    <div
      className="product-card position-relative overflow-hidden cursor-pointer d-flex flex-column animate-fade-in"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      {/* Image & Badge Overlay */}
      <div className="product-img-wrapper overflow-hidden rounded-3 position-relative">
        <img
          src={product.image}
          className="product-img w-100 h-100"
          alt={product.title}
        />

        {product.tag && (
          <span className="product-badge text-white px-2 py-1 small rounded-start position-absolute top-0 start-0 mb-3 ms-2">
            {product.tag}
          </span>
        )}
      </div>

      {/* Info Text Block */}
      <div className="product-info-block pt-3 pb-2 text-start px-1">
        <h5 className="product-name fw-bold mb-1 text-truncate">
          {product.title}
        </h5>

        {/* Rating */}
        <div className="product-rating mb-2 d-flex align-items-center">
          {renderStars(product.rating)}
        </div>

        {/* Price */}
        <div className="product-price-row d-flex align-items-center gap-2">
          <span className="current-price fw-bold text-success">
            ₹{product.price}
          </span>

          <span className="old-price text-muted text-decoration-line-through small">
            ₹{product.oldPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;