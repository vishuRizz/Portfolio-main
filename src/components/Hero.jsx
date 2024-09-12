import React from 'react';
import profileImage from '../assets/profile2.png'; 

function Hero() {
  return (
    <section className="flex flex-col items-center px-4 mt-16 text-center">
      <img src={profileImage} alt="Oguz Profile" className="h-[146px] border-2 border-white rounded-full w-[130px]" />
      <h2 className="mt-6 text-lg">Hi, I’m Vishu</h2>
      <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
        Building digital <br /> products, brands, <br /> and experience.
      </h1>
      <p className="max-w-md mt-4 text-gray-500">
        A <strong>MERN Stack</strong><strong>Web Developer</strong> in India.
        I specialize in Frontend Responsive Web Design, and Backend Development.
      </p>
      <button className="px-6 py-3 mt-8 text-black bg-white rounded-full hover:bg-gray-200">
        CONNECT WITH ME
      </button>
    </section>
  );
}

export default Hero;