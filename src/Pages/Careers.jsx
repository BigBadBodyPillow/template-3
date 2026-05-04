import React from "react";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import Footer from "../components/Footer";
import ButtonSecondary from "../components/ButtonSecondary";

// data
import jobListings from "../data/jobListings.json";
import { Link } from "react-router-dom";

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
          {jobListings.map((job) => (
            <li
              key={job.id}
              className="flex max-sm:flex-col min-h-48.5 gap-6 p-10 bg-(--bg) rounded-2xl"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <p className="my-0!">{job.title}</p>
                  <div className="flex text-(--text-2) gap-2 caption">
                    <p className="caption">{job.role}</p>
                    <p className="caption">·</p>
                    <p className="caption">{job.location}</p>
                  </div>
                </div>
                <p className="p2">{job.description}</p>
              </div>
              <Link
                className="p-4  bg-(--text) text-(--bg) h-9.5 hover:shadow-hover group flex items-center justify-center w-fit"
                to={`/job-listing/${job.id}`}
              >
                <span className="group-hover:opacity-80 text-nowrap">
                  View Role
                </span>
              </Link>
            </li>
          ))}

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
