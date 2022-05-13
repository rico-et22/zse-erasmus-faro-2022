/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import FooterLogos from "../components/FooterLogos";
import Navbar from "../components/Navbar";
import TextHeader from "../components/TextHeader";
import React from "react";
import Image from "next/image";
import przygotowaniePL from "../public/photos/przygotowaniePL.jpg";
import jezyk1 from "../public/photos/Grzywa_Michał_lekcje_portugalski.jpg";
import jezyk2 from "../public/photos/Grzywa_Michał_portugalski_3.jpg";

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
        <div className="container mx-auto overflow-x-hidden">
          <TextHeader left="Przygotowanie" right="w szkole" />
          <div className="flex lg:mb-10 flex-col-reverse sm:flex-row items-start">
            <div className="sm:w-1/2 md:mr-8">
              <p className="mb-2">
                Przed wyjazdem rozpoczęliśmy przygotowania mające przygotować
                nas do praktyk w Portugalii. <br />
                <br /> Odbywały się one w Zespole Szkół Elektronicznych i
                obejmowały:
              </p>
              <ul className="list-disc pl-4">
                <li>dodatkowe lekcje języka angielskiego</li>
                <li>zajęcia w dziedzinie bezpieczeństwa i higieny pracy</li>
                <li>przygotowanie dokumentów Europass CV</li>
                <li>przygotowanie kulturowe</li>
                <li>
                  przedstawianie prezentacji nt. kultury, polityki i zwyczajów
                  panujących w Portugalii
                </li>
                <li>spotkania obejmujące logistykę i organizację wyjazdu</li>
              </ul>
            </div>
            <div className="sm:w-1/2 flex items-center justify-center relative bg-white rounded-lg shadow  mb-4 sm:mb-0">
              <Image
                src={przygotowaniePL}
                className="rounded-lg"
                alt=""
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto overflow-x-hidden">
          <TextHeader left="Lekcje" right="portugalskiego" />
          <p className="mb-10 text-center">
            Podczas trwania praktyk uczestniczyliśmy w 10-godzinnym kursie
            języka portugalskiego z native speakerem Olavo z Brazylii <br/> i
            otrzymaliśmy certyfikat jego znajomości na poziomie podstawowym.
          </p>
          <div className="flex mb-10 flex-col md:flex-row -mx-4">
            <div className="md:w-1/2 flex items-center justify-center relative bg-white rounded-lg shadow  mb-4 sm:mb-0 mx-4">
              <Image
                src={jezyk1}
                className="rounded-lg"
                alt=""
                placeholder="blur"
              />
            </div>
            <div className="md:w-1/2 flex items-center justify-center relative bg-white rounded-lg shadow  mb-4 sm:mb-0 mx-4">
              <Image
                src={jezyk2}
                className="rounded-lg"
                alt=""
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
      <FooterLogos />
    </div>
  );
};

export default Instytucje;
