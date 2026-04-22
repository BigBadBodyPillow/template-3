import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";

export default function CalltoAction({ text, buttonText }) {
  return (
    <>
      <aside className="bg-(--bg-2) flex flex-col items-center w-full py-30 px-5 max-md:py-20 max-md:px-5 max-sm:py-10 gap-8">
        <h4 className="text-center!">{text}</h4>
        <ButtonPrimary text={buttonText} />
      </aside>
    </>
  );
}
