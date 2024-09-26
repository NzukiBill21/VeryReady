import React from 'react';

const CartPage = ({ cartItems, removeFromCart }) => {
  const totalBalance = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total Balance: ${totalBalance.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default CartPage;
