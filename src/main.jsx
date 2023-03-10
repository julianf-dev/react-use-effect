import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // --> Solo funciona en desarrollo
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
