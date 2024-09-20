import React from "react";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="relative h-[calc(100vh-4rem)]">
      <div className="">
        <Image
          src="/images/Farmer-photo.png"
          alt="Drainage system"
          layout="fill"
          objectFit="cover"
          className="brightness-100"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white font-serif">
          Join us in protecting our soil
        </h2>
        <p className="text-lg md:text-3xl mb-4 mt-19 max-w-4xl mr-[-1%]" style={{fontFamily: 'Amiri, serif'}}>
          Create a sustainable future for generations
        </p>
        <button className="bg-[#FDCD75] text-black px-6 py-3 text-lg md:text-3xl lg:text-2xl font-serif rounded-2xl font-bold mt-10 h-18">
          Get started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
