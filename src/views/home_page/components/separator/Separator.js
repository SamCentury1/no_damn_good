import React from 'react'
import { motion } from 'framer-motion'
import './Separator.css'

const Separator = () => {
    return (
        <motion.div 
            className='separator-container' 
            initial={{scale:0, opacity:0}} 
            whileInView={{scale:1, opacity:1}} 
            transition={{delay:0.3, duration:0.6}} 
        >
            <motion.div 
                className='separator-pink'
            />
        </motion.div>
    )
}

export default Separator