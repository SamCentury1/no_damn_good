import React from 'react'
import './GamesPage.css'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import PortfolioCard from '../home_page/components/portfolio/components/portfolio_card/PortfolioCard'
import { Helmet } from 'react-helmet'

const GamesPage = () => {
  return (
    <div className='games-page-container'>
        <Helmet>
            <title>Games</title>
            <meta name="games" content="Games & Puzzles we created" />
        </Helmet>                     
                    
    
        <NavBar/>

        <div className='games-page-head-container'>
            <img src={require('../../assets/img/games_page_bg.png')} alt='' className='game-page-head-image' />

            <div className='games-page-head-label'>Games</div>
        </div>

        <div className='games-page-content-section'>
            <div className='coming-soon-label'>Coming Soon</div>
            <div className='coming-soon-container'>
                <div>
                    < PortfolioCard app={'scribby'} />
                </div>
            </div>
        </div>

        <Footer/>

    </div>
  )
}

export default GamesPage