import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../components/context/CartContext'; // 1. Global Cart Context ko import kiya
import '../styles/AllProducts.css';

const AllProducts = () => {
  const navigate = useNavigate();
  const { addToCart, setIsDrawerOpen } = useCart(); // Drawer state ko yahan nikal liya

  // Expanded Mock Database
  const fullProductsMaster = [
    { id: 'elite-crop-shield', name: 'Vanguard Elite', price: 2499, category: 'insecticides', stock: 'in-stock', img: "https://i.pinimg.com/736x/38/4e/ca/384ecabac8591569581775fe4e91f9de.jpg", rating: 4.8 },
    { id: 'supreme-fungal-shield', name: 'Bio-Resilience Pro', price: 1850, category: 'fungicides', stock: 'in-stock', img: "https://i.pinimg.com/736x/b3/4f/0b/b34f0b7f303465fa243a968b7598dd10.jpg", rating: 4.5 },
    { id: 'institutional-weed-shield', name: 'Terminator Max', price: 3200, category: 'herbicides', stock: 'in-stock', img: "https://i.pinimg.com/736x/e9/e2/81/e9e281fd104d294bfca426779ccf6588.jpg", rating: 4.9 },
    { id: 'harvest-booster-shield', name: 'Imperial Harvest', price: 1599, category: 'organic', stock: 'in-stock', img: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=600&q=80", rating: 4.6 },
    { id: 'premium-hybrid-cotton', name: 'Gold Hybrid Cotton Seeds', price: 850, category: 'seeds', stock: 'in-stock', img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=600&q=80", rating: 4.4 },
    { id: 'nitro-boost-urea', name: 'NitroMax Granular Fertilizer', price: 1200, category: 'fertilizers', stock: 'in-stock', img: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=600&q=80", rating: 4.2 }
  ];

  // Control Engine States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [maxPrice, setMaxPrice] = useState(4000);
  const [sortBy, setSortBy] = useState('none'); // 'none', 'lowHigh', 'highLow', 'nameAz'

  // Instant Add-to-Cart with Automatic Drawer Opener Trigger
  const handleFastAdd = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img
    }, 1);
    setIsDrawerOpen(true); // Explicitly drawer trigger ko force open kiya
  };

  // Search + Filter + Sort Matrix Execution
  const processedProducts = useMemo(() => {
    let result = fullProductsMaster.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPrice = product.price <= maxPrice;
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort evaluation engine
    if (sortBy === 'lowHigh') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'highLow') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'nameAz') result.sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [searchTerm, selectedCategory, maxPrice, sortBy]);

  return (
    <section className="catalog-master-section py-5 bg-white">
      <div className="container-fluid px-lg-5">
        
        {/* Top Search & Sorting Bar Control Desk */}
        <div className="row g-3 mb-4 align-items-center bg-light p-3 rounded-4 border mx-0">
          <div className="col-12 col-md-5">
            <div className="input-group bg-white rounded-pill overflow-hidden border px-3 py-1">
              <span className="input-group-text bg-transparent border-0 text-muted"><i className="bi bi-search"></i></span>
              <input 
                type="text" 
                className="form-control border-0 shadow-none small" 
                placeholder="Search products by name..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="col-12 col-md-4 ms-auto d-flex align-items-center gap-2 justify-content-md-end">
            <label className="text-muted small text-nowrap fw-bold mb-0">SORT BY:</label>
            <select className="form-select rounded-pill border shadow-none filter-select-box" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="none">Default Sorting</option>
              <option value="highLow">Price: High to Low</option>
              <option value="lowHigh">Price: Low to High</option>
              <option value="nameAz">Product Name: A to Z</option>
            </select>
          </div>
        </div>

        {/* Master Catalog Grid */}
        <div className="row g-4">
          
          {/* LEFT CONTENT: MAIN PRODUCTS CATALOG GRID */}
          <div className="col-12 col-lg-9 order-2 order-lg-1">
            {processedProducts.length === 0 ? (
              <div className="text-center py-5 border rounded-4 bg-light">
                <i className="bi bi-exclamation-circle text-muted display-4 mb-3 d-block"></i>
                <h5 className="fw-bold">No Products Found</h5>
                <p className="text-muted small mb-0">Try adjusting your search keywords or filter values.</p>
              </div>
            ) : (
              <div className="row g-4">
                {processedProducts.map((product) => (
                  <div className="col-12 col-sm-6 col-md-4" key={product.id}>
                    <div className="premium-agro-card border rounded-4 bg-white overflow-hidden transition-all h-100 d-flex flex-column">
                      
                      {/* Image Viewer Frame Layer - Clicking triggers route shift */}
                      <div className="card-img-frame position-relative overflow-hidden cursor-pointer bg-light" onClick={() => navigate(`/product/${product.id}`)}>
                        <img src={product.img} alt={product.name} className="w-100 h-100 object-fit-cover transition-transform duration-500 card-zoom-img" />
                        <span className="position-absolute bottom-0 start-0 m-3 badge bg-white text-dark border shadow-sm small fw-bold">
                          <i className="bi bi-star-fill text-warning me-1"></i>{product.rating}
                        </span>
                      </div>

                      {/* Info Area & Dynamic Add to Cart Bottom Line */}
                      <div className="p-4 d-flex flex-column justify-content-between flex-grow-1 text-start">
                        <div>
                          <span className="text-uppercase text-success fw-bold text-xs tracking-wider mb-1 d-block">{product.category}</span>
                          <h6 className="fw-bold text-dark mb-2 product-title-nav" onClick={() => navigate(`/product/${product.id}`)}>{product.name}</h6>
                          <h5 className="fw-bold text-dark mb-0">₹{product.price.toLocaleString('en-IN')}</h5>
                        </div>

                        {/* Interactive Full-Width Add To Cart Button */}
                        <button type="button" className="btn btn-success w-100 rounded-pill mt-4 py-2.5 fw-bold d-flex align-items-center justify-content-center gap-2 catalog-cart-btn" onClick={() => handleFastAdd(product)}>
                          <i className="bi bi-bag-plus-fill"></i> Add To Cart
                        </button>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR: CONTROLS PANEL */}
          <div className="col-12 col-lg-3 order-1 order-lg-2">
            <div className="bg-light p-4 rounded-4 border sticky-top" style={{ top: '100px', zIndex: 5 }}>
              <div className="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom">
                <h5 className="fw-bold mb-0 text-dark"><i className="bi bi-sliders text-success me-2"></i>Filters</h5>
                {(selectedCategory !== 'all' || maxPrice !== 4000) && (
                  <button className="btn btn-sm text-danger p-0 fw-bold border-0 bg-transparent" onClick={() => { setSelectedCategory('all'); setMaxPrice(4000); }}>Clear</button>
                )}
              </div>

              {/* Formulation Categories Filter */}
              <div className="mb-4 text-start">
                <label className="fw-bold small text-uppercase tracking-wider text-muted mb-2 d-block">Category</label>
                <div className="d-flex flex-column gap-2">
                  {['all', 'insecticides', 'fungicides', 'herbicides', 'organic', 'seeds', 'fertilizers'].map((cat) => (
                    <label key={cat} className="d-flex align-items-center gap-2.5 cursor-pointer text-capitalize text-muted small filter-row">
                      <input 
                        type="radio" 
                        name="catGroup" 
                        className="form-check-input text-success shadow-none cursor-pointer"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                      />
                      <span className={selectedCategory === cat ? 'fw-bold text-dark' : ''}>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Cap Controller */}
              <div className="text-start">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <label className="fw-bold small text-uppercase tracking-wider text-muted mb-0">Max Budget</label>
                  <span className="fw-bold text-success">₹{maxPrice.toLocaleString('en-IN')}</span>
                </div>
                <input 
                  type="range" 
                  className="form-range" 
                  min="500" 
                  max="4000" 
                  step="100"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AllProducts;