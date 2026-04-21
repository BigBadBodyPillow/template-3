import React from "react";
import Bullet from "~/assets/Bullet.svg?react";

export default function ButtonPrimary({ text }) {
  return (
    <>
      <button className="p-4  bg-(--text) text-(--bg) h-11.5 w-fit hover:shadow-hover group">
        <span className="group-hover:opacity-80 flex gap-2.5 justify-center items-center">
          <Bullet />
          {text}
        </span>
      </button>
    </>
  );
}
