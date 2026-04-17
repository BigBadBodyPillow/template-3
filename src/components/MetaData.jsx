import React from "react";

export default function MetaData({ desktop, date, author }) {
  return (
    <>
      <div
        className={`p-5 flex flex-col gap-10 ${!desktop ? " flex-row " : ""}`}
      >
        <div className="flex flex-col gap-1">
          <p className="font-(family-name:--heading)! text-(--text-2)">
            Published
          </p>
          <p>{date}</p>
        </div>

        <div>
          <p className="font-(family-name:--heading)! text-(--text-2)">
            Author
          </p>
          <p>{author}</p>
        </div>
      </div>
    </>
  );
}
