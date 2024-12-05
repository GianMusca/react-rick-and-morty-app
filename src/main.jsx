import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import Home from './pages/Home/Home.jsx'
import Characters from './pages/Characters/Characters.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Characters />
  </StrictMode>,
)
