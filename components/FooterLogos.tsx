/* eslint-disable @next/next/no-img-element */
import * as React from "react";

export default function FooterLogos() {
  return (
    <div className="bg-gray-200 p-4">
      <div className="flex relative flex-wrap justify-around -mb-4 -mx-1 sm:-mx-2">
        {/* Images have different dimensions, but have to be scaled to one height & auto width. next/image doesn't support this case natively (one height but auto width), so falling back to standard <img> with lazy loading */}
        <img
          src="/ecvet_logo_300_pxl.jpeg"
          alt="ECVET"
          className="h-8 sm:h-12 mb-4 mx-1 sm:mx-2"
          loading="lazy"
        />
        <img
          src="/Erasmus_Logo.svg"
          alt="Erasmus"
          className="h-8 sm:h-12 mb-4 mx-1 sm:mx-2"
          loading="lazy"
        />
        <img
          src="/logo-zse-wektor.svg"
          alt="ZSE Rzeszów"
          className="h-8 sm:h-12 mb-4 mx-1 sm:mx-2"
          loading="lazy"
        />
        <img
          src="/wakeup-logo.png"
          alt="WakeUp Projects"
          className="h-8 sm:h-12 mb-4 mx-1 sm:mx-2"
          loading="lazy"
        />
        <img
          src="/eu-funded.png"
          alt="Finansowane przez Unię Europejską"
          className="h-8 sm:h-12 mb-4 mx-1 sm:mx-2"
          loading="lazy"
        />
      </div>
    </div>
  );
}
