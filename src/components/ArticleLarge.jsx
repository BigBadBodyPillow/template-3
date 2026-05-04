import React from "react";
import { Link } from "react-router-dom";

export default function ArticleLarge({
  link,
  img,
  imgAlt,
  title,
  details,
  duration,
  description,
  rectangle,
}) {
  return (
    <>
      <article className="flex-1 max-w-153 max-md:max-w-full group ">
        <Link to={link} draggable="false" className="flex flex-col  gap-5 ">
          <img
            src={img}
            alt={imgAlt || "no image loaded"}
            className={`h-89 w-full border-none! flex justify-center items-center object-cover select-none ${rectangle ? " max-h-58.5" : ""}`}
            draggable="false"
            loading="lazy"
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
            <p className="p2 font-(family-name:--heading)! group-hover:opacity-65">
              {description}
            </p>
          </div>
        </Link>
      </article>
    </>
  );
}
