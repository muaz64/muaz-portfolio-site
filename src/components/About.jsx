import React from 'react';

function About() {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <img src="/path/to/your-image.jpg" alt="Profile" className="w-40 h-40 rounded-full mb-6 md:mb-0 md:mr-10"/>
        <div>
          <h2 className="text-3xl font-bold text-charcoal-gray mb-4">About Me</h2>
          <p className="text-lg text-gray-700">
            I'm Muaz Muhammad, an Electrical Engineering student and front-end developer. With a strong eye for design and experience in various front-end technologies, I strive to create seamless and user-focused interfaces.
          </p>
          <a href="/path/to/resume.pdf" download className="mt-4 inline-block px-6 py-2 text-white bg-teal hover:bg-charcoal-gray rounded-md">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
