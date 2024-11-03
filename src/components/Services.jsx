import React from 'react';

function Services() {
  const services = [
    { title: 'Responsive Website & UI Design', icon: '🌐' },
    { title: 'Optimization & Performance Tuning', icon: '⚡' },
    { title: 'Front-end Framework Implementation', icon: '🛠️' },
    { title: 'Website Development & Maintenance', icon: '🔧' }
  ];

  return (
    <section id="services" className="py-16 bg-primary-content">
      <h2 className="text-3xl font-bold text-secondary text-center mb-20">My Services</h2>
      <div className="container mx-auto mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className=" text-center p-6 border rounded-lg bg-accent-content shadow-lg hover:shadow-xl">
              <div className="text-4xl mb-5">{service.icon}</div>
              <h3 className="text-white font-semibold text-xl">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
