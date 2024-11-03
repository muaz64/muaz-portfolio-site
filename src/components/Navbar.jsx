import React from 'react';

function Navbar() {
  return (
    <nav className="bg-charcoal-gray text-white fixed w-full shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">Muaz Muhammad</h1>
        <ul className="hidden md:flex space-x-6 font-semibold">
          <li><a href="#home" className="hover:text-teal">Home</a></li>
          <li><a href="#about" className="hover:text-teal">About</a></li>
          <li><a href="#services" className="hover:text-teal">Services</a></li>
          <li><a href="#projects" className="hover:text-teal">Projects</a></li>
          <li><a href="#contact" className="hover:text-teal">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
