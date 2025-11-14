import HomePage from './pages/home-page';
import ContactPage from './pages/contact-page';
import Header from './components/Header';
import Footer from './components/Footer';
import FaqPage from './pages/faq-page';
import PanelPage from './pages/panel-page';
import { CartProvider } from './context/cart-context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <br /><br /><br />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/panel" element={<PanelPage />} />
          </Routes>
        </Router>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
