import React from 'react';

function Services() {
  const services = [
    { title: 'Responsive Website & UI Design', icon: '🌐' },
    { title: 'Optimization & Performance Tuning', icon: '⚡' },
    { title: 'Front-end Framework Implementation', icon: '🛠️' },
    { title: 'Website Development & Maintenance', icon: '🔧' }
  ];

  return (
    <section id="services" className="py-16 bg-soft-peach">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-secondary text-center mb-10">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 border rounded-lg bg-white shadow-lg hover:shadow-xl">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-semibold text-xl">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
