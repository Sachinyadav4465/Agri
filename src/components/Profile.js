import React, { useState } from 'react';
import '../styles/Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('orders');

  // Mock User Identity Profile Data
  const userProfile = {
    fullName: "Sardar Gurpreet Singh",
    entityName: "Singh Agro-Logistics Pvt Ltd",
    email: "gurpreet.singh@agrocare.com",
    phone: "+91 98765 43210",
    licenseNumber: "LIC-IN-DEL-88492-2026",
    licenseExpiry: "12-Dec-2029",
    primaryWarehouse: "Warehouse No. 4, G.T. Road, Near Grain Market, Amritsar, Punjab - 143001"
  };

  // Mock Order History Stack Matching Our Catalog Matrix Items
  const orderHistory = [
    {
      orderId: "AGRO-2026-9941",
      date: "08-Jul-2026",
      status: "Dispatched",
      statusColor: "text-primary bg-primary-subtle border-primary-subtle",
      grossTotal: 4448,
      items: [
        { name: "Vanguard Elite", quantity: 1, price: 2499 },
        { name: "Bio-Resilience Pro", quantity: 1, price: 1850 }
      ]
    },
    {
      orderId: "AGRO-2026-8710",
      date: "14-May-2026",
      status: "Delivered",
      statusColor: "text-success bg-success-subtle border-success-subtle",
      grossTotal: 3299,
      items: [
        { name: "Terminator Max", quantity: 1, price: 3200 }
      ]
    }
  ];

  return (
    <section className="profile-page-wrapper py-5 bg-light text-start" style={{ fontFamily: 'DM Sans' }}>
      <div className="container py-3">
        
        {/* TOP BLOCK: MERCHANT HEADER ACCOUNT CARD */}
        <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border mb-4 position-relative overflow-hidden">
          <div className="profile-decoration-badge position-absolute top-0 end-0 bg-success text-white px-4 py-1.5 small fw-bold tracking-wider uppercase text-xs rounded-bottom-start">
            Verified Merchant
          </div>
          
          <div className="d-flex flex-column flex-md-row align-items-center gap-4">
            {/* Avatar Initials Bubble */}
            <div className="profile-avatar-circle bg-success text-white d-flex align-items-center justify-content-center rounded-circle fw-bold shadow-sm" style={{ width: '80px', height: '80px', fontSize: '32px', flexShrink: 0 }}>
              {userProfile.fullName.charAt(0)}
            </div>
            
            <div className="text-center text-md-start">
              <h3 className="fw-bold text-dark mb-1">{userProfile.fullName}</h3>
              <p className="text-muted mb-2 small d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                <i className="bi bi-building-fill text-secondary"></i> {userProfile.entityName}
              </p>
              <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3 text-muted fs-8">
                <span><i className="bi bi-envelope-fill me-1 text-success"></i> {userProfile.email}</span>
                <span><i className="bi bi-telephone-fill me-1 text-success"></i> {userProfile.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE NAVIGATION CONTROL TABS */}
        <div className="row g-4">
          <div className="col-12 col-md-3">
            <div className="d-flex flex-row flex-md-column gap-2 bg-white p-2.5 rounded-4 border shadow-sm sticky-top" style={{ top: '100px' }}>
              <button 
                type="button" 
                className={`btn w-100 text-start py-2.5 px-3 rounded-3 border-0 font-semibold text-xs text-uppercase tracking-wider d-flex align-items-center gap-2.5 transition-all ${activeTab === 'orders' ? 'bg-success text-white shadow-sm fw-bold' : 'bg-transparent text-muted hover-bg-light'}`}
                onClick={() => setActiveTab('orders')}
              >
                <i className="bi bi-box-seam-fill"></i> Order History
              </button>
              <button 
                type="button" 
                className={`btn w-100 text-start py-2.5 px-3 rounded-3 border-0 font-semibold text-xs text-uppercase tracking-wider d-flex align-items-center gap-2.5 transition-all ${activeTab === 'credentials' ? 'bg-success text-white shadow-sm fw-bold' : 'bg-transparent text-muted hover-bg-light'}`}
                onClick={() => setActiveTab('credentials')}
              >
                <i className="bi bi-file-earmark-medical-fill"></i> Business Profiles
              </button>
            </div>
          </div>

          {/* MAIN DESK TAB CONTENT BLOCKS */}
          <div className="col-12 col-md-9">
            
            {/* TAB WINDOW 1: COMPREHENSIVE ORDERS TRACKING GRID */}
            {activeTab === 'orders' && (
              <div className="d-flex flex-column gap-4 animate-fade-in">
                <h5 className="fw-bold text-dark mb-1 px-1">Procurement Records Matrix</h5>
                
                {orderHistory.map((order) => (
                  <div key={order.orderId} className="bg-white rounded-4 border shadow-sm overflow-hidden">
                    {/* Order Meta Header Strip */}
                    <div className="bg-light p-3 border-bottom d-flex flex-wrap justify-content-between align-items-center gap-2 fs-8 text-muted fw-semibold">
                      <div className="d-flex gap-3">
                        <span>ORDER ID: <strong className="text-dark">{order.orderId}</strong></span>
                        <span>DATE: <strong className="text-dark">{order.date}</strong></span>
                      </div>
                      <span className={`badge border px-2.5 py-1.5 rounded-pill ${order.statusColor}`}>
                        {order.status}
                      </span>
                    </div>

                    {/* Order Packed Items Inner Rows */}
                    <div className="p-3 p-md-4">
                      {order.items.map((item, idx) => (
                        <div key={idx} className={`d-flex justify-content-between align-items-center ${idx !== order.items.length - 1 ? 'border-bottom pb-3 mb-3' : ''}`}>
                          <div className="text-start">
                            <h6 className="fw-bold text-dark mb-1 small">{item.name}</h6>
                            <span className="text-muted fs-8">Quantity Requested: {item.quantity} units</span>
                          </div>
                          <span className="fw-bold text-dark small">₹{item.price.toLocaleString('en-IN')}</span>
                        </div>
                      ))}
                    </div>

                    {/* Order Total Footer Bar */}
                    <div className="bg-light-subtle p-3 border-top d-flex justify-content-between align-items-center">
                      <span className="text-muted fs-8 fw-bold text-uppercase">Gross Disbursed Value</span>
                      <span className="h5 fw-bold text-success mb-0">₹{order.grossTotal.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB WINDOW 2: LEGAL COMPLIANCE & CREDENTIALS INFO SHARDS */}
            {activeTab === 'credentials' && (
              <div className="bg-white p-4 p-md-5 rounded-4 border shadow-sm d-flex flex-column gap-4 animate-fade-in">
                <h5 className="fw-bold text-dark mb-2">Corporate Compliance Profile</h5>
                
                {/* Government Statutory Chemical License Grid */}
                <div className="p-3.5 bg-light rounded-3 border">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-success-subtle text-success p-2 rounded-3">
                      <i className="bi bi-patch-check-fill fs-4"></i>
                    </div>
                    <div className="text-start">
                      <span className="text-uppercase tracking-wider text-muted font-bold text-xs d-block mb-1">CIB&RC Statutory Compliance</span>
                      <h6 className="fw-bold text-dark mb-1">{userProfile.licenseNumber}</h6>
                      <small className="text-muted fs-8 d-block">Valid Term Expiry Matrix: <strong className="text-dark">{userProfile.licenseExpiry}</strong></small>
                    </div>
                  </div>
                </div>

                {/* Primary Warehouse Delivery Terminal Node Address */}
                <div className="p-3.5 bg-light rounded-3 border">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-success-subtle text-success p-2 rounded-3">
                      <i className="bi bi-geo-alt-fill fs-4"></i>
                    </div>
                    <div className="text-start">
                      <span className="text-uppercase tracking-wider text-muted font-bold text-xs d-block mb-1">Primary Terminal Node (Warehouse Location)</span>
                      <p className="text-dark small mb-0 lh-base fw-medium">{userProfile.primaryWarehouse}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Profile;