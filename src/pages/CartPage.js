import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const CartPage = () => {
  const location = useLocation();
  const history = useHistory();
  const product = location.state; // Get the product details passed from the HomePage

  const handleAddToCart = () => {
    // Logic to add the product to the cart goes here
    alert(`${product.name} has been added to your cart!`);
    history.push('/'); // Redirect to homepage
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={() => history.push('/')}>Go Back to Homepage</button>
    </div>
  );
};

export default CartPage;
