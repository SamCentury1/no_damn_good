import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-logo-section'>
        <div className='footer-logo-decoration-strip-top'></div>
        <div className='footer-logo-decoration-strip-bottom'></div>
        <div className='footer-logo-container'>
          <img  
          className='footer-logo' 
          src={require('../../assets/img/ndg_logo_official_svg.svg').default} 
          alt='' />
        </div>
      </div>
      <div className='footer-content-container'>
        <div className='footer-title-container'>
          <div className='footer-title'>No Damn Good Studios, Inc.</div>
        </div>

        <div className='footer-divider'></div>
        <div className='footer-social-media-container'>
          <div>
            <Link to="https://www.facebook.com/profile.php?id=61559168831861" className='navbar-item-link' >
              <img className='footer-social-media-icon' src={require('../../assets/img/facebook-icon-1.svg').default} alt='' />
            </Link>
          </div>

          <div>
            <Link to="https://www.instagram.com/nodamngoodstudios/" className='navbar-item-link' >
              <img className='footer-social-media-icon' src={require('../../assets/img/instagram-icon-1.svg').default} alt='' />
            </Link>
          </div>

          <div>
            <img className='footer-social-media-icon' src={require('../../assets/img/linkedin-icon-1.svg').default} alt='' />
          </div>

          <div>
            <img className='footer-social-media-icon' src={require('../../assets/img/tiktok-icon-2.svg').default} alt='' />
          </div> 
          <div>
            <Link to="https://www.youtube.com/channel/UC4bpwMdAB5FTq2RimUTD-jw" className='navbar-item-link' >
              <img className='footer-social-media-icon' src={require('../../assets/img/youtube-123.svg').default} alt='' />
            </Link>
          </div>                                 
        </div>

        <div className='footer-divider'></div>
        <div className='footer-pages-container'>
          <div className='footer-pages-item'><Link to="/" className='footer-item-link' >Home</Link></div>
          <div className='footer-pages-item'><Link to="/about" className='footer-item-link'>About</Link></div>
          <div className='footer-pages-item'><Link to="/games" className='footer-item-link'>Games</Link></div>
          <div className='footer-pages-item'><Link to="/contact-us" className='footer-item-link'>Contact Us</Link></div>
        </div>
      </div>


    </div>
  )
}

export default Footer