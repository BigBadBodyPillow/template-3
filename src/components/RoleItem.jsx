import React from "react";
import ButtonSecondary from "~/components/ButtonSecondary";

export default function RoleItem({
  mobile,
  position,
  location,
  employmentBasis,
  description,
}) {
  return (
    <>
      <div className={` flex p-10 gap-6 ${mobile ? " flex-col" : ""}`}>
        <div className={`flex flex-col ${mobile ? " w-71.75 " : "w-154"}`}>
          <div className="flex flex-col gap-2">
            <p>{position}</p>
            <div className=" flex gap-2 text-(--text-2)!">
              <p className="caption ">{employmentBasis}</p>
              <p className="caption">·</p>
              <p className="caption">{location}</p>
            </div>
          </div>
          <p className="p2 mt-6!">{description}</p>
        </div>
        <div className="w-25! ">
          <ButtonSecondary text="View role" />
        </div>
      </div>
    </>
  );
}
