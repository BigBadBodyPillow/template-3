import React from "react";

export default function TeamMembers({
  // mobile,
  name,
  title,
  email,
}) {
  return (
    <>
      <div
        className={`border-(--divider) border-y! flex justify-between max-md:flex-col w-full max-md:w-fit py-4 max-md:py-6 max-md:gap-4`}
      >
        {/* <div
        className={`border-(--divider) border-y! flex justify-between ${mobile ? " flex-col w-fit py-6 gap-4" : " w-full py-4"}`}
      > */}
        <p className={`max-md:w-93.75`}>{name}</p>
        {/* <p className={`${mobile ? "w-93.75" : ""}`}>{name}</p> */}
        <p className=" p2">{title}</p>
        <p className=" p2">{email}</p>
      </div>
    </>
  );
}
