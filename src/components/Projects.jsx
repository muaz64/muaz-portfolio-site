import React, { useState } from 'react';
import project2 from '../assets/project2.jpeg';
import project3 from '../assets/project3.jpeg';
import project4 from '../assets/project4.jpeg';
import project5 from '../assets/project5.jpeg';
import project6 from '../assets/project6.jpeg';
import project7 from '../assets/project7.jpeg'

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { 
      title: 'E-Shop Site', 
      link: 'https://muaz64.github.io/E-shop-bs-project/', 
      image: project2,
      description: 'A fully responsive E-Shop site with shopping cart functionality and a clean UI.'
    },
    { 
      title: 'Travel Website', 
      link: 'https://vromontravelwebsite.netlify.app/', 
      image: project3,
      description: 'A beautiful travel booking website with animations and user-friendly design.'
    },
    { 
      title: 'Food Order Form', 
      link: 'https://muaz64.github.io/project04/', 
      image: project4,
      description: 'An interactive food order form with real-time validation and smooth UX.'
    },
    { 
      title: 'Landing Page using Tailwind', 
      link: 'https://landing-page-tw-project.netlify.app/', 
      image: project5,
      description: 'A modern landing page designed with Tailwind CSS for a sleek look.'
    },
    { 
      title: 'Google Flights clone', 
      link: 'https://googleflightsclone.netlify.app/', 
      image: project6,
      description: 'A fully responsive clone of Google Flights, built using React, TypeScript, Vite, and Material UI, with live flight data fetched from the Sky Scrapper API via RapidAPI.'
    },
    { 
      title: 'My Mini JS Projects', 
      link: 'https://my-mini-js-projects.vercel.app/', 
      image: project7,
      description: 'My Mini Projects showcases a collection of JavaScript applications that I have developed. Each project demonstrates different functionalities, ranging from tools like a Cash Calculator and Password Generator to more interactive apps like a Poll System and Mindful Breathing Timer. The projects utilize HTML, CSS, and JavaScript to create user-friendly and visually appealing interfaces. Explore the live previews to see each app in action!'
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-secondary text-center mb-20">Recent Projects</h2>
      <div className="container parent-div mx-5 md:mx-10 lg:my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="border rounded-lg overflow-hidden bg-gray-100 shadow-lg hover:shadow-2xl cursor-pointer"
              onClick={() => openModal(project)}
            >
              <img src={project.image} alt={project.title} className="rounded-lg mb-4 w-full h-48 object-contain"/>
              <div className="p-4">
                <h3 className="text-xl text-teal-500 font-semibold mb-2">{project.title}</h3>
                <button className="text-black hover:text-secondary">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
}

function Modal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-base-content rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3">
        <button 
          className="text-red-500 font-bold float-right mb-4"
          onClick={onClose}
        >
          Close
        </button>
        <img src={project.image} alt={project.title} className="w-full h-48 object-contain mb-4 rounded"/>
        <h3 className="text-2xl font-semibold text-teal-500 mb-2">{project.title}</h3>
        <p className="text-white mb-4">{project.description}</p>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white bg-teal-500 px-4 py-2 rounded hover:bg-teal-600"
        >
          Visit Project
        </a>
      </div>
    </div>
  );
}

export default Projects;
