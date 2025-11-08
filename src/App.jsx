// src/App.jsx

import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';

import imagemDeFundo from './assets/por_do_sol_pg.jpg'; 

function App() {
  return (
    <div 
      style={{ backgroundImage: `url(${imagemDeFundo})` }} 
      className="min-h-screen bg-cover bg-center relative" 
    >
      <div className="absolute inset-0 bg-black opacity-65"></div>
      <Navbar />
      <Home />

    </div>
  );
}

export default App;