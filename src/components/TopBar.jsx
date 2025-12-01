import React from 'react';
import { Activity, Server } from 'lucide-react';

const TopBar = ({ time }) => (
  <div className="h-8 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4 text-xs select-none">
    <div className="flex items-center gap-2">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
      </div>
      <span className="ml-4 text-slate-500">sanjay_portfolio ~ -zsh</span>
    </div>
    <div className="flex items-center gap-4 text-slate-500">
      <div className="flex items-center gap-1">
        <Activity size={12} className="text-emerald-500" />
        <span>CPU: 12%</span>
      </div>
      <div className="flex items-center gap-1">
        <Server size={12} className="text-blue-500" />
        <span>RAM: 6.4GB</span>
      </div>
      <span>{time}</span>
    </div>
  </div>
);

export default TopBar;
