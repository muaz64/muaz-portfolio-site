import React from 'react';

function Services() {
  const services = [
    { title: 'Responsive Website & UI Design', icon: '🌐' },
    { title: 'Optimization & Performance Tuning', icon: '⚡' },
    { title: 'Front-end Framework Implementation', icon: '🛠️' },
    { title: 'Website Development & Maintenance', icon: '🔧' }
  ];

  return (
    <section id="services" className="py-20 ">
      <h2 className="text-3xl font-bold text-secondary text-center mb-20">My Services</h2>
      <div className="container parent-div mx-5 md:mx-10 lg:my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-10 py-10">
          {services.map((service, index) => (
            <div key={index} className=" text-center p-10 bg-gray-200 border rounded-lg shadow-lg hover:shadow-xl">
              <div className="text-4xl mb-5">{service.icon}</div>
              <h3 className="text-gray-900 font-semibold text-xl">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
