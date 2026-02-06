import React, { useState } from 'react'
import {motion } from 'framer-motion'
import "./NavBar.css"
import * as FaIcons from 'react-icons/fa'
import ndgLogoWhite from '../../assets/img/ndg_logo_official_svg.svg'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {


    // const [aboutItemActive, setAboutItemActive] = useState(false)
    // const [servicesItemActive, setServicesItemActive] = useState(false)


    // const handleEnter = (e) => {
    //     if (e === "about") {
    //         setAboutItemActive(true)
    //     } else if (e === "services") {
    //         setServicesItemActive(true)
    //     }
    // }

    // const handleExit = (e) => {
    //     if (e === "about") {
    //         setAboutItemActive(false)
    //     } else if (e === "services") {
    //         setServicesItemActive(false)
    //     }        
    // }

    

    const navVariants = {
        active: {
            x:0
        },
        inactive: {
            x:-300
        }
    }
    const [navMenuOpen,setNavMenuOpen] = useState(false)
    const handleNavClick = () => {
        setNavMenuOpen(!navMenuOpen)
    }


    const navigate = useNavigate();
    function navigateToPage(route) {
        console.log("navigating to route")
      navigate(`/${route}`)
    }  

    if (window.innerWidth > 800) {

        return (
            <div className='navbar-container'>
                <div className='navbar-elem'>
                    <div className='navbar-logo-container'>
                        <img src={ndgLogoWhite}  width={50} height={50}  alt="" className='filter-custom'/>
                        {/* <FaIcons.FaCat className='navbar-logo'/> */}
                    </div>

                    <ul className='navbar-items-container'>
                        <motion.li
                            className='navbar-item-container'
                            whileHover={{color:'#ffffff', textShadow:'0 0 5px #FFFFFF, 0 0 10px #FFFFFF'}}
                            initial={{color:'rgba(226, 226, 226, 0.747)', textShadow:""}}
                            // onClick={() => navigateToPage('')}                            
                        >
                            <Link to="/" className='navbar-item-link' >Home</Link>
                        </motion.li>

                        <motion.li
                            className='navbar-item-container'
                            whileHover={{color:'#ffffff', textShadow:'0 0 5px #FFFFFF, 0 0 10px #FFFFFF'}}
                            initial={{color:'rgba(226, 226, 226, 0.747)', textShadow:""}}
                            // onClick={() => navigateToPage('')}                            
                        >
                            <Link to="/about" className='navbar-item-link'>About</Link>
                        </motion.li>


                        <motion.li
                            className='navbar-item-container'
                            whileHover={{color:'#ffffff', textShadow:'0 0 5px #FFFFFF, 0 0 10px #FFFFFF'}}
                            initial={{color:'rgba(226, 226, 226, 0.747)', textShadow:""}}
                            // onClick={() => navigateToPage('')}                            
                        >
                            <Link to="/games" className='navbar-item-link'>Games</Link>
                        </motion.li>


                        <motion.li
                            className='navbar-item-container'
                            whileHover={{color:'#ffffff', textShadow:'0 0 5px #FFFFFF, 0 0 10px #FFFFFF'}}
                            initial={{color:'rgba(226, 226, 226, 0.747)', textShadow:""}}
                            // onClick={() => navigateToPage('')}                            
                        >
                            <Link to="/contact-us" className='navbar-item-link'>Contact Us</Link>
                        </motion.li>                        
                    </ul>


                                                            
                    {/* <div className='navbar-items-container'>
    
                        <motion.div 
                            className='navbar-item-container'
                            whileHover={{color:'#ffffff', textShadow:'0 0 5px #FFFFFF, 0 0 10px #FFFFFF'}}
                            initial={{color:'rgba(226, 226, 226, 0.747)', textShadow:""}}
                            onClick={() => navigateToPage('')}
                        >
                            Home
                        </motion.div>

                        <motion.div 
                            className='navbar-item-container'
                            whileHover={{color:'#ffffff', textShadow:'0 0 5px #FFFFFF, 0 0 10px #FFFFFF'}}
                            initial={{color:'rgba(226, 226, 226, 0.747)', textShadow:""}}
                            onClick={ () => navigateToPage('about')}
                        >
                            About
                        </motion.div>
                        <motion.div 
                            className='navbar-item-container'
                            whileHover={{color:'#ffffff', textShadow:'0 0 5px #FFFFFF, 0 0 10px #FFFFFF'}}
                            initial={{color:'rgba(226, 226, 226, 0.747)', textShadow:""}}
                            onClick={ () => navigateToPage('games')}
                        >
                            Games
                        </motion.div>
    
    
                        <motion.div 
                            className='navbar-item-container'
                            whileHover={{color:'#ffffff', textShadow:'0 0 5px #FFFFFF, 0 0 10px #FFFFFF'}}
                            initial={{color:'rgba(226, 226, 226, 0.747)', textShadow:""}}
                        >
                            Contact Us
                        </motion.div>
                    </div> */}
                </div>
            </div>
        )
    } else {
        return (
            <div className='mobile-navbar-container'>
                <FaIcons.FaBars className='mobile-navbar-logo' onClick={handleNavClick}/>
                <motion.div 
                    className='mobile-navbar-elem'
                    initial={"inactive"}
                    animate={navMenuOpen ?  "active" : "inactive"}
                    transition={{duration:0.3}}
                    variants={navVariants}
                    style={{zIndex:10000}}
                >
                    <div className='mobile-navbar-items-container'>
                        <div className='mobile-navbar-item-container'>
                            <div 
                                className='mobile-nav-menu-elem'
                                onClick={() => navigateToPage('')}
                            >Home</div>
                        </div>
                    </div>

                    <div className='mobile-navbar-items-container'>
                        <div className='mobile-navbar-item-container'>
                            <div 
                                className='mobile-nav-menu-elem'
                                onClick={() => navigateToPage('about')}
                            >About</div>

                        </div>
                    </div>
                    <div className='mobile-navbar-items-container'>
                        <div className='mobile-navbar-item-container'>
                            <div 
                                className='mobile-nav-menu-elem'
                                onClick={() => navigateToPage('games')}
                            >Games</div>
                        </div>
                    </div>

                    <div className='mobile-navbar-items-container'>
                        <div className='mobile-navbar-item-container'>
                            <div 
                                className='mobile-nav-menu-elem'
                                onClick={() => navigateToPage('contact-us')}
                            >Contact Us</div>
                        </div>
                    </div>                


                </motion.div>
            </div>
            )
    }
}

export default NavBar