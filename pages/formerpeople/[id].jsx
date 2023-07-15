import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import * as fs from "node:fs/promises";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Slug = (props) => {
  let former= props.former
  return (
    <div>
      <Head>
        <title>Slug</title>
        <meta name="description" content="Slug" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar people={"font-bold text-blue-500"} />
      <main>
        <div className="md:grid grid-cols-3 md:w-4/5 mx-auto">
          <section className="flex flex-col mx-auto md:order-last col-span-2 md:col-span-1">
            <PhotoImage
              name={former.name}
              image={former.links.image}
              email={former.links.email}
              scholar={former.links.scholar}
              youtube={former.links.youtube}
              linkedin={former.links.linkedin}
              github={former.links.github}
              cv={former.links.cv}
            />
          </section>
          <AboutInformation
            className="md:col-span-2"
            name={former.name}
            description={former.description}
            interest={former.interest}
            motivationTitle={former.motivationTitle}
            motivationA={former.motivationA}
            motivationB={former.motivationB}
          />
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

const PhotoImage = ({
  name,
  image,
  email,
  scholar,
  youtube,
  linkedin,
  github,
  cv,
}) => {
  return (
    <>
      <header className="flex flex-col items-center mx-auto justify-center mt-10 mb-10 md:mb-20 md:my-20">
        <img className="mb-2 rounded-md w-4/5 h-4/5" alt="Author" src={image} />
        <article className="text-center">
          <h1 className="text-4xl my-4 text-black font-extrabold ">{name}</h1>
          <h2 className="text-xl text-blue-500">Contact Details</h2>
          <div className="my-2 flex flex-row space-x-2 items-center justify-center">
            <Link href={`mailto:${email}`}>
              <svg
                width="24px"
                className="text-gray-900 hover:text-blue-800"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
              </svg>
            </Link>
            <Link href={scholar} target="_blank">
              <svg
                width="24px"
                height="24px"
                className="text-gray-900 hover:text-blue-800"
                viewBox="-2 -2 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                preserveAspectRatio="xMinYMin"
              >
                <path d="M4.376 8.068A5.944 5.944 0 0 0 4.056 10c0 .734.132 1.437.376 2.086a5.946 5.946 0 0 0 8.57 3.045h.001a5.96 5.96 0 0 0 2.564-3.043H10.22V8.132h9.605a10.019 10.019 0 0 1-.044 3.956 9.998 9.998 0 0 1-3.52 5.71A9.958 9.958 0 0 1 10 20 9.998 9.998 0 0 1 1.118 5.401 9.998 9.998 0 0 1 10 0c2.426 0 4.651.864 6.383 2.302l-3.24 2.652a5.948 5.948 0 0 0-8.767 3.114z" />
              </svg>
            </Link>
            <Link href={youtube} target="_blank">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                className="text-gray-900 hover:text-blue-800"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </Link>
            <Link href={linkedin} target="_blank">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                className="text-gray-900 hover:text-blue-800"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
                <rect x="4" y="4" width="16" height="16" rx="2" />{" "}
                <line x1="8" y1="11" x2="8" y2="16" />{" "}
                <line x1="8" y1="8" x2="8" y2="8.01" />{" "}
                <line x1="12" y1="16" x2="12" y2="11" />{" "}
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />{" "}
              </svg>
            </Link>
            <Link href={github} target="_blank">
              <svg
                width="23px"
                height="23px"
                className="text-gray-900 hover:text-blue-800"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
              </svg>
            </Link>
          </div>
        </article>
        <p className="text-base my-6 text-center px-5 md:px-24 text-gray-800">
          To know more about me. You can download my
          <Link
            target="_blank"
            className="italic text-blue-600 font-semibold"
            href={cv}
          >
            CV here
          </Link>
        </p>
      </header>
    </>
  );
};

const AboutInformation = ({
  name,
  description,
  interest,
  motivationTitle,
  motivationA,
  motivationB,
}) => {
  return (
    <>
      <section className="flex flex-col md:m-auto col-span-2 pt-5 px-5">
        <div className="info md:my-20 my-5 md:text-left text-justify text-gray-600 md:text-lg text-base">
          <div>Hi, I am {name}</div>
          <br />
          <div>{description}</div>
          <br />
          <div className="md:text-lg text-base">{interest}</div>
          <Motivation motivationTitle={motivationTitle} motivationA={motivationA} motivationB={motivationB} />
        </div>
      </section>
    </>
  );
};

const Motivation = ({ motivationTitle, motivationA, motivationB }) => {
  return (
    <>
      <h2 className="relative group my-5 mt-10 md:mt-10 md:my-10 text-xl md:text-3xl font-bold text-black">
        {motivationTitle}
      </h2>
      <p className="text-justify text-gray-600 md:text-lg text-base">
        {motivationA} <br />
        <br />
        {motivationB}
        <br />
      </p>
    </>
  );
};

export async function getStaticPaths() {
  let currentDir = await fs.readdir("data/people/former");

  let myFile;
  let allCurrent = [];

  for (let index = 0; index < currentDir.length; index++) {
    const element = currentDir[index];
    myFile = await fs.readFile("data/people/former/" + element, "utf-8");
    allCurrent.push(JSON.parse(myFile));
  }
  const paths = allCurrent.map((data) => ({
    params: { id: data.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  let data = context.params.id
  let former = await fs.readFile(`data/people/former/${data}.json`, "utf-8");
  return {
    props: { former: JSON.parse(former) },
  };
}

export default Slug;
