import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import image from "../../public/header-banner.jpg"

export default function HeaderBanner() {
  return (
    <div className="header-banner relative">
      <Image src={image} alt="Zdjęcie grupowe" layout="fill" objectFit="cover" objectPosition="75% 75%" />
      <div className="absolute top-0 left-0 bg-gray-900 bg-opacity-40 w-full h-full flex items-end justify-center sm:justify-start">
        <div className="mb-6 sm:ml-6 flex flex-col items-start">
          <div className="bg-white py-2 px-4 rounded-t-xl">
            <p className="text-sm md:text-base">Praktyki Erasmus+ w Portugalii</p>
          </div>
          <div className="bg-emerald-600 text-white p-3 md:p-4 rounded-tr-xl rounded-bl-xl">
            <p className="text-2xl md:text-4xl"><strong>Faro</strong> & Algarve 2022</p>
          </div>
          <div className="bg-elektronik-red text-white py-2 px-4 rounded-b-xl self-end">
            <p className="text-sm md:text-base">23 kwietnia - 14 maja</p>
          </div>
        </div>
      </div>
    </div>
  );
}
