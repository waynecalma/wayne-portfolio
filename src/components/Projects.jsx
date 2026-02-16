import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Signtify",
      desc: "Web-System Sign Language Learning for American Sign Language using Mediapipe.",
      tech: ["React", "Python", "Mediapipe", "Flask", "Google Firebase"],
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Ping-Pong Game",
      desc: "A classic retro arcade game built to understand game loops and collision detection.",
      tech: ["Java", "JavaFX"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Flexbox Card Layout",
      desc: "A responsive UI experiment mastering CSS Flexbox for modern web design layouts.",
      tech: ["HTML", "CSS", "Flexbox"],
      color: "from-emerald-400 to-teal-600"
    },
    {
      title: "Music Player",
      desc: "A Python-based music player with a sleek GUI for local music playback and playlist management with the inclusion of the database.",
      tech: ["Python", "Tkinter"],
      color: "from-orange-400 to-red-500"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white py-20 px-6 transition-colors duration-500">
      
      {/* Section Title */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="text-sky-500">Projects</span>
        </h2>
      </div>

      {/* THE GRID (2x2 Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        
        {projects.map((project, index) => (
          <div key={index} className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-slate-700 overflow-hidden">
            
            {/* Decorative Gradient Blob (Background) */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-10 rounded-bl-full transition-all group-hover:scale-110`}></div>
            
            {/* Content */}
            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-sky-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {project.desc}
                </p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                      {tech}
                    </span>
                  ))}
                </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;