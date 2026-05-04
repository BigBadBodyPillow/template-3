import React from "react";

export default function MetaData({
  // mobile,
  date,
  author,
}) {
  return (
    <>
      <div className={`flex gap-10 flex-col max-md:flex-row `}>
        <div className="flex flex-col gap-1 flex-1">
          <p className="font-(family-name:--heading)! text-(--text-2)">
            Published
          </p>
          <p>{date}</p>
        </div>

        <div className="flex flex-col gap-1 flex-1">
          <p className="font-(family-name:--heading)! text-(--text-2)">
            Author
          </p>
          <p>{author}</p>
        </div>
      </div>
    </>
  );
}
