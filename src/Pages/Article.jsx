import React from "react";
import { Link, useParams } from "react-router-dom";

// Components
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import ArticleLarge from "../components/ArticleLarge";
import Footer from "../components/Footer";

import articles from "../data/articles.json";
import MetaData from "../components/MetaData";

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
          <div className="flex max-md:flex-col max-md:gap-10 max-sm:gap-8 px-25 max-md:px-20 max-sm:px-5 pt-20 max-sm:pt-10  justify-between max-w-310 w-full">
            <MetaData date={article.publishedDate} author={article.author} />
            <div className="articleP max-w-185 border-(--divider) border-b pb-12 max-sm:pb-10 text-left!">
              {article.intro}
            </div>
          </div>
        </section>

        <div className="flex justify-center">
          <section className="flex px-25 max-md:px-20 max-sm:px-5 pt-12 max-sm:py-10 pb-20 justify-end  max-w-310 w-full">
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
        <div className="flex flex-col px-5 py-30 max-md:py-20 max-sm:py-10 gap-5 max-sm:gap-6 max-w-310 ">
          <div className="flex justify-between max-sm:flex-col">
            <h3 className="my-0! max-sm:text-center!">Recent articles</h3>
            <Link
              to="/journal"
              className="p2! text-xl! underline content-end max-sm:text-center!"
            >
              View all articles
            </Link>
          </div>
          <div className="flex gap-4 max-md:gap-5  max-sm:gap-8 max-md:flex-col">
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
