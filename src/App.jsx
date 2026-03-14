import React from 'react';
import {
  ArrowUpRight,
  Code,
  Database,
  ExternalLink,
  Github,
  Layers,
  Linkedin,
  Mail,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react';

const DATA = {
  name: 'Md Inzamam',
  role: 'Full Stack Developer',
  headline: 'I build interfaces that think fast and feel alive.',
  summary:
    'I combine C++ problem solving with MERN engineering to ship products that are reliable, interactive, and fun to use.',
  links: {
    github: 'https://github.com/inzamam-dev1',
    linkedin: 'https://www.linkedin.com/in/md-inzamam-070476339/',
    email: 'inzamamm128@gmail.com',
    resume:
      'https://drive.google.com/file/d/16NcJFxvvJtfPdJqyJdUMXbQ2EaM7KN3s/view?usp=drive_link',
    voxtube: 'https://viewplay.netlify.app/',
    movix: 'https://watchlytic.netlify.app/',
    coding_profile: 'https://www.geeksforgeeks.org/profile/devinzamam123?tab=activity',
  },
  profilePic: 'https://avatars.githubusercontent.com/u/252877083?v=4',
  stack: ['React', 'Node.js', 'MongoDB', 'Redux Toolkit', 'Tailwind CSS', 'Express.js'],
};

const projects = [
  {
    title: 'VoxTube',
    description:
      'A YouTube-inspired app with rapid data integration and smooth playback focused on UX speed.',
    href: DATA.links.voxtube,
    accent: 'from-rose-400/25 to-orange-300/15',
    tech: ['React', 'RapidAPI', 'Express.js'],
  },
  {
    title: 'Movix',
    description:
      'A cinematic movie explorer with heavy state handling and responsive browsing patterns.',
    href: DATA.links.movix,
    accent: 'from-cyan-300/25 to-blue-300/20',
    tech: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Firebase'],
  },
];

const miniCards = [
  {
    title: 'Current Experiment',
    heading: 'Task Pop-up',
    copy: 'Persistent cross-platform reminder app for disciplined execution.',
    icon: <Zap size={22} />,
    color: 'text-amber-300 border-amber-300/30 bg-amber-100/5',
  },
  {
    title: 'Recent Sprint',
    heading: 'Game of Creators',
    copy: 'Prototype blending short-form creator feeds with professional networking.',
    icon: <Layers size={22} />,
    color: 'text-lime-300 border-lime-300/30 bg-lime-100/5',
  },
];

const Portfolio = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0d14] text-zinc-100 selection:bg-amber-300 selection:text-black">
      <BackgroundShapes />

      <div className="relative mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.9)]" />
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-300">Open to internships and projects</p>
          </div>
          <a
            href={DATA.links.coding_profile}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-300/20"
          >
            <Terminal size={14} />
            DSA Profile
          </a>
        </div>

        <section className="grid grid-cols-1 gap-5 md:grid-cols-12">
          <article className="md:col-span-8 rounded-3xl border border-white/10 bg-linear-to-br from-[#111726] via-[#0f1320] to-[#161d2d] p-6 md:p-8">
            <div className="mb-6 flex flex-wrap items-start justify-between gap-5">
              <div>
                <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
                  <Sparkles size={13} />
                  {DATA.role}
                </p>
                <h1 className="max-w-2xl text-3xl font-black leading-tight text-white md:text-5xl">{DATA.headline}</h1>
              </div>

              <img
                src={DATA.profilePic}
                alt="Profile"
                className="h-24 w-24 rounded-2xl border-2 border-white/20 object-cover shadow-xl md:h-28 md:w-28"
              />
            </div>

            <p className="max-w-2xl text-zinc-300 md:text-lg">{DATA.summary}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {DATA.stack.map((item) => (
                <Pill key={item} label={item} />
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Action href={DATA.links.resume} icon={<ExternalLink size={16} />} label="View Resume" />
              <Social href={DATA.links.github} icon={<Github size={16} />} label="GitHub" />
              <Social href={DATA.links.linkedin} icon={<Linkedin size={16} />} label="LinkedIn" />
              <Social href={`mailto:${DATA.links.email}`} icon={<Mail size={16} />} label="Email" />
            </div>
          </article>

          <article className="md:col-span-4 rounded-3xl border border-violet-200/20 bg-linear-to-b from-violet-300/10 to-transparent p-6">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-violet-200">Algorithm Engine</p>
              <Code size={18} className="text-violet-200" />
            </div>

            <div className="rounded-2xl border border-violet-300/20 bg-[#1a1027]/80 p-4 text-center">
              <p className="text-5xl font-black text-white">700+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-violet-100">Problems Solved</p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-xl border border-blue-200/20 bg-blue-300/10 px-3 py-2 font-semibold text-blue-100">C++</div>
              <div className="rounded-xl border border-fuchsia-200/20 bg-fuchsia-300/10 px-3 py-2 font-semibold text-fuchsia-100">DSA</div>
              <div className="rounded-xl border border-emerald-200/20 bg-emerald-300/10 px-3 py-2 font-semibold text-emerald-100">OOPS</div>
              <div className="rounded-xl border border-amber-200/20 bg-amber-300/10 px-3 py-2 font-semibold text-amber-100">DBMS</div>
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-black/25 p-4">
              <p className="mb-2 text-xs uppercase tracking-[0.18em] text-zinc-300">Built For</p>
              <p className="text-sm text-zinc-200">Fast APIs, clean UI architecture, and production-ready state flows.</p>
            </div>
          </article>

          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}

          <article className="md:col-span-4 rounded-3xl border border-cyan-200/20 bg-cyan-300/5 p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-100">Build Character</p>
              <Database size={17} className="text-cyan-100" />
            </div>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-200" />
                I value readability first, then optimization.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-200" />
                Every project starts with reusable component planning.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-200" />
                I enjoy converting ideas into responsive products quickly.
              </li>
            </ul>
          </article>

          {miniCards.map((card) => (
            <MiniCard key={card.heading} {...card} />
          ))}
        </section>

        <footer className="mt-10 text-center text-xs uppercase tracking-[0.2em] text-zinc-400">
          {DATA.name} · Crafted with React + Tailwind
        </footer>
      </div>
    </main>
  );
};

