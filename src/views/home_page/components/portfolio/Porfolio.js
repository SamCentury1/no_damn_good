import React from 'react'
import './Portfolio.css'
import PortfolioCard from './components/portfolio_card/PortfolioCard'
// import BackgroundDecoration from './components/background_decoration/BackgroundDecoration'

const Porfolio = () => {

  
  
  return (
    <div className='portfolio-container'>

        <div className='portfolio-label-container'> 
          <div className='portfolio-label-text'>Games</div>
        </div>

        <div >
          < PortfolioCard app={'scribby'} />
        </div>



        {/* <div className='portfolio-label-container'> 
          <div className='portfolio-label-text'>Coming Soon</div>
        </div> */}





        {/* < BackgroundDecoration /> */}


    </div>
  )
}

export default Porfolio