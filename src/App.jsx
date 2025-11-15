import React, { useState } from 'react'
import './App.css'
import './index.css'
// src/App.jsx
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Carrossel from './components/Carrossel.jsx';
import AppRouter from './router/routes.jsx';
import FormsFeedBack from './components/FormsFeedBack.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div>
        <AppRouter />
      </div>
    </div>
  )
}

export default App
