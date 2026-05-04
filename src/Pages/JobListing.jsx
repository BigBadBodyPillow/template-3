import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import ButtonSecondary from "../components/ButtonSecondary";

// data
import jobListings from "../data/jobListings.json";
import ButtonPrimary from "../components/ButtonPrimary";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";

export default function JobListing() {
  const { id } = useParams();
  const job = jobListings.find((j) => j.id === id);

  if (!job) {
    return <div>Job not found</div>;
  }

  const { title, role, location, description, content } = job;
  return (
    <>
      <section className="navbar fixed w-full z-10 ">
        <div className="max-md:hidden block">
          <Nav blur={true} />
        </div>
        <div className="hidden max-md:block">
          <NavMobile />
        </div>
      </section>

      <main className="flex justify-center bg-linear-to-b from-(--gradient-colour-1) to-(--gradient-colour-2)">
        <div className="flex flex-col max-w-7xl gap-10 px-5 pt-35 pb-30">
          <Link
            to="/careers"
            className="text-center! p2 text-xl! hover:underline"
          >
            ← Back to Careers
          </Link>

          <section className="max-w-205 flex flex-col p-10 rounded-2xl gap-12 bg-(--bg)">
            <div className="flex gap-10">
              <div className="flex flex-col gap-6 flex-1 w-full">
                <div className="flex flex-col gap-2">
                  <h4 className="my-0!">{title}</h4>
                  <div className="flex text-(--text-2) gap-2 caption ">
                    <p className="caption">{role}</p>
                    <p className="caption">·</p>
                    <p className="caption">{location}</p>
                  </div>
                </div>
                <p className="p2">{description}</p>
              </div>
              <ButtonSecondary text="Apply now" link="" />
            </div>

            <div className="divider border-(--divider) border-b h-px!" />

            <div dangerouslySetInnerHTML={{ __html: content[0] || "" }} />

            <div className="divider border-(--divider) border-b h-px!" />

            <div className="flex flex-col gap-6 items-center">
              <h4 className="text-center! text-pretty!">
                Ready to help build the future of climate intelligence?
              </h4>
              <ButtonPrimary text="Apply now" link="" />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
