import React from 'react';

const StatsCard = ({ label, value, trend, color = "text-emerald-400", link }) => (
  <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg">
    <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">{label}</div>
    <div className="flex items-end justify-between">
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-slate-200 hover:text-emerald-400 transition-colors">
          {value}
        </a>
      ) : (
        <div className="text-2xl font-bold text-slate-200">{value}</div>
      )}
      <div className={`text-xs ${color}`}>{trend}</div>
    </div>
  </div>
);

export default StatsCard;
