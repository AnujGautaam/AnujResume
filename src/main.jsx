import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css' this has to be commented out to make sure that it does not throw any errors
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
