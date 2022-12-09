import React from "react";
import { Link } from "react-router-dom";

export default function NavLink({ to, children, active, handleLinkClick }) {
  const activeLinkClasses =
    "text-accentRed relative bg-[center_bottom_-10px] bg-no-repeat font-bold after:absolute after:top-0 after:max-w-[80px] after:bottom-[-16px] after:left-0 after:right-0 after:block after:bg-[url('/src/assets/icons/active-link.png')] after:bg-contain after:bg-bottom after:bg-no-repeat after:content-['']";
  return (
    <Link
      onClick={() => {
        handleLinkClick(children);
      }}
      to={to}
      className={`mr-[20px] text-[20px] duration-300  hover:text-accentRed xl:mr-[30px] xl:text-[22px] 3xl:mr-[45px] 3xl:text-[26.5px] [&:last-child]:mr-0 ${
        active && activeLinkClasses
      }`}
    >
      {children}
    </Link>
  );
}
