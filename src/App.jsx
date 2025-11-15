import React, { useState } from 'react'
import './App.css'
import './index.css'
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Carrossel from './components/Carrossel.jsx';
import AppRouter from './router/routes.jsx';
import FormsAvaliacoes from './components/FormsAvaliacoes.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full min-h-screen">
      
      <div>
        <AppRouter />
      </div>
    </div>
  )
}

export default App
