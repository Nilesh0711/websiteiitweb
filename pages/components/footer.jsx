import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="p-4 shadow md:px-6 md:py-8 bg-gray-900 mt-48">
        <div>
          <p className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Acknowledgements
          </p>
          <p className="self-center text-base my-2 font-thin whitespace-nowrap dark:text-white">
            Current funding from DARPA, the Army Research Office, DOE, and the
            National Science Foundation is gratefully acknowledged.
          </p>
          <Sponsors/>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 Prabha Mandayam Group
        </span>
      </footer>
    </div>
  );
};

const Sponsors = () => {
  return (
    <>
      <section className="flex flex-row space-x-12 my-12">
        <div className="w-32 h-32 flex items-center">
          <img src="/img/sponsors/darpa_logo.png" alt="null"/>
        </div>
        <div className="w-32 h-32 flex items-center">
          <img src="/img/sponsors/iitm.png" alt="null" />
        </div>
        <div className="w-32 h-32 flex items-center">
          <img src="/img/sponsors/nsf_logo.png" alt="null" />
        </div>
        <div className="w-32 h-32 flex items-center">
          <img src="/img/sponsors/doe_logo.png" alt="null" />
        </div>
      </section>
    </>
  );
};

export default Footer;
