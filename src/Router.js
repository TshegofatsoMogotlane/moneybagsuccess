import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/home/Home'
import Details from './pages/details/Details'
import Gallery from './pages/gallery/Gallery'
import Header from './pages/layout/Header'
import Footer from './components/footer/Footer'
import Connect from './components/connect/Connect'
import Booking from './pages/booking/Booking'
import AboutUs from './pages/aboutUs/AboutUs'
import TshegofatsoP from './pages/aboutUs/tshegofatsop/TshegofatsoP'
import Tsepangp from './pages/aboutUs/tsepangp/Tsepangp'
import BricsEmpire from './pages/aboutUs/bricsEmpire/BricsEmpire'
const Router = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/details' element={<Details/>} />
        <Route path='/brics-gallery' element={<Gallery/>} />
        <Route path='/connect-with-us' element={<Connect/>} />
        <Route path='/booking-section' element={<Booking/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/about-tshego' element={<TshegofatsoP/>} />
        <Route path='/about-tsepang' element={<Tsepangp/>} />
        <Route path='/about-the-company' element={<BricsEmpire/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default Router
