import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="text-black py-6 text-center mt-10">
      <div className="container">
        <h3 className='mb-5 text-lg font-semibold'>Thank You for your Visit</h3>
        <p className="text-teal-500 text-xl mb-6">Connect with me</p>
        <div className="flex justify-center space-x-4">
          <a className="btn w-14 h-14 flex items-center justify-center" href="https://www.facebook.com/profile.php?id=100094518826882" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-blue-500" size={24} />
          </a>
          <a className="btn w-14 h-14 flex items-center justify-center" href="https://www.instagram.com/muazbinnazim?igsh=dzhtYWNneXdoYnBj" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-500" size={24} />
          </a>
          <a className="btn w-14 h-14 flex items-center justify-center" href="https://www.linkedin.com/in/muaz-muhammad-ba88a3207" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-blue-500" size={24} />
          </a>
          <a className="btn w-14 h-14 flex items-center justify-center" href="https://github.com/muaz64" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-700" size={24} />
          </a>
        </div>
        <p className="mt-5">© 2024 Muaz Muhammad. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;