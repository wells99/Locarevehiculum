import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './home/Navbar'
import LocalDate from './home/LocalDate'
import CarInfo from './home/components/car'
import Footer from "./home/components/footer"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <LocalDate />
    <CarInfo />
    <Footer />
  </StrictMode>,
)
