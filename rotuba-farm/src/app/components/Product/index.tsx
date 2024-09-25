import React from 'react';
import Image from 'next/image';

const Product = () => {
  const productImages = [
    { src: '/images/Quantum3.png', alt: 'Sideview of charging system' },
    { src: '/images/Quantum2.png', alt: 'Topview of the gadget' },
    { src: '/images/Quantum5.png', alt: 'View of our three sensors' }
  ];

  return (
    <div className="container mx-auto mt-20 px-4 py-8" id="product">
      <h1 className='text-center font-bold text-4xl md:text-5xl mb-2' style={{ fontFamily: 'Amiri, serif' }}>Product</h1>
      <h2 className='text-center md:text-4xl font-bold text-2xl mb-8 ' style={{ fontFamily: 'Amiri, serif' }}>RutubaFarm Gadget</h2>
      
      <div className='flex flex-col lg:flex-row justify-between items-start'>
        <div className='w-full lg:w-1/2 space-y-6'>
          {productImages.map((image, index) => (
            <div key={index} className='flex items-center space-x-3 '>
              <div className='w-1/2 ml-[-10%] '>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={200}mb-32
                  height={120}
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
              <p className='w-1/2 md:text-[30px] sm:text-2xl lg:text-2xl font-semibold' style={{ fontFamily: 'Amiri, serif' }}>{image.alt}</p>
            </div>
          ))}
        </div>
        
        <div className='w-full lg:w-1/2 mt-8 lg:mt-20 ml-[-5%] 2xl:mr-24'>
          <Image
            src="/images/Quantum1.png"
            alt="Gadget overview"
            width={500}
            height={300}
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;