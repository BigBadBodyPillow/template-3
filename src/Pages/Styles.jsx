// Components
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import TextLink from "../components/TextLink";

export default function Styles() {
  return (
    <div>
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
      <section className="text-left flex flex-col gap-5">
        <p>Colour</p>
        <div className="flex gap-2 ">
          <div className="rounded-full bg-(--text) w-25 h-25 border-(--divider) border"></div>
          <div className="rounded-full bg-(--text-2) w-25 h-25 border-(--divider) border"></div>
          <div className="rounded-full bg-(--divider) w-25 h-25 border-(--divider) border"></div>
          <div className="rounded-full bg-(--bg-2) w-25 h-25 border-(--divider) border"></div>
          <div className="rounded-full bg-(--bg) w-25 h-25 border-(--divider) border"></div>
          <div className="rounded-full bg-linear-to-b from-(--gradient-colour-1) to-(--gradient-colour-2) w-25 h-25 border-(--divider) border"></div>
          <div className="rounded-full bg-(--link) w-25 h-25 border-(--divider) border"></div>
          <div className="rounded-full bg-(--bg-3) w-25 h-25 border-(--divider) border"></div>
          <div className="rounded-full bg-(--text-3) w-25 h-25 border-(--divider) border"></div>
        </div>
      </section>

      <div className="divider h-30 w-full"></div>

      {/* components */}
      <section className="text-left flex flex-col gap-5">
        <p>Components</p>

        {/* nav */}
        <div className="border-dashed border border-red-400 p-5 flex flex-col gap-5">
          <Nav blur={true} />
          <Nav />
        </div>

        <div className="divider "></div>

        {/* mobile nav */}
        <div className="border-dashed border border-red-400 p-5 flex flex-col gap-5 max-w-103.75 ">
          <NavMobile />
        </div>

        <div className="divider "></div>

        {/* primary button */}
        <div className="border-dashed border border-red-400 p-5 flex flex-col gap-5 w-fit">
          <ButtonPrimary />
        </div>

        <div className="divider "></div>

        {/* secondary button */}
        <div className="border-dashed border border-red-400 p-5 flex flex-col gap-5 w-fit">
          <ButtonSecondary />
        </div>

        <div className="divider "></div>

        {/* links */}
        <div className="border-dashed border border-red-400 p-5 flex flex-col gap-5 w-fit">
          <TextLink link="#" />
        </div>
      </section>

      <div className="divider h-30 w-full"></div>
    </div>
  );
}
