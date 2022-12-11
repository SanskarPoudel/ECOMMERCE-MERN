import React from "react";
import "./TopSection.css";
export default function Logo() {
  return (
    <div className="d-flex flex-row pt-3">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2415/2415292.png"
        alt="Logo icon"
        style={{ height: "30px" }}
      />
      <p className="logo-text">ECOMMERCE</p>
    </div>
  );
}
