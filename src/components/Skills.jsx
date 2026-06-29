import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';

const stacks = [
  {
    id: 'mern',
    label: 'MERN Stack',
    color: '#61dafb',
    skills: [
      { name: 'MongoDB',    icon: CDN + 'mongodb/mongodb-original.svg' },
      { name: 'Express.js', icon: CDN + 'express/express-original.svg',    invert: true },
      { name: 'React',      icon: CDN + 'react/react-original.svg' },
      { name: 'Node.js',    icon: CDN + 'nodejs/nodejs-original.svg' },
      { name: 'Next.js',    icon: CDN + 'nextjs/nextjs-original.svg' },
      { name: 'TypeScript', icon: CDN + 'typescript/typescript-original.svg' },
      { name: 'JavaScript', icon: CDN + 'javascript/javascript-original.svg' },
      { name: 'Redux',      icon: CDN + 'redux/redux-original.svg' },
      { name: 'Tailwind',   icon: CDN + 'tailwindcss/tailwindcss-original.svg' },
      { name: 'HTML5',      icon: CDN + 'html5/html5-original.svg' },
      { name: 'CSS3',       icon: CDN + 'css3/css3-original.svg' },
      { name: 'GraphQL',    icon: CDN + 'graphql/graphql-plain.svg' },
    ],
  },
  {
    id: 'app',
    label: 'App Dev',
    color: '#38bdf8',
    skills: [
      { name: 'React Native',   icon: CDN + 'react/react-original.svg' },
      { name: 'Android Studio', icon: CDN + 'androidstudio/androidstudio-original.svg' },
      { name: 'Firebase',       icon: CDN + 'firebase/firebase-plain.svg' },
      { name: 'JavaScript',     icon: CDN + 'javascript/javascript-original.svg' },
      { name: 'TypeScript',     icon: CDN + 'typescript/typescript-original.svg' },
      { name: 'Redux',          icon: CDN + 'redux/redux-original.svg' },
      { name: 'Node.js',        icon: CDN + 'nodejs/nodejs-original.svg' },
      { name: 'MongoDB',        icon: CDN + 'mongodb/mongodb-original.svg' },
    ],
  },
  {
    id: 'java',
    label: 'Java Stack',
    color: '#f89820',
    skills: [
      { name: 'Java',       icon: CDN + 'java/java-original.svg' },
      { name: 'Spring Boot',icon: CDN + 'spring/spring-original.svg' },
      { name: 'Hibernate',  icon: CDN + 'hibernate/hibernate-original.svg' },
      { name: 'Maven',      icon: CDN + 'maven/maven-original.svg' },
      { name: 'MySQL',      icon: CDN + 'mysql/mysql-original.svg' },
      { name: 'PostgreSQL', icon: CDN + 'postgresql/postgresql-original.svg' },
      { name: 'Thymeleaf',  icon: CDN + 'thymeleaf/thymeleaf-original.svg' },
      { name: 'JUnit',      icon: CDN + 'junit/junit-plain.svg' },
      { name: 'Tomcat',     icon: CDN + 'tomcat/tomcat-original.svg' },
      { name: 'Gradle',     icon: CDN + 'gradle/gradle-original.svg' },
    ],
  },
  {
    id: 'python',
    label: 'Python Stack',
    color: '#3572A5',
    skills: [
      { name: 'Python',  icon: CDN + 'python/python-original.svg' },
      { name: 'FastAPI', icon: CDN + 'fastapi/fastapi-original.svg' },
      { name: 'Django',  icon: CDN + 'django/django-plain.svg',  invert: true },
      { name: 'Flask',   icon: CDN + 'flask/flask-original.svg', invert: true },
      { name: 'NumPy',   icon: CDN + 'numpy/numpy-original.svg' },
      { name: 'Pandas',  icon: CDN + 'pandas/pandas-original.svg' },
      { name: 'SQLite',  icon: CDN + 'sqlite/sqlite-original.svg' },
    ],
  },
];

