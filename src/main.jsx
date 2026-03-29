import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { THEMES, DEFAULT_PALETTE, applyTheme } from './theme'

// Apply the saved palette + dark/light mode before first render to avoid a flash
const savedPalette = localStorage.getItem('palette') || DEFAULT_PALETTE
const savedMode    = localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
applyTheme(THEMES[savedPalette]?.[savedMode] ?? THEMES[DEFAULT_PALETTE][savedMode])
document.documentElement.setAttribute('data-theme', savedMode)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
