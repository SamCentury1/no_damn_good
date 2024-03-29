import React from 'react'
import './ScribbyPage.css'
import ScribbyGamePlay from './components/scribby_gameplay/ScribbyGameplay'
// import ScribbyPrivacyPolicy from '../privacy_policy_page/ScribbyPrivacyPolicy'
import { useNavigate } from "react-router-dom";

const ScribbyPage = () => {


  const navigate = useNavigate();
  function hello() {
    navigate(`/games/scribby/privacy-policy`)
    console.log(`go to the route`);
  }

  return (
    <>
        <div className='scribby-page-container'>
            <div className='scribby-left-panel'>
                <div className='scribby-left-panel-heading'>Scribby Word Puzzle</div>
            </div>

            <div className='scribby-right-panel'>
                <div className='scribby-right-panel-container'>
                    
                    <div className='scribby-right-panel-item-divider'></div>
                    <RightPanelItem text={'Instructions'} />
                    <RightPanelItem text={'How To Be Good'} />
                    <RightPanelItem text={'Gameplay'} />
                    {/* <RightPanelItem text={'Rankings'} /> */}
                    <div onClick={hello} >

                      <RightPanelItem text={'Privacy Policy'} />
                    </div>
                </div>
            </div>
        </div>
        <ScribbyGamePlay />
    </>

  )
}

export default ScribbyPage



export const RightPanelItem = ({text}) => {





  return (
    <>
        <div className='scribby-right-panel-item'>{text}</div>
        <div className='scribby-right-panel-item-divider'></div>
    </>
  )
}
