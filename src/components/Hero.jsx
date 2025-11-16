import React from 'react';
import profileImg from '../assets/images/profile.JPG';   // <-- MATCHED EXACT FILENAME
import resumePDF from '../assets/resume.pdf';            // <-- FIXED

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;                  // <-- FIXED
    link.download = 'Vishwa_Resume.pdf';   // filename user gets
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.1),transparent)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in-up">

          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-neon-blue to-neon-blue-dark p-1">
                <img
                  src={profileImg}                       // <-- FIXED
                  alt="B.R. Vishwa"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-neon-blue rounded-full border-4 border-gray-900"></div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-neon-blue via-white to-neon-blue-dark bg-clip-text text-transparent">
              B.R. Vishwa
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6 animate-fade-in-up">
            B.Tech Computer Science Engineering Student & Web Developer
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-8 animate-fade-in-up">
            Motivated and passionate Computer Science Engineering student with a strong foundation in web development and programming.
            Seeking to apply technical knowledge and problem-solving skills in challenging projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary"
            >
              Contact Me
            </button>
            <button
              onClick={downloadResume}
              className="btn-secondary"
            >
              Download Resume
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <button
              onClick={() => scrollToSection('#about')}
              className="text-neon-blue hover:text-neon-blue-dark transition-colors"
            >
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
