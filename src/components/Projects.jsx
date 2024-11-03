import React from 'react';

function Projects() {
  const projects = [
    { title: 'Gaming Site', link: 'https://muaz64.github.io/project1/', image: 'path/to/project01.png' },
    { title: 'E-Shop Site', link: 'https://muaz64.github.io/E-shop-bs-project/', image: 'path/to/project02.png' },
    { title: 'Travel Website', link: 'https://muaz64.github.io/Project03/', image: 'path/to/project03.png' },
    { title: 'Food Order Form', link: 'https://muaz64.github.io/project04/', image: 'path/to/project04.png' },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-charcoal-gray text-center mb-8">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
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
