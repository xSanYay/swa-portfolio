import React, { useState, useEffect } from 'react';
import TickerItem from './TickerItem';

const FooterTicker = () => {
  const [visitorCount, setVisitorCount] = useState('...');

  useEffect(() => {
    // Using hits.seeyoufarm.com - reliable free counter for sunyay.art
    fetch('https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fsunyay.art&count_bg=%2310B981&title_bg=%23555555&icon=&emoji_on=false&title=visits')
      .then(() => {
        // Fetch the actual count
        fetch('https://hits.seeyoufarm.com/api/count/graph/dailyhits.json?url=https%3A%2F%2Fsunyay.art')
          .then(res => res.json())
          .then(data => {
            const total = data.total || 'N/A';
            setVisitorCount(total);
          })
          .catch(() => setVisitorCount('N/A'));
      })
      .catch(() => setVisitorCount('N/A'));
  }, []);

  return (
    <div className="h-8 bg-slate-900 border-t border-slate-800 flex items-center overflow-hidden whitespace-nowrap relative z-20">
      <div className="animate-marquee flex items-center text-xs font-mono">
        <TickerItem symbol="VISITORS" value={visitorCount} change="+1" color="text-yellow-400" />
        <TickerItem symbol="FastAPI" value="18.2" change="+2.4%" />
        <TickerItem symbol="Stocks" value="20.1" change="+1.8%" />
        <TickerItem symbol="PYTHON" value="3.11" change="+5.2%" />
        <TickerItem symbol="SQL" value="STABLE" change="0.0%" color="text-slate-400" />
        <TickerItem symbol="DOCKER" value="v24" change="+0.9%" />
        <TickerItem symbol="AWS" value="CLOUD" change="+12.4%" />
        <TickerItem symbol="FINANCE" value="BULL" change="+100%" />
        <TickerItem symbol="SLEEP" value="NULL" change="-50%" color="text-red-400" />
        
        {/* Duplicate for seamless loop */}
        <TickerItem symbol="VISITORS" value={visitorCount} change="+1" color="text-yellow-400" />
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
