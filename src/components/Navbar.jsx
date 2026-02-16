import { useState } from 'react';
import profilePic from '../assets/selfie.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
    {/* 1. THE HAMBURGER BUTTON (Circular & RGB Custom Color) */}
        <button 
            onClick={() => setIsOpen(!isOpen)} 
            // We use [var(--name)] to grab the variable we just made
            className="fixed top-4 left-4 z-50 flex flex-col justify-center items-center gap-1 w-10 h-10 bg-transparent rounded-full cursor-pointer hover:bg-[var(--nav-hover)] transition-colors"
        >
        {/* 2. LINE COLOR: Change the rgb(r,g,b) numbers below */}
        <div className={`w-4 h-0.5 bg-[rgb(56,189,248)] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
        <div className={`w-4 h-0.5 bg-[rgb(56,189,248)] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-4 h-0.5 bg-[rgb(56,189,248)] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
      </button>

      {/* 2. THE DARK OVERLAY (Click anywhere outside to close) */}
      <div 
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      ></div>

      {/* 3. THE SIDEBAR (Gemini Style) */}
      <div className={`fixed top-0 left-0 h-screen w-72 bg-[#1e1f20] text-gray-200 transform transition-transform duration-300 ease-in-out z-50 shadow-2xl ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Sidebar Content */}
        <div className="flex flex-col h-full p-6 pt-20">
            
            {/* User Profile Section (Like the top of the menu) */}
            <div className="flex items-center gap-4 mb-8 p-3 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600">
                  <img  src={profilePic} alt="Profile" className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                    <h3 className="font-semibold text-white">Gerwayne V. Calma</h3>
                    <p className="text-xs text-gray-400">4th Year CS Student</p>
                </div>
            </div>

            {/* Navigation Links */}
            <ul className="space-y-2 flex-1">
                <NavItem label="About" />
                <NavItem label="Projects" />
                <NavItem label="Skills" />
                <NavItem label="Achievements" />
            </ul>

            {/* Bottom Section (Settings/Socials) */}
            <div className="border-t border-gray-700 pt-4">
                 <p className="text-xs text-gray-500 hover:text-white cursor-pointer">© 2026 Portfolio</p>
            </div>
        </div>
      </div>
    </nav>
  );
};

// A small reusable component for the list items to keep code clean
const NavItem = ({ label }) => (
    <li className="px-4 py-3 rounded-full hover:bg-white/10 cursor-pointer text-sm font-medium transition-colors">
        {label}
    </li>
);

export default Navbar;