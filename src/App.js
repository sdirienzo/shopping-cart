import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Product from './components/Product/Product';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
