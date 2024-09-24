import React from 'react';
import './NavigationDots.css';

const NavigationDots = () => {
  return (
    <div className="navigation-dots">
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link>
    </div>
  );
};

export default NavigationDots;
