import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import CartPage from './pages/CartPage';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productInCart = cart.find(item => item.id === product.id);
    if (productInCart) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...productInCart, quantity: productInCart.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div className="app">
      <nav className="nav-bar">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
        <Link className="nav-link" to="/cart">Cart ({cart.length})</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPage cart={cart} calculateTotal={calculateTotal} removeFromCart={removeFromCart} />} />
      </Routes>
    </div>
  );
}

export default App;
