import HomePage  from './pages/home-page';
import ContactPage from './pages/contact-page';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FaqPage from './pages/faq-page';

function App() {
  return (
  <>
      <Header />
      <Router>  
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
