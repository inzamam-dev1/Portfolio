import React from 'react';
import { Github, Linkedin, Mail, Code, ExternalLink, Terminal, Layers, Zap, Eye, Database, Cpu, Globe } from 'lucide-react';

// --- 🔧 CONFIGURATION AREA 🔧 ---
const DATA = {
  links: {
    github: "https://github.com/inzamam-dev1",
    linkedin: "https://www.linkedin.com/in/md-inzamam-070476339/",
    email: "inzamamm128@gmail.com",
    resume: "https://drive.google.com/file/d/16NcJFxvvJtfPdJqyJdUMXbQ2EaM7KN3s/view?usp=drive_link", // Link to your PDF
    voxtube: "https://viewplay.netlify.app/",
    movix: "https://watchlytic.netlify.app/",
    coding_profile:"https://www.geeksforgeeks.org/profile/devinzamam123?tab=activity",
  },
  profilePic: "https://avatars.githubusercontent.com/u/252877083?v=4",
};

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-gray-300 p-4 md:p-8 font-sans selection:bg-cyan-500 selection:text-black">
      <div className="max-w-6xl mx-auto">

        {/* BENTO GRID CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">

          {/* 1. HERO SECTION (Span 2 cols, 2 rows) */}
          <div className="md:col-span-2 md:row-span-2 bg-neutral-900 rounded-3xl p-8 border border-neutral-800 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300 group relative overflow-hidden">

            <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-6 z-10">
              <div>
                <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-cyan-400 uppercase bg-cyan-900/20 rounded-full">
                  Full Stack Developer
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  Engineering value, <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
                    one component at a time.
                  </span>
                </h1>
                <p className="text-gray-400 text-lg max-w-md">
                  I blend the algorithmic efficiency of C++ with the interactive power of the MERN stack.
                </p>
              </div>

              <div className="shrink-0">
                <img
                  src={DATA.profilePic}
                  alt="Profile"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-2xl border-2 border-neutral-700 object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-8 z-10">
              <a
                href={DATA.links.resume}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2"
              >
                <Eye size={18} />
                View Resume
              </a>
              <div className="flex gap-2 items-center justify-center md:justify-start">
                <SocialLink href={DATA.links.github} icon={<Github size={20} />} />
                <SocialLink href={DATA.links.linkedin} icon={<Linkedin size={20} />} />
                <SocialLink href={DATA.links.email} icon={<Mail size={20} />} />
              </div>
            </div>

            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          </div>

          {/* 2. DSA STATS CARD */}
          <a href={DATA.links.coding_profile} target="_blank" rel="noreferrer" className="bg-neutral-900 rounded-3xl p-6 border border-neutral-800 hover:border-purple-500/30 hover:bg-neutral-800/50 transition-all duration-300 flex flex-col justify-center items-center text-center group cursor-pointer">
            <div className="mb-2 p-3 bg-purple-900/20 rounded-full group-hover:scale-110 transition-transform">
              <Terminal className="text-purple-400" size={32} />
            </div>
            <h2 className="text-4xl font-bold text-white mb-1">700+</h2>
            <p className="text-sm text-gray-400 uppercase tracking-wide">Problems Solved</p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="px-3 py-1 text-xs font-bold text-blue-200 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center gap-1 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
                C++
              </span>
              <span className="px-3 py-1 text-xs font-bold text-purple-200 bg-purple-500/10 border border-purple-500/20 rounded-full flex items-center gap-1 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                <Database size={10} className="text-purple-400" />
                DSA
              </span>
            </div>
          </a>

          {/* 3. IMPROVED TECH STACK DESIGN */}
          <div className="bg-neutral-900 rounded-3xl p-6 border border-neutral-800 hover:border-green-500/30 transition-all duration-300 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">Arsenal</h3>
              <Code className="text-green-400" size={20} />
            </div>

            <div className="flex flex-col gap-4 h-full justify-center">
              {/* Core Row */}
              <div>
                <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-2">Core & Logic</div>
                <div className="flex flex-wrap gap-2">
                  <TechTag name="DSA" color="text-purple-300" bg="bg-purple-900/20" border="border-purple-800" />
                  <TechTag name="OOPS" color="text-purple-300" bg="bg-purple-900/20" border="border-purple-800" />
                  <TechTag name="DBMS" color="text-purple-300" bg="bg-purple-900/20" border="border-purple-800" />
                  <TechTag name="CN" color="text-purple-300" bg="bg-purple-900/20" border="border-purple-800" />
                </div>
              </div>

              {/* Web Row */}
              <div>
                <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-2">MERN Ecosystem</div>
                <div className="flex flex-wrap gap-2">
                  <TechTag name="React" color="text-blue-300" bg="bg-blue-900/20" border="border-blue-800" />
                  <TechTag name="Node" color="text-green-300" bg="bg-green-900/20" border="border-green-800" />
                  <TechTag name="MongoDB" color="text-green-300" bg="bg-green-900/20" border="border-green-800" />
                  <TechTag name="Redux" color="text-purple-300" bg="bg-purple-900/20" border="border-purple-800" />
                  <TechTag name="Tailwind" color="text-cyan-300" bg="bg-cyan-900/20" border="border-cyan-800" />
                </div>
              </div>
            </div>
          </div>

          {/* 4. PROJECT A: VOXTUBE */}
          <a href={DATA.links.voxtube} target="_blank" rel="noreferrer" className="md:col-span-2 bg-neutral-900 rounded-3xl p-6 border border-neutral-800 hover:border-red-500/30 transition-all duration-300 relative overflow-hidden group cursor-pointer">
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">VoxTube</h3>
                <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-red-400" />
              </div>
              <p className="text-gray-400 text-sm mb-4 max-w-sm">
                A YouTube clone handling complex data fetching via RapidAPI. Features seamless video playback.
              </p>
              <div className="flex gap-2">
                <Badge text="React" color="red" />
                <Badge text="RapidAPI" color="red" />
                <Badge text="Express.js" color="red" />
              </div>
            </div>
            <div className="absolute -right-5 -bottom-5 w-32 h-32 bg-red-600/10 rounded-full blur-2xl group-hover:bg-red-600/20 transition-all"></div>
          </a>

          {/* 5. PROJECT B: MOVIX */}
          <a href={DATA.links.movix} target="_blank" rel="noreferrer" className="md:col-span-2 bg-neutral-900 rounded-3xl p-6 border border-neutral-800 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden group cursor-pointer">
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">Movix</h3>
                <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
              </div>
              <p className="text-gray-400 text-sm mb-4 max-w-sm">
                An immersive movie database aggregator. Focuses on heavy state management (Redux).
              </p>
              <div className="flex gap-2">
                <Badge text="React.js" color="blue" />
                <Badge text="Redux Toolkit" color="blue" />
                <Badge text="Tailwind CSS" color="blue" />
                <Badge text="Firebase" color="blue" />
              </div>
            </div>
            <div className="absolute -right-5 -bottom-5 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl group-hover:bg-blue-600/20 transition-all"></div>
          </a>

          {/* 6. CURRENT EXPERIMENT: TASK POP-UP */}
          <div className="md:col-span-2 bg-neutral-900 rounded-3xl p-6 border border-neutral-800 hover:border-yellow-500/30 transition-all duration-300 flex items-center gap-6">
            <div className="p-4 bg-yellow-900/20 rounded-2xl text-yellow-400 shrink-0">
              <Zap size={28} />
            </div>
            <div>
              <div className="text-xs font-bold text-yellow-500 uppercase mb-1">Current Experiment</div>
              <h3 className="text-xl font-bold text-white">Task Pop-up</h3>
              <p className="text-sm text-gray-400 mt-1">
                Building a persistent, cross-platform reminder app to master daily productivity.
              </p>
            </div>
          </div>

          {/* 7. RECENT SPRINT: GAME OF CREATORS */}
          <div className="md:col-span-2 bg-neutral-900 rounded-3xl p-6 border border-neutral-800 hover:border-pink-500/30 transition-all duration-300 flex items-center gap-6">
            <div className="p-4 bg-pink-900/20 rounded-2xl text-pink-400 shrink-0">
              <Layers size={28} />
            </div>
            <div>
              <div className="text-xs font-bold text-pink-500 uppercase mb-1">Recent Sprint</div>
              <h3 className="text-xl font-bold text-white">Game of Creators</h3>
              <p className="text-sm text-gray-400 mt-1">
                Designed an MVP merging TikTok-style feeds with LinkedIn networking features.
              </p>
            </div>
          </div>

        </div>

        {/* FOOTER */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>© 2026 • Built with React & Tailwind</p>
        </div>

      </div>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const TechTag = ({ name, color, bg, border }) => (
  <span className={`px-2 py-1 text-xs font-medium rounded-md border ${bg} ${color} ${border} hover:scale-105 transition-transform cursor-default shadow-sm`}>
    {name}
  </span>
);

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="p-3 bg-neutral-800 rounded-full text-gray-400 hover:bg-white hover:text-black transition-all border border-neutral-700 hover:border-white"
  >
    {icon}
  </a>
);

const Badge = ({ text, color }) => {
  const colors = {
    red: "bg-red-900/30 text-red-300 border-red-800",
    blue: "bg-blue-900/30 text-blue-300 border-blue-800",
  }
  return (
    <span className={`px-2 py-1 text-xs font-mono rounded border ${colors[color] || "bg-gray-800 text-gray-300"}`}>
      {text}
    </span>
  )
}

export default Portfolio;