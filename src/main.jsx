import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// If you are using React Router, import it here:
// import { BrowserRouter } from 'react-router-dom' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* If using Router, wrap <App /> with <BrowserRouter basename="/anime"> */}
    <App />
  </StrictMode>,
)
