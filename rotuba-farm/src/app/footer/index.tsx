import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const sections = [
    {
      title: "Information",
      items: ["About Us", "Product", "Mission", "Team"]
    },
    {
      title: "Services",
      items: ["Contact Us", "Resources", "Data Privacy"]
    },
    {
      title: "Contact Us",
      items: [
        { icon: "/images/Telephone.png", text: "+254 790902921" },
        { icon: "/images/Message.png", text: "violambira@gmail.com" }
      ]
    }
  ];

  const socialLinks = {
    facebook: 'https://www.facebook.com',
    google: 'https://www.google.com',
    youtube: 'https://www.youtube.com',
    linkedin: 'https://www.linkedin.com',
  };

  return (
    <footer className="bg-white py-8 px-4 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="mb-8 md:mb-0">
          <Image src="/images/logo.png" width={110} height={110} alt="RutubaFarm Logo" className="mb-8 object-cover -ml-24" style={{fontFamily:'Airi, serif'}}/>
          <div className="flex space-x-7 -ml-40">
            {Object.entries(socialLinks).map(([platform, url]) => (
              <a key={platform} href={url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={`/images/${platform}logo.svg`}
                  width={50}
                  height={40}
                  alt={`${platform} Logo`}
                />
              </a>
            ))}
          </div>
        </div>
        {sections.map((section, index) => (
          <div key={index} className="mb-8  md:mb-0">
            <h3 className="font-semibold text-lg mb-3 2xl:text-3xl" style={{fontFamily:'Airi, serif'}}>{section.title}</h3>
            <ul className="space-y-4 " style={{fontFamily:'Airi, serif'}}>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  {typeof item === 'string' ? (
                    <p className="text-2xl" style={{fontFamily:'Airi, serif'}}>{item}</p>
                  ) : (
                    <div className="flex items-center text-2xl" style={{fontFamily:'Airi, serif'}}>
                      <Image
                        src={item.icon}
                        width={18}
                        height={18}
                        alt={`${item.text} icon`}
                        className="mr-2"
                      />
                      <p className="text-2xl" style={{fontFamily:'Airi, serif'}}>{item.text}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;