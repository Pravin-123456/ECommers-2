import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>

        </Routes>
      <Navbar />
      <Home />
      </Router>
    </div>
  )
}

export default App