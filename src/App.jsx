import React, { useState } from 'react'
import './App.css'
import './index.css'
import AppRouter from './router/routes.jsx';


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
