import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavContext } from "../NavContext";
import "./BottomSection.css";
export default function BrowseCategories() {
  const { categories } = useContext(NavContext);
  return (
    <div>
      <div className="dropdown">
        <button
          className="browse-category-btn btn btn-secondary dropdown-toggle border-0 d-flex align-items-center "
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <div className="icon">
            <img
              className="pr-2"
              src={require("./assets/9dotIcon.png")}
              alt="9dot icon"
              style={{ height: "20px" }}
            />
          </div>
          Browse All Categories
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {categories.map((category) => {
            return (
              <Link className="dropdown-item" href="0">
                {category.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
