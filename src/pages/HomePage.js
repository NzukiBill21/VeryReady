import React from 'react';
import { useNavigate } from 'react-router-dom';
import products from '../data/products';
import './HomePage.css'; 

const HomePage = ({ addToCart }) => {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product); // Add product to cart state
    navigate('/cart');  // Navigate to the cart page
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); // Navigate to the product page
  };

  return (
    <div className="homepage-container">
      {/* Styled Header */}
      <div className="header-box">
        <h1 className="header-title">OUR PRODUCTS</h1>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="product-card" 
            onClick={() => handleProductClick(product.id)} // Make the card clickable
          >
            <h3>{product.name}</h3>
            <img src={product.imageUrl} alt={product.name} width="200" />
            <p>Price: ${product.price}</p>
            <button onClick={(e) => {
              e.stopPropagation(); // Prevent click on button from triggering card click
              handleAddToCart(product);
            }}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
