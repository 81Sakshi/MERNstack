import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Comp1 from './componenets/Comp1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Comp1 />
  </StrictMode>,
)
