// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar.jsx';
// import Home from './components/Home.jsx';
// import Carrossel from './components/Carrossel.jsx';
import AppRouter from './router/routes.jsx';
import FormsFeedBack from './components/FormsFeedBack.jsx';



function App() {
  return (
      <div>

      <AppRouter />

    </div>

  );
}

export default App;