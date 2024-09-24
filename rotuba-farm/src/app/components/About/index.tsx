"use client";
// import Image from "next/image";
import React from "react";

const sections = [
  {
    id: "mission",
    imageSrc: "/images/fertile soil.png",
    altText: "Mission icon",
    title: "Our Mission",
    text: "Our mission is to empower small-scale farmers with innovative soil health gadgets that provide accurate insights into soil conditions. By monitoring pH, nutrients, and moisture, we enhance agricultural productivity and sustainability, enabling data-driven decisions for healthier soils and successful crops.",
  },
  {
    id: "vision",
    imageSrc: "/images/healthy tree .png",
    altText: "Vision icon",
    title: "Our Vision",
    text: "Our vision is to empower small-scale farmers with accessible and affordable soil health technology. We aim to revolutionize agriculture by providing comprehensive solutions that help farmers make informed decisions, optimize crop yields, and promote sustainable farming practices.",
  },
  {
    id: "goal",
    imageSrc: "/images/soil gadget.png",
    altText: "Goal icon",
    title: "Our Objective",
    text: "Our goal is to provide advanced soil health technology that helps small-scale farmers monitor soil conditions effectively. By prioritizing accuracy and affordability, we equip farmers to assess soil pH, nutrients, and moisture, supporting their sustainable practices.",
  },
];

export default function About() {
  return (
    <main id="about" className="mt-8 font-nunito mx-auto px-6 sm:px-4 md:px-16 lg:px-24 xl:px-16">
      <div className="sm:block md:block">
      <h1 className="sm:mb-16 mb-12 text-4xl font-bold text-center pt-8 sm:text-5xl md:text-6xl lg:text-5xl xl:text-5xl lg:pt-12" style={{ fontFamily: 'Amiri, serif' }}>
        About Us
      </h1>
      <div className="block xl:flex lg:grid-cols-2 sm:block md:block lg:gr ipad:flex-col sm:flex-row gap-8 ipad:gap-8 sm:gap-12 lg:gap-16">
        {sections.map(({ id, imageSrc, altText, title, text }) => (
          <div
            key={id}
            className="flex xl:flex mb-12 flex-col md:items-center text-center bg-yellow-200 rounded-lg p-4 shadow-lg"
          >
            <div className="w-full h-72 rounded-t-lg overflow-hidden">
              <img
                src={imageSrc}
                alt={altText}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl md:text-5xl font-bold text-md lg:text-3xl lg:leading-10 mt-6 mb-4 text-black xl:text-3xl" style={{ fontFamily: 'Amiri, serif' }}>
              {title}
            </h2>
            <p className="text-[18px] xm:tracking-wide xl:leading-6 xl:-tracking-normal 2xl:tracking-normal -tracking-wide 2xl:text-2xl text-md lg:grid-cols-2 sm:text-2xl xs:text-xl lg:text-3xl xl:text-lg md:text-4xl md:leading-loose lg:leading-10 text-black text-justify leading-10" style={{ fontFamily: 'Amiri, serif' }}>
              {text}
            </p>
          </div>
        ))}
      </div>
      </div>
    </main>
  );
}
