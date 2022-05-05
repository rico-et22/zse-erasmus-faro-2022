import type { NextPage } from "next";
import Head from "next/head";
import FooterLogos from "../components/FooterLogos";
import HeaderBanner from "../components/index/HeaderBanner";
import Navbar from "../components/Navbar";
import TextHeader from "../components/TextHeader";
import InfoGraphics from "../components/InfoGraphics";
import React from "react";
import StudentList from "../components/uczestnicy/StudentList";

const Uczestnicy: NextPage = () => {
  const IT = [
    {
      className: "2g",
      students: ["Adrian Depa", "Kacper Wyczawski"],
    },
    {
      className: "2h",
      students: ["Patryk Błoński"],
    },
    {
      className: "2i",
      students: ["Aleksandra Świgoń"],
    },
    {
      className: "2j",
      students: ["Dominik Kogut"],
    },
    {
      className: "3gs",
      students: ["Bartosz Dusza", "Hubert Futoma", "Kacper Giebel"],
    },
    {
      className: "3ig",
      students: [
        "Mateusz Gałda",
        "Michał Grzywa",
        "Dawid Hołobowski",
        "Gabriel Solarz",
        "Konrad Powęzka"
      ],
    },
    {
      className: "3jg",
      students: [
        "Kamil Pawlak",
        "Bartosz Kawalec",
        "Piotr Król",
        "Jakub Drozd",
        "Aleksy Malawski",
      ],
    },
  ];

  const electronics = [
    {
      className: "2c",
      students: [
        "Sebastian Śmigiel",
      ]
    },
    {
      className: "2d",
      students: [
        "Maciej Pełdyjak",
      ]
    },
    {
      className: "3cs",
      students: [
        "Karolina Kielar",
        "Paweł Szczur"
      ]
    },
    {
      className: "3dg",
      students: [
        "Przemysław Lib",
      ]
    }
  ]

  const automatics = [
    {
      className: "3as",
      students: [
        "Mateusz Bielak",
        "Kacper Kuna",
        "Mikołaj Rzepka"
      ]
    },
    {
      className: "3bg",
      students: [
        "Krzysztof Baran",
        "Radosław Pondel"
      ]
    },
  ]

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
          <TextHeader left="Uczestnicy" right="projektu" />
          <div className="flex flex-wrap mx-6 sm:-mx-6">
            <div className="w-full sm:w-1/3 sm:px-6">
              <h2 className="text-xl font-bold mb-3">Informatycy</h2>
              <StudentList list={IT} />
            </div>
            <div className="w-full sm:w-1/3 sm:px-6">
              <h2 className="text-xl font-bold mb-3">Elektronicy</h2>
              <StudentList list={electronics} />
            </div>
            <div className="w-full sm:w-1/3 sm:px-6">
              <h2 className="text-xl font-bold mb-3">Automatycy</h2>
              <StudentList list={automatics} />
            </div>
          </div>
        </div>
      </div>
      <FooterLogos />
    </div>
  );
};

export default Uczestnicy;
