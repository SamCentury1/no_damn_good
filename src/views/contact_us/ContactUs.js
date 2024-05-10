import React, { useState } from 'react'
import './ContactUs.css'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import { Timestamp,collection,addDoc  } from 'firebase/firestore'
import { db } from '../../firebase-config'
import {motion } from 'framer-motion'

const ContactUs = () => {


    const [isSubmit, setIsSubmit] = useState(false)
    const [errors, setErrors] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            /// make sure all fields are populated
            if (firstName.length === 0 || lastName.length === 0  || email.length === 0  || message.length === 0 ) {
                setErrors(true)
            } else {

                const data = {
                    createdAt: Timestamp.now(),
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    message: message
                }
        
                await addDoc(collection(db,"responses"),data)    
                setIsSubmit(true); 
                setErrors(false);       
            }

        } catch (e) {
            console.log(e)
        }
    }

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleInputChange = (event) => {
        if (event.target.id === "fName") {
            setFirstName(event.target.value)
        } else if (event.target.id === "lName") {
            setLastName(event.target.value)
        } else if (event.target.id === "email") {
            setEmail(event.target.value)
        } else  if (event.target.id === "message"){
            setMessage(event.target.value)
        } else {
            return
        }
        // setErrors([])
    }

    function displayContent(isSubmitted) {
        if (isSubmitted) {
            return (
                <div className='message-sent-container'>
                    <div className='message-sent-title'>Thank you for your message!</div>
                    <div className='message-sent-sub-title'>We'll get back to you as soon as possible!</div>
                </div>
            )
        } else {
            return (
                <div className='contact-form-section' >
                <form className='contact-form-container' onSubmit={handleSubmit} >
                    <div className='contact-form-header'>How Can We Help?</div>
                    <div className='contact-form-sub-header'>
                        Let us know how we can improve your experience with our games. We strive to make your voices heard with prompt responses within 24 hours.
                    </div>
                    <div className='contact-form-name'>
                        <div className='contact-form-name-element'>
                            <label className='contact-form-name-label'>
                                <div className='contact-form-label'>First Name:</div>
                                <motion.input
                                    initial={{'borderColor': '#FFFFFF'}} 
                                    animate={ errors && firstName.length === 0 ? {'borderColor': '#FF0000'} : {'borderColor': '#FFFFFF'}}
                                    type='text' 
                                    name='firstName' 
                                    id='fName' 
                                    className='contact-form-input contact-form-name-input' 
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>
                        <div className='contact-form-name-element'>
                            <label className='contact-form-name-label'>
                                <div className='contact-form-label'>Last Name:</div>
                                <motion.input 
                                    animate={ errors && lastName.length === 0 ? {'borderColor': '#FF0000'} : {'borderColor': '#FFFFFF'}}
                                    type='text' 
                                    name='lastName' 
                                    id='lName' 
                                    className='contact-form-input contact-form-name-input' 
                                    onChange={handleInputChange} 
                                />
                            </label>
                        </div>                        
                     
                    </div>
                    <div className='contact-form-email'>
                        <div className='contact-form-email-element'>
                            <label className='contact-form-name-label'>
                                <div className='contact-form-label'>Email:</div>
                                <motion.input 
                                    animate={ errors && email.length === 0 ? {'borderColor': '#FF0000'} : {'borderColor': '#FFFFFF'}}
                                    type='email' 
                                    name='email' 
                                    id='email' 
                                    className='contact-form-input contact-form-email-input' 
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>                        
                    </div>
                    <div className='contact-form-message'>
                        <label className='contact-form-name-label'>
                            <div className='contact-form-label'>Message</div>
                            <motion.textarea 
                                animate={ errors && message.length === 0 ? {'borderColor': '#FF0000'} : {'borderColor': '#FFFFFF'}}
                                id='message' 
                                className='contact-form-textarea'
                                onChange={handleInputChange} 
                            />
                        </label>
                    </div>

                    <div className='contact-form-submit-container'>
                        <button className='contact-form-submit-button'>Submit</button>
                    </div>
                </form>           
            </div>

            
            )
        }
    }

    return (
        <div className='contact-container' >
            <NavBar/>
            <div className='gap-for-nav-in-mobile'></div>
            <div className='contact-header'>Contact Us</div>
            {

                displayContent(isSubmit)
            }
            <Footer/>
        </div>
    )
}

export default ContactUs