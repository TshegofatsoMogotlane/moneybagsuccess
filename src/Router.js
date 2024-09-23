import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/home/Home'
import Details from './pages/details/Details'
import Gallery from './pages/gallery/Gallery'
import Header from './pages/layout/Header'
import Footer from './components/footer/Footer'
const Router = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/details' element={<Details/>} />
        <Route path='/brics-gallery' element={<Gallery/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default Router
