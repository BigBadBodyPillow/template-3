import React from "react";

import Logo from "../assets/Logo.svg?react";
import Arrow from "../assets/Arrow.svg?react";

export default function Nav({ blur }) {
  console.log(blur);
  return (
    <>
      <nav
        className={`flex justify-between p-5 ${blur ? " backdrop-blur-3xl" : ""}`}
      >
        <Logo alt="Aetherfield company logo" />
        <div className="flex gap-5">
          <a href="#">Product</a>
          <a href="#">Journal</a>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#" className="flex gap-1">
            Get Started <Arrow />
          </a>
        </div>
      </nav>
    </>
  );
}
