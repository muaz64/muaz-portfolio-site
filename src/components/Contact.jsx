import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="pt-20">
       <h2 className="text-3xl font-bold text-secondary mb-20">Contact Me</h2>
      <div className="container mx-auto p-8 border border-gray-300 rounded-lg shadow-xl flex flex-col md:flex-row justify-between">
        {/* Contact Info Section */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-3xl font-semibold text-teal-700 mb-4">Let's connect!</h2>
          <p className="mb-10 text-justify">
            I'm always open to discussing new projects, creative ideas, opportunities, or just want to connect to be part of your visions. Here's how you can reach me:
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 p-3 rounded-lg">
                <FaMapMarkerAlt className="text-red-500" size={24} />
              </div>
              <p className="text-sm sm:text-base font-bold">Chattogram, Bangladesh</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 p-3 rounded-lg">
                <FaEnvelope className="text-green-500" size={24} />
              </div>
              <p className="text-sm sm:text-base font-bold">muazmuhammad21@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 p-3 rounded-lg">
                <FaPhoneAlt className="text-blue-500" size={24} />
              </div>
              <p className="text-sm sm:text-base font-bold">+880 178 839 7864</p>
            </div>
          </div>
        </div>

        <div className="md:w-2/3 p-5">
          <form className="bg-gray-300 p-6 rounded-lg shadow-inner">
            <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
              <input
                type="text"
                name="client-name"
                placeholder="Your Name"
                className="flex-1 contact-div p-3 mb-4 md:mb-0 rounded-lg focus:outline-none"
                required
              />
              <input
                type="email"
                name="client-email"
                placeholder="Your Email"
                className="flex-1 contact-div p-3 mb-4 md:mb-0 rounded-lg focus:outline-none"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full p-3 mb-4 contact-div  focus:outline-none "
              required
            />
            <textarea
              placeholder="Message"
              name="message"
              rows="4"
              className="w-full contact-div  p-3 mb-4  rounded-lg focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
