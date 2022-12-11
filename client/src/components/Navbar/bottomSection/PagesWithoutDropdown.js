import React from "react";
import "./BottomSection.css";
import { Link } from "react-router-dom";
export default function PagesWithoutDropdown({ title,pageLink}) {
  return (
    <div className="page-title d-flex align-text-center ">
      <Link className="title-text nav-link" to={pageLink}>
        {title}
      </Link>
    </div>
  );
}
