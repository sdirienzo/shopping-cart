import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import styles from './App.module.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const newCart = [...cart];
    
    // If product is already in cart, add to its quantity, else add it
    if (!newCart.some(cartItem => cartItem.itemDetails.id === product.id)) {
      const newItem = {};
      newItem['itemDetails'] = product;
      newItem['quantity'] = 1;
      newCart.push(newItem);
    } else {
      const index = newCart.findIndex(cartItem => cartItem.itemDetails.id === product.id);
      newCart[index].quantity++;
    }

    setCart(newCart);
  }

  const removeFromCart = (product) => {
    let newCart = [...cart];

    if (!newCart.some(cartItem => cartItem.itemDetails.id === product.id)) {
      return;
    }

    const index = newCart.findIndex(cartItem => cartItem.itemDetails.id === product.id);
    // If only 1 quantity of product, remove it from cart, else subtract 1 
    if (newCart[index].quantity === 1) {
      newCart = newCart.filter(cartItem => cartItem.itemDetails.id !== product.id);
    } else {
      newCart[index].quantity--;
    }

    setCart(newCart);
  }

  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/product/:id" element={<Product onAdd={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} onAdd={addToCart} onRemove={removeFromCart} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
