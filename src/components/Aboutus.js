import React from "react";
import aboutus from "../Assets/aboutus.png"
export function Aboutus(){
    return(
        <div className='content2'>
      <div className='text-section'>
        <div className='about'>About Us</div>
        <h1>Insights About Our Company</h1>
        <p className='inside'>
          Let our experts prepare a free home analysis for you! Just fill out our form. Surround yourself with the luxury and quality of one of Saskatoon's premier home builders. At Properties, we take pride in building you everything you need to call the Meadows home.
        </p>
        <div className='learn'>Learn More</div>
        <ul className='pcee'>
          <li className='PCEE'>Projects <div className='Numbers'>27</div></li>
          <li className='PCEE'>Campaigns <div className='Numbers'>18</div></li>
          <li className='PCEE'>Events <div className='Numbers'>56</div></li>
          <li className='PCEE'>Excellency <div className='Numbers'>13</div></li>
        </ul>
      </div>
      <div className='images2'>
        <img className='image' src={aboutus} alt='About Us' />
      </div>
    </div>
    )
}