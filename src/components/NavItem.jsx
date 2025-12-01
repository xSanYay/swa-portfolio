import React from 'react';

const NavItem = ({ active, onClick, icon, label, shortcut }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 p-4 transition-all duration-200 border-l-2
      ${active 
        ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' 
        : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900'
      }`}
  >
    {icon}
    <span className="hidden md:block text-sm font-medium">{label}</span>
    {active && <span className="hidden md:block ml-auto text-[10px] bg-emerald-500/20 px-1.5 py-0.5 rounded text-emerald-400">{shortcut}</span>}
  </button>
);

export default NavItem;
