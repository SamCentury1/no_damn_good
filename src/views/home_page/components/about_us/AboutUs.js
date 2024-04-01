import React from 'react'
import './AboutUs.css'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {
  const navigate = useNavigate();
  function navigateToAbout() {
    navigate(`/about`)
  }  
  return (
    <div className='about-us-container'>
        <div className='about-us-label-container'>
          <div className='about-us-label'>About Us</div>
        </div>
        <div className='about-us-content-container'>
          <div className='about-us-content-text-container'>
            <div className='about-us-content-text'>
              <p>
              No Damn Good is a software development studio specializing in the development of mobile applications.
              </p>
              {/* <br/> */}
              <p>
              The primary focus is to make engaging and fun puzzles for people of all ages.
              </p>

            </div>
            <motion.button 
              className='learn-more-button'
              whileHover={{
                scale:1.1, 
                backgroundColor: '#FFFFFFFF',
                color: "#000000"
              }}
              onClick={navigateToAbout}
            >Learn More</motion.button>
          </div>
          <div className='about-us-content-image-container'>
            <img className='about-us-content-image' src={require('../../../../assets/img/phones-image-removebg-preview.png')} alt='' />
          </div>
        </div>
    </div>
  )
}

export default AboutUs