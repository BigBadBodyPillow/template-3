import React from "react";
import { Link } from "react-router-dom";

import FooterImage from "~/assets/FooterImage.png";
import FooterLogo from "~/assets/FooterLogo.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer p-5 text-(--text-3)  bg-(--bg-3) ">
        <div className="flex max-md:flex-col max-md:gap-10 items-center justify-between">
          <nav className="flex flex-wrap gap-5 justify-center">
            <a href="">Product</a>
            <Link to="/journal">Journal</Link>
            <Link to="/about">About</Link>
            <Link to="/careers">Careers</Link>
            <a href="">Get Started</a>
          </nav>
          <p className="p2">&copy; 2026 · All rights reserved</p>
        </div>
        <div
          className={`bg-[url(../src/assets/FooterImage.png)] bg-cover bg-(--bg-3) opacity-90 bg-blend-multiply my-5 max-md:my-4  w-full h-70 max-md:h-30`}
          //   className={`bg-[url(src/assets/FooterImage.png)] bg-cover bg-(--bg-3) opacity-90 bg-blend-multiply my-5 max-md:my-4  w-full h-70 max-md:h-30`}
        ></div>
        <Link to="/home" className="w-full overflow-hidden">
          <img
            src={FooterLogo}
            alt="Aetherfield company logo"
            className="select-none"
          />
        </Link>
      </footer>
    </>
  );
}
