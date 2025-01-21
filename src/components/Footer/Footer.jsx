import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
<div className="footer-content">
    <div className="content-left">
        <img src={assets.logo}alt=''/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores amet illum, dolor quo du</p>
        <div className="social-icons">
            <img src={assets.facebook_icon}/>
            <img src={assets.twitter_icon}/>
            <img src={assets.linkedin_icon}/>
        </div>

    </div>
    <div className="content-center">
        <h2>Company</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
        </ul>

    </div>
    <div className="content-right">
        <h2>get in touch</h2>
        <ul>
            <li>9865468743758</li>
            <li>contact@tomato.com</li>
        </ul>
    </div>
</div>

<hr />
<p className='copy-right'>copyright 2024</p>


    </div>
  )
}

export default Footer