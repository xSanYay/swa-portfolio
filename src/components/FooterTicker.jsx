import React from 'react';
import TickerItem from './TickerItem';

const FooterTicker = () => {
  return (
    <div className="h-8 bg-slate-900 border-t border-slate-800 flex items-center overflow-hidden whitespace-nowrap relative z-20">
      <div className="animate-marquee flex items-center text-xs font-mono">
        <TickerItem symbol="FastAPI" value="18.2" change="+2.4%" />
        <TickerItem symbol="Stocks" value="20.1" change="+1.8%" />
        <TickerItem symbol="PYTHON" value="3.11" change="+5.2%" />
        <TickerItem symbol="SQL" value="STABLE" change="0.0%" color="text-slate-400" />
        <TickerItem symbol="DOCKER" value="v24" change="+0.9%" />
        <TickerItem symbol="AWS" value="CLOUD" change="+12.4%" />
        <TickerItem symbol="FINANCE" value="BULL" change="+100%" />
        <TickerItem symbol="SLEEP" value="NULL" change="-50%" color="text-red-400" />
        
        {/* Duplicate for seamless loop */}
        <TickerItem symbol="FastAPI" value="18.2" change="+2.4%" />
        <TickerItem symbol="Stocks" value="20.1" change="+99.8%" />
        <TickerItem symbol="PYTHON" value="3.11" change="+5.2%" />
        <TickerItem symbol="SQL" value="STABLE" change="0.0%" color="text-slate-400" />
        <TickerItem symbol="DOCKER" value="v24" change="+0.9%" />
        <TickerItem symbol="AWS" value="CLOUD" change="+12.4%" />
        <TickerItem symbol="FINANCE" value="BULL" change="+100%" />
        <TickerItem symbol="SLEEP" value="NULL" change="-50%" color="text-red-400" />
        
        {/* Another duplicate for seamless loop */}
        <TickerItem symbol="FastAPI" value="18.2" change="+2.4%" />
        <TickerItem symbol="Stocks" value="20.1" change="-101%" color="text-red-400" />
        <TickerItem symbol="PYTHON" value="3.11" change="+5.2%" />
        <TickerItem symbol="SQL" value="STABLE" change="0.0%" color="text-slate-400" />
        <TickerItem symbol="DOCKER" value="v24" change="+0.9%" />
        <TickerItem symbol="AWS" value="CLOUD" change="+12.4%" />
        <TickerItem symbol="FINANCE" value="BULL" change="+100%" />
        <TickerItem symbol="SLEEP" value="NULL" change="-50%" color="text-red-400" />
      </div>
      <style>{`
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
      `}</style>
    </div>
  );
};

export default FooterTicker;
