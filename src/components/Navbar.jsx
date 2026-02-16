import { useState, useEffect } from 'react';
import profilePic from '../assets/selfie.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  // Dark Mode Logic
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav>
      {/* 1. HAMBURGER BUTTON (Top Left) */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="fixed top-4 left-4 z-50 flex flex-col justify-center items-center gap-1 w-10 h-10 bg-transparent rounded-full cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
      >
        <div className={`w-4 h-0.5 bg-sky-500 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
        <div className={`w-4 h-0.5 bg-sky-500 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-4 h-0.5 bg-sky-500 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
      </button>

      {/* 2. NIGHT MODE SLIDER (Top Right) - FIXED POSITION */}
      <button 
        onClick={handleThemeSwitch}
        className="fixed top-4 right-4 z-50 w-14 h-7 rounded-full transition-all duration-300 shadow-lg hover:scale-110"
        style={{
          backgroundColor: theme === "dark" ? "#334155" : "#cbd5e1"
        }}
      >
        {/* Slider Circle */}
        <div 
          className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300 flex items-center justify-center ${
            theme === "dark" ? "left-0.5" : "left-7"
          }`}
        >
          {/* Icon inside slider */}
          <span className="text-xs">
            {theme === "dark" ? "🌑" : "☀️"}
          </span>
        </div>
      </button>

      {/* 3. OVERLAY (Click to Close) */}
      <div 
        onClick={() => setIsOpen(false)} 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      ></div>

      {/* 4. SIDEBAR (The Menu) */}
      <div className={`fixed top-0 left-0 h-screen w-72 bg-white dark:bg-[#1e1f20] text-slate-900 dark:text-gray-200 transform transition-transform duration-300 z-50 shadow-2xl ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        <div className="flex flex-col h-full p-6 pt-20">
            
            {/* Clickable Profile*/}
            <a href="#hero" onClick={() => setIsOpen(false)}>
                <div className="flex items-center gap-4 mb-8 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer transition-colors">
                    
                  <img src={profilePic} alt="waynee" className="w-10 h-10 rounded-full object-cover" />
                    {/* Note: Ensure you have your <img> tag here if you added one, otherwise keep the div */}
                    
                    
                    {/* Name & Title */}
                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">Gerwayne V. Calma</h3>
                        <p className="text-xs text-slate-500 dark:text-gray-400">4th Year CS Student</p>
                    </div>
                </div>
            </a>

            {/* Menu Links */}
<ul className="space-y-2 flex-1">
  
    

                {/* PROJECTS LINK */}
                <a href="#projects" onClick={() => setIsOpen(false)}>
                <li className="px-4 py-3 rounded-md hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer text-sm font-medium transition-colors text-slate-900 dark:text-gray-200">Projects</li> </a>

                {/* SKILLS LINK */}
                <a href="#skills" onClick={() => setIsOpen(false)}>
                <li className="px-4 py-3 rounded-md hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer text-sm font-medium transition-colors text-slate-900 dark:text-gray-200">Skills</li></a>

                {/* ACHIEVEMENTS LINK */}
                <a href="#achievements" onClick={() => setIsOpen(false)}>
                <li className="px-4 py-3 rounded-md hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer text-sm font-medium transition-colors text-slate-900 dark:text-gray-200">Achievements</li></a>
</ul>

            {/* Footer */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                 <p className="text-xs text-gray-500 hover:text-sky-500 cursor-pointer">© 2026 Portfolio</p>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;