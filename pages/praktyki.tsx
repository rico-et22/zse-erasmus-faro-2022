/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import FooterLogos from "../components/FooterLogos";
import Navbar from "../components/Navbar";
import TextHeader from "../components/TextHeader";
import React from "react";
import Image from "next/image";
import inf1 from "../public/photos/praktyki/inf1.jpeg";
import inf2 from "../public/photos/praktyki/inf2.jpg";
import inf3 from "../public/photos/praktyki/inf3.jpg";

const Instytucje: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Praktyki Erasmus+ ZSE Faro & Algarve 2022</title>
        <meta
          name="description"
          content="Strona podsumowująca praktyki zawodowe Erasmus+ Zespołu Szkół Elektronicznych w Rzeszowie - Faro, Portugalia 2022"
        />
      </Head>
      <Navbar />

      <div className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <TextHeader left="Technik" right="informatyk" />
          <div className="flex flex-col-reverse md:flex-row items-start mb-8">
            <div className="md:w-1/2 md:mr-8">
              <p>
                <strong>Zakres obowiązków:</strong> <br />
                <br />
              </p>
              <ul className="list-disc pl-4">
                <li>
                  tworzenie responsywnych aplikacji internetowych używając{" "}
                  Bootstrap, jQuery, PHP,
                </li>
                <li>programowanie,</li>
                <li>eksploatacja urządzeń sieciowych,</li>
                <li>konfiguracja routerów i serwerów,</li>
                <li>tworzenie i konfigurowanie sieci lokalnych,</li>
                <li>administracja i projektowanie baz danych,</li>
                <li>używanie języka SQL,</li>
                <li>
                  eksploatacja systemów operacyjnych Windows, macOS oraz Ubuntu,
                </li>
                <li>
                  posługiwanie się dokumentacją i specyfikacją techniczną,
                </li>
                <li>
                  obsługa, eksploatacja, dobór i naprawa sprzętu
                  informatycznego.
                </li>
              </ul>{" "}
            </div>
            <div className="md:w-1/2 flex items-center justify-center relative bg-white rounded-lg shadow  mb-4 md:mb-0">
              <Image
                src={inf1}
                className="rounded-lg"
                alt=""
                placeholder="blur"
              />
            </div>
          </div>
          <div className="flex mb-10 flex-col md:flex-row -m-4 items-center">
            <div className="w-full md:w-1/2 flex items-center justify-center bg-white rounded-lg shadow mb-4 sm:mb-0 m-4">
              <div className="w-full relative aspect-w-3 aspect-h-2">
                <Image
                  src={inf2}
                  className="rounded-lg"
                  alt=""
                  placeholder="blur"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center relative bg-white rounded-lg shadow mb-4 sm:mb-0 m-4">
              <div className="w-full relative aspect-w-3 aspect-h-2">
                <Image
                  src={inf3}
                  className="rounded-lg"
                  alt=""
                  placeholder="blur"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterLogos />
    </div>
  );
};

export default Instytucje;
