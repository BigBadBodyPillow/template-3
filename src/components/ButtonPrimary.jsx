import React from "react";
import Bullet from "~/assets/Bullet.svg?react";

export default function ButtonPrimary() {
  return (
    <>
      <button className="p-4  bg-(--text) text-(--bg) h-11.5 w-full  hover:shadow-hover group">
        <span className="group-hover:opacity-80 flex gap-2.5 justify-center items-center">
          <Bullet />
          Request a demo
        </span>
      </button>
    </>
  );
}
