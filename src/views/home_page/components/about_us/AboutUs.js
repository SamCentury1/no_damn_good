import React from 'react'
import './AboutUs.css'

const AboutUs = () => {
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
            <button className='learn-more-button'>Learn More</button>
          </div>
          <div className='about-us-content-image-container'>
            <img className='about-us-content-image' src={require('../../../../assets/img/phones-image-removebg-preview.png')} alt='' />
          </div>
        </div>
    </div>
  )
}

export default AboutUs