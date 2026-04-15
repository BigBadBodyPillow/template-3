import React from "react";

export default function ButtonSecondary() {
  return (
    <>
      <button className="p-4  bg-(--text) text-(--bg) w-full h-9.5 hover:shadow-hover group flex items-center justify-center">
        <span className="group-hover:opacity-80 ">Request a demo</span>
      </button>
    </>
  );
}
