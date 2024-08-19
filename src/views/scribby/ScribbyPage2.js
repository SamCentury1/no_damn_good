import React from 'react'
import GamePage from '../../components/GamePage/GamePage'

const ScribbyPage2 = () => {

    const gameData = {
        "title" : "Scribby - Word Puzzle Game",
        "description" : "An innovative and exciting game to increase your vocabulary!",
        "appStoreLink": "/",
        "googlePlayStoreLink": "https://play.google.com/store/apps/details?id=com.nodamngoodstudios.scribby",
        "gameName": "scribby",
        "images": 11,
        "synopsisText": [
            "Scribby is a single-player, word puzzle game which combines elements from two popular games: Scrabble and Tetris!",
            "In this game, the player must place letters that are generated randomly, on a 6 x 6 board in order to create as many words as possible",
            "Like in Tetris, the time to make a move gets smaller as the game progresses. ",
            "Like in Scrabble, each letter has a value and probability of being selected.",
            "These exciting features make the game more challenging and stimulating!",
        ],
        "details": [
            {
                "label": "How It Works",
                "text": [
                    "Every turn, you have a random letter to place anywhere on the board before the timer runs out. If the timer runs out, the tile will be disabled for the rest of the game!",
                    "When words are found, their letters will be destroyed and their values tabulated. The game ends when the board is full and no more letters can be placed.",
                    "At every level reached (maximum 10) you have less and less time to place a letter",
                ],
            },
            {
                "label": "Scoring",
                "text": [
                    "Every letter has a value from 1 to 10. Each turn where at least one word is found, letter values are summed for each word. The total value of the turn is calculated based on several factors:",
                    "For Words that are 5 and 6 letters in length, each of their letters are multiplied by a factor of 2 and 3 respectively",
                    "The running number of consecutive turns with at least one word found",
                    "Whether or not words were found in the horizontal and vertical axis' doubles the points",
                    "The running total is then multiplied by the number of words found in that turn",

                ],
            },
            {
                "label": "Tips",
                "text": [
                    "Place hard letters strategically",
                    "Be careful when trying to create long words, there are ALOT more three letter words than you think...",
                    "Don't be afraid to let the board fill up with letters, it's actually really hard to lose this game that way",
                ],
            },                        
        ]
    }


    return (
        <GamePage gameData={gameData} />
    )
}

export default ScribbyPage2