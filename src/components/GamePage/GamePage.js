import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import {motion} from 'framer-motion'
import Footer from '../Footer/Footer'
import './GamePage.css'
import { useNavigate } from 'react-router-dom'
import Separator from '../../views/home_page/components/separator/Separator'
import DetailsSection from './components/DetailsSection/DetailsSection'
import Carousel from './components/Carousel/Carousel'
// import { useNavigate } from 'react-router-dom'

const GamePage = ({gameData}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);    

    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState({})

    useEffect(() => {
        const getData = async () => {
            setData(gameData);

            setLoaded(true);
        }
        return () => {getData()}


    }, [gameData]);

    const navigate = useNavigate();

    function hello(route) {
      navigate(route)
    }


    const gameplayRef = useRef(null);
    const scrollToGamePlay = () => {
        gameplayRef.current?.scrollIntoView({behavior: 'smooth'});
    };  
    const detailsRef = useRef(null);
    const scrollToDetails = () => {
        detailsRef.current?.scrollIntoView({behavior: 'smooth'});
    };        



    if (!loaded) {
        console.log("loading")
        return <div style={{color: "#FFFFFF"}}>loading</div>
    } else {

        return (
            <div className='game-page'>
            
                <NavBar/>
                <div className='game-page-container'>
    
                    <div className='game-left-panel'>
                        <div className='game-main-logo-container'>
                            <img className="game-main-logo"  src={require(`../../assets/img/${data.gameName}/logo_main.png`)} alt = ""/>
                        </div>
    
                        <div className='game-app-store-container'>
                            <motion.img 
                            className="game-app-store-logo" 
                            src={require('../../assets/img/appstore.png')} 
                            alt=''
                            whileHover={{scale:1.1, y:-5}}
                            />
                            <motion.img 
                            className="game-app-store-logo" 
                            src={require('../../assets/img/googleplaystore.png')} 
                            alt=''
                            whileHover={{scale:1.1, y:-5}}
    
                            />
                        </div>                
                    </div>
    
                    <div className='game-right-panel'>
                        <div className='game-right-panel-container'>
                            <div className='game-right-panel-label-container'>
                                <div className='game-right-panel-label'>Scribby</div>
                                <div className='game-right-panel-label-sub'>A Word Puzzle Game</div>
                            </div>
                            <div className='game-right-panel-text'>
                                {data.synopsisText && data.synopsisText.map((element, index) => (
                                    <div key={index} className='game-text-element'>
                                        {element}
                                    </div>
                                ))}
                            </div>
                            <div className='game-right-panel-links'>
                            <div className='game-right-panel-item-divider'></div>
                                <div onClick={scrollToGamePlay}  >                 
                                    <RightPanelItem text={'Gameplay'} />
                                </div>
                                <div onClick={scrollToDetails}  >                 
                                    <RightPanelItem text={'Details'} />
                                </div>                                
                                <div onClick={() => hello(`/games/${data.gameName}/privacy-policy`)}  >                 
                                    <RightPanelItem text={'Privacy Policy'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Separator/>

                <div id={"gameplay"} ref={gameplayRef} className='game-section-container'>
                    <div className='game-section-label'>Gameplay</div>
                    <div className='game-gameplay-container'>

                        <Carousel gameData={gameData}/>

                    </div>
                </div>
                <Separator/>
                <div id={"details"} ref={detailsRef} className='game-section-container'>
                    <div className='game-section-label'>Details</div>
                    <div className='game-details-container'>

                        {data.details && data.details.map((content, index, gameName) => (
                            <DetailsSection key={index} content={content} index={index} gameName={data.gameName} />
                        ))}                      
                    </div>
                </div>
                <Footer/>     
            </div>
        )
    }
}

export default GamePage


export const RightPanelItem = ({text}) => {

    return (
      <motion.div 
        className='game-right-panel-item-container'
        whileHover={{backgroundColor: "#000000", color: "#BCC0CE"}}
        // onClick={}
      >
          {/* <div className='gameplay-right-panel-item-container-decoration'></div> */}
          <div className='game-right-panel-item'>{text}</div>
          <div className='game-right-panel-item-divider'></div>
      </motion.div>
    )
  }


