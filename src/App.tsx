import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Menu from './pages/Menu';
import Checkout from './pages/Checkout';
import Report from './pages/Report';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;


