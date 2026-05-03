import React from "react";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import Footer from "../components/Footer";
import ButtonPrimary from "../components/ButtonPrimary";
import TeamMembers from "../components/TeamMembers";

//assets
import Arrow from "../assets/Arrow.svg?react";
import AboutIntro from "../assets/AboutIntro.png";
import AboutIntroMedium from "../assets/AboutIntroMedium.png";
import AboutIntroSmall from "../assets/AboutIntroSmall.png";
import EunjiPark from "../assets/EunjiPark.png";

//icons
import PieChart from "../assets/PieChart.svg?react";
import Up from "../assets/Up.svg?react";
import System from "../assets/System.svg?react";
import CalltoAction from "../components/CalltoAction";

export default function About() {
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
      {/* intro */}
      <div className="flex justify-center">
        <section className=" flex max-md:flex-col gap-4 max-md:gap-20 max-sm:gap-8 max-w-7xl w-full">
          <div className="flex-1 ">
            <img
              src={AboutIntro}
              alt="Abstracted user interface forecasting a 16% off target for 2027 emissions goal alongside an image of a mossy tree on top of a light blue gradient background"
              className="max-md:hidden block w-full max-h-200 h-auto select-none"
            />
            <img
              src={AboutIntroMedium}
              alt="Abstracted user interface forecasting a 16% off target for 2027 emissions goal alongside an image of a mossy tree on top of a light blue gradient background"
              className="hidden max-md:block max-sm:hidden w-full h-auto select-none"
            />
            <img
              src={AboutIntroSmall}
              alt="Abstracted user interface forecasting a 16% off target for 2027 emissions goal alongside an image of a mossy tree on top of a light blue gradient background"
              className="hidden max-sm:block w-full h-auto select-none"
            />
          </div>
          <div className="flex-1 max-h-200 max-md:pl-16 max-md:pr-26.25 max-sm:px-5">
            <div className="flex flex-col justify-center h-full gap-8 px-16 max-sm:px-0">
              <div className="flex flex-col gap-4">
                <p className="p2">Our mission</p>
                <h4 className="my-0!">
                  Climate action starts with better information. We help
                  organizations turn complex data into measurable, meaningful
                  change.
                </h4>
              </div>
              <ButtonPrimary text="Meet the team" link="" full="true" />
            </div>
          </div>
        </section>
      </div>
      {/* Values */}
      <section
        className={`  flex flex-col items-center gap-10 px-5 pt-30 pb-40 max-md:pt-20 max-md:pb-30 max-md:py-10`}
      >
        <h4 className=" my-0! text-center!">Our Values</h4>
        <div className="flex gap-4 max-md:flex-col max-w-7xl">
          <div className="flex flex-col gap-6 p-10 rounded-2xl bg-(--bg-2) flex-1">
            <PieChart />
            <div className="flex flex-col gap-2">
              <p>Clarity drives action</p>
              <p className="p2">
                We believe better decisions start with better data—measured,
                visible, and trusted.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 p-10 rounded-2xl bg-(--bg-2) flex-1">
            <System />
            <div className="flex flex-col gap-2">
              <p>Sustainability is a systems problem</p>
              <p className="p2">
                We build tools that help teams connect the dots between
                operations, impact, and accountability.
              </p>
            </div>
          </div>
          <div className=" flex flex-col gap-6 p-10 rounded-2xl bg-(--bg-2) flex-1">
            <Up />
            <div className="flex flex-col gap-2">
              <p>Progress over perfection</p>
              <p className="p2">
                We support real-world momentum—helping organizations move from
                ambition to measurable change.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* story */}
      <div className="flex  justify-center">
        <section className="flex  max-sm:flex-col px-5 gap-4 pb-30 max-md:pb-20 max-sm:pb-10 max-w-7xl w-full">
          <img
            src={EunjiPark}
            alt="Stylized blue duotone portrait of a woman with long hair facing slightly backward"
            className="flex-1 w-full object-cover select-none"
          />
          <div className="flex-1 flex items-center justify-center max-md:px-10 max-sm:px-0">
            <div className="max-w-100.5  max-sm:max-w-full  flex flex-col gap-14 max-sm:gap-8">
              <div className="w-full flex flex-col gap-2">
                <p className="p2 text-(--text-2)">Founder’s story</p>
                <h2 className="my-0!">Eunji Park</h2>
              </div>
              <p className="p2">
                Eunji founded Aetherfield with one goal: to help companies take
                climate action without waiting for a perfect plan. With a
                background in environmental systems and software design, she’s
                spent the past decade building tools that turn impact goals into
                real-world outcomes. She still insists on biking to every
                investor meeting.
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* meet the team */}
      <section className="px-5  py-30 flex justify-center">
        <div className="max-w-7xl w-full flex flex-col  items-center  gap-16">
          <h3 className="my-0! w-full">Meet the team </h3>
          <div className=" flex flex-col w-full ">
            <div className="flex mb-2.5  max-md:hidden">
              <p className="flex-1 caption">Name</p>
              <p className="flex-1 caption">Title</p>
              <p className="flex-1 caption text-right! ">Email</p>
            </div>
            <TeamMembers
              name="Eunji Park"
              title="Founder"
              email="e.park@aetherfield.com"
              link={`mailto:e.park@aetherfield.com`}
            />
            <TeamMembers
              name="Al Gorithm"
              title="Senior Systems Architect"
              email="a.gorithm@aetherfield.com"
              link={`mailto:a.gorithm@aetherfield.com`}
            />
            <TeamMembers
              name="Cassandra Query"
              title="Head of Data Platforms"
              email="c.query@aetherfield.com"
              link={`mailto:c.query@aetherfield.com`}
            />
            <TeamMembers
              name="Sue Logic"
              title="Principal Software Engineer"
              email="s.logic@aetherfield.com"
              link={`mailto:s.logic@aetherfield.com`}
            />
            <TeamMembers
              name="Dash Bordman"
              title="Product Manager"
              email="d.bordman@aetherfield.com"
              link={`mailto:d.bordman@aetherfield.com`}
            />
            <TeamMembers
              name="Greta Watt"
              title="Director of Climate Strategy"
              email="g.watt@aetherfield.com"
              link={`mailto:g.watt@aetherfield.com`}
            />
            <TeamMembers
              name="Gail Force"
              title="Environmental Risk Analyst"
              email="g.force@aetherfield.com"
              link={`mailto:g.force@aetherfield.com`}
            />
            <TeamMembers
              name="Polly Nation"
              title="UX Designer"
              email="p.nation@aetherfield.com"
              link={`mailto:p.nation@aetherfield.com`}
            />
            <TeamMembers
              name="Will O’Watt"
              title="Clean Energy Solutions Manager"
              email="w.owatt@aetherfield.com"
              link={`mailto:w.owatt@aetherfield.com`}
            />
            <TeamMembers
              name="Lana Terra"
              title="Earth Systems Research"
              email="l.terra@aetherfield.com"
              link={`mailto:l.terra@aetherfield.com`}
            />
            <TeamMembers
              name="Ella Vation"
              title="Earth Systems Researcher"
              email="e.vation@aetherfield.com"
              link={`mailto:e.vation@aetherfield.com`}
            />
            <TeamMembers
              name="Phil Scope"
              title="Lifecycle Assessment Lead"
              email="p.scope@aetherfield.com"
              link={`mailto:p.scope@aetherfield.com`}
            />
          </div>
        </div>
      </section>
      <CalltoAction
        text="We’re hiring! Want to join the team?"
        buttonText="View open roles"
      />
      <Footer />
    </>
  );
}
