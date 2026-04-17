import React from "react";

import Arrow from "~/assets/Arrow.svg?react";

export default function TextLink(link) {
  return (
    <>
      <a href={link.link || "#"} className="flex gap-1 hover:no-underline!">
        Get Started <Arrow />
      </a>
    </>
  );
}
