import React from 'react';

const teamMembers = [
  {
    name: "Faith Munyao",
    imageSrc: "/Images/Faith.jpg",
    altText: "Faith Munyao",
    role: "Software Developer",
  },
  {
    name: "Maureen Njango",
    imageSrc: "/Images/Maureen.jpg",
    altText: "Maureen Njango",
    role: "Software Developer",
  },
  {
    name: "Megan Otieno",
    imageSrc: "/Images/Megan Otieno.jpg",
    altText: "Megan Otieno",
    role: "Software Developer",
  },
  {
    name: "Cynthia Nthenya",
    imageSrc: "/Images/Cynthia.png",
    altText: "Cynthia Nthenya",
    role: "Software Developer",
  },
  {
    name: "Loice Staice",
    imageSrc: "/Images/Loice.jpg",
    altText: "Loice Staice",
    role: "Software Developer",
  },
];
const Team = () => {
  return (
    <div className="bg-yellow-200">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center pb-12 pt-4 md:pt-4" style={{ fontFamily: 'Amiri, serif' }}>
        Our Team
      </h1>
      <div className="flex flex-wrap justify-center gap-16 sm:gap-12 md:gap-32 lg:gap-20 2xl:gap-80 mt-4 sm:mt-12 lg:mt-4 2xl:flex md:block lg:flex xl:flex">
        {teamMembers.slice(0, 3).map(({ name, imageSrc, altText, role }) => (
          <div key={name} className="flex flex-col items-center text-center md:mb-16 sm:-mt-12 lg:mt-20">
            <img
              src={imageSrc}
              className="xs:h-44 xs:w-44 mb-4 rounded-full h-60 w-60 sm:h-48 sm:w-48 lg:h-80 lg:w-80 md:h-96 md:w-96 -mt-4 sm:-mt-8 md:mt-16 lg:-mt-32"
              width={317}
              alt={altText}
            />
            <p className="sm:text-2xl text-2xl lg:text-3xl 2xl:text-3xl font-bold md:text-3xl" style={{ fontFamily: 'Amiri, serif' }}>
              {name}
            </p>
            <p className="text-2xl sm:text-base lg:text-3xl 2xl:text-3xl md:text-3xl" style={{ fontFamily: 'Amiri, serif' }}>
              {role}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-16 xl:gap-32 sm:gap-12 lg:gap-20 lg:flex md:gap-32 mt-16 md:mt-12 2xl:gap-80 sm:mb-8 lg:mt-16 2xl:flex md:block">
        {teamMembers.slice(3).map(({ name, imageSrc, altText, role }) => (
          <div key={name} className="flex flex-col items-center text-center md:mt-12 lg:-mt-12">
            <img
              src={imageSrc}
              className=" mb-4 rounded-full h-60 w-60 md:h-96 md:w-96 sm:h-48 sm:w-48 lg:h-80 lg:w-80 -mt-4 lg:-mt-8 md:mt-8"
              width={200}
              alt={altText}
            />
            <p className="text-2xl sm:text-xl lg:text-3xl font-bold 2xl:text-3xl md:text-3xl" style={{ fontFamily: 'Amiri, serif' }}>
              {name}
            </p>
            <p className="text-2xl sm:text-base lg:text-3xl 2xl:text-3xl md:text-3xl" style={{ fontFamily: 'Amiri, serif' }}>
              {role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Team;