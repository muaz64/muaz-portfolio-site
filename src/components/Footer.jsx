import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className=" text-black py-6 text-center mt-5">
      <div className="container">
        <h4 className='mb-6'>Thank You for your Visit</h4>
        <p className="text-teal mb-6">Connect with me</p>
        <div className="flex justify-center space-x-4 text-2xl">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal">
            <FaLinkedinIn />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal">
            <FaGithub />
          </a>
        </div>
        <p className="mt-4">© 2024 Muaz Muhammad. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
