import React, { useState } from "react";

export function NavTabs({ homeRef, AboutRef, ServicesRef,OurTeamRef,contactRef }) {
  const [selectedTab, setSelectedTab] = useState("");
  const [activeTabs, setActiveTabs] = useState(false);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = (title, ref) => {
    setSelectedTab(title);
    scrollToSection(ref);
  };

  const handlenavbar = () => {
    setActiveTabs(!activeTabs);
  };

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
        position:"sticky",
        top:0,
        zIndex:1000
      }}
    >
      <div
        style={{
          fontSize: "28px",
          color: "#D91966",
        }}
      >
        Software Company
        <button
          className="navbutton"
          onClick={handlenavbar}
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "5px",
            marginLeft: "20px",
            cursor: "pointer",
          }}
        >
          <div className="dash"></div>
          <div className="dash"></div>
          <div className="dash"></div>
        </button>
        <div className="small-screen">
          {activeTabs && (
            <ul
              className="smallul"
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
              <li
                onClick={() => handleClick("Home", homeRef)}
                style={{
                  color: selectedTab === "Home" ? "#D91966" : "#000000",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                Home
              </li>
              <li
                onClick={() => handleClick("About", AboutRef)}
                style={{
                  color: selectedTab === "About" ? "#D91966" : "#000000",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                About
              </li>
              <li
                onClick={() => handleClick("Services", ServicesRef)}
                style={{
                  color: selectedTab === "Services" ? "#D91966" : "#000000",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                Services
              </li>
              <li
                onClick={() => handleClick("Team", OurTeamRef)}
                style={{
                  color: selectedTab === "Team" ? "#D91966" : "#000000",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                Team
              </li>
              <li
                onClick={() => handleClick("Contact", contactRef)}
                style={{
                  color: selectedTab === "Contact" ? "#D91966" : "#000000",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                Contact
              </li>
              <li>
                <button className="started">Get Started</button>
              </li>
            </ul>
          )}
        </div>
      </div>
      <ul
        className="ul"
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
        <li
          onClick={() => handleClick("Home", homeRef)}
          style={{
            color: selectedTab === "Home" ? "#D91966" : "#000000",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Home
        </li>
        <li
          onClick={() => handleClick("About", AboutRef)}
          style={{
            color: selectedTab === "About" ? "#D91966" : "#000000",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          About
        </li>
        <li
          onClick={() => handleClick("Services", ServicesRef)}
          style={{
            color: selectedTab === "Services" ? "#D91966" : "#000000",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Services
        </li>
        <li
                onClick={() => handleClick("Team", OurTeamRef)}
                style={{
                  color: selectedTab === "Team" ? "#D91966" : "#000000",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                Team
              </li>
              <li
                onClick={() => handleClick("Contact", contactRef)}
                style={{
                  color: selectedTab === "Contact" ? "#D91966" : "#000000",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                Contact
              </li>
        <li>
          <button className="started"
          onClick={()=>{alert("Do you want to continue?")
          }}
          >Get Started</button>
        </li>
      </ul>
    </div>
  );
}
