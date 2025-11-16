import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Java', level: 70 },
        { name: 'Python', level: 70 },
      ],
    },
    {
      category: 'Web Development',
      skills: [
        { name: 'HTML/CSS', level: 80 },
        { name: 'JavaScript', level: 60 },
        { name: 'ReactJS', level: 60 },
      ],
    },
    {
      category: 'Database & Tools',
      skills: [
        { name: 'MySQL', level: 75 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Firebase', level: 70 },
        { name: 'Git/GitHub', level: 80 },
        { name: 'VS Code', level: 85 },
        { name: 'Cursor', level: 80 },
        { name: 'Windsurf', level: 75 },
        { name: 'IntelliJ IDEA', level: 70 },
        { name: 'Eclipse', level: 65 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-container bg-gray-800/50 animate-fade-in">
      <h2 className="section-title">Skills</h2>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card animate-fade-in-up">
              <h3 className="text-2xl font-bold text-neon-blue mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-neon-blue text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-neon-blue to-neon-blue-dark h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

