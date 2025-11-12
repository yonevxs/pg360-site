// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Carrossel from './components/Carrossel.jsx';
<<<<<<< Updated upstream
import AppRouter from './router/routes.jsx';

function App() {
  return (
    <AppRouter/>
=======
import FormsFeedBack from './components/FormsFeedBack.jsx';

function App() {
  return (
      <div>
      <Home/>
      <Carrossel/>
      <FormsFeedBack/>

    </div>
>>>>>>> Stashed changes
  );
}

export default App;