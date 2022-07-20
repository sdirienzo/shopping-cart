import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/shop/:category" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
