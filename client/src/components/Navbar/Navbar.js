import React from "react";
import BottomSection from "./bottomSection/BottomSection";
import TopSection from "./topSection/TopSection";
import NavContextProvider from "./NavContext";

export default function Navbar() {
  return (
    <div>
     <NavContextProvider>
      <TopSection />
      <BottomSection />
      </NavContextProvider>
    </div>
  );
}