const tools = [
  { name: 'Git',      icon: CDN + 'git/git-original.svg' },
  { name: 'Docker',   icon: CDN + 'docker/docker-original.svg' },
  { name: 'Linux',    icon: CDN + 'linux/linux-original.svg' },
  { name: 'Postman',  icon: CDN + 'postman/postman-original.svg' },
  { name: 'VS Code',  icon: CDN + 'vscode/vscode-original.svg' },
  { name: 'GitHub',   icon: CDN + 'github/github-original.svg', invert: true },
  { name: 'Vite',     icon: CDN + 'vitejs/vitejs-original.svg' },
  { name: 'Figma',    icon: CDN + 'figma/figma-original.svg' },
];

const SkillIcon = ({ skill }) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.08 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="flex flex-col items-center gap-2 group cursor-default"
  >
    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center group-hover:border-[#38bdf8]/40 group-hover:bg-[#38bdf8]/[0.06] transition-all duration-200">
      <img
        src={skill.icon}
        alt={skill.name}
        className={`w-6 h-6 object-contain ${skill.invert ? 'invert brightness-75' : ''}`}
        onError={e => { e.target.style.opacity = '0.2'; }}
      />
    </div>
    <span className="text-[10px] font-semibold text-white/35 group-hover:text-white/70 transition-colors text-center leading-none">
      {skill.name}
    </span>
  </motion.div>
);

const Skills = () => {
  const [active, setActive] = useState('mern');
  const current = stacks.find(s => s.id === active);

  return (
    <section id="skills" className="bg-[#0a0a0a] py-14 md:py-24 px-6 md:px-12 w-full">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-8 md:mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
            <span className="text-white/35 text-[11px] font-mono tracking-[0.25em] uppercase">What I know</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none">
            Skills & Tech Stack
          </h2>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex flex-wrap gap-2 mb-10">
          {stacks.map(s => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`px-5 py-2 rounded-full text-sm font-black transition-all duration-300 border ${
                active === s.id
                  ? 'bg-[#38bdf8] border-[#38bdf8] text-[#08090f] shadow-[0_0_20px_rgba(56,189,248,0.35)]'
                  : 'border-white/10 text-white/40 hover:border-white/25 hover:text-white/70'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Active stack grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 mb-6"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs font-black tracking-[0.2em] uppercase text-[#38bdf8]">{current.label}</span>
            <span className="text-white/20 text-xs font-mono">· {current.skills.length} technologies</span>
          </div>
          <div className="flex flex-wrap gap-6">
            {current.skills.map(skill => (
              <SkillIcon key={skill.name} skill={skill} />
            ))}
          </div>
        </motion.div>

        {/* All stacks overview (collapsed pills) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {stacks.map(s => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                active === s.id
                  ? 'border-[#38bdf8]/40 bg-[#38bdf8]/[0.04]'
                  : 'border-white/[0.06] bg-white/[0.015] hover:border-white/15'
              }`}
            >
              <p className="text-[10px] font-black tracking-[0.2em] uppercase text-[#38bdf8]/70 mb-2">{s.label}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.skills.slice(0, 5).map(sk => (
                  <span key={sk.name} className="text-[10px] text-white/30 border border-white/[0.08] rounded-full px-2 py-0.5 font-semibold">
                    {sk.name}
                  </span>
                ))}
                {s.skills.length > 5 && (
                  <span className="text-[10px] text-white/20 px-2 py-0.5 font-semibold">+{s.skills.length - 5}</span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Tools & DevOps */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8"
        >
          <p className="text-xs font-black tracking-[0.2em] uppercase text-[#38bdf8] mb-6">
            Tools & DevOps · {tools.length} tools
          </p>
          <div className="flex flex-wrap gap-6">
            {tools.map(skill => (
              <SkillIcon key={skill.name} skill={skill} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
