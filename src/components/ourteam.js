import React from "react";
import MR from "../Assets/MahbuburRahman.png";
import TA from "../Assets/TanvirAhmed.png";
import SS from "../Assets/SakibSharier.png";
import RS from "../Assets/RifatShikder.png";

export function Team() {
    const team = [
        {
            image: MR,
            name: "Mahbubur Rahman",
            designation: "Front End Developer"
        },
        {
            image: TA,
            name: "Tanvir Ahmed",
            designation: "Product Designer"
        },
        {
            image: SS,
            name: "Sakib Sharier",
            designation: "Webflow Developer"
        },
        {
            image: RS,
            name: "Rifat Shikder",
            designation: "WP Developer"
        },
        {
            image: MR,
            name: "Mahbubur Rahman",
            designation: "Front End Developer"
        },
        {
            image: TA,
            name: "Tanvir Ahmed",
            designation: "Product Designer"
        },
        {
            image: SS,
            name: "Sakib Sharier",
            designation: "Webflow Developer"
        },
        {
            image: RS,
            name: "Rifat Shikder",
            designation: "WP Developer"
        }
    ];

    return (
        <div className="ourteam" style={{ textAlign: "center", padding: "20px" , fontWeight:"700" , fontSize:"48px" ,lineHeight:"0px" , paddingBottom:"15px"}}>
            <div className="tea">
                <p style={{color: "#A0A4A8" , fontWeight:"400" , fontSize:"16px" , textAlign:"center" , lineHeight:"24px"}}>Our Team</p>
                <h1>Our Team</h1>
            </div>
            <div><p className="teamheading">Our Team</p></div>
            <div className="team" style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "10px", // Adds space between grid items
                justifyItems: "center", // Centers the grid items horizontally
                alignItems: "start" // Aligns the grid items at the top
            }}>
                {team.map((item, index) => (
                    <div key={index} style={{ textAlign: "center" }}>
                        <img
                            src={item.image}
                            alt={item.name}
                            style={{
                                width: "306px",
                                height: "275px",
                                borderRadius: "10px",
                            }}
                        />
                        <div
                            style={{
                                fontWeight: "500",
                                fontSize: "18px",
                                lineHeight: "24px",
                                color: "#1D1D1D",
                                marginTop: "10px"
                            }}
                        >
                            {item.name}
                        </div>
                        <div
                            style={{
                                fontWeight: "500",
                                fontSize: "16px",
                                lineHeight: "26px",
                                color: "#2D2D2D",
                            }}
                        >
                            {item.designation}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
