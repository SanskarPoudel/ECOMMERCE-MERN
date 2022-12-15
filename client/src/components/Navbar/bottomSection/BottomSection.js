import React from "react";
import BrowseCategories from "./BrowseCategories";
import Icons from "./Icons";
import PagesWithoutDropdown from "./PagesWithoutDropdown";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";
import ContactNumber from "./ContactNumber";
export default function BottomSection() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light   border-bottom">
        <div className="container d-flex align-items-center">
          <BrowseCategories />

          <PagesWithoutDropdown title={"Home"} pageLink={"/home"} />
          <PagesWithoutDropdown title={"About"} pageLink={"/about"} />
          <PagesWithoutDropdown title={"Shop"} pageLink={"/shop"} />
          <PagesWithoutDropdown title={"Blog"} pageLink={"/blog"} />
          <PagesWithoutDropdown title={"Our team"} pageLink={"/team"} />
          <PagesWithoutDropdown title={"Contact"} pageLink={"/contact"} />

          <div className="d-flex flex-row">
            <Icons icon={<CiFacebook />} />
            <Icons icon={<CiTwitter />} />
            <Icons icon={<CiInstagram />} />
            <Icons icon={<CiYoutube />} />
            <Icons icon={<BsWhatsapp />} />
          </div>
          <ContactNumber />
        </div>
      </nav>
    </div>
  );
}
