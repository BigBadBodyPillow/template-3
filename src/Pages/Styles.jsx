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

// assets
import Up from "../assets/Up.svg?react";
import Down from "../assets/Down.svg?react";
import PieChart from "../assets/PieChart.svg?react";
import Target from "../assets/Target.svg?react";
import System from "../assets/System.svg?react";
import Sticker1 from "../assets/Sticker1.png";
import Sticker2 from "../assets/Sticker2.png";
//image
import Image1 from "../assets/Photos/image1.png";
import Image2 from "../assets/Photos/image2.png";
import Image3 from "../assets/Photos/image3.png";
import Image4 from "../assets/Photos/image4.png";
import Image5 from "../assets/Photos/image5.png";
import Image6 from "../assets/Photos/image6.png";
import Image7 from "../assets/Photos/image7.png";
import Image8 from "../assets/Photos/image8.png";
import Image9 from "../assets/Photos/image9.png";
import Image10 from "../assets/Photos/image10.png";

export default function Styles() {
  return (
    <div className="px-5 py-7.5 bg-red-400">
      <section className="text-left flex flex-col gap-5 border-t border-(--divider)">
        <p className="py-6">Texy Styles</p>
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
      <section className="text-left flex  flex-col gap-5 border-t border-(--divider)">
        <p className="py-6">Colour</p>
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
      <section className="text-left flex flex-col gap-5 border-t border-(--divider)">
        <p className="py-6">Components</p>

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

      {/* assets */}
      <section className="text-left flex flex-col gap-5 border-t border-(--divider)">
        <p className="py-6">Assets</p>
        <div className="border-dashed border rounded-[5px] border-red-400 flex p-5 gap-5 w-fit">
          <Up />
          <Down />
          <PieChart />
          <Target />
          <System />
        </div>

        <img src={Sticker1} alt="Sticker 1" className="max-w-116.25" />
        <img src={Sticker2} alt="Sticker 2" className="max-w-116.25" />
      </section>

      <div className="divider h-30 w-full"></div>

      {/* Photo links */}
      <section className="text-left flex flex-col gap-18.5 border-t border-(--divider)">
        <p className="py-6">Photo Links</p>
        <div className="flex gap-5 ">
          <div className="flex flex-1 flex-col gap-1.75">
            <img src={Image1} alt="image" className="w-full h-full max-h-64" />
            <a href="" className="underline">
              Link
            </a>
          </div>
          <div className="flex flex-1 flex-col gap-1.75">
            <img src={Image2} alt="image" className="w-full h-full max-h-64" />
            <a href="" className="underline">
              Link
            </a>
          </div>
          <div className="flex flex-1 flex-col gap-1.75">
            <img src={Image3} alt="image" className="w-full h-full max-h-64" />
            <a href="" className="underline">
              Link
            </a>
          </div>
          <div className="flex flex-1 flex-col gap-1.75">
            <img src={Image4} alt="image" className="w-full h-full max-h-64" />
            <a href="" className="underline">
              Link
            </a>
          </div>
          <div className="flex flex-1 flex-col gap-1.75">
            <img src={Image5} alt="image" className="w-full h-full max-h-64" />
            <a href="" className="underline">
              Link
            </a>
          </div>
        </div>

        <div className="flex gap-5 ">
          <div className="flex flex-1 flex-col gap-1.75">
            <img src={Image6} alt="image" className="w-full h-full max-h-64" />
            <a href="" className="underline">
              Link
            </a>
          </div>
          <div className="flex flex-1 flex-col gap-1.75">
            <img src={Image7} alt="image" className="w-full h-full max-h-64" />
            <a href="" className="underline">
              Link
            </a>
          </div>
          <div className="flex flex-1 flex-col gap-1.75">
            <img src={Image8} alt="image" className="w-full h-full max-h-64" />
            <a href="" className="underline">
              Link
            </a>
          </div>
          <div className="flex flex-1 flex-col gap-1.75">
            <img src={Image9} alt="image" className="w-full h-full max-h-64" />
            <a href="" className="underline">
              Link
            </a>
          </div>
          <div className="flex flex-1 flex-col gap-1.75">
            <img src={Image10} alt="image" className="w-full h-full max-h-64" />
            <a href="" className="underline">
              Link
            </a>
          </div>
        </div>
      </section>

      <div className="divider h-30 w-full"></div>
    </div>
  );
}
