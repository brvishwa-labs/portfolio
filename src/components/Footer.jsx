import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} <span className="text-neon-blue font-semibold">B.R. Vishwa</span>. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <p className="text-gray-400 text-sm">
              Built with <span className="text-red-500">❤️</span> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

