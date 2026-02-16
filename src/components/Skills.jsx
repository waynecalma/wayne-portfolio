import React from 'react';

const Skills = () => {
  const skills = [
    {
      id: 1,
      name: 'HTML',
      percentage: 70,
      color: 'bg-orange-500',
      icon: '🌐' 
    },
    {
      id: 2,
      name: 'CSS',
      percentage: 70,
      color: 'bg-blue-500',
      icon: '🎨'
    },
    {
      id: 3,
      name: 'JavaScript',
      percentage: 60,
      color: 'bg-yellow-400',
      icon: '⚡'
    },
    {
      id: 4,
      name: 'Python',
      percentage: 80,
      color: 'bg-green-500',
      icon: '🐍'
    },
    {
      id: 5,
      name: 'AI Tools',
      percentage: 80,
      color: 'bg-purple-500',
      icon: '🤖'
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white py-20 px-6 transition-colors duration-500">
      
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Technical <span className="text-sky-500">Skills</span>
        </h2>
      </div>

      {/* THE FLEXBOX CONTAINER (Centered & Wrapping) */}
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
        
        {skills.map((skill) => (
          <div 
            key={skill.id}
            className="group relative w-40 h-40 md:w-48 md:h-48 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center overflow-hidden cursor-pointer transition-transform hover:-translate-y-2"
          >
            
            {/* 1. ICON & NAME (Slides up on hover) */}
            <div className="absolute flex flex-col items-center transition-all duration-300 group-hover:-translate-y-4">
                <span className="text-4xl mb-2">{skill.icon}</span>
                <h3 className="font-bold text-lg">{skill.name}</h3>
            </div>

            {/* 2. PERCENTAGE BAR (Hidden by default, slides up on hover) */}
            <div className="absolute bottom-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out bg-slate-100 dark:bg-slate-700">
                <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>Proficiency</span>
                    <span>{skill.percentage}%</span>
                </div>
                
                {/* The Gray Background Bar */}
                <div className="w-full h-2 bg-slate-300 dark:bg-slate-600 rounded-full overflow-hidden">
                    {/* The Colored Progress Bar */}
                    <div 
                        className={`h-full rounded-full ${skill.color}`} 
                        style={{ width: `${skill.percentage}%` }}
                    ></div>
                </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;