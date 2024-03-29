import React from 'react'
import './PortfolioCard.css'

const PortfolioCard = () => {
  return (
    <div className='portfolio-card'>
        <div className='portfolio-card-image-container'>
            <img className='portfolio-card-image' src={require('../../../../../../assets/img/scribby_logo_main.png')} alt='' />
        </div>
        <div className='portfolio-card-label'>
            <div className='portfolio-card-label-text'>Scribby</div>
        </div>
    </div>
  )
}

export default PortfolioCard