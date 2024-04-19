import React from 'react'
import Footer from '../../../src/components/Footer/Footer.js'
import './About.css'
import NavBar from '../../components/NavBar/NavBar.js'

const About = () => {
  return (
    <div className='about-main-container'>
        <NavBar/>
        
        <div className='about-background-image-container'>
            
            <img className='about-background-image' src={require('../../assets/img/montreal-dark-map.png')} alt=''/>
        </div>    
        <div className='about-container'>
            
            <div className='about-title-container'>
                <div className='nav-bar-gap'></div> 
                <div className='about-title-text'>About No Damn Good</div>
            </div>

            <div className='about-content-container'>
                <div className='about-origin-container'>
                    <div className='about-content-section-label'>Origins</div>
                    <div className='about-origin-content-section'>
                        <div className='about-origin-content-image'>
                            <div className='rock-salt-regular'>NDG</div>
                        </div>
                        <div className='about-origin-content-text'>

                            <p className='glass-effect'>Founded in 2024, we trace our fresh roots to the Canadian neighbourhood of Notre-Dame-de-Grâce in Montréal, Québec.</p>

                            <p className='glass-effect'>The Neighbourhood is known in Montréal as NDG (en dee gee) and its proud residents have affectionately referred to it as No Damn Good</p>
                            <p className='glass-effect'>NDG being the cradle of the founding members, and being a great source of inspiration for the culture of the company, the studio was name No Damn Good in its honor</p>
                            <p className='glass-effect'>Fast forward to, still 2024, the company boasts a whopping 1 employee and 1 cat</p>

                        </div>
                    </div>
                </div>
                <div className='about-team-container'>
                    <div className='about-content-section-label'>The Team</div>
                    <div className='about-team-section-container'>
                        <div className='about-team-profile-card'>
                            <div className='profile-image-container'>
                                <img className='profile-image' src={require('../../assets/img/sam-century-picture-removebg.png')} alt=''/>
                            </div>
                            <div className='profile-name'>Sam Century</div>
                            <div className='profile-title'>Founder & Junior Developer</div>
                            <div className='profile-education-container'>
                                <ProfileEducationCard 
                                    year={'2020'}
                                    source={require('../../assets/img/concordia.png')}
                                    school={'Concordia University'}
                                    program={'BComm - Honours Finance'}
                                />

                                <div className='card-divider'></div>

                                <ProfileEducationCard 
                                    year={'2015'}
                                    source={require('../../assets/img/dawson.png')}
                                    school={'Dawson College'}
                                    program={'DEC - General Social Sciences'}
                                />                                    
                            </div>
                        </div>

                        <div className='about-team-profile-card'>
                            <div className='profile-image-container'>
                                <img className='profile-image' src={require('../../assets/img/mimou-grimm-picture-removebg.png')} alt=''/>
                            </div>
                            <div className='profile-name'>Dr. Mimou Grimm</div>
                            <div className='profile-title'>Chief Security Officer</div>
                            <div className='profile-education-container'>
                                <ProfileEducationCard 
                                    year={'2020'}
                                    source={require('../../assets/img/MIT_logo.svg').default}
                                    school={'Meowsachusetts Institute of Technology'}
                                    program={'PhD - Scratchology'}
                                />

                                <div className='card-divider'></div>

                                <ProfileEducationCard 
                                    year={'2015'}
                                    source={require('../../assets/img/upenn-logo.png')}
                                    school={'University of Pawnsylvania'}
                                    program={'Masters - Rodent Hunting'}
                                />    

                                <div className='card-divider'></div>     

                                <ProfileEducationCard 
                                    year={'2012'}
                                    source={require('../../assets/img/purdue.png')}
                                    school={'Purrdue University'}
                                    program={'BS - Marine Biology'}
                                />                                                        
                            </div>
                        </div>                        
                    </div>
                </div>

                <div className='about-mission-container'>
                    <div className='about-content-section-label'>Mission</div>
                    <div className='mission-content-container'>
                        No Damn Good Studios is committed to creating and delivering engaging and amuzing games and applications.
                    </div>
                </div>

            </div>
            <Footer />

        </div>
        
    </div>
    
  )
}

export default About



const ProfileEducationCard = ({year,source,school, program}) => {
  return (
    <div className='profile-education-item'>
        <div className='profile-education-item-year'>{year}</div>
        <div className='profile-education-item-content-container'>
            <div className='profile-education-item-logo'>
                <img className='profile-education-item-logo' src={source} alt='' />
            </div>
            <div className='profile-education-item-content'>
                <div className='profile-education-label'>{school}</div>
                <div className='profile-education-content'>{program}</div>                                            
            </div>
        </div>
    </div>
  )
}

