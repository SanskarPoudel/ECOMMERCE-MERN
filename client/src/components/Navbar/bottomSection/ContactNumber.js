import React from "react";
import "./BottomSection.css";
import { FiPhoneCall } from "react-icons/fi";
export default function ContactNumber() {
  return (
    <div className="contact-section d-flex flex-row align-items-center">
      <div className="phone-icon px-2">{<FiPhoneCall size={25} />}</div>
      <div className="phone-and-time">
        <div className="phone-number">9866010209</div>
        <div className="contact-time"> Mon-Fri 9:00-20:00</div>
      </div>
    </div>
  );
}
