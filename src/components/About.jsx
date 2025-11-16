import React from 'react';

const About = () => {
  const highlights = [
    {
      icon: '🎯',
      title: 'Results-Driven',
      description: 'Delivered 50% improvement in user engagement through optimized UI/UX design',
    },
    {
      icon: '🚀',
      title: 'Tech Innovator',
      description: 'Contributing to AI-powered platforms using cutting-edge technologies',
    },
    {
      icon: '💡',
      title: 'Problem Solver',
      description: 'Strong analytical skills with proven ability to tackle complex challenges',
    },
    {
      icon: '🤝',
      title: 'Team Leader',
      description: 'Leading 200+ member developer community as VP of Open Source Club',
    },
  ];

  return (
    <section id="about" className="section-container animate-fade-in">
      <h2 className="section-title">About Me</h2>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up md:col-span-1">
            <div className="bg-gradient-to-r from-neon-blue/10 to-transparent p-6 rounded-lg border-l-4 border-neon-blue">
              <p className="text-xl font-semibold text-white mb-3">
                🚀 Building the Future, One Line of Code at a Time
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a <span className="text-neon-blue font-semibold">B.Tech Computer Science Engineering</span> student 
                at SVCET (Sri Venkateshwaraa College of Engineering and Technology), Puducherry, maintaining a strong 
                <span className="text-neon-blue font-semibold"> CGPA of 8.2/10.0</span>. My passion lies in creating 
                innovative solutions that solve real-world problems, with a proven track record in full-stack development 
                and AI-powered applications.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-neon-blue mb-4 flex items-center gap-2">
                <span>💼</span> Professional Highlights
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-neon-blue mt-1">▸</span>
                  <span>
                    <strong className="text-white">Contributor</strong> to <strong className="text-neon-blue">CarbonKanakku</strong> - 
                    An AI-powered ESG compliance platform for India's textile industry, built with Next.js, TypeScript, and Firebase
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neon-blue mt-1">▸</span>
                  <span>
                    <strong className="text-white">Vice President</strong> of DeScience Open Source Club - Leading events, 
                    training sessions, and fostering a community of 200+ developers
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-neon-blue mb-4 flex items-center gap-2">
                <span>🛠️</span> Technical Expertise
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-3">
                I specialize in <strong className="text-white">web development</strong> with strong proficiency in 
                <strong className="text-neon-blue"> HTML, CSS, JavaScript</strong>, and 
                <strong className="text-neon-blue"> React</strong>. My programming expertise includes 
                <strong className="text-neon-blue"> Python</strong> and 
                <strong className="text-neon-blue"> Java</strong> at an intermediate level. Additionally, I have experience with 
                <strong className="text-white"> database management</strong> systems including MySQL and PostgreSQL, 
                <strong className="text-neon-blue"> Firebase</strong> for backend services, and modern development tools like 
                <strong className="text-neon-blue"> Cursor</strong> and <strong className="text-neon-blue">Windsurf</strong> for enhanced productivity.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently enhancing my skills in <strong className="text-neon-blue">Data Structures & Algorithms</strong> 
                and leveraging <strong className="text-neon-blue">AI tools</strong> to streamline development workflows, 
                resulting in improved code quality and faster problem-solving.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <p className="text-lg text-gray-300 leading-relaxed italic">
                "I'm actively seeking <strong className="text-neon-blue">internship opportunities</strong> and 
                <strong className="text-neon-blue"> collaborative projects</strong> where I can apply my technical 
                skills, contribute to meaningful solutions, and grow as a software engineer. Let's build something 
                amazing together!"
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="card text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-3">{highlight.icon}</div>
                <h3 className="text-xl font-semibold text-neon-blue mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

