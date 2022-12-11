import React from "react";
import LastSection from "./LastSection";
import Logo from "./Logo";
import Search from "./Search";

export default function TopSection() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light  border-bottom">
        <div className="container d-flex align-items-center">
          <Logo />
          <Search />

          <LastSection
            title="Wishlist"
            icon="https://www.citypng.com/public/uploads/small/11642953885j4ftljk2juvtk09hglt6gpnyq2opgofg4xehzag1zzhpwybavtg3vz6pcxsbvvkm119lia1z1vvdlpvawtrulqtbg0bbetdpdieo.png"
            imgStyle={{ height: "30px" }}
          />
          <LastSection
            title="Cart"
            icon="https://icons.veryicon.com/png/o/miscellaneous/jd-app-icon/shopping-cart-296.png"
            imgStyle={{ height: "24px" }}
          />
          <LastSection
            title="Account"
            icon="https://cdn-icons-png.flaticon.com/512/1250/1250689.png"
            imgStyle={{ height: "19px" }}
          />
        </div>
      </nav>
    </div>
  );
}
