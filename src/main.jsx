import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'
import App from './App.jsx'
import ClientApp from './ClientApp.jsx'
import './index.css'

// Home page component to choose dashboard
const HomePage = () => (
  <div className="home-page">
    <div className="home-container">
      <img src="https://i.imgur.com/YkGMzKE.png" alt="FELLAH" className="home-logo" />
      <h1>Bienvenue sur DzFellah</h1>
      <p>Choisissez votre espace</p>
      <div className="home-buttons">
        <Link to="/producer" className="home-btn producer-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9,22 9,12 15,12 15,22" />
          </svg>
          Espace Producteur
        </Link>
        <Link to="/client" className="home-btn client-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          Espace Client
        </Link>
      </div>
    </div>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/producer/*" element={<App />} />
        <Route path="/client/*" element={<ClientApp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

