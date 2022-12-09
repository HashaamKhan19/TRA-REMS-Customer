import React from "react";
import NavLinksContainer from "./NavLinksContainer";
import NavLogo from "./NavLogo";
import NavButtonsContainer from "./NavButtonsContainer";

export default function Navbar() {
  return (
    <nav className="shadow-[0px_7px_45px_rgba(0,0,0,0.05)]bg-white fixed z-50 flex h-[100px] w-full items-center justify-between bg-white px-[10px] shadow-[0px_7px_45px_rgba(0,0,0,0.05)] 2xl:h-[150px] 2xl:px-[42px]">
      <NavLogo />
      <NavLinksContainer />
      <NavButtonsContainer />
    </nav>
  );
}
