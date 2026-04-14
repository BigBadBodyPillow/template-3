import React, { useState } from "react";

import Logo from "../assets/Logo.svg?react";
import Plus from "../assets/Plus.svg?react";
import Close from "../assets/Close.svg?react";

export default function NavMobile() {
  const [open, setOpen] = useState(0);

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <>
      <nav className={`p-5 flex flex-col`}>
        <div className="flex justify-between ">
          <Logo alt="Aetherfield company logo" />
          {/* <div className="flex gap-5">
          <a href="#">Product</a>
          <a href="#">Journal</a>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#" className="flex gap-1">
            Get Started <Arrow />
          </a>
        </div> */}
          <button onClick={toggleOpen}>{open ? <Close /> : <Plus />}</button>
        </div>

        <div className={`${open ? "pt-7.5" : ""}`}>
          <div
            className={`menu-content max-h-0 overflow-hidden drop-shadow-lg  drop-shadow-cyan-500/50 ${open ? " open" : ""}`}
          >
            <ul className="list-none! p-0">
              <li className="border-(--divider) border-b py-6">
                <a href="#" className=" block ">
                  <h4 className="p-0! m-0!">Product</h4>
                </a>
              </li>
              <li className="border-(--divider) border-b py-6">
                <a href="#" className=" block ">
                  <h4 className="p-0! m-0!">Journal</h4>
                </a>
              </li>
              <li className="border-(--divider) border-b py-6">
                <a href="#" className=" block">
                  <h4 className="p-0! m-0!">Projects</h4>
                </a>
              </li>
              <li className="border-(--divider) border-b py-6">
                <a href="#" className=" block">
                  <h4 className="p-0! m-0!">About</h4>
                </a>
              </li>
              <li className="border-(--divider) border-b py-6">
                <a href="#" className=" block ">
                  <h4 className="p-0! m-0!">Careers</h4>
                </a>
              </li>
              <li className="border-(--divider) border-b py-6">
                <button className=" block p-4  bg-(--text) text-(--bg) w-full text-center!">
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
