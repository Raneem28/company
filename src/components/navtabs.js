import React, { useState } from "react";
import { Nav_data } from "./content";

export function NavTabs() {
  const [selectedTab, setSelectedTab] = useState("");
  const [activeTabs, setActiveTabs] = useState(false);
  const handleClick = (title) => {
    setSelectedTab(title);
  };
  const handlenavbar=() =>{
    setActiveTabs(!activeTabs)
  }

  return (
    <div
      className="Navtabs"
      style={{
        backgroundColor: "#F8F9FA",
        height: "70px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "40px",
        paddingRight: "20px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          fontSize: "28px",
          color: "#D91966"
        }}
      >
        Software Company
        <button
        className="navbutton"
        onClick={handlenavbar}
        style={{
          display:"flex",
          flexDirection:"row",
          padding:"5px",
          marginLeft:"20px",
          cursor:"pointer"
        }}>
          <div className="dash"></div>
          <div className="dash"></div>
          <div className="dash"></div>
        </button>
        <div className="small-screen"> 
        {activeTabs && (
        <ul className="smallul"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            padding: 0,
            margin: 0,
            listStyle: "none",
            gap: "30px",
            alignItems: "center",
            marginRight: "45px",
        }}
      >
        {Nav_data.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(item.title)}
            style={{
              color: selectedTab === item.title ? "#D91966" : "#000000",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            {item.title}
          </li>
        ))}
        <li>
          <button className="started">Get Started</button>
        </li>
      </ul>
        )}</div>
      </div>
      <ul
        className="ul"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap:"wrap",
          padding: 0,
          margin: 0,
          listStyle: "none",
          gap: "30px",
          alignItems: "center",
          marginRight: "45px",
        }}
      >
        {Nav_data.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(item.title)}
            style={{
              color: selectedTab === item.title ? "#D91966" : "#000000",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            {item.title}
          </li>
        ))}
        <li>
          <button className="started">Get Started</button>
        </li>
      </ul>
    </div>
  );
}
