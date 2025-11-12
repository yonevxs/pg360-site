// src/App.jsx

import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Carrossel from './components/Carrossel.jsx';
import AppRouter from './router/routes.jsx';

function App() {
  return (
    <AppRouter/>
  );
}

export default App;