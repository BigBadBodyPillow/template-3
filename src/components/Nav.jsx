import React from "react";
import { Link } from "react-router-dom";

import Logo from "~/assets/Logo.svg?react";
import TextLink from "./TextLink";

export default function Nav({ blur }) {
  return (
    <>
      <nav
        className={`flex justify-between p-5 ${blur ? " backdrop-blur-3xl" : ""}`}
      >
        <Link to="/home">
          {/* <h4 className="p-0! m-0!">Journal</h4> */}
          <Logo alt="Aetherfield company logo" />
        </Link>
        {/* <Logo alt="Aetherfield company logo" /> */}
        <div className="flex gap-5">
          <a href="#">Product</a>
          {/* <a href="#">Journal</a> */}
          <Link to="/journal">Journal</Link>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <TextLink link="#" />
        </div>
      </nav>
    </>
  );
}
