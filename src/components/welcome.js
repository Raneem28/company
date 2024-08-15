import React from "react";
import threepics from "../Assets/threepics.png";

export function Welcome() {
  return (
    <>
      <div className="container">
        <div className="text-content">
          <p>
            Welcome to{" "}
            <span className="highlighted-text">
              Ajux
            </span>
          </p>
          <h1 className="welcome-heading">
            Impact the World by Taking Action
          </h1>
         <p className="paragraph">
            Objectively foster extensible scenarios and business innovation.
            Energistically predominate prospective experiences with strategic
            initiatives.
          </p>
          <button className="btn">
            Get Started
          </button>
        </div>
        <div className="image-container">
          <img className="threepics" src={threepics} alt="Three Pics" />
        </div>
      </div>
    </>
  );
}
