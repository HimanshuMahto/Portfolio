import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { applyTheme } from './theme'

// Apply the saved mode before first render to avoid a flash
const savedMode = localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
applyTheme(savedMode)
document.documentElement.setAttribute('data-theme', savedMode)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
