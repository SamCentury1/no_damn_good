import React, { useEffect, useState } from 'react'
import './Carousel.css'
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa'

const Carousel = ({gameData}) => {


    const [data, setData] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(1)
    const [direction, setDirection] = useState('')
    const [keyCount, setKeyCount] = useState(0)
    

    useEffect(() => {
        const getData = async () => {
            setData(gameData)
            setLoaded(true);

            // primaryPositionCalc = window.innerWidth/

            // if (window.innerWidth >= 800) {
            //     setPrimaryPosition(150)
            //     setSecondaryPosition(250)
            // } else if (window.innerWidth < 700) {
            //     setPrimaryPosition(0)
            //     setSecondaryPosition(250)                
            // }
            
        }
        getData()


    }, [gameData]);

    console.log(currentIndex)


    const getCurrentIndexNumber = (index, max, pos) => {
        var res = index
        
        if (index < 0) {
            if (index === -1) {
                res = max-1
            } else {
                res = max-2
            }
        } else if (index >= (max)) {
            if (index === max) {
                res = 0
            } else if (index ===(max+1)) {
                res = 1
            }
        } else {
            res = index;
        }

        console.log(`index : ${index} || res : ${res}`)
        return res;
    }    

    function goLeft(index, max) {
        var res = index-1
        if (index === 0) {
            res = max-1
        }
        setCurrentIndex(res)
        setDirection('left')
        setKeyCount(keyCount+1)

    }
    function goRight(index, max) {
        var res = index + 1;
        if (index === max-1) {
            res = 0
        }
        setCurrentIndex(res)
        setDirection('right')
        setKeyCount(keyCount+1)

    }


    const farLeftCardProperties = (direction) => {
        var initial = {}
        var animate = {}
        if (direction === 'left') {
            initial = {x:'-250%', scale: 0.0}
            animate = {x:'-250%', scale: 0.0}
        } else if (direction === 'right') {
            initial = {x:'-150%', scale: 0.5}
            animate = {x:'-250%', scale: 0.0}
        } else {
            initial = {x:'-250%', scale: 0.0}
            animate = {x:'-250%', scale: 0.0}
        }

        return {"initial": initial, "animate" : animate}
    }
    
    
    const leftCardProperties = (direction) => {
        var initial = {}
        var animate = {}
        if (direction === 'left') {
            initial = {x:'-250%', scale: 0.0}
            animate = {x:'-150%', scale: 0.5}            
        } else if (direction === 'right') {
            initial = {x:'0%', scale: 1.0}
            animate = {x:'-150%', scale: 0.5}            
        } else {
            initial = {x:'-150%', scale: 0.5}
            animate = {x:'-150%', scale: 0.5}
        }

        return {"initial": initial, "animate" : animate}
    }


    const centerCardProperties = (direction) => {
        
        var initial = {}
        var animate = {}
        if (direction === 'left') {
            initial = {x:'-150%', scale: 0.5}
            animate = {x:'0%', scale: 1.0}            
        } else if (direction === 'right'){
            initial = {x:'150%', scale: 0.5}
            animate = {x:'0%', scale: 1}            
        } else {
            initial = {x:'0%', scale: 1}
            animate = {x:'0%', scale: 1}
        }
        return {"initial": initial, "animate" : animate}
    }

    const rightCardProperties = (direction) => {
        
        var initial = {}
        var animate = {}
        if (direction === 'left') {
            initial = {x:'0%', scale: 1.0}
            animate = {x:'150%', scale: 0.5}            
        } else if (direction === 'right') {
            initial = {x:'250%', scale: 0.0}
            animate = {x:'150%', scale: 0.5}            
        } else {
            initial = {x:'150%', scale: 0.5}
            animate = {x:'150%', scale: 0.5}
        }
        return {"initial": initial, "animate" : animate}
    }


    const farRightCardProperties = (direction) => {
        var initial = {}
        var animate = {}
        if (direction === 'left') {
            initial = {x:'150%', scale: 0.5}
            animate = {x:'250%', scale: 0.0}            
        } else if (direction === 'right') {
            initial = {x:'250%', scale: 0.0}
            animate = {x:'250%', scale: 0.0}            
        } else {
            initial = {x:'250%', scale: 0.0}
            animate = {x:'250%', scale: 0.0}
        }

        return {"initial": initial, "animate" : animate}
    }    



    if (!loaded) {
        return <div>loading...</div>
    } else {
        return (
            <div className='carousel-container'>

                <div className='carousel-images-container'>
                                                                             

                    <motion.div 
                        key={`farLeft_${keyCount}`}
                        className='carousel-main-image-container left-container decoration-card'
                        initial={farLeftCardProperties(direction)['initial']}
                        animate={farLeftCardProperties(direction)['animate']}
                        transition={{duration:0.5}}

                    >
                        <img 
                            className='carousel-image side-image' 
                            src={require(`../../../../assets/img/${data.gameName}/gameplay_${getCurrentIndexNumber(currentIndex-2, data.images)}.png`)} 
                            alt=''
                            
                        />
                    </motion.div>  

                    <motion.div 
                        key={`left_${keyCount}`}
                        className='carousel-main-image-container left-container'
                        initial={leftCardProperties(direction)['initial']}
                        animate={leftCardProperties(direction)['animate']}
                        transition={{duration:0.5}}

                    >
                        <img 
                            className='carousel-image' 
                            src={require(`../../../../assets/img/${data.gameName}/gameplay_${getCurrentIndexNumber(currentIndex-1, data.images)}.png`)} 
                            alt=''
                            
                        />
                    </motion.div>                    
                    <motion.div
                        key={`center_${keyCount}`}
                        className='carousel-main-image-container'
                        initial={centerCardProperties(direction)['initial']}
                        animate={centerCardProperties(direction)['animate']}                        
                        transition={{duration:0.5}}
                    >

                        <img 
                            className='carousel-image' 
                            src={require(`../../../../assets/img/${data.gameName}/gameplay_${getCurrentIndexNumber(currentIndex, data.images)}.png`)} 
                            alt=''
                        />
                    </motion.div>
                    <motion.div 
                        key={`right_${keyCount}`}
                        className='carousel-side-image-container right-container'
                        initial={rightCardProperties(direction)['initial']}
                        animate={rightCardProperties(direction)['animate']}
                        transition={{duration:0.5}}
                    >
                        <img 
                            className='carousel-image' 
                            src={require(`../../../../assets/img/${data.gameName}/gameplay_${getCurrentIndexNumber(currentIndex+1,data.images)}.png`)} 
                            alt=''
                            
                        />
                    </motion.div>

                    <motion.div 
                        key={`farRight_${keyCount}`}
                        className='carousel-side-image-container right-container decoration-card'
                        initial={farRightCardProperties(direction)['initial']}
                        animate={farRightCardProperties(direction)['animate']}
                        transition={{duration:0.5}}
                    >
                        <img 
                            className='carousel-image side-image' 
                            src={require(`../../../../assets/img/${data.gameName}/gameplay_${getCurrentIndexNumber(currentIndex+2,data.images)}.png`)} 
                            alt=''
                        />
                    </motion.div>                    
                </div>
                <div className='carousel-button-container'>
                    <motion.button 
                        className='carousel-button'
                        whileHover={{scale: 1.25, backgroundColor:"#FFFFFF"}}
                        onClick={ () => goLeft(currentIndex,data.images)}
                    ><FaIcons.FaChevronLeft size={20}/></motion.button>
                    
                    <motion.button 
                        className='carousel-button'
                        whileHover={{scale: 1.25, backgroundColor:"#FFFFFF"}}
                        onClick={() => goRight(currentIndex,data.images)}
                    ><FaIcons.FaChevronRight  size={20}/></motion.button>                    

                </div>

    
            </div>
        )
    }
}

export default Carousel