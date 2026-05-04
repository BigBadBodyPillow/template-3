// components
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import Footer from "../components/Footer";
import ArticleLarge from "../components/ArticleLarge";
import CalltoAction from "../components/CalltoAction";
import articles from "../data/articles.json";

// assets
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
      <section className="intro flex justify-center">
        <img
          src={JournalIntro}
          alt="Aetherfield Journal stamp graphic with the words tech, earth, and data around a diamond frame"
          className="max-w-7xl w-full mt-15"
          loading="lazy"
        />
      </section>

      {/* articles */}
      <section className="articles px-5 pt-20 pb-10 max-md:pt-10 max-md:pb-6 max-sm:pt-6 max-sm:pb-4  gap-10 flex flex-col items-center">
        <h4>Latest articles</h4>

        <div className="article-entries grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-20 max-md:gap-y-10">
          {articles.map((article) => (
            <ArticleLarge
              key={article.id}
              link={`/article/${article.id}`}
              img={`${import.meta.env.BASE_URL}${article.thumbnail}`}
              imgAlt={`${article.title} thumbnail`}
              title={article.title}
              details={article.details}
              duration={article.duration}
              description={article.description}
            />
          ))}
        </div>
      </section>

      {/* call to action */}
      {/* <section className="call-to-action  px-5 py-30 flex flex-col items-center gap-8 bg-(--bg-2)">
        <h4 className="text-center!">Subscribe to Aetherfield Journal</h4>
        <ButtonPrimary text="Sign up to newsletter" link="" />
      </section> */}

      <CalltoAction
        text="Subscribe to Aetherfield Journal"
        buttonText="Sign up to newsletter"
        link=""
      />

      <Footer />
    </>
  );
}
