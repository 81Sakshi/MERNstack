import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.jsx'
// import Component from './components/Component.jsx'
// import Component2 from './components/Component2.jsx'

import Component3 from './components/Component3.jsx'
import Component4 from './components/Component4.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Component/><br></br>
    <Component2/><br></br> */}
    <Component3/><br></br>
    <Component4/>
    
    
    { <App /> }
  </StrictMode>,
)
