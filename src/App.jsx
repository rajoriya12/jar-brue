import { useState } from 'react'
import Navbar from './page/Home/Navbar'
import AutoScroll from './page/Home/AutoScroll'
import HeroSec from './page/Home/HeroSec'
import Card from './page/Home/Card'
import Grid from './page/Home/Grid'
import Footer from './page/Home/Footer'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

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

export default App