const BackgroundShapes = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0">
    <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-300/20 blur-3xl" />
    <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-300/15 blur-3xl" />
    <div className="absolute left-[-8%] top-[34%] h-64 w-64 rounded-full bg-violet-300/15 blur-3xl" />
  </div>
);

const ProjectCard = ({ title, description, href, accent, tech }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group relative md:col-span-6 rounded-3xl border border-white/10 bg-[#101521] p-6 transition hover:-translate-y-1 hover:border-white/20"
  >
    <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-linear-to-br ${accent} blur-2xl transition group-hover:scale-110`} />
    <div className="relative z-10">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <ArrowUpRight size={20} className="text-zinc-400 transition group-hover:text-white" />
      </div>
      <p className="mb-4 max-w-lg text-sm text-zinc-300">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span key={item} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-100">
            {item}
          </span>
        ))}
      </div>
    </div>
  </a>
);

const MiniCard = ({ title, heading, copy, icon, color }) => (
  <article className={`md:col-span-4 rounded-3xl border p-5 ${color}`}>
    <div className="mb-4 inline-flex rounded-xl border border-current/30 bg-black/25 p-2">{icon}</div>
    <p className="text-[10px] uppercase tracking-[0.2em]">{title}</p>
    <h4 className="mt-2 text-xl font-bold text-white">{heading}</h4>
    <p className="mt-2 text-sm text-zinc-300">{copy}</p>
  </article>
);

const Pill = ({ label }) => (
  <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-zinc-100">
    {label}
  </span>
);

const Action = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/20 px-5 py-2 text-sm font-semibold text-amber-50 transition hover:bg-amber-300/35"
  >
    {icon}
    {label}
  </a>
);

const Social = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-zinc-100 transition hover:-translate-y-0.5 hover:bg-white/20"
  >
    {icon}
  </a>
);

export default Portfolio;