import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from './page/Home/Navbar'
import AutoScroll from './page/Home/AutoScroll'
import HeroSec from './page/Home/HeroSec'
import Card from './page/Home/Card'
import Grid from './page/Home/Grid'
import Footer from './page/Home/Footer'

import ProductDitelas from './page/Home/ProductDitelas'

import './App.css'


function Home() {
  return (
    <>
      <Navbar />
      <AutoScroll />
      <HeroSec />
      <Card />
      <Grid />
      <Footer />
    </>
  )
}


function App() {

  return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/ProductDitelas/:name" element={<ProductDitelas />}/>

      </Routes>

    </BrowserRouter>
  )
}

export default App