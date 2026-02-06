// import from 'react'
import React  from 'react'
import {motion} from 'framer-motion'
import './Landing.css'
import ndgLogoWhite from  '../../../../assets/img/ndg_logo_official_svg.svg' //'../assets/img/ndg_logo_official_svg.svg'


const Landing = () => {

    return (
        <div className='landing-container' >
            <motion.div 
                className='landing-title-container'
                initial={{opacity:0, y:-200}}
                whileInView={{opacity:1, y: 0}}
                transition={{duration:0.6}}
            >
                {/* <div className='landing-title'>No Damn Good</div>
                <div className='landing-sub-title'>Studios</div> */}
                {
                    
                    <img src={ndgLogoWhite}    alt="" className='filter-custom landing-logo'/>
                }
            </motion.div>
        </div>
    )
}

export default Landing