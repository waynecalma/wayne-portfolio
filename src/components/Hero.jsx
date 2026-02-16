import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center transition-colors duration-500 bg-slate-100 dark:bg-slate-950">
      
    {/* Intro Text */}
        <h2 className="text-sky-600 dark:text-sky-400 font-bold text-lg mb-4 tracking-wide uppercase">
        Welcome to my Portfolio Website!
        </h2>

    {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6">
        Hello, I'm <span className="text-sky-500">Gerwayne</span>
        </h1>

    {/* Description */}
        <p className="text-slate-600 dark:text-slate-300 text-xl max-w-2xl mb-10 leading-relaxed">
        I am a <span className="text-slate-900 dark:text-white font-semibold">4th Year CS Student</span> specializing in building websites and software solutions. I have a solid foundation on <span className="text-slate-900 dark:text-white font-semibold">Python</span> and the fundamentals of <span className="text-slate-900 dark:text-white font-semibold">HTML, CSS, and JavaScript.</span> I am familiar with the use of existing tools for backend development such as <span className="text-slate-900 dark:text-white font-semibold">PHP, Google Firebase, Python, and MySQL.</span><span className="text-slate-900 dark:text-white font-semibold"> Claude AI, Gemini and Kilo Code</span> are the AI- Development tools that I prefer to use as it enhances my coding skills and ensure efficiency on development.
        </p> 


    </section>
  );
};

export default Hero;