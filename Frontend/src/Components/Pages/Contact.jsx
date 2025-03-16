import React from 'react'
import NavBar from '../NavBar'
import './Contact.css'
export default function Contact() {
    return (
        <>
        <NavBar />
            <div className="contact-container-layout">
                <div className="Contact-us-heading">
                    <div className="contact-us-title">Contact</div>
                    
                </div>
                <div className="main-container-section">
                    <div className="map-container">Map </div>
                    <div className="contact-us-container">
                        <div className="contact-us-content">
                            <div className="contact-message">
                                <div className="message">
                                    Send a message
                                </div>
                                <div className="name-content">
                                    <label htmlFor="">Name</label><br />
                                    <input type="text" className='name-input-box' />
                                </div>
                                <div className="email-content">
                                    <label htmlFor="">Email</label><br />
                                    <input type="email" className='email-input-box' />
                                </div>

                                <div className="Subject-content">
                                    <label htmlFor="">Subject</label><br />
                                    <input type="text" className='subject-input-box' />
                                </div>
                                <div className="message-content">
                                    <label htmlFor="">Message</label>
                                    <br />
                                    <textarea className='subject-text-area' cols={30} 
                                    rows={30}></textarea>
                                </div>
                                <div className="send-btn-content">
                                    <button className='send-btn' >Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
