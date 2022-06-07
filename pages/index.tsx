import type { NextPage } from "next";
import Head from "next/head";
import FooterLogos from "../components/FooterLogos";
import HeaderBanner from "../components/index/HeaderBanner";
import Navbar from "../components/Navbar";
import TextHeader from "../components/TextHeader";
import InfoGraphics from "../components/InfoGraphics";

const Home: NextPage = () => {
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

      <HeaderBanner />

      <div className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <TextHeader left="O" right="projekcie" />
          <div className="flex flex-col sm:flex-row -mx-4 overflow-x-hidden">
            <div className="sm:w-1/3 md:w-1/4 px-4 -mx-2">
              <div className="flex flex-wrap">
                <InfoGraphics
                  icon="bi-person-circle"
                  boldText="28"
                  text="uczniów"
                  href="/uczestnicy"
                />
                <InfoGraphics
                  icon="bi-people"
                  boldText="20"
                  text="trenerów i organizatorów"
                  href="/uczestnicy#opiekunowie"
                />
                <InfoGraphics icon="bi-calendar" boldText="3" text="tygodnie stażu" href="/praktyki" />
                <InfoGraphics icon="bi-building" boldText="10" text="firm i instytucji" href="/instytucje" />
                <InfoGraphics
                  icon="bi-compass-fill"
                  boldText="8"
                  text="aktywności kulturowych"
                  href="/przygotowanie#wycieczki"
                />
              </div>
            </div>
            <div className="sm:w-2/3 md:w-3/4 px-4">
              <p>
                W okresie od 23.04-14.05.2022 roku 28 uczniów Zespołu Szkół
                Elektronicznych w Rzeszowie zrealizowało 3-tygodniowe praktyki
                zawodowe z elektroniki, informatyki i automatyki w Portugalii.{" "}
                <br />
                <br />
                Staż zagraniczny odbywał się w ramach projektu Erasmus+. <br />
                <br /> Praktyki zostały zorganizowane po raz pierwszy w historii szkoły w Faro -
                stolicy regionu Algarve, oraz innych miastach tego regionu, we
                współpracy z WakeUp Projects.
              </p>
              <hr className="border-gray-500 my-8 w-1/4" />
              <ol className="list-decimal ml-4 text-sm">
                <li className="mb-5">
                  Projekt o numerze 2021-1-PL01-KA121-VET-000008145 jest
                  realizowany w Programie UE Erasmus+, typ akcji: KA121-VET
                  -Akredytowane Projekty na rzecz mobilności osób uczących się i
                  kadry w sektorze kształcenia i szkolenia zawodowego.
                </li>
                <li className="mb-6">
                  Projekt jest realizowany jest przez Zespół Szkół
                  Elektronicznych w Rzeszowie w okresie od 01.09.2021r. do
                  30.11.2022r.
                </li>
                <li className="mb-6">
                  Projekt finansowany jest z funduszy Unii Europejskiej w ramach
                  Programu Erasmus+.
                </li>
                <li className="mb-6">
                  Działania w Projekcie są zgodne z warunkami akredytacji
                  Zespołu Szkół Elektronicznych (ZSE) w Rzeszowie w programie
                  Erasmus+, nr akredytacji: 2020-1-PL01-KA120-VET-095534 i z
                  Europejskim Planem Rozwoju Zespołu Szkół Elektronicznych na
                  lata 2020-2026 zatwierdzonym przez Radę Pedagogiczną ZSE na
                  zebraniu w dniu 29.01.2020 r.
                </li>
                <li className="mb-6">
                  Cele Projektu:
                  <ol className="list-[lower-alpha] ml-6 mt-1">
                    <li>
                      Zwiększenie mobilności oraz doświadczenia zawodowego
                      uczniów z ZSE poprzez udział w 3-tygodniowych zagranicznych
                      praktykach zawodowych z elektroniki, informatyki i
                      automatyki.
                    </li>
                    <li>
                      Poprawa kompetencji kluczowych i umiejętności ogólnych, w
                      szczególności znajomości języków obcych uczniów ZSE w
                      trakcie przygotowania do mobilności i podczas stażu za
                      granicą.
                    </li>
                    <li>
                      Rozwój zawodowy kadry ZSE poprzez przygotowanie
                      organizacyjno-merytoryczne i udział nauczycieli
                      przedmiotów zawodowych w zagranicznych szkoleniach.
                    </li>
                    <li>
                      Wzmocnienie kompetencji kluczowych i umiejętności
                      ogólnych, w szczególności znajomości języków obcych
                      nauczycieli ZSE poprzez przygotowanie i udział w
                      zagranicznym stażu zawodowym.
                    </li>
                    <li>
                      Wspieranie jakości, transparentności i uznawania efektów
                      uczenia się uczniów i nauczycieli ZSE w okresach
                      mobilności za granicą przy wykorzystaniu europejskich
                      narzędzi.
                    </li>
                    <li>
                      Kontynuacja i rozwój bezpośredniej współpracy ZSE z
                      europejskimi instytucjami szkolenia zawodowego w zakresie
                      realizacji wysokiej jakości Projektów mobilności i
                      doskonalenia procesu kształcenia.
                    </li>
                    <li>
                      Poprawa wyników egzaminu z przygotowania zawodowego w
                      Zespole Szkół Elektronicznych w Rzeszowie.
                    </li>
                  </ol>
                </li>
                <li>
                  W ramach Projektu został zorganizowany wyjazd 28 uczniów ZSE
                  pod opieką 4 nauczycieli towarzyszących na 3-tygodniowe
                  praktyki zawodowe do Portugalii (od 25.04.2022 do
                  13.05.2022r.) oraz wyjazd 6 nauczycieli przedmiotów zawodowych
                  ZSE na 1-tygodniowe szkolenie do Portugalii (23-27.05.2022r.)
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <FooterLogos />
    </div>
  );
};

export default Home;
