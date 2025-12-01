import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import BackgroundGrid from './components/BackgroundGrid';
import TerminalHome from './components/TerminalHome';
import TimelineLog from './components/TimelineLog';
import Achievements from './components/Achievements';
import ProjectsGrid from './components/ProjectsGrid';
import FooterTicker from './components/FooterTicker';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('terminal');
  const [bootSequence, setBootSequence] = useState(true);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Boot sequence effect
  useEffect(() => {
    const timer = setTimeout(() => setBootSequence(false), 2000);
    const clock = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => {
      clearTimeout(timer);
      clearInterval(clock);
    };
  }, []);

  if (bootSequence) {
    return (
      <div className="min-h-screen bg-black text-green-500 font-mono flex items-center justify-center p-4">
        <div className="w-full max-w-lg">
          <div className="mb-2 border-b border-green-900 pb-2 flex justify-between">
            <span>SANJAY_OS_KERNEL</span>
            <span>v2025.1.0</span>
          </div>
          <div className="space-y-1 text-sm">
            <p className="animate-pulse">{'>'} Initializing Backend Protocols...</p>
            <p className="delay-100">{'>'} Loading Financial Modules...</p>
            <p className="delay-200">{'>'} Decrypting Achievements...</p>
            <p className="delay-300 text-emerald-400">{'>'} SUCCESS: System Ready.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-mono selection:bg-emerald-500 selection:text-black overflow-hidden flex flex-col">
      <TopBar time={time} />

      <div className="flex-1 flex overflow-hidden">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-slate-950 p-4 md:p-8 scrollbar-hide relative">
          <BackgroundGrid />
          
          <div className="relative z-10 max-w-5xl mx-auto">
            {activeTab === 'terminal' && <TerminalHome />}
            {activeTab === 'timeline' && <TimelineLog />}
            {activeTab === 'achievements' && <Achievements />}
            {activeTab === 'projects' && <ProjectsGrid />}
          </div>
        </main>
      </div>

      <FooterTicker />
    </div>
  );
};

export default Portfolio;
