import React from 'react'
import {BrowserRouter as Router,Routes,Route}  from "react-router-dom"
import Admin from "./pages/Admin.js"
import School from './pages/school.js'
import Category from './pages/category.js';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Admin />} />
        <Route path="/school" element={<School />} />
        <Route path="/form" element={<Category />} />
      </Routes>
    </Router> 
  )
}

export default App
 