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
import w1 from "../public/photos/wycieczki/1.jpeg";
import w2 from "../public/photos/wycieczki/2.jpg";
import w3 from "../public/photos/wycieczki/3.jpg";

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
          <TextHeader left="Przygotowanie" right="w szkole" />
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="sm:w-1/2 mr-4 md:mr-8">
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
                <li>przygotowanie kulturowo-pedagogiczne</li>
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
        <div className="container mx-auto">
          <TextHeader left="Lekcje" right="portugalskiego" />
          <p className="mb-10 text-center">
            Podczas trwania praktyk uczestniczyliśmy w 10-godzinnym kursie
            języka portugalskiego z native speakerem Olavo z Brazylii <br /> i
            otrzymaliśmy certyfikat jego znajomości na poziomie podstawowym.{" "}
            <br /> <br />W trakcie tego kursu nauczyliśmy się
            najpotrzebniejszych zwrotów używanych w życiu codziennym, jak i na
            praktykach zawodowych.
          </p>
          <div className="flex sm:mb-10 flex-col md:flex-row -m-4">
            <div className="md:w-1/2 flex items-center justify-center relative bg-white rounded-lg shadow  mb-4 sm:mb-0 m-4">
              <Image
                src={jezyk1}
                className="rounded-lg"
                alt=""
                placeholder="blur"
              />
            </div>
            <div className="md:w-1/2 flex items-center justify-center relative bg-white rounded-lg shadow  mb-4 sm:mb-0 m-4">
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
      <div className="bg-gray-100 py-8" id="wycieczki">
        <div className="container mx-auto">
          <TextHeader left="Wycieczki" right="i aktywności" />
          <div className="flex sm:mb-8 flex-col sm:flex-row items-start">
            <div className="sm:w-1/2 mr-4 md:mr-8">
              <p className="mb-2">
                W czasie wyjazdu mieliśmy okazję zwiedzić następujące miejsca:
              </p>
              <ul className="list-disc pl-4 mb-2">
                <li>Albufeira i Quarteira</li>
                <li>Przylądek św. Wincentego i Lagos</li>
                <li>Benagil (+ spacer po klifach)</li>
                <li>Praia de Faro</li>
                <li>Wyspa Culatra</li>
                <li>Tavira</li>
                <li>Sewilla</li>
              </ul>
              <p className="mb-8 sm:mb-0">
                Dodatkowo wzięliśmy udział w spływie kajakowym.
              </p>
            </div>
            <div className="w-full sm:w-1/2 flex items-center justify-center relative bg-white rounded-lg shadow  mb-4 sm:mb-0">
              <div className="w-full relative aspect-w-3 aspect-h-2">
                <Image
                  src={w1}
                  className="rounded-lg"
                  alt=""
                  placeholder="blur"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col pb-10 md:flex-row md:-m-4 items-center">
            <div className="w-full md:w-1/2 flex items-center justify-center bg-white rounded-lg shadow mb-4 sm:mb-0 m-4">
              <div className="w-full relative aspect-w-3 aspect-h-2">
                <Image
                  src={w2}
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
                  src={w3}
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
