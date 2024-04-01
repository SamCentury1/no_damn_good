import React, { useRef } from 'react'
import './ScribbyPage.css'
import ScribbyGamePlay from './components/scribby_gameplay/ScribbyGameplay'
// import ScribbyPrivacyPolicy from '../privacy_policy_page/ScribbyPrivacyPolicy'
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'
import ScribbyInstructions from './components/scribby_instructions/ScribbyInstructions';

const ScribbyPage = () => {


  const navigate = useNavigate();
  function hello() {
    navigate(`/games/scribby/privacy-policy`)
    console.log(`go to the route`);
  }

  const instructionsRef = useRef(null);
  const howToBeGoodRef = useRef(null);
  const gameplayRef = useRef(null);
  // const instructionsRef = useRef(null);


  const scrollToInstructions = () => {
    instructionsRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  const scrollToHowToBeGood = () => {
    howToBeGoodRef.current?.scrollIntoView({behavior: 'smooth'});
  };  



  const scrollToGamePlay = () => {
    gameplayRef.current?.scrollIntoView({behavior: 'smooth'});
  };
  // const nav = (e) => {
  //   e.preventDefault();
  //   window.scrollTo({
  //     top: document.querySelector(`#${e}`).offsetTop,
  //     behavior: "smooth",
  //   });
  // }


  return (
    <>
        <div className='scribby-page-container'>
            <div className='scribby-left-panel'>
                <div className='scribby-left-panel-heading'>Scribby Word Puzzle</div>
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
                    <div onClick={hello} >
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
    </>

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
