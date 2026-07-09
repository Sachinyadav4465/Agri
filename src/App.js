import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Auth from './components/Auth'; // Import the Auth component
// import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Router>
      <div className="App">
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} /> {/* Route for the Auth component */}
          {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;