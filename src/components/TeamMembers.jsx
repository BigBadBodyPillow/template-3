import React from "react";

export default function TeamMembers({
  // mobile,
  name,
  title,
  email,
  link,
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
        <ul className="list-none! p-0 m-0 flex max-md:flex-col max-md:gap-4 ">
          <li className=" flex-1 text-left!">{name}</li>
          <li className="p2 flex-1 text-left!">{title}</li>
          <li className="p2 flex-1 text-right! max-md:text-left!">
            <a href={link} className="underline">
              {email}
            </a>
          </li>
        </ul>
        {/* <p className={`p2`}>{name}</p>
        <p className=" p2">{title}</p>
        <p className=" p2">{email}</p> */}
      </div>
    </>
  );
}
