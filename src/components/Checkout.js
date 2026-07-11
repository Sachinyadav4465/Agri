import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../components/context/CartContext';
import '../styles/Checkout.css';

const Checkout = () => {
  const { cartItems, cartTotal } = useCart();
  const navigate = useNavigate();

  // Form States
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    stateRegion: 'Mumbai Region',
    address: '',
    zipCode: '',
    licenseNumber: '',
    paymentMethod: 'cod'
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Bhai, aapka cart khali hai! Samaan toh add karo pehle.");
      return;
    }
    
    // Yahan real backend verification connect hogi baad me
    alert(`Order Placed Successfully!\nThank you, ${formData.fullName}.\nTotal Amount: ₹${(cartTotal + 99).toLocaleString('en-IN')}`);
    navigate('/');
  };

  return (
    <section className="checkout-page py-5 bg-light text-start" style={{ fontFamily: 'DM Sans' }}>
      <div className="container py-3">
        
        {/* Page Main Heading */}
        <div className="mb-5 text-center text-md-start">
          <h2 className="fw-bold text-dark mb-1">Secure Commercial Checkout</h2>
          <p className="text-muted small">Verify your merchant compliance and shipping parameters before initializing logistics.</p>
        </div>

        <div className="row g-4">
          
          {/* LEFT COLUMN: REGULATORY SHIPPING & VALIDATION FORM */}
          <div className="col-12 col-lg-7">
            <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border">
              
              <h5 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                <i className="bi bi-shield-lock-fill text-success"></i> 1. Shipping & Licensing Credentials
              </h5>
              
              <form onSubmit={handleSubmitOrder}>
                <div className="row g-3">
                  
                  {/* Legal Name */}
                  <div className="col-12">
                    <label className="form-label checkout-label">Full Name / Business Entity</label>
                    <input 
                      type="text" 
                      name="fullName"
                      className="form-control checkout-input py-2.5" 
                      placeholder="Sardar Gurpreet Singh" 
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>

                  {/* Phone & Email Row */}
                  <div className="col-md-6">
                    <label className="form-label checkout-label">Mobile Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      className="form-control checkout-input py-2.5" 
                      placeholder="+91 XXXXX XXXXX" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label checkout-label">Business Email</label>
                    <input 
                      type="email" 
                      name="email"
                      className="form-control checkout-input py-2.5" 
                      placeholder="farmer@agrocare.com" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>

                  {/* Agro Chemical License */}
                  <div className="col-12">
                    <label className="form-label checkout-label d-flex justify-content-between">
                      <span>Agro-Chemical License Number</span>
                      <span className="text-muted lowercase font-normal italic fs-8">Optional for organic seeds</span>
                    </label>
                    <input 
                      type="text" 
                      name="licenseNumber"
                      className="form-control checkout-input py-2.5" 
                      placeholder="LIC-IN-XXXXX-2026" 
                      value={formData.licenseNumber}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Address Text Area */}
                  <div className="col-12">
                    <label className="form-label checkout-label">Detailed Delivery Address</label>
                    <textarea 
                      name="address"
                      className="form-control checkout-input py-2.5" 
                      rows="3" 
                      placeholder="Warehouse/Village Road, Landmark" 
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>

                  {/* Zip Code */}
                  <div className="col-12 col-md-6">
                    <label className="form-label checkout-label">Postal ZIP Code</label>
                    <input 
                      type="text" 
                      name="zipCode"
                      className="form-control checkout-input py-2.5" 
                      placeholder="110001" 
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>

                {/* PAYMENT METHOD SELECTION */}
                <h5 className="fw-bold text-dark mt-5 mb-4 d-flex align-items-center gap-2">
                  <i className="bi bi-credit-card-2-front-fill text-success"></i> 2. Payment Architecture
                </h5>

                <div className="d-flex flex-column gap-2 mb-4">
                  {/* COD Option */}
                  <label className={`payment-method-tile border p-3 rounded-3 d-flex align-items-center justify-content-between cursor-pointer ${formData.paymentMethod === 'cod' ? 'active-payment-tile' : ''}`}>
                    <div className="d-flex align-items-center gap-3">
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value="cod" 
                        checked={formData.paymentMethod === 'cod'} 
                        onChange={handleInputChange}
                        className="form-check-input text-success"
                      />
                      <div>
                        <span className="fw-bold d-block text-dark small">Cash On Delivery (COD)</span>
                        <span className="text-muted fs-8">Pay securely at your warehouse doorstep upon arrival.</span>
                      </div>
                    </div>
                    <i className="bi bi-truck fs-4 text-secondary"></i>
                  </label>

                  {/* UPI / Net Banking Option */}
                  <label className={`payment-method-tile border p-3 rounded-3 d-flex align-items-center justify-content-between cursor-pointer ${formData.paymentMethod === 'online' ? 'active-payment-tile' : ''}`}>
                    <div className="d-flex align-items-center gap-3">
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value="online" 
                        checked={formData.paymentMethod === 'online'} 
                        onChange={handleInputChange}
                        className="form-check-input text-success"
                      />
                      <div>
                        <span className="fw-bold d-block text-dark small">Instant UPI / Corporate NetBanking</span>
                        <span className="text-muted fs-8">100% encrypted transactions via certified portal nodes.</span>
                      </div>
                    </div>
                    <i className="bi bi-qr-code-scan fs-4 text-success"></i>
                  </label>
                </div>

                {/* Submit Action Button */}
                <button type="submit" className="btn btn-success btn-lg w-100 py-3 rounded-pill text-uppercase fw-bold tracking-wider mt-2 shadow-sm border-success bg-success">
                  Place Institutional Order
                </button>
              </form>

            </div>
          </div>

          {/* RIGHT COLUMN: DYNAMIC ORDER SUMMARY (FETCH FROM CONTEXT) */}
          <div className="col-12 col-lg-5">
            <div className="bg-white p-4 rounded-4 shadow-sm border sticky-top" style={{ top: '100px', zIndex: 10 }}>
              <h5 className="fw-bold text-dark mb-4">Order Summary Matrix</h5>
              
              {/* Product list mapping loops */}
              <div className="checkout-summary-items-box overflow-auto mb-4" style={{ maxHeight: '260px' }}>
                {cartItems.length === 0 ? (
                  <p className="text-muted small py-3 text-center mb-0">No active cargo protection profiles loaded in basket.</p>
                ) : (
                  cartItems.map((item) => (
                    <div className="d-flex align-items-center justify-content-between gap-3 mb-3 pb-3 border-bottom border-light" key={item.id}>
                      <div className="d-flex align-items-center gap-3">
                        <div className="rounded-2 border bg-light overflow-hidden" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                          <img src={item.img} alt={item.name} className="w-100 h-100 object-fit-cover" />
                        </div>
                        <div>
                          <h6 className="fw-bold text-dark mb-0 text-truncate" style={{ maxWidth: '180px' }}>{item.name}</h6>
                          <span className="text-muted fs-8">Qty: {item.quantity} units</span>
                        </div>
                      </div>
                      <span className="fw-bold text-dark small">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                    </div>
                  ))
                )}
              </div>

              {/* Final Pricing breakdown cards */}
              <div className="bg-light p-3 rounded-3 border mb-4">
                <div className="d-flex justify-content-between mb-2 text-muted small">
                  <span>Items Subtotal</span>
                  <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="d-flex justify-content-between mb-2 text-muted small">
                  <span>Logistics & Safe Handling</span>
                  <span>₹99</span>
                </div>
                <div className="d-flex justify-content-between text-muted small mb-0">
                  <span>CIB&RC Government Clearance</span>
                  <span className="text-success fw-bold">FREE</span>
                </div>
                <hr className="opacity-10" />
                <div className="d-flex justify-content-between align-items-center fw-bold text-dark mb-0">
                  <span>Gross Total Due</span>
                  <span className="text-success h4 mb-0 fw-bold">₹{(cartItems.length > 0 ? cartTotal + 99 : 0).toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Compliance Note Info Badge */}
              <div className="p-3 bg-success-subtle border border-success-subtle rounded-3 text-success d-flex align-items-start gap-2.5">
                <i className="bi bi-patch-check-fill fs-5 mt-0.5"></i>
                <span className="fs-8 lh-base">
                  By completing transaction, you affirm that storage protocols meet national hazardous classification compliance guidelines.
                </span>
              </div>

              <div className="text-center mt-4">
                <Link to="/" className="text-decoration-underline text-success small fw-bold">Modify Items in Basket</Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Checkout;