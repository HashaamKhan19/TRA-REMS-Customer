import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/Logo.png";

export default function NavLogo() {
  return (
    <div className="logo w-[200px] xl:w-[265px] 2xl:w-[295px] 3xl:w-[328px]">
      <Link to="/">
        <img src={logo} alt="TRA Rems Logo" className="" />
      </Link>
    </div>
  );
}
