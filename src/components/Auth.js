import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const navigate = useNavigate();

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    alert(`${isLoginMode ? 'Login' : 'Signup'} Successful! Redirecting to dashboard...`);
    navigate('/');
  };

  return (
    <section className="agro-auth-section d-flex align-items-center justify-content-center min-vh-100 bg-white">
      <div className="container">
        
        <div className="row g-0 auth-card mx-auto rounded-4 overflow-hidden shadow-lg">
          
          {/* LEFT COLUMN: BRAND VISUAL ARTWORK DISPLAY */}
          <div className="col-12 col-md-6 position-relative d-none d-md-block art-banner-column">
            <img 
              src="https://i.pinimg.com/736x/d3/53/54/d35354de12ed99938c70a88ed22512de.jpg" 
              alt="Premium Agriculture Infrastructure" 
              className="auth-art-img w-100 h-100"
            />
            <div className="auth-art-overlay d-flex flex-column justify-content-end p-5 text-white text-start">
              <h2 className="fw-bold tracking-wide lh-sm mb-2">The Shield of Absolute Yield</h2>
              <p className="text-white-50 small mb-0">Join our global distribution matrix of certified chemical protection.</p>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE FORM CONTAINER */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center p-4 p-lg-5 form-content-column">
            
            <div className="text-start mb-4">
              <div className="auth-brand mb-1 fw-bold tracking-widest text-uppercase text-success">The Agro Shield</div>
              <h3 className="auth-form-title fw-bold text-dark">
                {isLoginMode ? 'Welcome Back' : 'Create Merchant Account'}
              </h3>
              <p className="text-muted small">
                {isLoginMode ? 'Enter credentials to access supply matrix' : 'Register to unlock commercial wholesale trade rates'}
              </p>
            </div>

            <form className="auth-core-form" onSubmit={handleAuthSubmit}>
              
              {!isLoginMode && (
                <div className="form-group mb-3 text-start animate-fade-in">
                  <label className="form-label text-uppercase tracking-wider small fw-bold text-muted">Legal Full Name</label>
                  <input type="text" className="form-control auth-input rounded-3 px-3 py-2.5" placeholder="John Doe" required />
                </div>
              )}

              <div className="form-group mb-3 text-start">
                <label className="form-label text-uppercase tracking-wider small fw-bold text-muted">Business Email</label>
                <input type="email" className="form-control auth-input rounded-3 px-3 py-2.5" placeholder="name@company.com" required />
              </div>

              <div className="form-group mb-3 text-start">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <label className="form-label text-uppercase tracking-wider small fw-bold text-muted mb-0">Password</label>
                  {isLoginMode && (
                    <a href="/forgot-password" className="text-decoration-none small text-success forgot-password-link">Forgot?</a>
                  )}
                </div>
                <input type="password" className="form-control auth-input rounded-3 px-3 py-2.5" placeholder="••••••••" required />
              </div>

              {!isLoginMode && (
                <div className="form-group mb-4 text-start checkbox-terms-layer animate-fade-in">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="termsCheck" required />
                    <label className="form-check-label text-muted small" htmlFor="termsCheck">
                      I agree to the strict CIB&RC storage safety protocols and merchant wholesale terms.
                    </label>
                  </div>
                </div>
              )}

              {/* Fixed Clean Button Text Layout */}
              <button type="submit" className="btn btn-dark w-100 auth-action-btn rounded-pill py-2.5 text-uppercase fw-bold tracking-wider mt-2">
                {isLoginMode ? 'Log In' : 'Sign Up'}
              </button>

            </form>

            <div className="form-toggle-footer text-center mt-4 pt-2 border-top border-light">
              <span className="text-muted small">
                {isLoginMode ? "Don't have a commercial account? " : "Already registered with our network? "}
              </span>
              <button 
                type="button" 
                className="bg-transparent border-0 text-success fw-bold p-0 small toggle-mode-trigger text-decoration-underline"
                onClick={() => setIsLoginMode(!isLoginMode)}
              >
                {isLoginMode ? 'Sign Up Here' : 'Log In Here'}
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Auth;