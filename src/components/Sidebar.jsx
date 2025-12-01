import React from 'react';
import { Terminal, GitCommit, Award, Cpu } from 'lucide-react';
import NavItem from './NavItem';

const Sidebar = ({ activeTab, setActiveTab }) => (
  <nav className="w-16 md:w-64 bg-slate-900/50 border-r border-slate-800 flex flex-col justify-between">
    <div>
      <div className="p-4 border-b border-slate-800 hidden md:block">
        <h1 className="text-emerald-400 font-bold text-lg tracking-tighter">SANJAY<span className="text-white">.ART</span></h1>
        <p className="text-xs text-slate-500">The Final Draft </p>
      </div>
      
      <div className="flex flex-col w-full">
        <NavItem 
          active={activeTab === 'terminal'} 
          onClick={() => setActiveTab('terminal')} 
          icon={<Terminal size={18} />} 
          label="Console" 
          shortcut="CMD+1"
        />
        <NavItem 
          active={activeTab === 'timeline'} 
          onClick={() => setActiveTab('timeline')} 
          icon={<GitCommit size={18} />} 
          label="Git Log" 
          shortcut="CMD+2"
        />
        <NavItem 
          active={activeTab === 'achievements'} 
          onClick={() => setActiveTab('achievements')} 
          icon={<Award size={18} />} 
          label="Certificates" 
          shortcut="CMD+3"
        />
        <NavItem 
          active={activeTab === 'projects'} 
          onClick={() => setActiveTab('projects')} 
          icon={<Cpu size={18} />} 
          label="Deployed Nodes" 
          shortcut="CMD+4"
        />
      </div>
    </div>

    <div className="p-4 border-t border-slate-800 hidden md:block">
      <div className="text-xs text-slate-500 mb-2">Git Branch</div>
      <div className="flex items-center gap-2 text-sm text-emerald-400">
        <GitCommit size={14} />
        <span>main*</span>
      </div>
    </div>
  </nav>
);

export default Sidebar;
