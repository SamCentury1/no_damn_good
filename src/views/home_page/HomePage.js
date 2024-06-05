import React from 'react'
import './HomePage.css'
import AboutUs from './components/about_us/AboutUs'
// import Footer from '../../components/Footer/Footer'
import Porfolio from './components/portfolio/Porfolio'
import Landing from './components/landing/Landing'
import Separator from './components/separator/Separator'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import { Helmet } from 'react-helmet'

const HomePage = () => {
  return (
    <div className='homepage-container'>
      <Helmet>
          <title>Home</title>
          <meta name="home" content="Welcome to No Damn Good Studios - please clap" />
      </Helmet>                     
                  
      <NavBar/>  
      <Landing/>
      <AboutUs />
      <Separator/>
      <Porfolio />
      <Footer />
    </ div>
  )
}

export default HomePage