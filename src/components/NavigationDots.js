import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationDots.css'; 

const NavigationDots = () => {
  return (
    <div className="nav-dots">
      <Link to="/" className="nav-dot" title="Home"></Link>
      <Link to="/about" className="nav-dot" title="About"></Link>
      <Link to="/cart" className="nav-dot" title="Cart"></Link>
    </div>
  );
};

export default NavigationDots;
