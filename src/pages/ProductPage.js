import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products'; // Ensure products are imported correctly

const ProductPage = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const navigate = useNavigate();

  // Function to handle adding the product to the cart and redirecting to the cart page
  const handleAddToCart = () => {
    if (product) { // Ensure the product exists
      addToCart(product);
      navigate('/cart'); // Redirect to the Cart page after adding to cart
    } else {
      console.error("Product not found!");
    }
  };

  // Handle case where product is not found
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      {product.imageUrl && <img src={product.imageUrl} alt={product.name} />} {/* Display product image */}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductPage;
