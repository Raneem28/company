import React, { useState } from "react";
import Basic from "./basiccontent.js";
import Standard from "./Standard.js";
import Premium from "./premium.js";

export function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState("");

  const plans = [
    {
      name: "Basic",
      price: "$2.50",
      discount: "15% off",
      frequency: "/mo",
      offers: Basic,
      mostPopular: "Most Popular",
    },
    {
      name: "Standard",
      price: "$5.75",
      discount: "15% off",
      frequency: "/mo",
      offers: Standard,
      mostPopular: "Recommended",
    },
    {
      name: "Premium",
      price: "$10.25",
      discount: "15% off",
      frequency: "/mo",
      offers: Premium,
      mostPopular: "Best Value",
    },
  ];

  const handleBuyNow = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div>
      <p className="pricing-para" style={{ paddingLeft: "65px", color: "#A0A4A8" }}>Pricing</p>
      <h1
        className="heading"
        style={{
          fontWeight: "700",
          fontSize: "48px",
          letterSpacing: "0.96px",
          color: "#25282B",
          lineHeight: "58px",
        }}
      >
        The Best Pricing
      </h1>
      <div
        className="offers"
        style={{ display: "flex", gap: "20px", justifyContent: "center" }}
      >
        {plans.map((plan, index) => (
          <div key={index}>
            <ul
              style={{
                display: "block",
                backgroundColor: selectedPlan === plan.name ? "#D91966" : "wheat",
                width: "416px",
                height: selectedPlan === plan.name ? "653px" : "601px",
                color: selectedPlan === plan.name? "white" : "black",
                padding: "20px",
                borderRadius: "10px",
                listStyleType: "none",
              }}
            >
              <h3
                className="h3"
                style={{
                  height: "44px",
                  fontWeight: "500",
                  fontSize: "36px",
                  color: selectedPlan === plan.name? "white" : "black",
                }}
              >
                {plan.name}
              </h3>
              <div
                style={{ fontWeight: "400", fontSize: "16px", color: selectedPlan === plan.name? "white" : "black", }}
              >
                {plan.mostPopular}
              </div>
              <div
              className="price"
                style={{
                  height: "59px",
                  fontWeight: "700",
                  fontSize: "48px",
                  lineHeight: "58px",
                  color: selectedPlan === plan.name ? "white" : "black",
                  textAlign: "center",
                }}
              >
                {plan.price}
                <span style={{ fontWeight: "400", fontSize: "28px" }}>{plan.frequency}</span>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "200",
                    lineHeight: "30px",
                  }}
                >
                  yearly
                  <span
                    style={{
                      borderRadius: "4px",
                      padding: "4px 7.39px",
                      backgroundColor: "#E8E8E8",
                      color:"black"
                    }}
                  >
                    {plan.discount}
                  </span>
                </div>
              </div>
              <br />
              {plan.offers.map((item, offerIndex) => (
                <li
                  key={offerIndex}
                  style={{
                    backgroundColor: selectedPlan === plan.name ? "#D91966" : "wheat",
                    padding: "10px",
                    margin: "5px 0",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                >
                  {item.offer || item.standardoffer || item.premiumoffer}
                </li>
              ))}
              <button
                onClick={() => handleBuyNow(plan.name)}
                style={{
                  height: "48px",
                  width: "119.8px",
                  backgroundColor: "#25282B",
                  borderRadius: "6px",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Buy Now
              </button>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
