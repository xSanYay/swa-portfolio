import React from 'react';
import { Lock, Award, BookOpen, Trophy } from 'lucide-react';

const Achievements = () => {
  const awards = [
    {
      title: "Smart India Hackathon 2023",
      org: "Ministry of Education, Government of India",
      icon: <Trophy className="text-yellow-400" size={24} />,
      desc: "Grand finalists under Sports and Fitness Category. A team of 6 competing in a nationwide initiative."
    },
    {
      title: "ISRO Robotics Challenge - URSC 2024",
      org: "ISRO",
      icon: <Award className="text-orange-400" size={24} />,
      desc: "Qualified to Quals 1 of the ISRO Robotics Challenge, alongside Team Astra, built a rover."
    },
    {
      title: "Data Science for Engineers",
      org: "NPTEL • Apr 2024",
      icon: <BookOpen className="text-blue-400" size={24} />,
      desc: "Certification in Data Science and R Programming Language."
    },
    {
      title: "Data Structure and Algorithm In Python",
      org: "NPTEL • Nov 2023",
      icon: <BookOpen className="text-green-400" size={24} />,
      desc: "Certification covering Python, Data Structures, and Algorithms."
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

export default Achievements;
