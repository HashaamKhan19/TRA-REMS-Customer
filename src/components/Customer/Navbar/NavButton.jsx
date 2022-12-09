import React from "react";
import { Link } from "react-router-dom";

export default function NavButton({ to, children, solid }) {
  return (
    <Link
      to={to}
      className={`inline-flex h-[40px] w-[100px] items-center justify-center rounded-[5px] border-2 border-accentRed text-[15px] text-accentRed duration-300 hover:bg-accentRed hover:text-white 2xl:mr-[15px] 2xl:h-[50px] 2xl:w-[154px] 2xl:rounded-[8px] 2xl:text-[22px] 3xl:mr-[23px] 3xl:h-[60px] 3xl:w-[184px] 3xl:rounded-[10px] 3xl:text-[26.5px] ${
        solid && "bg-accentRed text-white hover:brightness-90"
      }`}
    >
      {children}
    </Link>
  );
}
