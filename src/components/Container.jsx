import React from "react";

import Up from "~/assets/Up.svg?react";

export default function Container({ title, description, background }) {
  return (
    <>
      <div
        className={`p-10 flex flex-col gap-6  rounded-2xl  bg-(${background})`}
      >
        <Up />
        <div className="flex flex-col gap-2 max-w-[320px]">
          <p>{title}</p>
          <p className="p2">{description}</p>
        </div>
      </div>
    </>
  );
}
