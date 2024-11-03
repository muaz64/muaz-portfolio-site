import React from 'react';
import AboutImage from '../assets/muazpp.jpg'

function About() {
  return (
    <section id="about" className="py-16">
      <h2 className="text-3xl font-bold text-center text-secondary mb-10">About Me</h2>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
      
        <img src={AboutImage} alt="Profile" className="w-50 h-50 rounded-full mb-6 md:mb-0 md:mr-10"/>
        <div>
          <p className="text-lg text-gray-700">
          As an aspiring engineer, I am fueled by a passion for innovation and technology. I'm a front-end developer with a keen eye for detail and a passion for creating beautiful and functional websites. With a background in web development and a strong understanding of UI/UX design, I strive to deliver high-quality, user-centered experiences. I am proficient in HTML, CSS, JavaScript, and various front-end frameworks, and I'm always eager to learn and adapt to new technologies.
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
