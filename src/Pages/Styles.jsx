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
          <caption>Caption</caption>
        </div>
      </section>
      <div className="divider h-30 w-full"></div>
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
    </div>
  );
}
