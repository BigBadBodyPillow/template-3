import React from "react";

export default function ArticleSmall({
  link,
  img,
  imgAlt,
  title,
  details,
  duration,
  mobile,
}) {
  return (
    <>
      <article
        className={`group py-6 w-full border-(--divider) border-y! ${mobile ? " max-w-93.75 " : ""} `}
      >
        <a
          href={link}
          draggable="false"
          className={`flex gap-4 ${mobile ? " flex-col" : ""}`}
        >
          <img
            src={img}
            alt={imgAlt || "no image loaded"}
            className={`w-41.25 h-25 border-none! flex justify-center items-center ${mobile ? " w-full h-[227.27px]" : ""}`}
            draggable="false"
          />

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="group-hover:opacity-65">{title}</p>
              <div className="flex text-(--text-2) gap-2 caption ">
                <p className="caption">{details}</p>
                <p className="caption">·</p>
                <p className="caption">{duration}</p>
              </div>
            </div>
          </div>
        </a>
      </article>
    </>
  );
}
