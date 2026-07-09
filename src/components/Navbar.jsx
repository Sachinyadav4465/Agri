import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <header className="agro-navbar">
      {/* Top Support Bar */}
      <div className="top-banner text-center py-1 bg-dark text-white text-uppercase small">
        Farmer Support Helpline - <strong>9147321916</strong> | Order on WhatsApp - <strong>7506210892</strong>
      </div>

      {/* Main Row */}
      <div className="container-fluid px-lg-5 py-3 border-bottom main-header">
        <div className="row align-items-center">
          
          {/* Logo */}
          <div className="col-auto">
            <Link to="/" className="brand-logo fw-bold text-decoration-none d-flex align-items-center gap-1">
              <span className="logo-icon border border-success rounded-circle px-2 py-1 me-1 text-success">A</span> 
              AGRO CARE <small className="text-muted fw-normal">| Crop Solutions</small>
            </Link>
          </div>

          {/* Search Box */}
          <div className="col px-md-5">
            <div className="input-group search-box">
              <span className="input-group-text bg-white border-end-0">
                <i className="bi bi-search text-success"></i>
              </span>
              <input type="text" className="form-control border-start-0" placeholder="Search Pesticides..." />
            </div>
          </div>

          {/* Location & Icons */}
          <div className="col-auto d-flex align-items-center gap-3">
            <div className="location-box d-flex align-items-center border px-3 py-2 rounded">
              <i className="bi bi-geo-alt text-success me-2"></i>
              <select className="form-select border-0 p-0 bg-transparent small">
                <option>Mumbai Region</option>
                <option>Punjab Region</option>
              </select>
            </div>
            <div className="d-flex gap-3 fs-5">
              <i className="bi bi-cart-fill text-success cursor-pointer"></i>
              <Link to="/auth"><i className="bi bi-person-circle cursor-pointer"></i></Link>
            </div>
          </div>

        </div>
      </div>

      {/* Navigation Links */}
      <nav className="navbar navbar-expand-lg py-2 shadow-sm secondary-nav">
        <div className="container-fluid justify-content-center">
          <ul className="navbar-nav gap-4 flex-row">
            <li className="nav-item d-flex align-items-center gap-1">
              <a className="nav-link text-dark p-0" href="#i">Insecticides</a>
              <i className="bi bi-chevron-down small text-muted"></i>
            </li>
            <li className="nav-item d-flex align-items-center gap-1">
              <a className="nav-link text-dark p-0" href="#f">Fungicides</a>
              <i className="bi bi-chevron-down small text-muted"></i>
            </li>
            <li className="nav-item d-flex align-items-center gap-1">
              <a className="nav-link text-dark p-0" href="#h">Herbicides</a>
            </li>
            <li className="nav-item d-flex align-items-center gap-1 text-success fw-bold">
              <a className="nav-link text-success p-0" href="#o">Organic Solutions</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;