import React from 'react';

const About = () => {
  const highlights = [
    {
      icon: '📈',
      title: 'Agile Practitioner',
      description: 'Experience working with Agile methodologies like Scrum to deliver better outcomes',
    },
    {
      icon: '⚙️',
      title: 'Adaptive Developer',
      description: 'Easily adapts to new requirements and iterates fast using Agile principles',
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
      description: 'Led small developer groups and collaborated on technical activities',
    },
  ];

  return (
    <section id="about" className="section-container animate-fade-in">
      <h2 className="section-title">About Me</h2>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up md:col-span-1">

            <div className="bg-gradient-to-r from-neon-blue/10 to-transparent p-6 rounded-xl border-l-4 border-neon-blue shadow-md">
              <p className="text-xl font-semibold text-white mb-3">
                🚀 Building the Future, One Line of Code at a Time
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a <span className="text-neon-blue font-semibold">B.Tech Computer Science Engineering</span> student
                at SVCET, Puducherry, maintaining a strong
                <span className="text-neon-blue font-semibold"> CGPA of 8.2/10.0</span>. I build innovative solutions that solve
                real-world problems with expertise in full-stack development and AI-powered applications.
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
                    <strong className="text-white">Contributor</strong> to <strong className="text-neon-blue">CarbonKanakku</strong> —
                    an AI-powered ESG compliance platform for India's textile industry using Next.js, TypeScript & Firebase.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-neon-blue mt-1">▸</span>
                  <span>
                    <strong className="text-white">Vice President</strong> of DeScience Open Source Club — Leading events,
                    training sessions, and collaborating with developer peers.
                  </span>
                </li>

                {/* Git Workshop Entry */}
                <li className="flex items-start gap-3">
                  <span className="text-neon-blue mt-1">▸</span>
                  <span>
                    Conducted a hands-on <strong className="text-white">Git & GitHub workshop</strong>, teaching students practical version control workflows.
                  </span>
                </li>

              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-neon-blue mb-4 flex items-center gap-2">
                <span>🛠️</span> Technical Expertise
              </h3>

              <p className="text-lg text-gray-300 leading-relaxed mb-3">
                Skilled in <strong className="text-white">web development</strong> using
                <strong className="text-neon-blue"> HTML, CSS, JavaScript, React</strong>.
                Comfortable with <strong className="text-neon-blue">Python</strong> and
                <strong className="text-neon-blue">Java</strong>. Experienced with
                <strong className="text-neon-blue"> MySQL, PostgreSQL, Firebase</strong>,
                and modern tools like <strong className="text-neon-blue">Cursor</strong> & <strong className="text-neon-blue">Windsurf</strong>.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Currently improving my <strong className="text-neon-blue">Data Structures & Algorithms</strong> knowledge
                and enhancing development workflows using <strong className="text-neon-blue">AI tools</strong>.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 shadow-md">
              <p className="text-lg text-gray-300 leading-relaxed italic">
                "I'm actively seeking <strong className="text-neon-blue">internship opportunities</strong> and
                <strong className="text-neon-blue"> collaborative projects</strong> where I can apply my skills,
                build meaningful products, and grow as a developer."
              </p>
            </div>

          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 mt-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="card text-center p-6 rounded-xl shadow-md bg-gray-800/40 border border-gray-700 hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
              >
                <div className="text-4xl mb-3">{highlight.icon}</div>
                <h3 className="text-lg font-semibold text-neon-blue mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
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
