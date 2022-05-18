/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import FooterLogos from "../components/FooterLogos";
import Navbar from "../components/Navbar";
import TextHeader from "../components/TextHeader";
import React from "react";
import Image from "next/image";
import britefil from "../public/companies/britefil.png";
import chardware from "../public/companies/chardware.jpeg";
import flow from "../public/companies/flow.svg";
import tecnicontrol from "../public/companies/tecnicontrol.png";
import trueinox from "../public/companies/trueinox.webp";
import underline from "../public/companies/underline.png";
import bpgame from "../public/companies/bpgame.png";
import elektronik from "../public/logo-zse-full.svg";
import wakeup from "../public/wakeup-logo.png";

const Instytucje: NextPage = () => {
  const companies = [
    {
      name: "Britefil",
      image: britefil,
      url: "https://www.britefil.com/",
      vector: false,
    },
    {
      name: "Clube do Hardware",
      image: chardware,
      url: "https://www.facebook.com/OClubedohardware/",
      vector: false,
    },
    {
      name: "Flow Productions",
      image: flow,
      url: "http://flowproductions.pt/",
      vector: true,
    },
    {
      name: "Tecnicontrol",
      image: tecnicontrol,
      url: "https://www.tecnicontrol.pt/en/home/",
      vector: false,
    },
    {
      name: "Trueinox",
      image: trueinox,
      url: "https://www.true-inox.com/",
      vector: false,
    },
    {
      name: "Underline",
      image: underline,
      url: "https://www.facebook.com/underline.concept/",
      vector: false,
    },
    {
      name: "BPGame",
      image: bpgame,
      url: "https://www.facebook.com/BePartOfTheGameInformatica/",
      vector: false,
    },
    {
      name: "Sabit",
      image: undefined,
      url: "https://goo.gl/maps/CngYwrYicJgcKmrS6",
      vector: false,
    },
  ];

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
          <TextHeader left="Organizatorzy" right="naszych praktyk" />
          <div className="flex mb-10 flex-col-reverse sm:flex-row">
            <p className="sm:w-3/4 md:mr-8">
              Pomysłodawcą i instytucją wysyłającą nas na praktyki jest nasza
              szkoła -{" "}
              <strong>Zespół Szkół Elektronicznych w Rzeszowie.</strong>
              <br />
              To jedna z największych szkół ponadgimnazjalnych na Podkarpaciu,
              kształcących w zawodach technika informatyka, elektronika i
              automatyka. Kształci około 1000 uczniów. <br /> Od lat zajmuje
              czołowe miejsce w rankingu "Perspektywy". <br /> Współpracuje z
              różnymi instytucjami szkolenia zawodowego i zakładami pracy w
              Polsce i za granicą.
            </p>
            <a
              href="https://elektronik.rzeszow.pl/"
              target="_blank"
              rel="noopener noreferrer" className="sm:w-1/4 flex items-center justify-center relative bg-white rounded-lg shadow p-4 h-28 sm:h-20 md:h-28 hover:scale-105 duration-100 mb-4 sm:mb-0">
              <Image
                src={elektronik}
                alt="Logo ZSE"
                className="!p-4"
                layout="fill"
                objectFit="contain"
              />
            </a>
          </div>
          <div className="flex flex-col-reverse sm:flex-row">
            <p className="sm:w-3/4 md:mr-8">
              Wyjazd został zorganizowany we współpracy z instytucją pośredniczącą{" "}
              <strong>WakeUp Projects SL / Magic Cinderella LDA.</strong>
              <br />
              Jest to prężnie działająca organizacja zlokalizowana w
              portugalskim mieście Faro z dużym doświadczeniem w zakresie
              zarządzania i koordynacji projektów edukacynych dotyczących
              kształcenia młodzieży w ramach programów Unii Europejskiej, m.in, Erasmus+. Praktyki zostały zorganizowane w 8 firmach na terenie Faro oraz okolic działających w obszarze informatyki,
              automatyki i elektroniki.
            </p>
            <a
              href="https://wakeupprojects.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:w-1/4 flex items-center justify-center relative bg-white rounded-lg shadow p-4 h-28 sm:h-20 md:h-28 hover:scale-105 duration-100 mb-4 sm:mb-0"
            >
              <Image
                src={wakeup}
                alt="Logo WakeUp Projects"
                layout="fill"
                className="!p-4"
                objectFit="contain"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto overflow-x-hidden">
          <TextHeader left="Firmy," right="które nas przyjęły" />
          <div className="flex flex-wrap -mx-4 -mt-4">
            {companies.map((company) => (
              <div className="p-4 w-1/2 sm:w-1/3 md:w-1/4" key={company.name}>
                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center relative bg-white rounded-lg shadow p-4 h-20  md:h-28 hover:scale-105 duration-100"
                >
                  {company.image && (
                    <Image
                      src={company.image}
                      alt={company.name}
                      layout="fill"
                      objectFit="contain"
                      className="!p-4"
                      placeholder={!company.vector ? "blur" : undefined}
                    />
                  )}
                  {!company.image && (
                    <p className="text-center text-2xl font-bold">
                      {company.name}
                    </p>
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterLogos />
    </div>
  );
};

export default Instytucje;
