import React from 'react';

const Achievements = () => {
  // Array of your achievements
  const achievements = [
    {
      id: 1,
      title: "With Honors during Junior High School and Senior High School",
      description: "S.Y 2019-2020, 2021-2022 at Gov. Rafael L. Lazatin Integrated School",
    },
    {
      id: 2,
      title: "Integrated American Sign Language Learning Detection with Camera Input",
      description: "Implemented and trained a robust detection model utilizing MediaPipe and GRU architecture.",
    },
    {
      id: 3,
      title: "Dean's Lister in 1st year 1st sem, 2nd year 2nd sem, and 3rd year 1st sem.",
      description: " Computer Science at City College of Angeles.",
    },
    {
      id: 4,
      title: "Cisco Certification",
      description: "PCAP:Programming in Essentials in Python, CCNAv7: Introduction to Networks, IT Essentials Course.",
    },
  ];

  return (
    <section id="achievements" className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-white py-20 px-6 transition-colors duration-500 flex flex-col items-center justify-center">
      
      {/* Title Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Milestones & <span className="text-sky-500">Achievements</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A list of my recent academic and technical accomplishments.
        </p>
      </div>

      {/* The Checklist Container */}
      <div className="w-full max-w-3xl space-y-8 mt-8">
        
        {achievements.map((item) => (
          <div 
            key={item.id} 
            className="group relative flex items-start gap-4 bg-white dark:bg-slate-800 p-6 pt-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-500 cursor-default"
          >
            
            {/* --- THE PIN DESIGN (Blue at Top Left) --- */}
            <div className="absolute top-0 left-6 -translate-y-1/2 z-10">
                 {/* The Pin Head - Changed bg-red-500 to bg-sky-500 */}
                <div className="w-5 h-5 bg-sky-500 rounded-full shadow-[0_2px_3px_rgba(0,0,0,0.3)] border-2 border-white dark:border-slate-800 relative">
                    {/* Tiny reflection glint for realism */}
                    <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                </div>
            </div>
            {/* ---------------------- */}


            {/* The Checkmark Icon (SVG) */}
            <div className="mt-1 shrink-0">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 group-hover:bg-emerald-500 transition-colors duration-300">
                <svg 
                  className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>

            {/* The Text Content */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-sky-500 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Achievements;