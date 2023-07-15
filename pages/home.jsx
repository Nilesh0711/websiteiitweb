import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../pages/components/navbar";
import Footer from "../pages/components/footer";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar home={"font-bold text-blue-500"} />
      <main>
        <Welcome />
        <Slider />
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
      <section className="flex flex-col text-center md:w-3/5 items-center justify-center mx-auto px-4">
        <div className="pt-12 text-xl md:text-2xl font-semibold text-gray-900">
          Welcome to my homepage
        </div>
        <div className="pt-6 text-base md:text-lg text-gray-600">
          I am Bhavesh Gupta, a research scholar in the Physics Department at
          IIT Madras.
          <br /> To know more, visit my
          <Link
            className="italic text-blue-600 font-semibold hover:bg-blue-600 hover:text-white hover:p-1 hover:m-1  hover:rounded-md"
            href="./about"
          >
            {" "}
            about{" "}
          </Link>
          page for more information. To get in touch, visit the
          <Link
            className="italic text-blue-600 font-semibold hover:bg-blue-600 hover:text-white hover:p-1 hover:m-1 hover:rounded-md"
            href="./contact"
          >
            {" "}
            contact{" "}
          </Link>
        </div>
      </section>
    </>
  );
};

function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper my-12"
      >
        <SwiperSlide>
          <img
            className="object-cover w-3/4 h-[20rem] md:h-[36rem] object-center bg-center bg-cover mx-auto"
            src="/img/slider/pic_1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover w-3/4 h-[20rem] md:h-[36rem] object-center bg-center bg-cover mx-auto"
            src="/img/slider/pic_2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover w-3/4 h-[20rem] md:h-[36rem] object-center bg-center bg-cover mx-auto"
            src="/img/slider/pic_3.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Home;
