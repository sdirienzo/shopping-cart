import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import styles from './App.module.css';

function App() {
  const [cart, setCart] = useState({});

  const addToCart = (id) => {
    const newCart = { ...cart };
    
    // If product is already in cart, add to its quantity, else add it
    newCart[id] ? newCart[id]++ : newCart[id] = 1;

    setCart(newCart);
  }

  const removeFromCart = (id) => {
    const newCart = { ...cart };

    if (!newCart[id]) {
      return;
    }

    // If only 1 quantity of product, remove it from cart, else subtract 1 
    if (newCart[id] === 1) {
      newCart.filter((productId) => productId !== id);
    } else {
      newCart[id]--;
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
          <Route path="/cart" element={<Cart onAdd={addToCart} onRemove={removeFromCart} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
