import React from 'react'
import './HomePage.css'
import AboutUs from './components/about_us/AboutUs'
// import Footer from '../../components/Footer/Footer'
import Porfolio from './components/portfolio/Porfolio'
import Landing from './components/landing/Landing'
import Separator from './components/separator/Separator'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
  return (
    <div className='homepage-container'>    
      <Landing/>
      <AboutUs />
      <Separator/>
      <Porfolio />
      <Footer />
    </ div>
  )
}

export default HomePage