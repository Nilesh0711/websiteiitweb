import React from "react";
import Link from "next/link";

const Navbar = (props) => {
  return (
    <div>
      <div className="flex justify-evenly items-center">

        {/* left */}
        <div className="w-48 flex items-center">
          <img src="/img/sponsors/cquicc_logo.png" alt="cquicc_logo" className="w-48 flex items-center" />
        </div>


        {/* center */}
        <div className="flex flex-col items-center text-center py-12">
          <p className="font-bold text-black text-xl md:text-3xl">
          Prabha Mandayam Group{" "}
          </p>
          <section className="flex flex-col items-center justify-center mx-5">
            <h3
              id="soft--active-matter-labhttpswwwiitkacinsam"
              className="relative group mt-6 text-blue-500 text-md md:text-xl font-semibold"
            >
              <a href="https://quantum.iitm.ac.in">
                CQuICC - Center for Quantum Information, Communication and
                Computing
              </a>
            </h3>
            <h3
              id="department-of-physicshttpsiitkacinphy-iit-kanpurhttpsiitkacin"
              className="relative group mt-4 font-semibold text-md md:text-xl text-blue-500"
            >
              <a href="https://physics.iitm.ac.in">Department of Physics</a>,
              <a href="https://www.iitm.ac.in/"> IIT Madras</a>
            </h3>
          </section>
        </div>

        {/* right */}
       <div className="w-48 h-48 flex items-center">
          <img src="/img/sponsors/iitm.png" alt="iitm" className="flex items-center" />
        </div>



      </div>

      <hr className="h-px bg-gray-300 border-0 w-4/5 mx-auto" />
      {/* Navbar */}
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto text-black md:mr-auto flex flex-wrap text-sm md:text-xl items-center justify-center">
            <Link
              href="/"
              className={`mr-3 md:mr-5 ${props.home} hover:text-blue-900 md:hover:underline decoration-2 decoration-sky-500`}
            >
              Home
            </Link>
            <Link
              href="/research"
              className={`mr-3 md:mr-5 ${props.research} hover:text-blue-900 md:hover:underline decoration-2 decoration-sky-500`}
            >
              Research
            </Link>
            <Link
              href="/people"
              className={`mr-3 md:mr-5 ${props.people} hover:text-blue-900 md:hover:underline decoration-2 decoration-sky-500`}
            >
              People
            </Link>
            <Link
              href="/news"
              className={`mr-3 md:mr-5 ${props.news} hover:text-blue-900 md:hover:underline decoration-2 decoration-sky-500`}
            >
              News/Event
            </Link>
          </nav>
        </div>
      </header>
      <hr className="h-px bg-gray-300 border-0 w-4/5 mx-auto" />
    </div>
  );
};

export default Navbar;
