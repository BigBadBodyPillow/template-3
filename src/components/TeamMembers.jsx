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
        className={`border-(--divider) border-y! py-4 max-md:py-6 `}
        // className={`border-(--divider) border-y! flex justify-between max-md:flex-col w-full max-md:w-fit py-4 max-md:py-6 max-md:gap-4`}
      >
        {/* <div
        className={`border-(--divider) border-y! flex justify-between ${mobile ? " flex-col w-fit py-6 gap-4" : " w-full py-4"}`}
      > */}
        <ul className="list-none! p-0 m-0 flex justify-between max-md:flex-col max-md:gap-4 ">
          <li>{name}</li>
          <li className="p2">{title}</li>
          <li className="p2">{email}</li>
        </ul>
        {/* <p className={`p2`}>{name}</p>
        <p className=" p2">{title}</p>
        <p className=" p2">{email}</p> */}
      </div>
    </>
  );
}
