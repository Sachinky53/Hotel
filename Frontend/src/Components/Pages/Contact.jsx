import React from 'react'
import NavBar from '../NavBar'
import './Contact.css'
import Footer from '../Footer'
export default function Contact() {
    return (
        <>
            <NavBar activePage="common-li-color" brandName="brand-name" />
            <div
                className="profile-header w-full h-60 flex justify-center items-center text-7xl font-bold font-sans text-white shadow-lg"
                style={{ background: 'linear-gradient(135deg, #b5184a,#611045, #1c060d)' }}
            >
                Contact
            </div>
            <div className="contact-container-layout">
                <div className="Contact-us-heading">
                    {/* <div className="contact-us-title">Contact</div> */}

                </div>
                <div className="main-container-section">
                    <div className="map-container">
                        <iframe
                            title="Google Map"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: '8px' }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2813.9015296002467!2d80.919991874218!3d26.831757263567184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdc710a0eaeb%3A0x327d4109ad7b12!2sLucknow%20Junction%20Railway%20Station!5e1!3m2!1sen!2sin!4v1742184757195!5m2!1sen!2sin">
                        </iframe>

                    </div>
                    <div className="contact-us-container">
                        <div className="contact-us-content">
                            <div className="contact-message">
                                <div className="message">
                                    Send a message
                                </div>
                                <div className="name-content">
                                    <label htmlFor="">Name</label><br />
                                    <input type="text" className='input-box' />
                                </div>
                                <div className="email-content">
                                    <label htmlFor="">Email</label><br />
                                    <input type="email" className='input-box' />
                                </div>

                                <div className="Subject-content">
                                    <label htmlFor="">Subject</label><br />
                                    <input type="text" className='input-box' />
                                </div>
                                <div className="message-content">
                                    <label htmlFor="">Message</label>
                                    <br />
                                    <textarea className='input-box' cols={3}
                                        rows={3}></textarea>
                                </div>
                                <div className="send-btn-content">
                                    <button className='send-btn' >Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
