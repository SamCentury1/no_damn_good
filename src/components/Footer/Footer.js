import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-logo-section'>
        <div className='footer-logo-decoration-strip-top'></div>
        <div className='footer-logo-decoration-strip-bottom'></div>
        <div className='footer-logo-container'>
          <img  
          className='footer-logo' 
          src={require('../../assets/img/ndg_logo_svg.svg').default} 
          alt='' />
        </div>
      </div>
      <div className='footer-content-container'>
        <div className='footer-title-container'>
          <div className='footer-title'>No Damn Good Studios, Ltd.</div>
        </div>

        <div className='footer-divider'></div>
        <div className='footer-social-media-container'>
          <div>
            <img className='footer-social-media-icon' src={require('../../assets/img/facebook-icon-1.svg').default} alt='' />
          </div>

          <div>
            <img className='footer-social-media-icon' src={require('../../assets/img/instagram-icon-1.svg').default} alt='' />
          </div>

          <div>
            <img className='footer-social-media-icon' src={require('../../assets/img/linkedin-icon-1.svg').default} alt='' />
          </div>

          <div>
            <img className='footer-social-media-icon' src={require('../../assets/img/tiktok-icon-2.svg').default} alt='' />
          </div>                        
        </div>

        <div className='footer-divider'></div>
        <div className='footer-pages-container'>
          <div className='footer-pages-item'>Home</div>
          <div className='footer-pages-item'>About</div>
          <div className='footer-pages-item'>Portfolio</div>
          <div className='footer-pages-item'>Contact</div>
        </div>
      </div>


    </div>
  )
}

export default Footer