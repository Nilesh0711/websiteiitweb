import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../pages/components/navbar";
import Footer from "../pages/components/footer";

const Research = () => {
  return (
    <div>
      <Head>
        <title>Research</title>
        <meta name="description" content="Research" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar research={"font-bold text-blue-500"} />
      <main>
        <div className="flex flex-col px-6 md:w-4/5 py-12 m-auto">
          <Motivation />
          <hr className="mt-16 md:mt-24 mx-auto w-48 h-1 bg-gray-900 rounded border-0"></hr>
        </div>
        <WorkList />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

const Motivation = () => {
  return (
    <>
      <div className="font-bold text-xl md:text-3xl text-black text-center my-6 mt-12">
        Research Interest
      </div>
      <div className="md:my-6 text-justify text-gray-600 md:grid grid-cols-2 gap-x-10">
        <p className="md:text-lg text-base">
          <strong className="text-blue-600 text-lg md:text-2xl">
            Quantum Error Correction,
          </strong>{" "}
          I came across basic principles of quantum physics called
          superposition, entanglement, and Interference are the basis of quantum
          computing and give massive parallelism that is impossible on a
          conventional computer. Circuit (Gate) model is the most popular and
          understood so far. A quantum particle is susceptible to its
          surroundings. Any noise in the environment will destroy its quantum
          coherence. If a qubit is lost, this means an immediate error. How can
          we keep many of them in sync or maintain coherence between many
          quantum particles to build a real quantum computer? In general, it is
          tough to control quantum systems because the information starts
          leaking away if you have little interaction with the outside world. We
          want our qubits to be entangled with each other but don’t want them to
          be entangled with anything else. However, the trouble is that our
          qubits will be made of physical stuff, and our qubits are dumb; they
          will entangle with anything they can. So, we must design our qubits
          carefully to protect them from entangling with the environment; this
          is called decoherence. Then we need to shield our qubits from any
          noise. Furthermore, it gets worse the more qubits we have entangled
          with each other. Is it possible to make a working quantum computer
          with many qubits, or will decoherence and noise ruin everything? For
          each qubit, you must have a bunch of wires to manipulate and measure
          it. This is manageable for a small number of qubits, but as the number
          of qubits increases, the amount of extra stuff we need increases
          linearly, which is a massive engineering problem.
        </p>{" "}
        <p className="text-base md:text-lg mt-10 md:mt-0">
          So any quantum computer design needs to be able to entangle all of the
          qubits and then control and measure them in a scalable way. Problems
          of decoherence/noise affecting qubits take us to the need for Quantum
          Error Correction (QEC). This is an error correction scheme to make
          fault-tolerant quantum computers using many entangled qubits together
          to represent one noise-free qubit. How many we need depends on how
          good the qubits are, but estimates are in the range of 100 to 1000
          physical qubits to make one fault-tolerant qubit, which is many qubits
          brings us to scalability obstacles. Both algorithms and physical
          devices should be robust to make quantum computing and everyday
          reality. We need quantum computers with qubits in a million orders to
          break the current RSA encryption security using Shor’s algorithm,
          which is an essential concern worldwide. This application is itself
          enough to explain the importance of quantum error correction. Today we
          are in the Noisy intermediate-scale quantum (NISQ) era describes the
          current state of the art in fabricating quantum processors containing
          about 50 to a few 100 qubits. However, they are not advanced enough to
          reach fault tolerance nor large enough to profit sustainably from
          quantum supremacy. The term ’noisy’ refers to the fact that quantum
          processors are susceptible to the environment and may lose their
          quantum state due to quantum decoherence. In the NISQ era, quantum
          processors are not sophisticated enough to continuously implement
          quantum error correction. Intermediate-scale refers to the quantum
          volume related to the not-so-large number of qubits and moderate gate
          fidelity.
        </p>
      </div>
    </>
  );
};

const WorkList = () => {
  return (
    <>
      <section>
        <div className="md:w-4/5 mx-auto px-4">
          <div className="info pt-20 md:w-1/2 text-black">
            <div className="font-bold text-lg md:text-2xl">
              Research Projects
            </div>
            <div className="my-5">
              I am currently reading the following topics.
              <ul className="list-disc text-gray-700 list-inside text-base md:text-lg space-y-4 md:mx-3 mt-12">
                <li>Operator QEC, Entanglement assisted QEC, Holonomic QEC</li>
                <li>Isometric extension, Block encoding, Petz recovery</li>
                <li>Bosonic Codes and Bosonic systems</li>
                <li>Gaussian quantum channel</li>
                <li>Approx. and Noise-Adapted QEC</li>
                <li>Basics of entanglement theory</li>
                <li>Learning Qiskit Programming</li>
              </ul>
            </div>
          </div>
          <div className="info pt-20 md:w-1/2 text-black">
            <div className="font-bold text-lg md:text-2xl">
              Books! I use for Learning
            </div>
            <div className="my-5">
              I am currently reading the following books.
              <ul className="list-disc text-gray-700 list-inside text-base md:text-lg space-y-4 md:mx-3 mt-12">
                <li>QCQI by Neilsen and Chuang</li>
                <li>QEC by Lidar and burn</li>
                <li>QI by Mark Wilde</li>
                <li>QCQI lecture notes by Preskill</li>
                <li>Quantum optics by Garry and Knight</li>
                <li>Quantum Arxiv papers as daily newspaper</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Research;
