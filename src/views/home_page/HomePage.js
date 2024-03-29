import React from 'react'
import './HomePage.css'
import AboutUs from './components/about_us/AboutUs'
import Footer from '../../components/Footer/Footer'
import Porfolio from './components/portfolio/Porfolio'

const HomePage = () => {
  return (
    <>    
      <div className='homepage-container'>
        <div className='homepage-title-container'>
          <div className='homepage-title'>No Damn Good</div>
          <div className='homepage-sub-title'>Studios</div>
        </div>
      </div>
      <AboutUs />
      <Porfolio />
      <Footer />
    </>
  )
}

export default HomePage