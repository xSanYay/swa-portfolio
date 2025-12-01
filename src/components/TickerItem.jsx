import React from 'react';

const TickerItem = ({ symbol, value, change, color = "text-emerald-400" }) => (
  <div className="flex items-center gap-2 mx-6">
    <span className="text-slate-500 font-bold">{symbol}</span>
    <span className="text-slate-300">{value}</span>
    <span className={color}>{change}</span>
  </div>
);

export default TickerItem;
