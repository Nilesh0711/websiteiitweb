import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../pages/components/navbar";
import Footer from "../pages/components/footer";

const News = () => {
  return (
    <div>
      <Head>
        <title>News</title>
        <meta name="description" content="News" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar news={"font-bold text-blue-500"} />
      <main>
        <main>
          <div className="flex flex-col px-6 md:w-4/5 mt-12 m-auto">
          </div>
          <div className="gallery pt-6 md:pt-5">
            <div className="title text-center font-bold text-lg pt-6 text-black md:text-3xl">
              Gallery
            </div>
          </div>
          <Gallery1 />
          <Gallery2 />
        </main>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

const Gallery1 = () => {
  return (
    <>
      <div className="gallery">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 md:py-15 mx-auto md:flex flex-wrap">
            <div className="md:flex w-full mb-10 md:mb-20 flex-wrap">
              <h1 className="text-lg md:text-3xl font-medium title-font text-black mb-4 flex items-center">
                Life at IIT Madras
              </h1>
              <p className="md:w-2/3 md:ml-24 mt-5 leading-relaxed text-lg text-gray-600 text-justify">
                There is alot that you can explore in this huge campus. It is
                always fun to go on a cycle ride around the campus(until you
                explore most of the campus…because I now feel that this campus
                is small). Probably night life in insti will be alot more
                memorable(of course as of now we have curfew for freshies and we
                are expected to be back in the hostel by 9:30…but it&apos;s okay to
                break the rules sometimes). Going to the beach to see the
                sunrise is something you will cherish. Saturday OAT movie with
                your friends and Wolf night and Freshie night would be great
                experiences. Most importantly you would learn how to tackle
                monkeys.
              </p>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/img/galleryLast/dp.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/img/galleryLast/cat.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="/img/galleryLast/chennai.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="/img/galleryLast/marina.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/img/galleryLast/resturant.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/img/galleryLast/drawing.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const Gallery2 = () => {
  return (
    <>
      <div className="gallery">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-6 mx-auto flex flex-wrap">
            <div className="md:flex w-full mb-10 md:mb-20 flex-wrap">
              <h1 className="text-lg md:text-3xl font-medium title-font text-black mb-4 flex items-center">
                Life at NIT Rourkela
              </h1>
              <p className="md:w-2/3 md:ml-24 mt-5 leading-relaxed text-gray-600 text-lg text-justify">
                Life can’t be better ever anywhere other than NIT Rourkela a
                cool place(of course not climate-wise). A huge campus filled
                with greenery that you will feel like you are just out of the
                polluted world. Weekend holidays, when you can go out with
                friends and have a lot of fun. So many clubs are there, that you
                can improve your personality as much you want. So many
                extracurricular activities you can avail such as swimming, gym,
                basket ball, table tennis,volley ball, cricket etc.
              </p>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/img/galleryLast/dive.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/img/galleryLast/daru.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="/img/galleryLast/masterproject.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="/img/galleryLast/shivadrawing.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/img/galleryLast/beach.jpg"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/img/galleryLast/medal.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default News;
