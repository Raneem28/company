import React0 from "react";
import img1 from "../Assets/image1.png"
import img2 from "../Assets/image2.png"
import img3 from "../Assets/image3.png"
import img4 from "../Assets/image4.png"
import img5 from "../Assets/image5.png"
import img6 from "../Assets/image6.png"
export function Images(){
    return (
        <div className="lastimg">
            <div className="lastimg" style={{display:"flex", justifyContent:"center" , gap:"15px"}}>
                <img src={img1} alt="image1"/>
                <div style={{display:"flex", flexDirection:"column",  gap:"15px"}}>
                    <img src={img2} alt="image2"/>
                    <img src={img3} alt="image3"/>
                </div>
            </div>
            <div className="lastimg" style={{display:"flex", justifyContent:"center" , gap:"15px" , paddingTop:"5px" , paddingBottom:"30px"}}>
                <img src={img4} alt="image4"/>
                <img src={img5} alt="image5"/>
                <img src={img6} alt="image6"/>
            </div>
        </div>
    );
}