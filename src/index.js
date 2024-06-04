import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import OficinaPage from './pages/OficinaPage';
import AboutPage from './pages/AboutPage';
import './App.css';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/oficina" element={<OficinaPage />} />
      <Route path="/sobre" element={<AboutPage />} />
    </Routes>
    <Footer />
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
