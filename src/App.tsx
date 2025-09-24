import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react'
import Home from './pages/home.tsx'
import AboutUs from './pages/about-us.tsx'
import Result from './pages/result.tsx'
import PaperBackground from './components/Background.tsx'


function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-hidden" id="page-container">
        <PaperBackground />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/result" element={<Result />} />
        </Routes>

        <footer className="bg-[url('src/assets/footer.png')] w-full h-16 bg-cover bg-center"></footer>
      </div>
    </Router>
  )
}

export default App
