import React from "react";
import "./TopSection.css";
export default function LastSection({ title, icon, imgStyle }) {
  return (
    <div className="last-section d-flex flex-row align-items-center">
      <div className="icon-section">
        <div className="icon">
          <img src={icon} alt="icon" style={imgStyle} />
        </div>
      </div>
      <div className="text-section pl-1">{title}</div>
    </div>
  );
}
