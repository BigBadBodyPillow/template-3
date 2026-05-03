import React from "react";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import Footer from "../components/Footer";
import ButtonSecondary from "../components/ButtonSecondary";

export default function Careers() {
  return (
    <>
      {/* navbar */}
      <section className="navbar fixed w-full z-10 ">
        <div className="max-md:hidden block">
          <Nav blur={true} />
        </div>
        <div className="hidden max-md:block">
          <NavMobile />
        </div>
      </section>

      <main className="p-5 pt-35 pb-30 flex flex-col gap-10 items-center bg-linear-to-b from-(--gradient-colour-1) to-(--gradient-colour-2)">
        <header>
          <h1 className="my-0! text-center!">Careers at</h1>
          <h2 className="my-0! text-center!">Aetherfield</h2>
        </header>

        <ul className="list-none! p-0 m-0 max-w-205 flex flex-col gap-4">
          <li className="flex max-sm:flex-col min-h-48.5 gap-6 p-10 bg-(--bg) rounded-2xl">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="my-0!">UX Designer</p>
                <div className="flex text-(--text-2) gap-2 caption">
                  <p className="caption">Contract</p>
                  <p className="caption">·</p>
                  <p className="caption">San Francisco, CA</p>
                </div>
              </div>
              <p className="p2">
                Shape the tools that drive climate intelligence. You’ll lead
                cross-functional teams to build thoughtful, scalable solutions
                for sustainability-forward organizations.
              </p>
            </div>
            <ButtonSecondary text="View Role" link="" full="" />
          </li>

          <li className="flex max-sm:flex-col min-h-48.5  gap-6 p-10 bg-(--bg) rounded-2xl">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="my-0!">Data Scientist</p>
                <div className="flex text-(--text-2) gap-2 caption">
                  <p className="caption">Full-time</p>
                  <p className="caption">·</p>
                  <p className="caption">Denver, CO</p>
                </div>
              </div>
              <p className="p2">
                Help build the intelligence layer for climate action. You’ll
                turn complex sustainability data into clear, actionable insights
                for enterprise teams.
              </p>
            </div>
            <ButtonSecondary text="View Role" link="" full="" />
          </li>

          <li className="flex max-sm:flex-col min-h-48.5  gap-6 p-10 bg-(--bg) rounded-2xl">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="my-0!">Product Manager</p>
                <div className="flex text-(--text-2) gap-2 caption">
                  <p className="caption">Part-time</p>
                  <p className="caption">·</p>
                  <p className="caption">Seattle, WA</p>
                </div>
              </div>
              <p className="p2">
                Shape the tools that drive climate intelligence. You’ll lead
                cross-functional teams to build thoughtful, scalable solutions
                for sustainability-forward organizations.
              </p>
            </div>
            <ButtonSecondary text="View Role" link="" full="" />
          </li>

          <li className="flex max-sm:flex-col min-h-48.5  gap-6 p-10 dash rounded-2xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] ">
            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-col gap-2 ">
                <p className="my-0!">Open application</p>
                <div className="flex text-(--text-2) gap-2 caption">
                  <p className="caption">Full-time</p>
                  <p className="caption">·</p>
                  <p className="caption">Denver, CO</p>
                </div>
              </div>
              <p className="p2">
                Don’t see your role available? Apply for an open application!
              </p>
            </div>
            <ButtonSecondary text="Apply now" link="" full="" />
          </li>
        </ul>
      </main>

      <Footer />
    </>
  );
}
