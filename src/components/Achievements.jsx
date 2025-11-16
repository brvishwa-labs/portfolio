import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      type: 'Certification',
      title: 'Blue Prism Intelligent Automation',
      issuer: 'Eduskills (Cohort 8)',
      date: '2024',
      icon: '🤖',
      description: 'Virtual Internship - Gained expertise in automation tools and intelligent process automation',
    },
    {
      type: 'Certification',
      title: 'Palo Alto Cybersecurity',
      issuer: 'Eduskills (Cohort 10)',
      date: '2024',
      icon: '🔒',
      description: 'Virtual Internship - Learned network security, threat detection, and firewall configuration',
    },
    {
      type: 'Leadership',
      title: 'Vice President',
      organization: 'DeScience Open Source Club',
      date: 'Present',
      icon: '👥',
      description: 'Successfully organized multiple events and training sessions for the club members',
    },
    {
      type: 'Leadership',
      title: 'Event Host (Compère)',
      organization: 'Various Events',
      date: 'Present',
      icon: '🎤',
      description: 'Compared and facilitated various events, ensuring audience engagement and smooth event execution',
    },
    {
      type: 'Achievement',
      title: 'Top Scorer',
      event: 'Computer Science (Class XII)',
      date: '2023',
      icon: '🥇',
      description: 'Achieved top score in Computer Science during Higher Secondary Education',
    },
    {
      type: 'Education',
      title: 'B.Tech Computer Science',
      organization: 'SVCET, Puducherry',
      date: 'Oct 2023 - Present',
      icon: '🎓',
      description: 'Currently pursuing B.Tech CSE with CGPA of 8.2/10.0, expected graduation 2027',
    },
    {
      type: 'Achievement',
      title: 'GitHub Pull Shark',
      organization: 'GitHub',
      date: '2024',
      icon: '🦈',
      description: 'Earned the Pull Shark achievement on GitHub for making impactful pull requests and contributions to open-source projects',
    },
  ];

  const getCategoryColor = (type) => {
    const colors = {
      Certification: 'from-blue-500 to-cyan-500',
      Internship: 'from-green-500 to-emerald-500',
      Leadership: 'from-purple-500 to-pink-500',
      Achievement: 'from-yellow-500 to-orange-500',
      Education: 'from-indigo-500 to-purple-500',
    };
    return colors[type] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="achievements" className="section-container bg-gray-800/50 animate-fade-in">
      <h2 className="section-title">Achievements</h2>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="card relative overflow-hidden group hover:scale-105 transition-all duration-300 animate-fade-in-up"
            >
              {/* Gradient Border Effect */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${getCategoryColor(
                  achievement.type
                )} opacity-0 group-hover:opacity-100 transition-opacity`}
              ></div>

              {/* Icon */}
              <div className="text-5xl mb-4">{achievement.icon}</div>

              {/* Type Badge */}
              <span
                className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 bg-gradient-to-r ${getCategoryColor(
                  achievement.type
                )} text-white`}
              >
                {achievement.type}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2">
                {achievement.title}
              </h3>

              {/* Issuer/Company/Organization */}
              <p className="text-neon-blue font-semibold mb-2">
                {achievement.issuer || achievement.company || achievement.organization || achievement.event}
              </p>

              {/* Date */}
              <p className="text-gray-400 text-sm mb-3">{achievement.date}</p>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

