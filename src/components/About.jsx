import React from 'react';
import AboutImage from '../assets/muazpp.jpg';
import "./About.css";

function About() {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold text-center text-secondary mb-20 mx-auto uppercase">About Me</h2>

      <div className="container flex flex-col md:flex-row items-center parent-div mx-5 md:mx-10">
        <img src={AboutImage} alt="Profile" className="w-50 h-50 rounded-full  lg:my-5 md:mb-0 md:mx-10"/>
        <div className='mb-10 px-7 lg:pr-16 md:py-10'>
          <p className="text-lg text-gray-700 text-justify">
          As an aspiring engineer, I am fueled by a passion for innovation and technology. I'm a front-end developer with a keen eye for detail and a passion for creating beautiful and functional websites. With a background in web development and a strong understanding of UI/UX design, I strive to deliver high-quality, user-centered experiences. I am proficient in HTML, CSS, JavaScript, and various front-end frameworks, and I'm always eager to learn and adapt to new technologies.
          </p>
          <a href="/path/to/resume.pdf" download className="mt-5 btn-home inline-block px-6 py-2 text-white hover:text-secondary font-semibold hover:bg-teal-400 rounded-md">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
