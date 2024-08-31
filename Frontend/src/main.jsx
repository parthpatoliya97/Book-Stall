import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
// import Freebook from './components/Freebook.jsx'
// import Cards from './components/Cards.jsx'

createRoot(document.getElementById('root')).render(
  
   <BrowserRouter>
   <div className="dark:bg-slate-900 dark:text-white">
       <App/>
   </div>
   </BrowserRouter>
  
)
