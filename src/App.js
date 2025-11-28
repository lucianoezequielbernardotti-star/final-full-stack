import HomePage from './pages/home-page';
import ContactPage from './pages/contact-page';
import Header from './components/Header';
import Footer from './components/Footer';
import FaqPage from './pages/faq-page';
import PanelPage from './pages/panel-page';
import { CartProvider } from './context/cart-context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth-context';
import Login from './pages/login-page';
import PrivateRouter from './components/Private-Router';

function App() {
  return (
    <>
      <CartProvider>
        <AuthProvider>
          <Router>
            <Header />
            <br /><br /><br />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<Login />} />
              <Route element={<PrivateRouter />}>
                <Route path="/panel" element={<PanelPage />} />
              </Route>
            </Routes>
          </Router>
          <Footer />
        </AuthProvider>
      </CartProvider>
    </>
  );
}

export default App;
