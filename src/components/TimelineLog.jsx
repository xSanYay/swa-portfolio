import React from 'react';
import { GitCommit, Briefcase } from 'lucide-react';

const TimelineLog = () => {
  const events = [
    {
      year: "2025",
      title: "HappyFox",
      role: "Backend Engineer",
      desc: "June 2025 • Bengaluru, Karnataka, India",
      status: "ACTIVE"
    },
    {
      year: "2025",
      title: "HappyFox",
      role: "Backend Intern",
      desc: "January 2025 - June 2025 (6 months) • Bengaluru, Karnataka, India",
      status: "COMPLETED"
    },
    {
      year: "2024",
      title: "Sweet Design Hub Pvt. Ltd",
      role: "AI/ML Intern",
      desc: "June 2024 - September 2025 (3 Months) • Bangalore Rural, Karnataka, India",
      status: "COMPLETED"
    },
    {
      year: "2024",
      title: "Team Astra Robotics",
      role: "Software Lead",
      desc: "January 2024 - January 2025 (1 year 1 month) • Bangalore Rural, Karnataka, India",
      status: "COMPLETED"
    },
    {
      year: "2023-25",
      title: "IEEE Robotics & Automation Society RVCE",
      role: "Chair",
      desc: "December 2023 - January 2025 (1 year 2 months) • Bengaluru, Karnataka, India",
      status: "COMPLETED"
    },
    {
      year: "2023-24",
      title: "IIT Guwahati",
      role: "Project Intern",
      desc: "December 2023 - March 2024 (4 months)",
      status: "COMPLETED"
    },
    {
      year: "2022-24",
      title: "Astra Robotics",
      role: "Member",
      desc: "June 2022 - February 2024 (1 year 9 months) • Bengaluru, Karnataka, India. Worked with OpenCV, ROS noetic and melodic",
      status: "COMPLETED"
    },
    {
      year: "2022",
      title: "CoE in Image Processing",
      role: "Intern",
      desc: "November 2022 - December 2022 (2 months) • A one month internship program on image processing using OpenCV. Along with CV, libraries like NumPy, pandas were explored.",
      status: "COMPLETED"
    },
    {
      year: "2021-25",
      title: "RV College Of Engineering",
      role: "Bachelor of Engineering - BE",
      desc: "Electrical, Electronics and Communications Engineering • December 2021 - June 2025",
      status: "COMPLETED"
    },
    {
      year: "2021",
      title: "PU College",
      role: "Pre-University Education",
      desc: "PCMC (Physics, Chemistry, Mathematics, Computer Science) • Graduated 2021",
      status: "COMPLETED"
    },
    {
      year: "2019",
      title: "SDM CBSE School",
      role: "High School",
      desc: "Dakshina Kannada, Bangalore • Graduated 2019",
      status: "COMPLETED"
    },
    {
      year: "2019",
      title: "MixingBeast",
      role: "YouTube Channel",
      desc: "8M views, 9K subs • What started as fun video editing made this channel",
      status: "COMPLETED",
      link: "https://www.youtube.com/@MixingBeast"
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
                  {event.link ? (
                    <a href={event.link} target="_blank" rel="noopener noreferrer">
                      <h3 className="text-xl font-bold text-slate-200 mt-2 hover:text-emerald-400 transition-colors">{event.title}</h3>
                    </a>
                  ) : (
                    <h3 className="text-xl font-bold text-slate-200 mt-2">{event.title}</h3>
                  )}
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

export default TimelineLog;
