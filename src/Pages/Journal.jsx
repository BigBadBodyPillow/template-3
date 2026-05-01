import { Link } from "react-router-dom";

// components
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import ArticleSmall from "../components/ArticleSmall";
import Footer from "../components/Footer";

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
      <section className="intro">
        <img
          src={JournalIntro}
          alt="Aetherfield Journal stamp graphic with the words tech, earth, and data around a diamond frame"
          className="w-full mt-15"
        />
      </section>

      {/* articles */}
      <section className="articles px-5 pt-20 pb-10 gap-10 flex flex-col items-center">
        <h4>Latest articles</h4>
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
