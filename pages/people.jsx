import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import * as fs from "node:fs/promises";
import Navbar from "../pages/components/navbar";
import Footer from "../pages/components/footer";

const People = (props) => {
  // Initiate both requests in parallel
  const current = props.allCurrent
  const former = props.allFormer

  // Wait for the promises to resolve
  return (
    <div>
      <Head>
        <title>People</title>
        <meta name="description" content="People" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar people={"font-bold text-blue-500"} />
      <main>
        <section className="w-3/4 mx-auto">
          <Welcome />
          <Current props={current} />
          <FormerGroup props={former} />
        </section>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

const Welcome = () => {
  return (
    <>
      <div className="my-16">
        <h1 className="font-bold font-sans text-2xl">Group Members</h1>
        <p className="my-5 text-lg">
          IIT Madras has a vibrant quantum group working in diverse aspects of
          quantum computing, information and cryptography. I am a part of the
          Center for Quantum information, Computing and Cryptography (CQuICC) as
          well as the Center for Quantum Information Theory.
        </p>
      </div>
    </>
  );
};

const Current = (props) => {
  return (
    <>
      <div className="my-16">
        <h1 className="font-bold font-sans text-2xl">Current Group Members</h1>
        <Team props={props.props} />
      </div>
    </>
  );
};

const FormerGroup = (props) => {
  return (
    <>
      <div className="my-16">
        <h1 className="font-bold font-sans text-2xl">Former Group Members</h1>
        <Team props={props.props} />
      </div>
    </>
  );
};

const Team = (props) => {
  return (
    // <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="px-4 py-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {props.props.map((e, index) => {
          return (
            <>
              <Link key={e.id} href={`/${e.status}people/${e.id}`}>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                  <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src="/img/profile.jpg"
                    alt="Person"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <p className="mb-1 text-lg font-bold text-gray-100">
                      {e.work}
                    </p>
                  </div>
                  <div className="bg-gray-100">
                    <h1 className="py-2 text-center font-mono text-gray-800">
                      {e.name}
                    </h1>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export async function getStaticProps() {

    let currentDir = await fs.readdir("data/people/current");
    let formerDir = await fs.readdir("data/people/former");

    let myFile;

    let allCurrent= [];
    let allFormer= [];

    for (let index = 0; index < currentDir.length; index++) {
      const element = currentDir[index];
      myFile= await fs.readFile(("data/people/current/"+element),"utf-8")
      allCurrent.push(JSON.parse(myFile))
      
    }

    for (let index = 0; index < formerDir.length; index++) {
      const element = formerDir[index];
      myFile= await fs.readFile(("data/people/former/"+element),"utf-8")
      allFormer.push(JSON.parse(myFile))
      
    }
    return {
      props: { allCurrent, allFormer },
    };
  }

export default People;
