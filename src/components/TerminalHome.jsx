import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import StatsCard from './StatsCard';

const TerminalHome = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = ["Backend Developer", "Finance Bro", "Ctrl. Alt. Create :)", "I am Batman", "Debugging AI Slop"];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      } else {
        setText(currentRole.substring(0, text.length + 1));
        if (text.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <div className="flex flex-col justify-center min-h-[60vh]">
      <div className="space-y-6">
        <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider mb-4">
          STATUS: TINKERING @HappyFox
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-slate-100 tracking-tight">
          Hello, I'm <span className="text-emerald-400">Sanjay</span>
        </h1>
        
        <div className="text-2xl md:text-4xl text-slate-400 h-12 flex items-center">
          <span className="mr-3 text-emerald-500">$</span>
          <span>{text}</span>
          <span className="animate-pulse ml-1 w-3 h-8 bg-emerald-500 block"></span>
        </div>

        <p className="max-w-2xl text-slate-400 leading-relaxed text-lg border-l-2 border-slate-700 pl-4 mt-8">
          Bridging the gap between thoughts, ideas, debugs and execution.
          I build with python.
        </p>

        <div className="flex gap-4 mt-8">
          <a href="https://www.linkedin.com/in/sanjay-s-8ab0b2264/" target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-black font-bold rounded flex items-center gap-2 transition-colors">
              <Terminal size={18} />
              Execute_Contact.sh
            </button>
          </a>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard label="Backend Uptime" value="99.9%" trend="+0.4%" />
        <StatsCard label="enter" value="GitHub" link="https://github.com/xSanYay" />
        <StatsCard label="Tea Intake" value="High" trend="Critical" color="text-red-400" />
      </div>
    </div>
  );
};

export default TerminalHome;
