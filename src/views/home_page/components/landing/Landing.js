// import from 'react'
import React  from 'react'
import {motion} from 'framer-motion'
import './Landing.css'


const Landing = () => {

    return (
        <div className='landing-container' >
            <motion.div 
                className='landing-title-container'
                initial={{opacity:0, y:-200}}
                whileInView={{opacity:1, y: 0}}
                transition={{duration:0.6}}
            >
                <div className='landing-title'>No Damn Good</div>
                <div className='landing-sub-title'>Studios</div>
            </motion.div>
        </div>
    )
}

export default Landing