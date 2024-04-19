import React, { useEffect, useRef } from 'react'
import './ScribbyPage.css'
import ScribbyGamePlay from './components/scribby_gameplay/ScribbyGameplay'
// import ScribbyPrivacyPolicy from '../privacy_policy_page/ScribbyPrivacyPolicy'
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'
import ScribbyInstructions from './components/scribby_instructions/ScribbyInstructions';
import NavBar from '../../../components/NavBar/NavBar';
import Footer from '../../../components/Footer/Footer'

const ScribbyPage = () => {



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const navigate = useNavigate();

  function hello() {
    navigate(`/games/scribby/privacy-policy`)
    console.log(`go to the route`);
  }

  const instructionsRef = useRef(null);
  const howToBeGoodRef = useRef(null);
  const gameplayRef = useRef(null);

  const scrollToInstructions = () => {
    instructionsRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  const scrollToHowToBeGood = () => {
    howToBeGoodRef.current?.scrollIntoView({behavior: 'smooth'});
  };  

  const scrollToGamePlay = () => {
    gameplayRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className='scribby-page'>
      
        <NavBar/>
        <div className='scribby-page-container'>

            <div className='scribby-left-panel'>
                <div className='scribby-left-panel-heading'></div>
                <div className='scribby-main-logo-container'>
                  <img className="scribby-main-logo"  src={require('../../../assets/img/scribby_logo_main.png')} alt = ""/>
                </div>

                <div className='scribby-app-store-container'>
                    <motion.img 
                      className="scribby-app-store-logo" 
                      src={require('../../../assets/img/appstore.png')} 
                      alt=''
                      whileHover={{scale:1.1, y:-5}}
                    />
                    <motion.img 
                      className="scribby-app-store-logo" 
                      src={require('../../../assets/img/googleplaystore.png')} 
                      alt=''
                      whileHover={{scale:1.1, y:-5}}

                    />
                  </div>                
            </div>

            <div className='scribby-right-panel'>
                <div className='scribby-right-panel-container'>
                    
                    <div className='scribby-right-panel-item-divider'></div>
                    
                    <div onClick={scrollToInstructions} >
                      <RightPanelItem text={'Instructions'} />
                    </div>


                    <div onClick={scrollToHowToBeGood}>
                      <RightPanelItem text={'How To Be Good'} />
                    </div>
                    
                    <div onClick={scrollToGamePlay}  >                 
                      <RightPanelItem text={'Gameplay'} />
                    </div>


                    {/* <RightPanelItem text={'Rankings'} /> */}
                    <div onClick={() => hello()} >
                      <RightPanelItem text={'Privacy Policy'} />
                    </div>
                </div>
            </div>
        </div>

        <div id={"instructions"} ref={instructionsRef}>
          <ScribbyInstructions/>
        </div>

        <div id={"gameplay"} ref={gameplayRef}>
          <ScribbyGamePlay />
        </div> 

        <Footer/>     
    </div>



  )
}

export default ScribbyPage



export const RightPanelItem = ({text}) => {

  return (
    <motion.div 
      className='scribby-right-panel-item-container'
      whileHover={{backgroundColor: "#000000", color: "#BCC0CE"}}
      // onClick={}
    >
        {/* <div className='scribby-right-panel-item-container-decoration'></div> */}
        <div className='scribby-right-panel-item'>{text}</div>
        <div className='scribby-right-panel-item-divider'></div>
    </motion.div>
  )
}
