import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Auth from './components/Auth'; 
import ProductDetails from './components/ProductDetails'; 
import Checkout from './components/Checkout';       
import AllProducts from './components/AllProducts'; 
import { CartProvider } from '../src/components/context/CartContext'; 
import CartDrawer from './components/CartDrawer';   
import Profile from './components/Profile'; 

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <CartDrawer /> 
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;