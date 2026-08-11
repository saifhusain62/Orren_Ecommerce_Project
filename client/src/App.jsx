import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  const [category, setCategory] = useState('Women')

  return (
    <div className="font-sans text-gray-800">
      <Navbar category={category} setCategory={setCategory} />
      <Routes>
        <Route path="/" element={<Home category={category} />} />
      </Routes>
    </div>
  )
}

export default App