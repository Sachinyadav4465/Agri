import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../components/context/CartContext';
import '../styles/CartDrawer.css';

const CartDrawer = () => {
  const { isDrawerOpen, setIsDrawerOpen, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  return (
    <>
      {/* Translucent Backdrop Blur Shadow Mask */}
      <div 
        className={`cart-drawer-overlay ${isDrawerOpen ? 'show-overlay' : ''}`} 
        onClick={() => setIsDrawerOpen(false)}
      ></div>

      {/* Main Slide Panel Body */}
      <div className={`cart-drawer-panel shadow-lg ${isDrawerOpen ? 'open-drawer' : ''}`} style={{ fontFamily: 'DM Sans' }}>
        
        {/* Header Block Row */}
        <div className="drawer-header px-4 py-3 d-flex align-items-center justify-content-between border-bottom bg-white">
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-bag-check-fill text-success fs-5"></i>
            <h5 className="fw-bold text-dark mb-0">Your Protection Basket</h5>
          </div>
          <button 
            type="button" 
            className="bg-transparent border-0 text-muted fs-4 close-drawer-trigger p-0 line-height-0"
            onClick={() => setIsDrawerOpen(false)}
          >
            <i className="bi bi-x"></i>
          </button>
        </div>

        {/* Middle Scrollable Section Content */}
        <div className="drawer-items-body p-4 flex-grow-1 overflow-auto">
          {cartItems.length === 0 ? (
            <div className="text-center py-5 my-5 text-muted animate-fade-in">
              <i className="bi bi-basket3 display-4 text-light-grow mb-3 d-block"></i>
              <p className="small mb-0">Your cart drawer is completely empty.</p>
              <button className="btn btn-sm btn-success rounded-pill px-3 mt-3 fw-bold tracking-wide text-uppercase" onClick={() => setIsDrawerOpen(false)}>Start Adding</button>
            </div>
          ) : (
            <div className="d-flex flex-column gap-3">
              {cartItems.map((item) => (
                <div className="cart-item-card-row d-flex gap-3 border p-3 rounded-3 bg-light position-relative animate-fade-in" key={item.id}>
                  
                  {/* Item Mini Icon Image Viewport */}
                  <div className="cart-item-img-holder rounded-2 border overflow-hidden bg-white" style={{ width: '65px', height: '65px', flexShrink: 0 }}>
                    <img src={item.img} alt={item.name} className="w-100 h-100 object-fit-cover" />
                  </div>

                  {/* Detail text metadata handles */}
                  <div className="flex-grow-1 text-start d-flex flex-column justify-content-between pr-4">
                    <div>
                      <h6 className="fw-bold text-dark mb-0 text-truncate" style={{ maxWidth: '160px' }}>{item.name}</h6>
                      <span className="text-muted d-block" style={{ fontSize: '11px' }}>₹{item.price.toLocaleString('en-IN')} / Unit</span>
                    </div>
                    
                    {/* Micro Plus/Minus Counters Layout Container */}
                    <div className="d-flex align-items-center border rounded-pill bg-white overflow-hidden quantity-micro-counter mt-1">
                      <button type="button" className="bg-transparent border-0 px-2.5 py-0.5 text-muted small fw-bold" onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <span className="px-2 small fw-bold text-dark">{item.quantity}</span>
                      <button type="button" className="bg-transparent border-0 px-2.5 py-0.5 text-muted small fw-bold" onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                  </div>

                  {/* Absolute positioning close button */}
                  <button 
                    type="button" 
                    className="position-absolute end-0 top-0 mt-2 me-2 border-0 bg-transparent text-danger p-1 fs-7"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Lock Static Checkout CTA Box */}
        {cartItems.length > 0 && (
          <div className="drawer-footer p-4 border-top bg-white">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-uppercase tracking-wider small fw-bold text-muted">Estimated Total</span>
              <h4 className="fw-bold text-success mb-0">₹{cartTotal.toLocaleString('en-IN')}</h4>
            </div>
            <button 
              type="button" 
              className="btn btn-success w-100 py-3 rounded-pill text-uppercase fw-bold tracking-wider fs-7 bg-success border-success mb-2 shadow-sm"
              onClick={() => {
                setIsDrawerOpen(false);
                navigate('/checkout');
              }}
            >
              Secure Checkout
            </button>
          </div>
        )}

      </div>
    </>
  );
};

export default CartDrawer;