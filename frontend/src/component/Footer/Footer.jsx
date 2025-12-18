import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
     <div className="footer-content">
        <div className="footer-content-left"> 
            <img src={assets.logo} alt="" />
            <p>© 2025 TOMATO. All rights reserved.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.instagram_icon} alt="" />
            </div>
            </div>
        <div className="footer-content-center">
            <h2>COMPAMY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
            </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 9370730946</li>
                <li>anshusharma4165@gmail.com</li>
            </ul>

        </div>
     </div>
      <hr />
      <p className="footer-copyright">© 2025 TOMATO. All rights reserved.</p>
    </div>
  )
}

export default Footer
