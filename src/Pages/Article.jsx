import React from "react";
import { Link, useParams } from "react-router-dom";

// Components
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import ArticleLarge from "../components/ArticleLarge";
import Footer from "../components/Footer";

import articles from "../data/articles.json";

export default function Article() {
  const { id } = useParams();
  const article = articles.find((item) => item.id === id);

  if (!article) {
    return (
      <main className="px-5 pt-35">
        <section className="navbar fixed w-full z-10 ">
          <div className="max-md:hidden block">
            <Nav blur={true} />
          </div>
          <div className="hidden max-md:block">
            <NavMobile />
          </div>
        </section>
        <section className="pt-40 px-5">
          <h1>Article not found</h1>
          <p className="mt-4">Try returning to the journal.</p>
          <Link to="/journal" className="underline mt-6 inline-block">
            Back to Journal
          </Link>
        </section>
      </main>
    );
  }

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

      <main>
        <header className="flex flex-col justify-center gap-4 px-5 pt-35 pb-10">
          <div className="flex text-(--text-2) gap-2 caption justify-center">
            <p className="caption">{article.details}</p>
            <p className="caption">·</p>
            <p className="caption">{article.duration}</p>
          </div>
          <h2 className="my-0! text-center!">{article.title}</h2>
        </header>

        <img
          src={`${import.meta.env.BASE_URL}${article.thumbnail}`}
          alt={article.title}
          className="object-cover w-full max-h-125 px-5"
        />

        <section className="flex justify-center">
          <div className="flex px-25 pt-20 justify-between max-w-310 w-full">
            <aside className="flex flex-col gap-10 max-w-50 w-full h-fit">
              <div className="flex flex-col gap-1">
                <p className="p2 text-(--text-2)! p-0!">Published</p>
                <p>{article.publishedDate}</p>
              </div>
              <div className="flex flex-col gap-1 ">
                <p className="p text-(--text-2)! p-0!">Author</p>
                <p>{article.author}</p>
              </div>
            </aside>
            <div className="articleP max-w-185 border-(--divider) border-b pb-12 text-left!">
              {article.intro}
            </div>
          </div>
        </section>

        <div className="flex justify-center">
          <section className="flex px-25 pt-12 pb-20 justify-end  max-w-310 w-full">
            <div className="max-w-185 w-full">
              {article.content.map((paragraph, index) => (
                <div
                  key={index}
                  className="mb-5"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <section className="flex justify-center bg-(--bg-2) ">
        <div className="flex flex-col px-5 py-30 max-w-310 ">
          <div className="flex justify-between">
            <h2 className="my-0!">Recent articles</h2>
            <Link to="/journal" className="underline">
              View all articles
            </Link>
          </div>
          <div className="flex gap-4">
            {articles.slice(0, 3).map((item) => (
              <ArticleLarge
                key={item.id}
                link={`/article/${item.id}`}
                img={`${import.meta.env.BASE_URL}${item.thumbnail}`}
                imgAlt={`${item.title} thumbnail`}
                title={item.title}
                details={item.details}
                duration={item.duration}
                description={item.description}
                rectangle="true"
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
