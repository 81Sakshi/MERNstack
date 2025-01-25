import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.jsx'

import Component2 from './components/Component2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    
    <Component2/><br></br>
    
    
    {/* <App /> */}
  </StrictMode>,
)
