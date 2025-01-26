import React from 'react'
import Discount from './pages/Discount'
import Featured from './pages/Featured'
import Home from './pages/Home'
import NewBook from './pages/NewBook'
import Testimonial from './pages/Testimonial'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-book" element={<NewBook />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/discount" element={<Discount />} />
      <Route path="/featured" element={<Featured />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App