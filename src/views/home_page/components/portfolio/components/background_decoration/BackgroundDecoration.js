import React from 'react'
import './BackgroundDecoration.css'

const BackgroundDecoration = () => {


    function displayDecorations() {

            const colors = [

            ]
            


            const randomNumberInRange = (min, max) => {
                return Math.floor(Math.random()
                    * (max - min + 1)) + min;
            };

            const size = randomNumberInRange(50,200)
            const angle = randomNumberInRange(0,90)
            const opacity = randomNumberInRange(0,1)
            
        
            const x = randomNumberInRange(0,window.innerWidth-200);
            const y =  randomNumberInRange(0,window.innerHeight-200);              
            return (
                <BackgroundDecorationItem x={x} y={y} size={size} angle={angle} opacity={opacity}/>
            )
        
    }

    return (
        <div className='background-decoration-container'>
            
            {displayDecorations()}
            {displayDecorations()}
            {displayDecorations()}
            {displayDecorations()}
            {displayDecorations()}
            {displayDecorations()}  
            {displayDecorations()}
            {displayDecorations()}
            {displayDecorations()}
            {displayDecorations()}
            {displayDecorations()}
            {displayDecorations()}   
            {displayDecorations()}
            {displayDecorations()}
            {displayDecorations()}
            {displayDecorations()}
            {displayDecorations()}
            {displayDecorations()}
            {displayDecorations()}
            {displayDecorations()}
            {displayDecorations()}
            {displayDecorations()}
            {displayDecorations()}  
            {displayDecorations()}
            {displayDecorations()}
            {displayDecorations()}
            {displayDecorations()}
            {displayDecorations()}
            {displayDecorations()}   
            {displayDecorations()}
            {displayDecorations()}
            {displayDecorations()}
            {displayDecorations()}
            {displayDecorations()}            
                                                                                 
        </div>
    )
}

export default BackgroundDecoration



const BackgroundDecorationItem = ({x,y,size,angle,opacity}) => {


    const style = {
        transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`,
        width: size,
        height: size,
        opacity: 0.4
    }    
    return (
        <div className='background-decoration-item' style={style}></div>
    )
}

