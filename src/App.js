import './App.css';
import {HomePage} from './pages/home-page';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
