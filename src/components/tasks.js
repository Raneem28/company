import React, { useState } from "react";
import business from '../Assets/businessstrategy.png';
import uiux from '../Assets/uiux.png';
import appdev from '../Assets/appdev.png';
export function Tasks() {

    const tasks = [
        {
            title: "Business Strategy",
            description: "A business strategy is a powerful tool for helping you reach your goals, defining the methods and tactics",
            image: business
        },
        {
            title: "UX/UI Design",
            description: "A business strategy is a powerful tool for helping you reach your goals, defining the methods and tactics",
            image: uiux
        },
        {
            title: "App Development",
            description: "A business strategy is a powerful tool for helping you reach your goals, defining the methods and tactics",
            image: appdev
        },
        {
            title: "Business Strategy",
            description: "A business strategy is a powerful tool for helping you reach your goals, defining the methods and tactics",
            image: business
        },
        {
            title: "UX/UI Design",
            description: "A business strategy is a powerful tool for helping you reach your goals, defining the methods and tactics",
            image: uiux
        },
        {
            title: "App Development",
            description: "A business strategy is a powerful tool for helping you reach your goals, defining the methods and tactics",
            image: appdev
        }
    ];

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="tasks" style={{ display: "grid", gap: "15px", gridTemplateColumns: "repeat(3, 1fr)"  }}>
                {tasks.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            width: "300px",
                            height: "388.75px",
                            borderRadius: "10px",
                            boxShadow: "0px 4px 8px rgba(80, 80, 80, 0.1)",
                            padding: "20px",
                            backgroundColor: "#fff",
                            textAlign: "center",
                            cursor: "pointer",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                                                }}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            style={{
                                width: "80px",
                                height: "80px",
                                borderRadius: "40px",
                                marginBottom: "10px"
                            }}
                        />
                        <h2 style={{
                            fontWeight: "600",
                            fontSize: "24px",
                            letterSpacing:"0.48px",
                            color: "#25282B",
                            margin: "0"
                        }}>
                            {item.title}
                        </h2>
                        <p style={{
                            fontWeight: "400",
                            fontSize: "16px",
                            letterSpacing:"0.32px",
                            color: "#52575C",
                        }}>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
        
    );
}
