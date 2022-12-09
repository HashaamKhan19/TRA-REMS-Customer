import React from "react";
import NavButton from "./NavButton";
const links = [
  {
    to: "/login",
    text: "Login",
    solid: false,
  },
  {
    to: "/register",
    text: "Sign Up",
    solid: false,
  },
  {
    to: "/subscription",
    text: "Subscription",
    solid: true,
  },
];

export default function NavButtonsContainer() {
  return (
    <div className="buttons hidden gap-[5px] lg:flex">
      {links.map((link) => {
        return (
          <NavButton to={link.to} key={link.text} solid={link.solid}>
            {link.text}
          </NavButton>
        );
      })}
    </div>
  );
}
