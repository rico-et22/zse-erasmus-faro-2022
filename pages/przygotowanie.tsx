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
import w1 from "../public/photos/wycieczki/1.jpg";
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
                Przed wyjazdem do Faro odbywały się spotkania
                organizacyjno-merytoryczne prowadzone przez koordynatora
                projektu pana mgr inż. Zbigniewa Niedbałę oraz przygotowanie
                kulturowo – pedagogiczne. Poznaliśmy zasady uczestnictwa w
                programie Erasmus+, wypełnialiśmy odpowiednią dokumentacje.
                Zapoznaliśmy się z miastem, regionem i kraju pobytu opracowując
                informacje na temat obyczajów, tradycji, systemu edukacji,
                historii, itd. Przed wyjazdem do Portugalii przedstawialiśmy
                prezentacje. Przygotowaliśmy własne Europass CV. Mieliśmy zdalne
                konsultacje z koordynatorem praktyk w Portugalii, co pozwoliło
                lepiej dobrać miejsca praktyk do naszych umiejętności,
                zainteresowań i potrzeb. Odbyliśmy przeszkolenie BHP
                przygotowujące do pracy w portugalskich firmach.
                <br />
                <br />
                Dla wyjeżdzających na staż uczniów został zorganizowany kurs
                języka angielskiego, który prowadził nauczyciel j. angielskiego
                pan mgr Grzegorz Wójcik. Kurs obejmował 30 godzin praktycznego
                zastosowania języka w różnych sytuacjach. W czasie lekcji
                uczyliśmy się, jak radzić sobie w codziennym życiu. Przykładowo:
                omawialiśmy słownictwo związane z naszymi dziedzinami
                (informatyka, elektronika), uczyliśmy się jak radzić sobie na
                lotnisku, w sklepie itp.
              </p>
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
            Podczas stażu w Portugalii dodatkowo mieliśmy 10-godzinny kurs
            języka portugalskiego prowadzony po przez native trenera pana Olavo
            Santos po zajęciach na praktykach. <br />
            <br /> Na kursie uczyliśmy się podstawowych zwrotów w języku
            portugalskim używanych w życiu codziennym oraz w pracy zawodowej.
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
                W czasie wolnym po praktykach oraz w weekendy poznawaliśmy
                miasto pobytu – Faro, kulturę i zwyczaje Portugalczyków,
                zwiedzaliśmy ciekawe miejsca regionu Algarve. Mieliśmy okazję
                poznać rówieśników odbywających praktykę w ramach programu
                Erasmus+ np. z Wysp Kanaryjskich czy z Polski. Poznaliśmy wielu
                Portugalczyków i osób z innych krajów w miejscach praktyk, w
                życiu codziennym, podczas zwiedzania czy uprawiania sportu
                dzieląc się z nimi swoimi zainteresowaniami i ćwicząc biegłość w
                porozumiewaniu się językiem angielskim. <br /> <br />W czasie
                wyjazdu mieliśmy okazję zwiedzić następujące miejsca:
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
