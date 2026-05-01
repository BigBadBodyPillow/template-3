import React from "react";
import Bullet from "~/assets/Bullet.svg?react";

export default function ButtonPrimary({ text, link, full }) {
  return (
    <>
      <a
        className={`p-4  bg-(--text) text-(--bg) min-h-11.5 hover:shadow-hover group w-fit ${
          full ? "max-md:w-full" : ""
        }`}
        href={link || ""}
      >
        <span className="group-hover:opacity-80 flex gap-2.5 justify-center items-center text-center">
          <Bullet />
          {text}
        </span>
      </a>
    </>
  );
}
