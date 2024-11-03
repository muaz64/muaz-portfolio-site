import React from 'react';
import project1 from '../assets/project1.jpeg';
import project2 from '../assets/project2.jpeg';
import project3 from '../assets/project3.jpeg';
import project4 from '../assets/project4.jpeg';

function Projects() {
  const projects = [
    { title: 'Gaming Site', link: 'https://muaz64.github.io/project1/', image: project1 },
    { title: 'E-Shop Site', link: 'https://muaz64.github.io/E-shop-bs-project/', image: project2 },
    { title: 'Travel Website', link: 'https://muaz64.github.io/Project03/', image: project3 },
    { title: 'Food Order Form', link: 'https://muaz64.github.io/project04/', image: project4 },
  ];

  return (
    <section id="projects" className="py-16">
       <h2 className="text-3xl font-bold text-secondary text-center mb-20">Recent Projects</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl">
              <img src={project.image} alt={project.title} className="rounded-lg mb-4 w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <a href={project.link} className="text-teal hover:text-charcoal-gray" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
