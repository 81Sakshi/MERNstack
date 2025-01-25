import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Component1 from './components/Component1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Component1 />
    {/* <App /> */}
  </StrictMode>,
)
