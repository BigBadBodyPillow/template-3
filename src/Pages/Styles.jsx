// Components
import ArticleLarge from "~/components/ArticleLarge";
import ArticleSmall from "~/components/ArticleSmall";
import ButtonPrimary from "~/components/ButtonPrimary";
import ButtonSecondary from "~/components/ButtonSecondary";
import Container from "~/components/Container";
import MetaData from "~/components/MetaData";
import Nav from "~/components/Nav";
import NavMobile from "~/components/NavMobile";
import TeamMembers from "~/components/TeamMembers";
import TextLink from "~/components/TextLink";
import RoleItem from "../components/RoleItem";
import CalltoAction from "../components/CalltoAction";
import Footer from "../components/Footer";

export default function Styles() {
  return (
    <div className="px-5 py-7.5">
      <section className="text-left flex flex-col gap-5">
        <p>Texy Styles</p>
        <div className="flex flex-col gap-10 ">
          <h1>Header 1</h1>
          <h2>Header 2</h2>
          <h3>Header 3</h3>
          <h4>Header 4</h4>
          <p className="p-bold ">Paragraph 1 (Bold)</p>
          <p>Paragraph 1 (Regular)</p>
          <p className="p2">Paragraph 2</p>
          <a>Nav link</a>
          <button>Button text</button>
          {/* <caption>Caption</caption> */}
        </div>
      </section>

      <div className="divider h-30 w-full"></div>

      {/* colours */}
      <section className="text-left flex  flex-col gap-5">
        <p>Colour</p>
        <div className="flex gap-2 flex-wrap">
          <div className="rounded-full bg-(--text) w-25 h-25 aspect-square border-(--divider) border"></div>
          <div className="rounded-full bg-(--text-2) w-25 h-25 aspect-square border-(--divider) border"></div>
          <div className="rounded-full bg-(--divider) w-25 h-25 aspect-square border-(--divider) border"></div>
          <div className="rounded-full bg-(--bg-2) w-25 h-25 aspect-square border-(--divider) border"></div>
          <div className="rounded-full bg-(--bg) w-25 h-25 aspect-square border-(--divider) border"></div>
          <div className="rounded-full bg-linear-to-b from-(--gradient-colour-1) to-(--gradient-colour-2) w-25 h-25 aspect-square border-(--divider) border"></div>
          <div className="rounded-full bg-(--link) w-25 h-25 aspect-square border-(--divider) border"></div>
          <div className="rounded-full bg-(--bg-3) w-25 h-25 aspect-square border-(--divider) border"></div>
          <div className="rounded-full bg-(--text-3) w-25 h-25 aspect-square border-(--divider) border"></div>
        </div>
      </section>

      <div className="divider h-30 w-full"></div>

      {/* components */}
      <section className="text-left flex flex-col gap-5">
        <p>Components</p>

        {/* nav */}
        <div className="border-dashed border rounded-[5px] border-red-400 p-5 flex flex-col gap-5">
          <div className="max-md:hidden block">
            <Nav blur={true} />
            <Nav />
          </div>
          <div className="hidden max-md:block">
            <NavMobile />
          </div>
        </div>

        {/* primary button */}
        <div className="border-dashed border rounded-[5px] border-red-400 p-5 flex flex-col gap-5 w-fit">
          <ButtonPrimary text="Request a demo" />
        </div>

        {/* secondary button */}
        <div className="border-dashed border rounded-[5px] border-red-400 p-5 flex flex-col gap-5 w-fit">
          <ButtonSecondary text="Request a demo" />
        </div>

        {/* links */}
        <div className="border-dashed border rounded-[5px] border-red-400 p-5 flex flex-col gap-5 w-fit">
          <TextLink link="#" />
        </div>

        {/* Article Large */}
        <div className="border-dashed border rounded-[5px] border-red-400 p-5 flex flex-col gap-5 w-fit">
          <ArticleLarge
            link=""
            img=""
            imgAlt=""
            title="How to Build a Climate-Ready Data Stack"
            details="Tooling"
            duration="4 min"
            description="A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows."
          />
        </div>

        {/* Article Small */}
        <div className="border-dashed border rounded-[5px] border-red-400 p-5 flex flex-col gap-5 max-w-165">
          <ArticleSmall
            link=""
            img=""
            imgAlt=""
            title="How to Build a Climate-Ready Data Stack"
            details="Tooling"
            duration="4 min"
          />
          {/* <ArticleSmall
            link=""
            img=""
            imgAlt=""
            title="How to Build a Climate-Ready Data Stack"
            details="Tooling"
            duration="4 min"
            mobile={true}
          /> */}
        </div>

        {/* Meta Data */}
        <div className="border-dashed border rounded-[5px] border-red-400 p-5 flex gap-5 w-fit">
          <MetaData date="July 1, 2025" author="Al Gorithm" />
          {/* <MetaData mobile={true} date="July 1, 2025" author="Al Gorithm" /> */}
        </div>

        {/* Team Members */}
        <div className="border-dashed border rounded-[5px] border-red-400 p-5 flex flex-col gap-5">
          <TeamMembers
            name="John McClelland"
            title="Director of Technology"
            email="jmcclelland@aetherfield.com"
          />
          {/* <TeamMembers
            name="John McClelland"
            title="Director of Technology"
            email="jmcclelland@aetherfield.com"
            mobile={true}
          /> */}
        </div>

        <div className="border-dashed border rounded-[5px] border-red-400 p-5 flex gap-5 w-fit max-md:flex-col">
          <Container
            title="Clarity drives action"
            description="We believe better decisions start with better data—measured, visible, and trusted."
          />

          <Container
            title="Clarity drives action"
            description="We believe better decisions start with better data—measured, visible, and trusted."
            background="--bg-2"
          />
        </div>

        <div className="border-dashed border rounded-[5px] border-red-400 p-5 flex flex-col gap-5 w-fit">
          <RoleItem
            position="Data Scientist"
            location="Denver, CO"
            employmentBasis="Full-time"
            description="Help build the intelligence layer for climate action. You'll turn complex sustainability data into clear, actionable insights for enterprise teams."
          />
          {/* <RoleItem
            position="Data Scientist"
            location="Denver, CO"
            employmentBasis="Full-time"
            description="Help build the intelligence layer for climate action. You'll turn complex sustainability data into clear, actionable insights for enterprise teams."
            mobile={true}
          /> */}
        </div>

        <div className="border-dashed border rounded-[5px] border-red-400 p-5 flex flex-col gap-5 ">
          <CalltoAction
            text="Ready to operationalize your sustainability goals?"
            buttonText="Request a demo"
          />
        </div>

        <div className="border-dashed border rounded-[5px] border-red-400 p-5 flex flex-col gap-5 ">
          <Footer />
        </div>
      </section>

      <div className="divider h-30 w-full"></div>
    </div>
  );
}
