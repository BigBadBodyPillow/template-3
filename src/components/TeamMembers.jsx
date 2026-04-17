import React from "react";

export default function TeamMembers({ mobile, name, title, email }) {
  return (
    <>
      <div
        className={`border-(--divider) border-y! flex justify-between ${mobile ? " flex-col w-fit py-6 gap-4" : " w-full py-4"}`}
      >
        <p className={`${mobile ? "w-93.75" : ""}`}>{name}</p>
        <p className=" p2">{title}</p>
        <p className=" p2">{email}</p>
      </div>
    </>
  );
}
