import React from 'react'
import './ScribbyInstructions.css'

const ScribbyInstructions = () => {
    return (
      <div className='scribby-instructions-container'>
        <div className='scribby-instructions-label'>Instructions</div>
        <div className='scribby-instructions-text-container'>
          <div className='scribby-instructions-text'>Scribby is a single-player, word puzzle game which combines elements from two popular games</div>

          <div className='scribby-instructions-media-container'>
            <img className='scribby-instructions-media custom-filter' src={require('../../../../../assets/img/Scrabble_American_logo.svg.png')} alt=''/>
            <div className='scribby-instructions-text'>+</div>
            <img className='scribby-instructions-media' src={require('../../../../../assets/img/The_Tetris_Company_logo.png')} alt=''/>
          </div>
          <div className='scribby-instructions-content'>

            <div className='scribby-instructions-content-text'>
                <p>In this game, the player must place letters that are generated randomly, on a 6 x 6 board in order to create as many words as possible</p>
                <p>Like in Tetris, the time to make a move gets smaller as the game progresses</p>
                <p>This exciting feature makes the game more challenging and stimulating!</p>
            </div>               
          </div>
        </div>



      </div>
    )
}

export default ScribbyInstructions