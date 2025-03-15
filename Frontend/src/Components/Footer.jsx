import React from 'react'
// import { Link } from 'react-router-dom'
import './Footer.css'
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { FaPinterestP } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h2 className='footer-company-title' >Our Company</h2>
                    <p><a href="#">About Mr.Hotelier</a></p>
                    <p><a href="#">Career</a></p>
                    <p><a href="#">About The Founder</a></p>
                    <p><a href="#">News</a></p>
                    <p><a href="#">Our Story</a></p>
                </div>
                <div className="footer-section">
                    <h2 className='footer-section-heading' >Privacy & Terms</h2>
                    <p><a href="#">Tracking Preferences</a></p>
                    <p><a href="#">Privacy Center</a></p>
                    <p><a href="#">Your Privacy Choices</a></p>
                    <p><a href="#">Terms of Use</a></p>
                    <p><a href="#">Program Terms & Conditions</a></p>
                    <p><a href="#">Sustainability in the Supply Chain</a></p>
                </div>
                <div className="footer-section follow" >
                    <h2>Follow Mr Hotelier</h2>
                    <div className="social-icons">
                        <a className="instagram"><Instagram size={42} /></a>
                        <a className="facebook"><Facebook size={42} /></a>
                        <a className="twitter"><Twitter size={42} /></a>
                        <a className="linkedin"><Linkedin size={42} /></a>
                        <a className="pinterest"><FaPinterestP size={42} /></a>
                    </div>
                </div>
            </div>
            <p className="copyright">Copyright © mr.hotelier</p>
        </footer>
    )
}

export default Footer