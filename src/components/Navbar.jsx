import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useCart } from "../../src/components/context/CartContext"; // 1. Cart Context Import Kiya

const Navbar = () => {
  const { setIsDrawerOpen, cartCount } = useCart(); // 2. Context se Trigger aur Count nikala

  return (
    <header className="agro-navbar">

      {/* Top Banner */}
      <div className="top-banner text-center py-2 bg-dark text-white small">
        Farmer Support Helpline <strong>9147321916</strong> | Order on WhatsApp{" "}
        <strong>7506210892</strong>
      </div>

      {/* Main Header */}
      <div className="container-fluid px-lg-5 py-3 border-bottom">

        <div className="row align-items-center gy-3">

          {/* Logo */}
          <div className="col-lg-3 col-md-12 text-center text-lg-start">

            <Link
              to="/"
              className="brand-logo text-decoration-none d-inline-flex align-items-center"
            >
              <span className="logo-icon border border-success rounded-circle px-2 py-1 me-2 text-success fw-bold">
                A
              </span>

              <div>
                <h5 className="m-0 fw-bold text-dark">
                  AGRO CARE
                </h5>

                <small className="text-muted">
                  Crop Solutions
                </small>
              </div>

            </Link>

          </div>

          {/* Search */}
          <div className="col-lg-6 col-md-8">

            <div className="input-group search-box">

              <span className="input-group-text bg-white border-end-0">

                <i className="bi bi-search text-success"></i>

              </span>

              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Search Pesticides..."
              />

            </div>

          </div>

          {/* Right Section */}
          <div className="col-lg-3 col-md-4">

            <div className="d-flex justify-content-md-end justify-content-center align-items-center gap-3 flex-wrap">

              {/* Location */}
              <div className="location-box border rounded px-2 py-2">

                <div className="d-flex align-items-center">

                  <i className="bi bi-geo-alt text-success me-2"></i>

                  <select className="form-select border-0 shadow-none bg-transparent small">

                    <option>Mumbai Region</option>

                    <option>Punjab Region</option>

                  </select>

                </div>

              </div>

              {/* Icons Grid */}
              <div className="d-flex align-items-center gap-3 fs-4">

                {/* 3. Cart Icon Context Handler Hook Trigger Button */}
                <div 
                  className="position-relative text-success cursor-pointer" 
                  onClick={() => setIsDrawerOpen(true)}
                  style={{ cursor: 'pointer' }}
                >
                  <i className="bi bi-cart-fill"></i>
                  {cartCount > 0 && (
                    <span 
                      className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger text-white fw-bold d-flex align-items-center justify-content-center"
                      style={{ fontSize: '10px', minWidth: '18px', height: '18px', padding: '0px' }}
                    >
                      {cartCount}
                    </span>
                  )}
                </div>

                <Link to="/auth" className="text-dark">

                  <i className="bi bi-person-circle"></i>

                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Navigation Links Grid Links */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">

        <div className="container-fluid px-lg-5">

          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarMenu"
          >

            <ul className="navbar-nav gap-lg-5 text-center">

              <li className="nav-item dropdown">

                <a
                  href="#"
                  className="nav-link dropdown-toggle fw-semibold"
                  data-bs-toggle="dropdown"
                >
                  Insecticides
                </a>

                <ul className="dropdown-menu">

                  <li>
                    <a href="#" className="dropdown-item">
                      Product 1
                    </a>
                  </li>

                  <li>
                    <a href="#" className="dropdown-item">
                      Product 2
                    </a>
                  </li>

                </ul>

              </li>

              <li className="nav-item dropdown">

                <a
                  href="#"
                  className="nav-link dropdown-toggle fw-semibold"
                  data-bs-toggle="dropdown"
                >
                  Fungicides
                </a>

                <ul className="dropdown-menu">

                  <li>
                    <a href="#" className="dropdown-item">
                      Product 1
                    </a>
                  </li>

                  <li>
                    <a href="#" className="dropdown-item">
                      Product 2
                    </a>
                  </li>

                </ul>

              </li>

              <li className="nav-item">

                <a href="#" className="nav-link fw-semibold">
                  Herbicides
                </a>

              </li>

              <li className="nav-item">

                <a href="#" className="nav-link fw-bold text-success">
                  Organic Solutions
                </a>

              </li>

              <li className="nav-item">

                <a href="#" className="nav-link fw-semibold">
                  Seeds
                </a>

              </li>

              <li className="nav-item">

                <a href="#" className="nav-link fw-semibold">
                  Fertilizers
                </a>

              </li>

              <li className="nav-item">

                <a href="#" className="nav-link fw-semibold">
                  Plant Growth
                </a>

              </li>

            </ul>

          </div>

        </div>

      </nav>

    </header>
  );
};

export default Navbar;