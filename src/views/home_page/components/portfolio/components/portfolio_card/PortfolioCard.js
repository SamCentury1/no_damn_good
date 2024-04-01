import React from 'react'
import './PortfolioCard.css'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const PortfolioCard = ({app}) => {


  const navigate = useNavigate();
  function navigateToRoute(e) {
    console.log(e)
    navigate(`/games/${e}`)
  }  

  return (
    <motion.div 
        id='scribby'
        className='portfolio-card'
        whileHover={{y:-10, scale: 1.1}}
        onClick={(e) => navigateToRoute(app)}
    >
        <div className='portfolio-card-image-container'>
            <img className='portfolio-card-image' src={require('../../../../../../assets/img/scribby_logo_main.png')} alt='' />
        </div>
        <div className='portfolio-card-label'>
            <div className='portfolio-card-label-text'>Scribby</div>
        </div>
    </motion.div>
  )
}

export default PortfolioCard