import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Login.jsx'
import Signup from './Signup.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup/>} />
      <Route path="/Login" element={<Login/>} />
     < Route path="/Signup" element={<Signup/>} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
