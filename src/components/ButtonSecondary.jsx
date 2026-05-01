import React from "react";

export default function ButtonSecondary({ text, link, full }) {
  return (
    <>
      <a
        className={`p-4  bg-(--text) text-(--bg) h-9.5 hover:shadow-hover group flex items-center justify-center w-fit ${
          full ? "max-md:w-full" : ""
        }`}
        href={link || ""}
      >
        <span className="group-hover:opacity-80 text-nowrap">{text}</span>
      </a>
    </>
  );
}
