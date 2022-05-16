import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import image from "../../public/header-banner.jpg"

export default function HeaderBanner() {
  return (
    <div className="header-banner relative">
      <Image src={image} alt="Zdjęcie grupowe" layout="fill" objectFit="cover" objectPosition="75% 68%" />
      <div className="absolute top-0 right-0 bg-gray-900 bg-opacity-40 w-full h-full flex items-end justify-center sm:justify-end" placeholder="blur">
        <div className="mb-6 sm:mr-24 flex flex-col items-start">
          <div className="bg-white py-2 px-4 rounded-t-xl">
            <p className="text-sm lg:text-base">Praktyki Erasmus+ w Portugalii</p>
          </div>
          <div className="bg-emerald-600 text-white p-3 lg:p-4 rounded-tr-xl rounded-bl-xl">
            <p className="text-2xl lg:text-4xl"><strong>Faro</strong> & Algarve 2022</p>
          </div>
          <div className="bg-elektronik-red text-white py-2 px-4 rounded-b-xl self-end">
            <p className="text-sm lg:text-base">23 kwietnia - 14 maja</p>
          </div>
        </div>
      </div>
    </div>
  );
}
