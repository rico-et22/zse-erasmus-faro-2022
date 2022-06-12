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
      desc: "Firma Britefil, zlokalizowana na obrzeżach Faro zajmuje się produkcją części do pomp hydraulicznych oraz paneli słonecznych.",
    },
    {
      name: "Clube do Hardware",
      image: chardware,
      url: "https://www.facebook.com/OClubedohardware/",
      vector: false,
      desc: "Clube Do Hardware to lokalna firma z siedzibą w mieście Faro w Portugalii. Zajmuje się naprawą i konserwacją systemów komputerowych, odzyskiwaniem danych oraz naprawą laptopów i tabletów.",
    },
    {
      name: "Flow Productions",
      image: flow,
      url: "http://flowproductions.pt/",
      vector: true,
      desc: "Flow Productions to agencja kreatywna z siedzibą w kampusie UAlg Tec Campus na Uniwersytecie w Algarve. Zajmuje się produkcją i postprodukcją wideo, fotografią, marketingiem, mediami społecznościowymi oraz stronami i aplikacjami internetowymi.",
    },
    {
      name: "Tecnicontrol",
      image: tecnicontrol,
      url: "https://www.tecnicontrol.pt/en/home/",
      vector: false,
      desc: "Tecnicontrol to firma zajmująca się zagadnieniami dotyczącymi alarmów przeciwpożarowych, instalacji dozoru elektronicznego oraz sieci telekomunikacyjnych.",
    },
    {
      name: "Trueinox",
      image: trueinox,
      url: "https://www.true-inox.com/",
      vector: false,
      desc: "True Inox to firma zajmująca się produkcją urządzeń AGD do hoteli i sklepów.",
    },
    {
      name: "Underline",
      image: underline,
      url: "https://www.facebook.com/underline.concept/",
      vector: false,
      desc: "Underline to firma specjalizująca się w produkcji materiałów związanych z wizerunkiem korporacyjnym. Zajmuje się projektowaniem, produkcją, montażem oraz kontrolą jakości.",
    },
    {
      name: "BPGame",
      image: bpgame,
      url: "https://www.facebook.com/BePartOfTheGameInformatica/",
      vector: false,
      desc: "BP Game Informatica to portugalska firma z siedziba w mieście Olhão. Firma specjalizuje się w sprzedaży i serwisie wszelakich urządzeń AGD (w szczególności laptopy, konsole, telefony).",
    },
    {
      name: "Sabit",
      image: undefined,
      url: "https://goo.gl/maps/CngYwrYicJgcKmrS6",
      vector: false,
      desc: "Sabit to portugalska firma informatyczna z siedzibą w mieście Faro. Zajmuje się serwisem i sprzedażą sprzętu informatycznego. Firma ma największe kompetencje w rozwiązaniach dla restauracji, hotelarstwa oraz w zakresie zarządzania i rachunkowości.",
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
          <h2 className="mb-2 text-lg">
            Instytucja wysyłająca i lider projektu:{" "}
            <strong>Zespół Szkół Elektronicznych w Rzeszowie (ZSE)</strong>
          </h2>
          <div className="flex mb-10 flex-col-reverse sm:flex-row">
            <p className="sm:w-3/4 md:mr-8">
              ZSE w Rzeszowie od lat jest wiodącą placówką edukacyjną w zakresie
              szkolnictwa zawodowego w województwie podkarpackim. Kształci kadrę
              techniczną do pracy w branży elektronicznej i informatycznej
              (około 1000 uczniów rocznie)
              <br />
              <br />
              Działania szkoły wszechstronny rozwój ucznia nie tylko zawodowy,
              ale również osobisty, społeczny, kulturowy, kształtowanie postaw
              samodzielności, odpowiedzialności, poczucia własnej wartości,
              świadomości kulturowej i międzykulturowej, zwiększenie motywacji
              do nauki i rozwoju oraz zwiększenie szans na zatrudnienie. <br />
              <br />
              Szkoła współpracuje z lokalnymi przedsiębiorcami, firmami,
              uczelniami, stowarzyszeniami i organizacjami zawodowymi. Uczniowie
              odbywają ciekawe zajęcia specjalizacyjne i praktyki, a nawet
              płatne wakacyjne staże, dzięki którym po ukończeniu szkoły
              szybciej znajdują swoje miejsce na rynku pracy. <br />
              Ponad 20 lat ZSE uczestniczy w programach Unii Europejskiej,
              organizując zagraniczne praktyki zawodowe uczniów i szkolenia
              nauczycieli w ścisłej współpracy z instytucjami szkoleniowymi i
              firmami w kilkunastu państwach Europy. <br />
              <br />
              To jedna z największych szkół ponadgimnazjalnych na Podkarpaciu,
              kształcących w zawodach technika informatyka, elektronika i
              automatyka. Kształci około 1000 uczniów. <br />
              <br /> Od lat zajmuje czołowe miejsce w rankingu "Perspektywy".{" "}
              <br />
              <br /> Współpracuje z różnymi instytucjami szkolenia zawodowego i
              zakładami pracy w Polsce i za granicą.
              <br />
              <br />
              <strong>Osoby odpowiedzialne w projekcie:</strong>
              <br />
              Stanisław Sienko – Dyrektor Szkoły
              <br /> Zbigniew Niedbała – koordynator projektu
              <br />
              Grzegorz Wójcik – nauczyciel języka angielskiego <br />
              <br />
              <strong>Kontakt:</strong>
              <br />
              Zespół Szkół Elektronicznych
              <br /> ul. Hetmańska 120
              <br />
              35-078 Rzeszów, Poland <br />
              Tel: 17 748 30 40; 17 748 30 41 <br />
              Fax: 17 748 30 63 <br />
              www:{" "}
              <a
                href="https://www.elektronik.rzeszow.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700"
              >
                https://www.elektronik.rzeszow.pl
              </a>{" "}
              <br />
              e-mail:{" "}
              <a
                href="mailto:sekretariat@zsel.resman.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700"
              >
                sekretariat@zsel.resman.pl
              </a>
              <br />
              e-mail:{" "}
              <a
                href="mailto:elektronik_rzeszow@intertele.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700"
              >
                elektronik_rzeszow@intertele.pl
              </a>
            </p>
            <a
              href="https://elektronik.rzeszow.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:w-1/4 flex items-center justify-center relative bg-white rounded-lg shadow p-4 h-28 sm:h-20 md:h-28 hover:scale-105 duration-100 mb-4 sm:mb-0"
            >
              <Image
                src={elektronik}
                alt="Logo ZSE"
                className="!p-4"
                layout="fill"
                objectFit="contain"
              />
            </a>
          </div>
          <h2 className="mb-2 text-lg">
            Instytucja przyjmująca:{" "}
            <strong>WakeUp Projects S.L. / Magic Sinderella Lda</strong>
          </h2>
          <div className="flex flex-col-reverse sm:flex-row">
            <p className="sm:w-3/4 md:mr-8">
              WakeUp Projects S.L. to instytucja prowadząca działalność w
              zakresie kształcenia i szkolenia zawodowego w obszarze
              międzynarodowym na terenie Faro i regionu Algarve w Portugalii.
              Współpracuje z krajowymi i zagranicznymi placówkami kształcenia i
              szkolenia zawodowego oraz firmami szkoląc nauczycieli i uczniów i
              podnosząc ich wiedzę, umiejętności i kompetencje zawodowe zgodnie
              z zapotrzebowaniem europejskiego rynku pracy. Organizuje
              międzynarodowe projekty mobilności i wymiany doświadczeń kadry
              szkoleniowej. Posiada doświadczenia we współpracy z wieloma
              europejskimi instytucjami partnerskimi, w koordynacji i
              zarządzaniu projektami UE, organizacji praktyk zawodowych oraz
              towarzyszących działań merytoryczno-organizacyjnych. Aby zapewnić
              najbardziej efektywne szkolenia, WakeUp Projects współpracuje z
              wiodącymi przedsiębiorstwami w Faro i regionie Algarve w
              Portugalii.
              <br />
              <br /> Głównym obszarem działalności jest organizacja
              szkoleń/praktyk zawodowych dla europejskich uczniów i kadry,
              zgodnie z wymogami oraz założeniami unijnych projektów mobilności.
              Instytucja partnerska posiada duże doświadczenie w realizacji
              kursów językowych i przygotowania kulturowego dla zagranicznej
              młodzieży a także logistyki pobytu na stażach (zakwaterowanie,
              wyżywienie, transport lokalny, etc.).
              <br />
              <br />
              <strong>Osoby odpowiedzialne w projekcie:</strong>
              <br />
              Bruno Gameiro – dyrektor
              <br /> Natalia Chojecka – koordynator projektu w Portugalii
              <br />
              Adriana Gałek – koordynator szkoleń
              <br />
              Olavo Dos Santos – nauczyciel języka portugalskiego <br /> <br />
              <strong>Kontakt:</strong>
              <br />
              WakeUp Projects S.L. / Magic Sinderella Lda
              <br /> Adres: Rua dos Combatentes da grande guerra n1 4esq
              <br />
              3080-123 Figueira da Foz, Portugal <br />
              telefon: +34 673 933 466; +351 913 535 52 <br />
              www:{" "}
              <a
                href="https://wakeupprojects.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700"
              >
                wakeupprojects.com
              </a>{" "}
              <br />
              e-mail:{" "}
              <a
                href="mailto:info@wakeupprojects.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700"
              >
                info@wakeupprojects.com
              </a>
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
      <div className="bg-gray-100 py-8" id="firmy">
        <div className="container mx-auto overflow-x-hidden">
          <TextHeader left="Firmy," right="które nas przyjęły" />
          <div className="flex flex-wrap -mx-4 -mt-4">
            {companies.map((company) => (
              <div
                className="p-4 w-full sm:w-1/2 h-full"
                key={company.name}
              >
                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-lg shadow hover:scale-105 duration-100"
                >
                  {company.image && (
                    <div className="flex items-center justify-center relative w-full h-20 md:h-28 p-4">
                      <Image
                        src={company.image}
                        alt={company.name}
                        layout="fill"
                        objectFit="contain"
                        className="!p-4"
                        placeholder={!company.vector ? "blur" : undefined}
                      />
                    </div>
                  )}
                  {!company.image && (
                    <p className="text-center text-2xl font-bold p-4">
                      {company.name}
                    </p>
                  )}
                  <hr />
                  <div className="bg-white px-4 py-3 rounded-b-lg">
                    {company.image && (
                      <p className="text-lg font-bold mb-2">{company.name}</p>
                    )}
                    <p>{company.desc}</p>
                  </div>
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
