import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'CarbonKanakku - ESG Compliance Platform',
      description:
        'An AI-powered ESG platform designed for India\'s textile industry. Empowers Small and Medium-sized Businesses (SMBs) to effortlessly track emissions, analyze carbon footprint, ensure compliance, and generate professional sustainability reports. Features include AI-powered sustainability reports using Google\'s Gemini API, live ESG dashboard, industry-specific data input modules, and comprehensive data visualization.',
      image: '🌿',
      tags: ['Next.js', 'TypeScript', 'React', 'Firebase', 'TailwindCSS', 'AI', 'Gemini API', 'ShadCN UI'],
      link: 'https://github.com/Vishwavichu67/Carbonkanakku',
      demo: 'https://carbonkanakku.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="section-container animate-fade-in">
      <h2 className="section-title">Projects</h2>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card group hover:scale-105 transition-all duration-300 animate-fade-in-up max-w-md w-full"
            >
              {/* Project Image/Icon */}
              <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>

              {/* Project Title */}
              <h3 className="text-2xl font-bold text-neon-blue mb-3">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-medium bg-gray-700 text-neon-blue rounded-full border border-neon-blue/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-gray-700 hover:bg-neon-blue hover:text-gray-900 rounded-lg transition-all duration-300 text-sm font-semibold"
                >
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-gray-900 rounded-lg transition-all duration-300 text-sm font-semibold"
                >
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

