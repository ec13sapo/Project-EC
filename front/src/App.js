import './App.css';
import './styles/components/layout/Nav.css'
import './styles/components/layout/Header.css'
import './styles/components/layout/Footer.css'

import React from 'react';

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import ContactosPage from './pages/ContactosPage';
import HomePage from './pages/HomePage';
import ProductosPage from './pages/ProductosPage';
import PreguntasFrecuentesPage from './pages/PreguntasFrecuentesPage';

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/productos" element={<ProductosPage/>} />
          <Route path="/preguntas" element={<PreguntasFrecuentesPage/>} />
          <Route path="/contacto" element={<ContactosPage/>} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
