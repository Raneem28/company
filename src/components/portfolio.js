import React from "react";
import pic1 from "../Assets/pic1.png";
import pic2 from "../Assets/pic2.png";
import pic3 from "../Assets/pic3.png";
import pic4 from "../Assets/pic4.png";
import pic5 from "../Assets/pic5.png";
import pic6 from "../Assets/pic6.png";

export function Portfolio(){
    return (
        <div className='port'>
            <div className='content3' >
                <div className='text-section'>
                    <h1 >The Best Folio.</h1>
                    <p className='inside'>Let our experts prepare a free home analysis for you! Just fill out our form. Surround yourself with the luxury and quality of one of Saskatoon's premier home builder</p>
                    <div className='learn'>Learn More</div>
                </div>
            </div>
            <div className="port2">
                <h1 >The Best Folio.</h1>
                </div>
                <div className='img'>
                    <img src={pic1} alt="pictures"  className="image1"></img>
                    <img src={pic2} alt="pictures" className="image1"></img>
                    <img src={pic3} alt="pictures" className="image1"></img>
                    <img src={pic4} alt="pictures" className="image1"></img>
                    <img src={pic5} alt="pictures" className="image1"></img>
                    <img src={pic6} alt="pictures" className="image1"></img>
                </div>
        </div>
      )
}