import React from "react";
import linkedin from "../Assets/linkedin.png";
import insta from "../Assets/insta.png";
import fb from "../Assets/fb.png";
import location from "../Assets/location.png";
import phone from "../Assets/phone.png";
import at from "../Assets/at.png";
export function Ending(){
    return (
        <div className='wow'>
        <div className='end'>
            <div className='sc'>
                <h3>Software Company</h3>
                <p>Creative Design & Development Agency in Canada</p>
                <img src={linkedin} alt='Linkedin'/>
                <img src={insta} alt='instagram'/>
                <img src={fb} alt='facebook'/>
            </div>
            <div className='Support'>
                <ul>
                    <li><h3>Support</h3></li>
                    <li>About</li>
                    <li>UX/UI Design</li>
                    <li>Graphic Design</li>
                    <li>Business Strategy</li>
                    <li> App Development</li>
                </ul>
            </div>
            <div className='services'>
                <ul>
                    <li><h3>Services</h3></li>
                    <li>Blog</li>
                    <li>Service</li>
                    <li>Portfolio</li>
                    <li>Pricing Plan</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='Contact'>
                <ul>
                    <li><h3>Contact</h3></li>
                    <li><img src={location} /> 437 Melborne Ave #4, NY 13253, Austarlia</li>
                    <li><img src={phone} /> 1-976-1178-9535</li>
                    <li><img src={at} /> hello.Ajux@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr class="custom-hr"></hr>
        <p>Copyright 2023, All Rights Reserved</p>
    </div>
);
}