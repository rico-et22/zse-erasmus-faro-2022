import type { NextPage } from "next";
import Head from "next/head";
import FooterLogos from "../components/FooterLogos";
import HeaderBanner from "../components/index/HeaderBanner";
import Navbar from "../components/Navbar";
import TextHeader from "../components/TextHeader";
import InfoGraphics from "../components/InfoGraphics";
import React, { useState } from "react";
import StudentList from "../components/uczestnicy/StudentList";
import inf from "../public/photos/grupy/inf.jpg";
import aut from "../public/photos/grupy/aut.jpg";
import ele from "../public/photos/grupy/ele.jpg";
import all from "../public/photos/grupy/all.jpg";
import Image from "next/image";
import TeacherList from "../components/uczestnicy/TeacherList";
import FsLightbox from "fslightbox-react";

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
        "Konrad Powęzka",
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
      students: ["Sebastian Śmigiel"],
    },
    {
      className: "2d",
      students: ["Maciej Pełdyjak"],
    },
    {
      className: "3cs",
      students: ["Karolina Kielar", "Paweł Szczur"],
    },
    {
      className: "3dg",
      students: ["Przemysław Lib"],
    },
  ];

  const automatics = [
    {
      className: "3as",
      students: ["Mateusz Bielak", "Kacper Kuna", "Mikołaj Rzepka"],
    },
    {
      className: "3bg",
      students: ["Krzysztof Baran", "Radosław Pondel"],
    },
  ];

  const teachers = [
    {
      name: "mgr inż. Zbigniew Niedbała",
    },
    {
      name: "mgr Beata Bieńko",
    },
    {
      name: "mgr Elżbieta Czech",
    },
    {
      name: "mgr inż. Maria Materna",
    },
  ];

  const teachers2 = [
    {
      name: "Bruno Gameiro"
    },
    {
      name: "Natalia Chojecka",
    },
    {
      name: "Adriana Galek​"
    },
    {
      name: "Olavo Dos Santos"
    }
  ];

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number: number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }
  
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
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={[inf.src, aut.src, ele.src, all.src]}
        slide={lightboxController.slide}
      />
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto overflow-x-hidden">
          <TextHeader left="Uczestnicy" right="projektu" />
          <p className="mb-10 text-center text-xl">
            Uczniowie Zespołu Szkół Elektronicznych w Rzeszowie
          </p>
          <div className="flex flex-wrap sm:-mx-4 md:-mx-6 mb-10">
            <div className="w-full sm:w-1/3 sm:px-4 md:px-6 mb-10 sm:mb-0">
              <h2 className="text-xl font-bold mb-3">Technik informatyk</h2>
              <StudentList list={IT} />
              <button className="shadow flex rounded-lg mb-1" onClick={() => openLightboxOnSlide(1)}>
                <Image
                  src={inf}
                  className="rounded-lg"
                  alt=""
                  placeholder="blur"
                />
              </button>
            </div>
            <div className="w-full sm:w-1/3 sm:px-4 md:px-6 mb-10 sm:mb-0">
              <h2 className="text-xl font-bold mb-3">Technik elektronik</h2>
              <StudentList list={electronics} />
              <button className="shadow flex rounded-lg mb-1" onClick={() => openLightboxOnSlide(2)}>
                <Image
                  src={aut}
                  className="rounded-lg"
                  alt=""
                  placeholder="blur"
                />
              </button>
            </div>
            <div className="w-full sm:w-1/3 sm:px-4 md:px-6 mb-10 sm:mb-0">
              <h2 className="text-xl font-bold mb-3">Technik automatyk</h2>
              <StudentList list={automatics} />
              <button className="shadow flex rounded-lg mb-1" onClick={() => openLightboxOnSlide(3)}>
                <Image
                  src={ele}
                  className="rounded-lg"
                  alt=""
                  placeholder="blur"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start" id="opiekunowie">
            <div className=" w-full sm:w-1/3 md:mr-8">
              <h2 className="text-xl font-bold mb-3">Polscy opiekunowie młodzieży podczas praktyk</h2>
              <TeacherList list={teachers} />
              <h2 className="text-xl font-bold mb-3">Portugalscy opiekunowie młodzieży podczas praktyk</h2>
              <TeacherList list={teachers2} />
            </div>
            <button className="sm:w-2/3 flex items-center justify-center relative bg-white rounded-lg shadow  mb-4 sm:mb-0" onClick={() => openLightboxOnSlide(1)}>
              <Image
                src={all}
                className="rounded-lg"
                alt=""
                placeholder="blur"
              />
            </button>
          </div>
        </div>
      </div>
      <FooterLogos />
    </div>
  );
};

export default Uczestnicy;
