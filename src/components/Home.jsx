import React from 'react';

function Home() {
  return (
    <section id="home" className="flex items-center justify-center text-center my-36">
      <div>
      <h2 className='text-teal text-3xl font-semibold'>Hi there! I'm Muaz Muhammad</h2>
        <h1 className="text-4xl md:text-6xl font-bold text-charcoal-gray">Welcome to My Portfolio</h1>
        <p className="text-lg md:text-xl mt-4 text-gray-700">
          I'm an aspiring engineer and front-end developer. I create beautiful, user-friendly websites.
        </p>
        <a href="#services" className="mt-6 inline-block px-8 py-3 text-white bg-neutral-500 hover:bg-teal rounded-md">
          Learn More
        </a>
      </div>
    </section>
  );
}

export default Home;
