import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products'; // Import the product data from products.js

const ProductPage = ({ addToCart }) => {
  const { id } = useParams();  // Get the product id from the URL

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  const handleAddToCart = () => {
    addToCart(product); // Add product to cart
    alert(`${product.name} has been added to your cart!`); // Notification
  };

  return (
    <div className="product-page">
      <div className="product-page-container">
        <h1 className="product-title">{product.name}</h1>
        <img src={product.imageUrl} alt={product.name} />
        <p className="product-description">{product.description}</p>
        <p className="product-price">Price: ${product.price}</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
        <Link to="/">
          <button className="go-back-button">Go Back Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;
