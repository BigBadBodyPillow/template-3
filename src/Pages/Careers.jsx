import React from "react";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import Footer from "../components/Footer";

export default function Careers() {
  return (
    <>
      {/* navbar */}
      <section className="navbar fixed w-full z-10 mb-">
        <div className="max-md:hidden block">
          <Nav blur={true} />
        </div>
        <div className="hidden max-md:block">
          <NavMobile />
        </div>
      </section>

      <section className="mt-15"></section>
      <div></div>

      <Footer />
    </>
  );
}
