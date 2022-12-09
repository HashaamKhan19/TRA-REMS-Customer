import React, { useState } from "react";
import NavLink from "./NavLink";

const links = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/buy",
    text: "Buy",
  },
  {
    to: "/sell",
    text: "Sell",
  },
  {
    to: "/exchange",
    text: "Exchange",
  },
  {
    to: "/rent",
    text: "Rent",
  },
  {
    to: "/news&insights",
    text: "News & Insights",
  },
];

export default function NavLinksContainer() {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="links hidden font-normal text-navBlack lg:block">
      {links.map((link) => {
        return (
          <NavLink
            to={link.to}
            key={link.text}
            handleLinkClick={handleLinkClick}
            active={activeLink === link.text}
          >
            {link.text}
          </NavLink>
        );
      })}
    </div>
  );
}
