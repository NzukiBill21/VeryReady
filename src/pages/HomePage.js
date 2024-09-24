import React from 'react';
import products from '../data/products';  

const HomePage = ({ addToCart }) => {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img
            src={product.imageUrl}  
            alt={product.name}   
            className="product-image"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://via.placeholder.com/200x150.png?text=No+Image"; 
            }}
          />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
