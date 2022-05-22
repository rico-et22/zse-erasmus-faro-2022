/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import FooterLogos from "../components/FooterLogos";
import Navbar from "../components/Navbar";
import TextHeader from "../components/TextHeader";
import React, { useState } from "react";
import Image from "next/image";
import FsLightbox from "fslightbox-react";

const Instytucje: NextPage = () => {
  const imageCount = 82;
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
        sources={[...Array(imageCount)].map(
          (n, index) => `/photos/galeria/g${index + 1}.jpg`
        )}
        slide={lightboxController.slide}
      />
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <div className="mb-20">
            <TextHeader left="Galeria" />
            <div className="flex mb-10 flex-col sm:flex-row sm:-m-4 items-center flex-wrap">
              {[...Array(imageCount)].map((n, index) => (
                <div
                  className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex items-center justify-center"
                  key={`i${index}`}
                >
                  <div className="w-full flex items-center justify-center bg-white rounded-lg shadow sm:mb-0">
                    <button className="w-full relative aspect-w-3 aspect-h-2 border-0" onClick={() => openLightboxOnSlide(index + 1)}>
                      <Image
                        src={`/photos/galeria/g${index + 1}.jpg`}
                        className="rounded-lg"
                        alt=""
                        objectFit="cover"
                        layout="fill"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterLogos />
    </div>
  );
};

export default Instytucje;
