import React from 'react';
import { Cpu, Database, ChevronRight } from 'lucide-react';

const ProjectsGrid = () => {
  const projects = [
    // {
    //   name: "AlgoTrade Bot",
    //   stack: ["Python", "Pandas", "AWS Lambda"],
    //   status: "LIVE",
    //   desc: "Automated trading bot that executes strategies based on Moving Averages. Connects to broker APIs via webhooks."
    // },
    // {
    //   name: "Ledger API",
    //   stack: ["Go", "PostgreSQL", "Docker"],
    //   status: "BETA",
    //   desc: "Double-entry bookkeeping system API built for high concurrency. Handles 10k req/s with ACID compliance."
    // },
    // {
    //   name: "Stock Screener",
    //   stack: ["React", "FastAPI", "Redis"],
    //   status: "DEV",
    //   desc: "Real-time dashboard filtering stocks by P/E ratio and volume spikes. Websockets for live data updates."
    // }
  ];

  return (
    <div>
      <div className="flex items-center gap-2 text-slate-400 mb-8 border-b border-slate-800 pb-4">
        <Cpu className="text-emerald-500" />
        <h2 className="text-xl font-semibold text-slate-200">Active Processes (Projects)</h2>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="group relative bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-emerald-500/50 transition-all">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <Database className="text-slate-500" size={20} />
                  <h3 className="text-xl font-bold text-slate-200">{project.name}</h3>
                </div>
                <div className={`text-[10px] font-bold px-2 py-1 rounded border
                  ${project.status === 'LIVE' ? 'text-green-400 border-green-900 bg-green-900/20' : 
                    project.status === 'BETA' ? 'text-blue-400 border-blue-900 bg-blue-900/20' :
                    'text-yellow-400 border-yellow-900 bg-yellow-900/20'}`}>
                  {project.status}
                </div>
              </div>
              
              <p className="text-slate-400 text-sm mb-6">{project.desc}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {project.stack.map((tech, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1 text-sm font-medium">
                  SOURCE <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;
