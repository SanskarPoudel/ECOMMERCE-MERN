import React, { useContext } from "react";
import "./TopSection.css";
import { Link } from "react-router-dom";
import { NavContext } from "../NavContext";
export default function Search() {
  const { categories } = useContext(NavContext);
  return (
    <>
      <div className="card-section card d-flex flex-row  align-items-center  ">
        <div class="nav-item dropdown">
          <Link
            class="search-category nav-link dropdown-toggle"
            href="0"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            All categories
          </Link>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            {categories.map((category) => {
              return (
                <Link class="dropdown-item" href="#">
                  {category.name}
                </Link>
              );
            })}
          </div>
        </div>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="search-input form-control mr-sm-2 border-0 d-block "
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
        </form>
        <div className="search-icon pr-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Search_icon-72a7cf.svg/2048px-Search_icon-72a7cf.svg.png"
            alt="search icon"
            style={{ height: "30px" }}
          />
        </div>
      </div>
    </>
  );
}
