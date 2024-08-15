import React from "react";
import MR from "../Assets/MR.png";
import MR2 from "../Assets/MR2.png";
import MR3 from "../Assets/MR3.png";
export function Testimonials(){
    const Test=[
        {
            describe:"Let our experts prepare a free home analysis for you! Just fill out our Surround yourself with the quality of one of Saska toon’s premier home builder. Just fill out our form. Surround yourself with quality of one of Saskatoon's premier home builder.",
            name:"Mahbubur Rahman",
            post:"Owener, Softia ,UK",
            image: MR
        },
        {
            describe:"Let our experts prepare a free home analysis for you! Just fill out our Surround yourself with the quality of one of Saska toon’s premier home builder. Just fill out our form. Surround yourself with quality of one of Saskatoon's premier home builder.",
            name:"Mahbubur Rahman",
            post:"Owener, Softia ,UK",
            image: MR2
        },
        {
            describe:"Let our experts prepare a free home analysis for you! Just fill out our Surround yourself with the quality of one of Saska toon’s premier home builder. Just fill out our form. Surround yourself with quality of one of Saskatoon's premier home builder.",
            name:"Mahbubur Rahman",
            post:"Owener, Softia ,UK",
            image: MR3
        }
    ]
    return(
        <div className="heads" style={{backgroundColor:"#FEF3F3" , paddingBottom:"15px"}}>
            <div className="heading-test" style={{width:"746px" , height:"208.44px" , left:"12px" , paddingBottom:"30px"}}>
                <p
                style={{paddingTop:"5px", color:"#A0A4A8" , fontWeight:"500" , fontSize:"16px" , lineHeight: "19px" , letterSpacing:"0.32px" , paddingLeft:"65px"}}
                >Testimonials</p>
                <h1
                style={{fontWeight:"700" , fontSize:"48px" , lineHeight:"58px" , letterSpacing:"0.96px" , color:"25282B", paddingLeft:"65px"}}
                >Customers Talk About Us!</h1>
                <p className="para"
                style={{fontWeight:"400" , fontSize:"16px" , color:"#52575C" , paddingLeft:"65px" }}
                >Customer support represents the resources within your company that provide technical assistance to consumers after they purchase a product or service.</p>
            </div>
            <h2 className="h2">Customers Talk About Us</h2>
            <div className="test" style={{display:"flex" , gap:"15px" , justifyContent:"center"}}>
                {Test.map((item)=>(
                    <div className="describe"
                    style={{width:"250px" , height:"250px" , borderRadius:"10px", backgroundColor:"#FFFFFF"  , padding: "50px 15px 40px 15px"}}
                    >
                        <div>{item.describe}</div>
                        <div style={{display:"flex" , paddingTop:"15px"}}>
                            <img src={item.image}/>
                            <div style={{display:"flex" , flexDirection:"column" , paddingLeft:"5px" , paddingTop:"5px"}}>
                                <div>{item.name}</div>
                                <div>{item.post}</div>
                            </div>
                        </div>
                
                    </div>
                
                ))}
            </div>
        </div>
    );
}