import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-16 bg-primary-content">
       <h2 className="text-center text-3xl font-bold text-secondary mb-10">Contact Me</h2>
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-around">
          <div>
            <h4 className="text-lg font-semibold">Phone</h4>
            <p>+880 178 839 7864</p>
            <p>+880 188 619 6767</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Email</h4>
            <p>muazmuhammad21@gmail.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Address</h4>
            <p>Patiya, Chittagong, Bangladesh</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
