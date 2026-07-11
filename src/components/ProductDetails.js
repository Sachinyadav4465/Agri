import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../components/context/CartContext'; // 1. Global Cart Context ko import kiya
import '../styles/ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); // 2. Context se addToCart function nikala

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('composition');

  // Pinterest Images Object for interactive gallery thumbnails
  const galleryImages = [
    "https://i.pinimg.com/736x/38/4e/ca/384ecabac8591569581775fe4e91f9de.jpg", // Thumbnail 1 (Main)
    "https://i.pinimg.com/736x/b3/4f/0b/b34f0b7f303465fa243a968b7598dd10.jpg", // Thumbnail 2 (Field view)
    "https://i.pinimg.com/736x/e9/e2/81/e9e281fd104d294bfca426779ccf6588.jpg"  // Thumbnail 3 (Lab test)
  ];

  // Set the first image as default selected image state
  const [mainImage, setMainImage] = useState(galleryImages[0]);

  // Mock Database mapping based on IDs
  const productDatabase = {
    'elite-crop-shield': { name: 'Vanguard Elite', price: 2499, dosage: '2ml per Litre', composition: 'Nano-emulsion Formulation 20% EC', target: 'Stem Borers, Bollworms' },
    'supreme-fungal-shield': { name: 'Bio-Resilience Pro', price: 1850, dosage: '3g per Litre', composition: 'Botanical Fungal Extract 50% WP', target: 'Powdery Mildew, Blast' },
    'institutional-weed-shield': { name: 'Terminator Max', price: 3200, dosage: '5ml per Litre', composition: 'Systemic Herbicide Active Liquid', target: 'Broad-leaf Weeds, Grassy Weeds' },
    'harvest-booster-shield': { name: 'Imperial Harvest', price: 1599, dosage: '1.5ml per Litre', composition: 'Chelated Micronutrient Complex', target: 'Cell Division, Fruit Weight Burst' }
  };

  // Safe fallback product descriptor matching context
  const product = productDatabase[id] || {
    name: 'Premium Agro Formulation',
    price: 1999,
    dosage: '2ml per Litre',
    composition: 'Active Protective Agent EC',
    target: 'Multi-pest Eradication'
  };

  // 3. Dynamic Handler: Isse data Cart State me store hoga!
  const handleAddToCart = () => {
    addToCart({
      id: id || 'premium-agro-formulation', // Fallback unique identifier key
      name: product.name,
      price: product.price,
      img: mainImage // Active selected thumbnail image pass hogi cart me
    }, quantity);
    
    // NOTE: Agar tumne Cart Drawer banaya hai, toh ye automatically context se open ho jayega!
    // Agar tum alag se page par redirect karna chahte ho, toh niche wali line ko uncomment kar sakte ho:
    // navigate('/cart');
  };

  const handleBuyNow = () => {
    // Buy now direct click par standard user data context push karke checkout redirect karega
    addToCart({
      id: id || 'premium-agro-formulation',
      name: product.name,
      price: product.price,
      img: mainImage
    }, quantity);
    navigate('/checkout');
  };

  return (
    <section className="product-details-page py-5 bg-white text-start">
      <div className="container">
        <div className="row g-5">
          
          {/* LEFT FRAME: PREMIUM PRODUCT GALLERY VIEWPORT WITH THUMBNAILS */}
          <div className="col-12 col-md-6">
            {/* Active Main View Container */}
            <div className="details-img-holder rounded-4 overflow-hidden border p-3 bg-light shadow-sm mb-3">
              <img src={mainImage} alt={product.name} className="w-100 h-100 object-fit-cover rounded-3 animate-fade-in" key={mainImage} />
            </div>

            {/* Thumbnails Row Grid Setup */}
            <div className="d-flex gap-2 justify-content-start align-items-center dynamic-thumbnails-row">
              {galleryImages.map((imgUrl, index) => (
                <div 
                  key={index}
                  className={`thumbnail-box border rounded-3 overflow-hidden cursor-pointer bg-light p-1 ${mainImage === imgUrl ? 'active-thumbnail-border' : ''}`}
                  style={{ width: '85px', height: '85px', transition: 'all 0.2s ease' }}
                  onClick={() => setMainImage(imgUrl)}
                >
                  <img src={imgUrl} alt={`View ${index + 1}`} className="w-100 h-100 object-fit-cover rounded-2" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT FRAME: DESCRIPTION & ACTION CTA LINKS BUTTONS */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-start pt-2">
            <span className="badge bg-success-subtle text-success border border-success-subtle text-uppercase tracking-wider px-3 py-2 rounded-pill small mb-2 align-self-start fw-bold">
              CIB&RC Certified
            </span>
            <h1 className="display-6 fw-bold text-dark mb-2">{product.name}</h1>
            <h3 className="text-success fw-bold mb-4">₹{product.price.toLocaleString('en-IN')} <span className="text-muted fs-6 fw-normal">/ Commercial Pack</span></h3>
            
            <p className="text-muted small mb-4 lh-relaxed">
              High-potency institutional grade molecular agent designed for professional crop canopy protection. Engineered for fast action with optimal environmental degradation compliance.
            </p>

            {/* Quantity Selector Unit */}
            <div className="d-flex align-items-center gap-3 mb-4">
              <span className="text-uppercase tracking-wider small fw-bold text-muted">Quantity:</span>
              <div className="quantity-counter-box d-flex align-items-center border rounded-pill overflow-hidden">
                <button type="button" className="bg-transparent border-0 px-3 py-1.5 fw-bold" onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button>
                <span className="px-3 fw-bold text-dark">{quantity}</span>
                <button type="button" className="bg-transparent border-0 px-3 py-1.5 fw-bold" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            {/* Direct Action Buttons Routing Matrix (Updated Context Triggers) */}
            <div className="row g-3 mb-5">
              <div className="col-6">
                <button type="button" className="btn btn-outline-dark w-100 py-3 rounded-pill text-uppercase fw-bold tracking-wider fs-7" onClick={handleAddToCart}>
                  Add To Cart
                </button>
              </div>
              <div className="col-6">
                <button type="button" className="btn btn-success w-100 py-3 rounded-pill text-uppercase fw-bold tracking-wider fs-7 bg-success border-success" onClick={handleBuyNow}>
                  Buy Now
                </button>
              </div>
            </div>

            {/* Specification Tabs Module */}
            <div className="specification-tabs-wrapper border-top pt-4">
              <div className="d-flex gap-4 border-bottom pb-2 mb-3">
                <button type="button" className={`tab-trigger-btn bg-transparent border-0 fw-bold pb-2 small text-uppercase ${activeTab === 'composition' ? 'active' : 'text-muted'}`} onClick={() => setActiveTab('composition')}>Composition</button>
                <button type="button" className={`tab-trigger-btn bg-transparent border-0 fw-bold pb-2 small text-uppercase ${activeTab === 'dosage' ? 'active' : 'text-muted'}`} onClick={() => setActiveTab('dosage')}>Application</button>
              </div>
              
              <div className="tab-content-window py-1">
                {activeTab === 'composition' ? (
                  <div className="small text-muted animate-fade-in">
                    <p className="mb-1"><strong>Active Ingredient Formulation:</strong> {product.composition}</p>
                    <p className="mb-0"><strong>Target Bio-Hazards:</strong> {product.target}</p>
                  </div>
                ) : (
                  <div className="small text-muted animate-fade-in">
                    <p className="mb-1"><strong>Recommended Dilution Ratio:</strong> {product.dosage}</p>
                    <p className="mb-0"><strong>Safety Protocols:</strong> Wear full safety masks and spray during low wind velocity windows.</p>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetails;