import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  TrendingUp, 
  GitCommit, 
  Cpu, 
  Award, 
  Server, 
  Code, 
  Database, 
  DollarSign, 
  Briefcase,
  ChevronRight,
  Maximize2,
  Minus,
  X,
  Activity,
  Lock,
  Globe
} from 'lucide-react';

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
      {/* Top Bar / Mac Style Header */}
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

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar Navigation */}
        <nav className="w-16 md:w-64 bg-slate-900/50 border-r border-slate-800 flex flex-col justify-between">
          <div>
            <div className="p-4 border-b border-slate-800 hidden md:block">
              <h1 className="text-emerald-400 font-bold text-lg tracking-tighter">SANJAY<span className="text-white">.DEV</span></h1>
              <p className="text-xs text-slate-500">Full Stack Finance</p>
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
                label="Git Log (Timeline)" 
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

      {/* Bottom Ticker */}
      <FooterTicker />
    </div>
  );
};

/* --- Sub Components --- */

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

const TerminalHome = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = ["Backend Developer", "Finance Analyst", "2025 Graduate", "System Architect"];
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
          STATUS: OPEN TO WORK
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
          Bridging the gap between scalable backend systems and financial algorithms. 
          I build low-latency infrastructure with a focus on data integrity and market mechanics.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-black font-bold rounded flex items-center gap-2 transition-colors">
            <Terminal size={18} />
            Execute_Contact.sh
          </button>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard label="Backend Uptime" value="99.9%" trend="+0.4%" />
        <StatsCard label="LeetCode Solved" value="450+" trend="+12 this week" />
        <StatsCard label="Coffee Intake" value="High" trend="Critical" color="text-red-400" />
      </div>
    </div>
  );
};

const StatsCard = ({ label, value, trend, color = "text-emerald-400" }) => (
  <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg">
    <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">{label}</div>
    <div className="flex items-end justify-between">
      <div className="text-2xl font-bold text-slate-200">{value}</div>
      <div className={`text-xs ${color}`}>{trend}</div>
    </div>
  </div>
);

const TimelineLog = () => {
  const events = [
    {
      year: "2025",
      title: "Graduation Expected",
      role: "B.Tech Computer Science",
      desc: "Finalizing capstone project on Algorithmic Trading Engines. maintained 8.5 CGPA.",
      status: "PENDING"
    },
    {
      year: "2024",
      title: "Backend Engineer",
      role: "Current Role",
      desc: "Working with Node.js and PostgreSQL to optimize transaction queries by 40%. Implemented Redis caching layers.",
      status: "ACTIVE"
    },
    {
      year: "2023",
      title: "FinTech Intern",
      role: "Summer Internship",
      desc: "Assisted in building microservices for a payment gateway. Learned the intricacies of ISO 8583 standards.",
      status: "COMPLETED"
    },
    {
      year: "2021",
      title: "University Entry",
      role: "Undergraduate",
      desc: "Started journey in CS. Discovered passion for backend architecture and financial markets.",
      status: "INIT"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2 text-slate-400 mb-8 border-b border-slate-800 pb-4">
        <GitCommit className="text-emerald-500" />
        <h2 className="text-xl font-semibold text-slate-200">System Logs / Timeline</h2>
      </div>

      <div className="relative border-l border-slate-800 ml-4 space-y-12">
        {events.map((event, index) => (
          <div key={index} className="relative pl-8 group">
            {/* Timeline Dot */}
            <div className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full border-2 border-slate-950 
              ${event.status === 'ACTIVE' ? 'bg-emerald-500 animate-pulse' : 
                event.status === 'PENDING' ? 'bg-yellow-500' : 'bg-slate-600'}`}>
            </div>
            
            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-lg hover:border-emerald-500/50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-emerald-400 text-sm font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {event.year}
                  </span>
                  <h3 className="text-xl font-bold text-slate-200 mt-2">{event.title}</h3>
                  <div className="text-slate-400 text-sm flex items-center gap-2 mt-1">
                    <Briefcase size={14} />
                    {event.role}
                  </div>
                </div>
                <div className="text-xs text-slate-600 font-mono hidden md:block">
                  HASH: {Math.random().toString(36).substring(7)}
                </div>
              </div>
              <p className="text-slate-400 mt-4 leading-relaxed text-sm">
                {event.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Achievements = () => {
  const awards = [
    {
      title: "Hackathon Winner",
      org: "TechFest 2024",
      icon: <Award className="text-yellow-400" size={24} />,
      desc: "Built a decentralized prediction market using Solidity and React."
    },
    {
      title: "AWS Certified",
      org: "Solutions Architect",
      icon: <Server className="text-orange-400" size={24} />,
      desc: "Associate level certification focusing on serverless finance architectures."
    },
    {
      title: "Top 5% Trader",
      org: "Zerodha Challenge",
      icon: <TrendingUp className="text-green-400" size={24} />,
      desc: "Achieved consistent profitability over 60 days using python automation scripts."
    }
  ];

  return (
    <div>
       <div className="flex items-center gap-2 text-slate-400 mb-8 border-b border-slate-800 pb-4">
        <Lock className="text-emerald-500" />
        <h2 className="text-xl font-semibold text-slate-200">Unlocked Assets</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {awards.map((item, idx) => (
          <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-900 border border-slate-700 p-6 rounded-xl flex items-start gap-4 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all">
            <div className="p-3 bg-slate-800 rounded-lg border border-slate-700">
              {item.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-200">{item.title}</h3>
              <div className="text-xs text-emerald-500 uppercase tracking-wider mb-2">{item.org}</div>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectsGrid = () => {
  const projects = [
    {
      name: "AlgoTrade Bot",
      stack: ["Python", "Pandas", "AWS Lambda"],
      status: "LIVE",
      desc: "Automated trading bot that executes strategies based on Moving Averages. Connects to broker APIs via webhooks."
    },
    {
      name: "Ledger API",
      stack: ["Go", "PostgreSQL", "Docker"],
      status: "BETA",
      desc: "Double-entry bookkeeping system API built for high concurrency. Handles 10k req/s with ACID compliance."
    },
    {
      name: "Stock Screener",
      stack: ["React", "FastAPI", "Redis"],
      status: "DEV",
      desc: "Real-time dashboard filtering stocks by P/E ratio and volume spikes. Websockets for live data updates."
    }
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

const FooterTicker = () => {
  return (
    <div className="h-8 bg-slate-900 border-t border-slate-800 flex items-center overflow-hidden whitespace-nowrap relative z-20">
      <div className="animate-marquee flex items-center text-xs font-mono">
        <TickerItem symbol="REACT" value="18.2" change="+2.4%" />
        <TickerItem symbol="NODE.JS" value="20.1" change="+1.8%" />
        <TickerItem symbol="PYTHON" value="3.11" change="+5.2%" />
        <TickerItem symbol="SQL" value="STABLE" change="0.0%" color="text-slate-400" />
        <TickerItem symbol="DOCKER" value="v24" change="+0.9%" />
        <TickerItem symbol="AWS" value="CLOUD" change="+12.4%" />
        <TickerItem symbol="FINANCE" value="BULL" change="+100%" />
        <TickerItem symbol="SLEEP" value="NULL" change="-50%" color="text-red-400" />
        
        {/* Duplicate for seamless loop */}
        <TickerItem symbol="REACT" value="18.2" change="+2.4%" />
        <TickerItem symbol="NODE.JS" value="20.1" change="+1.8%" />
        <TickerItem symbol="PYTHON" value="3.11" change="+5.2%" />
        <TickerItem symbol="SQL" value="STABLE" change="0.0%" color="text-slate-400" />
        <TickerItem symbol="DOCKER" value="v24" change="+0.9%" />
        <TickerItem symbol="AWS" value="CLOUD" change="+12.4%" />
      </div>
      <style>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

const TickerItem = ({ symbol, value, change, color = "text-emerald-400" }) => (
  <div className="flex items-center gap-2 mx-6">
    <span className="text-slate-500 font-bold">{symbol}</span>
    <span className="text-slate-300">{value}</span>
    <span className={color}>{change}</span>
  </div>
);

const BackgroundGrid = () => (
  <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
    style={{
      backgroundImage: `linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)`,
      backgroundSize: '40px 40px'
    }}>
  </div>
);

export default Portfolio;
