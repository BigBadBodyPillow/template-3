import { Link } from "react-router-dom";

// components
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import ArticleSmall from "../components/ArticleSmall";
import Footer from "../components/Footer";
import ArticleLarge from "../components/ArticleLarge";

// assets
// import Hero from "../assets/Hero image.png";
// import HeroMedium from "../assets/Hero image-1.png";
// import Feature from "../assets/Feature Image.png";
// import FeatureMedium from "../assets/Feature Image-1.png";
// import FeatureSmall from "../assets/Feature Image-2.png";
// import ValuesBackground from "../assets/ValuesBackground.png";
// import CaseStudy from "../assets/CaseStudy.png";
// import Climate from "../assets/ArticleThumbnails/HowToBuildAClimate-ReadyDataStack.png";
// import Sustainability from "../assets/ArticleThumbnails/SustainabilityIsntaSideProject.png";
// import Aetherfield from "../assets/ArticleThumbnails/InsideTheAetherfieldModel.png";
// import Testimonial from "../assets/Testimonial.png";
// import Sticker2 from "../assets/Sticker2.png";
import JournalIntro from "../assets/JournalIntro.png";
import FromSpreadsheetstoSystems from "../assets/ArticleThumbnails/FromSpreadsheetstoSystems.png";
import HowToBuildAClimate from "../assets/ArticleThumbnails/HowToBuildAClimate-ReadyDataStack.png";
import InsideTheAetherfieldModel from "../assets/ArticleThumbnails/InsideTheAetherfieldModel.png";
import SustainabilityIsntaSideProject from "../assets/ArticleThumbnails/SustainabilityIsntaSideProject.png";
import CarbonAccounting from "../assets/ArticleThumbnails/CarbonAccounting.png";
import SeeingClearly from "../assets/ArticleThumbnails/SeeingClearly.png";

// icons
// import Up from "../assets/Up.svg?react";
// import System from "../assets/System.svg?react";
// import Quotation from "../assets/Quotation.svg?react";

export default function Journal() {
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

      {/* intro */}
      <section className="intro flex justify-center">
        <img
          src={JournalIntro}
          alt="Aetherfield Journal stamp graphic with the words tech, earth, and data around a diamond frame"
          className="max-w-7xl w-full mt-15"
        />
      </section>

      {/* articles */}
      <section className="articles px-5 pt-20 pb-10 max-md:pt-10 max-md:pb-6 max-sm:pt-6 max-sm:pb-4  gap-10 flex flex-col items-center">
        <h4>Latest articles</h4>

        <div className="article-entries grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-20 max-md:gap-y-10">
          <ArticleLarge
            link=""
            img={HowToBuildAClimate}
            imgAlt="article thumbail"
            title="How to Build a Climate-Ready Data Stack"
            details="Insights"
            duration="4 min"
            description="A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows."
          />
          <ArticleLarge
            link=""
            img={SustainabilityIsntaSideProject}
            imgAlt="article thumbail"
            title="Sustainability Isn’t a Side Project: Making Impact Operational"
            details="Strategy"
            duration="7 min"
            description="Why climate goals belong in your core roadmap—not just in the annual ESG report."
          />
          <ArticleLarge
            link=""
            img={InsideTheAetherfieldModel}
            imgAlt="article thumbail"
            title="Inside the Aetherfield Model: How We Turn Data Into Action"
            details="Insights"
            duration="5 min"
            description="A behind-the-scenes look at our platform logic, system architecture, and sustainability reasoning."
          />
          <ArticleLarge
            link=""
            img={FromSpreadsheetstoSystems}
            imgAlt="article thumbail"
            title="From Spreadsheets to Systems: The Evolution of Climate Reporting"
            details="Tooling"
            duration="6 min"
            description="Why legacy tools aren’t enough—and what the next generation of reporting looks like."
          />
          <ArticleLarge
            link=""
            img={CarbonAccounting}
            imgAlt="article thumbail"
            title="Carbon Accounting: Myths, Models, and Must-Haves"
            details="Tooling"
            duration="6 min"
            description="Debunking common assumptions and offering a framework for getting it right."
          />
          <ArticleLarge
            link=""
            img={SeeingClearly}
            imgAlt="article thumbail"
            title="Seeing Clearly: Designing Feedback Loops for Sustainable Growth"
            details="Strategy"
            duration="4 min"
            description="Building responsive systems that keep sustainability strategy adaptive and actionable."
          />
        </div>
      </section>

      {/* call to action */}
      <section className="call-to-action  px-5 py-30 flex flex-col items-center gap-8 bg-(--bg-2)">
        <h4 className="text-center!">Subscribe to Aetherfield Journal</h4>
        <ButtonPrimary text="Sign up to newsletter" link="" />
      </section>

      <Footer />
    </>
  );
}
