import { Link } from "react-router-dom";

// components
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";

// assets
import Hero from "../assets/Hero image.png";
import HeroMedium from "../assets/Hero image-1.png";
import Feature from "../assets/Feature Image.png";
import FeatureMedium from "../assets/Feature Image-1.png";
import FeatureSmall from "../assets/Feature Image-2.png";
import ValuesBackground from "../assets/ValuesBackground.png";
import CaseStudy from "../assets/CaseStudy.png";

// icons
import Up from "../assets/Up.svg?react";
import System from "../assets/System.svg?react";

export default function Home() {
  return (
    <>
      {/* <Link to="/styles">Styles</Link> */}
      <section className="navbar fixed w-full z-10 ">
        <div className="max-md:hidden block">
          <Nav blur={true} />
        </div>
        <div className="hidden max-md:block">
          <NavMobile />
        </div>
      </section>

      {/* hero */}
      <section className="px-5 h-dvh max-h-213.75 z-1">
        <div className=" absolute inset-0 w-full h-213.75! -z-1 bg-linear-to-b from-(--gradient-colour-1) to-(--gradient-colour-2)" />
        <div className="flex flex-col items-center justify-center gap-8  mt-28 mb-14">
          {/* mt-18 mb-12 */}
          <div className=" flex flex-col gap-4 ">
            <header className="flex flex-col -gap-2 items-center ">
              <h1 className="my-0! text-center!">Sustainability insights,</h1>
              <h2 className="my-0! text-center!">built for business</h2>
            </header>
            <p className="p2 text-center! text-pretty">
              Track impact, reduce emissions, and accelerate progress—with
              clarity and confidence.
            </p>
          </div>
          <div className="flex gap-4 max-sm:flex-col items-center">
            <ButtonPrimary text="Request a demo" />
            <ButtonPrimary text="Explore the platform" />
          </div>
        </div>
        <div className="hero flex justify-center ">
          <img
            src={Hero}
            alt="Hero Image"
            className=" max-w-240 w-full object-cover max-md:hidden  select-none"
          />
          <img
            src={HeroMedium}
            alt="Hero Image"
            className=" max-w-190 w-full object-contain hidden max-md:block  select-none"
          />
        </div>
      </section>

      <div className="divider h-63! max-xs:hidden" />

      {/* features */}
      <section className="px-5 py-30 gap-10 flex flex-col items-center ">
        <h4 className="text-center! max-w-153">
          Everything you need to measure, model, and act on sustainability
        </h4>
        <div className="flex gap-10 max-md:flex-col">
          <div className="Features flex justify-center">
            <img
              src={Feature}
              alt="UI card displaying energy consumption data on a light fabric background"
              className=" max-w-173.25 w-full object-cover max-md:hidden  select-none"
            />
            <img
              src={FeatureMedium}
              alt="UI card displaying energy consumption data on a light fabric background"
              className=" max-w-190 w-full object-contain hidden max-md:block max-sm:hidden select-none"
            />
            <img
              src={FeatureSmall}
              alt="UI card displaying energy consumption data on a light fabric background"
              className=" max-w-190 w-full object-contain hidden max-sm:block  select-none"
            />
          </div>
          <div className="flex flex-col justify-between">
            {/* <div className="flex flex-col border-y border-(--divider)"> */}
            <ul>
              <li className="flex flex-col gap-4 py-6 border-y border-(--divider)">
                <div className=" flex">
                  <p className="flex-1">Track</p>
                  <span className="caption text-(--text-2)">001</span>
                </div>
                <p className="p2">
                  Emissions, energy, and waste across your value chain
                </p>
              </li>
              <li className="flex flex-col gap-4 py-6 border-y border-(--divider)">
                <div className=" flex">
                  <p className="flex-1">Model</p>
                  <span className="caption text-(--text-2)">002</span>
                </div>
                <p className="p2">Forecast performance and goal alignment</p>
              </li>
              <li className="flex flex-col gap-4 py-6 border-y border-(--divider)">
                <div className=" flex">
                  <p className="flex-1">Report</p>
                  <span className="caption text-(--text-2)">003</span>
                </div>
                <p className="p2">
                  Generate ESG disclosures, automate frameworks
                </p>
              </li>
              <li className="flex flex-col gap-4 py-6 border-y border-(--divider)">
                <div className=" flex">
                  <p className="flex-1">Act</p>
                  <span className="caption text-(--text-2)">004</span>
                </div>
                <p className="p2">
                  Surface insights and operational next steps
                </p>
              </li>
            </ul>
            <ButtonPrimary text="Request a demo" />
          </div>
        </div>
      </section>

      {/* values */}
      <section
        className={`bg-[url("./src/assets/ValuesBackground.png")]  flex flex-col items-center gap-10 px-5 py-30`}
      >
        <div>
          <h2 className="font-(family-name:--heading)! my-0! text-center!">
            Built for clarity
          </h2>
          <h2 className="my-0! text-center!">Designed for action</h2>
        </div>
        <div className="flex gap-4 max-md:flex-col">
          <div className="flex flex-col gap-6 p-10 rounded-2xl bg-(--bg)">
            <System />
            <div className="flex flex-col gap-2">
              <p>Sustainability is a systems problem</p>
              <p className="p2">
                We build tools that help teams connect the dots between
                operations, impact, and accountability.
              </p>
            </div>
          </div>
          <div className=" flex flex-col gap-6 p-10 rounded-2xl bg-(--bg)">
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

      {/* case study */}
      <section className={` flex flex-col items-center gap-10 px-5 py-30`}>
        <div className="bg-(--bg-2) flex max-sm:flex-col gap-10 p-5 max-w-245 items-center rounded-2xl">
          <img
            src={CaseStudy}
            alt="Group of colleagues greeting each other in a stylized blue duotone treatment"
            className="object-cover max-w-124.5 max-sm:max-w-full w-full  h-80  select-none rounded-lg"
          />
          <div className="flex flex-col gap-8 h-fit">
            <div className="flex flex-col gap-4  w-100.75 max-md:w-85 max-sm:w-full">
              <p>Why Acme Inc chose Aetherfield</p>
              <p className="p2 text-left">
                With fragmented data and growing reporting pressure, Acme turned
                to Aetherfield to streamline their ESG workflows. The result?
                Faster decisions, fewer spreadsheets, and 34% more coverage.
              </p>
            </div>
            <ButtonSecondary text="Read case study" />
          </div>
        </div>
      </section>
    </>
  );
}
